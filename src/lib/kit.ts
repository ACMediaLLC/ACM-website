import { supabase } from './supabase';

const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY;
const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID;
const KIT_API_BASE_URL = 'https://api.convertkit.com/v3';

if (!KIT_API_KEY || !KIT_FORM_ID) {
  console.warn('Kit API credentials are missing. Newsletter sync will be disabled.');
}

export interface KitSubscriber {
  first_name: string;
  email: string;
}

export interface KitApiResponse {
  subscription: {
    id: number;
    state: string;
    created_at: string;
    source: string;
    referrer: string | null;
    subscribable_id: number;
    subscribable_type: string;
    subscriber: {
      id: number;
      first_name: string;
      email_address: string;
      state: string;
      created_at: string;
    };
  };
}

export interface SyncResult {
  success: boolean;
  syncedCount: number;
  failedCount: number;
  errors: Array<{ email: string; error: string }>;
}

export async function subscribeToKit(subscriber: KitSubscriber): Promise<boolean> {
  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('Kit API credentials are missing');
    return false;
  }

  try {
    const response = await fetch(`${KIT_API_BASE_URL}/forms/${KIT_FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        api_key: KIT_API_KEY,
        email: subscriber.email,
        first_name: subscriber.first_name,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));

      if (response.status === 409 || errorData.message?.includes('already subscribed')) {
        console.log(`Email ${subscriber.email} is already subscribed to Kit`);
        return true;
      }

      throw new Error(`Kit API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data: KitApiResponse = await response.json();
    console.log(`Successfully subscribed ${subscriber.email} to Kit`, data);
    return true;
  } catch (error) {
    console.error('Error subscribing to Kit:', error);
    return false;
  }
}

export async function syncPendingSubscribers(): Promise<SyncResult> {
  const result: SyncResult = {
    success: true,
    syncedCount: 0,
    failedCount: 0,
    errors: [],
  };

  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('Kit API credentials are missing. Cannot sync subscribers.');
    result.success = false;
    return result;
  }

  try {
    const { data: pendingSubscribers, error: queryError } = await supabase
      .from('newsletter_subscribers')
      .select('id, first_name, email, kit_sync_attempts')
      .eq('synced_to_kit', false)
      .lt('kit_sync_attempts', 5)
      .order('created_at', { ascending: true })
      .limit(100);

    if (queryError) {
      throw queryError;
    }

    if (!pendingSubscribers || pendingSubscribers.length === 0) {
      console.log('No pending subscribers to sync');
      return result;
    }

    console.log(`Found ${pendingSubscribers.length} subscribers to sync to Kit`);

    const RATE_LIMIT_DELAY = 600;

    for (const subscriber of pendingSubscribers) {
      try {
        const synced = await subscribeToKit({
          first_name: subscriber.first_name,
          email: subscriber.email,
        });

        if (synced) {
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({
              synced_to_kit: true,
              last_kit_sync_attempt: new Date().toISOString(),
            })
            .eq('id', subscriber.id);

          if (updateError) {
            console.error(`Failed to update sync status for ${subscriber.email}:`, updateError);
          } else {
            result.syncedCount++;
          }
        } else {
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({
              kit_sync_attempts: subscriber.kit_sync_attempts + 1,
              last_kit_sync_attempt: new Date().toISOString(),
            })
            .eq('id', subscriber.id);

          if (updateError) {
            console.error(`Failed to update retry count for ${subscriber.email}:`, updateError);
          }

          result.failedCount++;
          result.errors.push({
            email: subscriber.email,
            error: 'Kit API subscription failed',
          });
        }

        await new Promise(resolve => setTimeout(resolve, RATE_LIMIT_DELAY));
      } catch (error) {
        console.error(`Error syncing subscriber ${subscriber.email}:`, error);
        result.failedCount++;
        result.errors.push({
          email: subscriber.email,
          error: error instanceof Error ? error.message : 'Unknown error',
        });

        const { error: updateError } = await supabase
          .from('newsletter_subscribers')
          .update({
            kit_sync_attempts: subscriber.kit_sync_attempts + 1,
            last_kit_sync_attempt: new Date().toISOString(),
          })
          .eq('id', subscriber.id);

        if (updateError) {
          console.error(`Failed to update retry count for ${subscriber.email}:`, updateError);
        }
      }
    }

    console.log(`Sync complete: ${result.syncedCount} synced, ${result.failedCount} failed`);
  } catch (error) {
    console.error('Error in syncPendingSubscribers:', error);
    result.success = false;
  }

  return result;
}

export async function getUnsyncedCount(): Promise<number> {
  try {
    const { count, error } = await supabase
      .from('newsletter_subscribers')
      .select('*', { count: 'exact', head: true })
      .eq('synced_to_kit', false)
      .lt('kit_sync_attempts', 5);

    if (error) throw error;
    return count || 0;
  } catch (error) {
    console.error('Error getting unsynced count:', error);
    return 0;
  }
}
