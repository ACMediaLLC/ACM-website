const KIT_API_KEY = import.meta.env.VITE_KIT_API_KEY;
const KIT_FORM_ID = import.meta.env.VITE_KIT_FORM_ID;
const KIT_API_BASE_URL = 'https://api.convertkit.com/v3';

if (!KIT_API_KEY || !KIT_FORM_ID) {
  console.warn('Kit API credentials are missing. Newsletter subscriptions will be disabled.');
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

export interface SubscriptionResult {
  success: boolean;
  message: string;
  alreadySubscribed?: boolean;
}

export async function subscribeToKitOnly(subscriber: KitSubscriber): Promise<SubscriptionResult> {
  if (!KIT_API_KEY || !KIT_FORM_ID) {
    console.error('Kit API credentials are missing');
    return {
      success: false,
      message: 'Newsletter service is not configured. Please try again later.',
    };
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

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (response.status === 409 || data.message?.includes('already subscribed')) {
        console.log(`Email ${subscriber.email} is already subscribed to Kit`);
        return {
          success: true,
          message: 'You are already subscribed!',
          alreadySubscribed: true,
        };
      }

      throw new Error(`Kit API error: ${response.status} - ${JSON.stringify(data)}`);
    }

    console.log(`Successfully subscribed ${subscriber.email} to Kit`, data);
    return {
      success: true,
      message: 'Thank you for subscribing!',
    };
  } catch (error) {
    console.error('Error subscribing to Kit:', error);
    return {
      success: false,
      message: 'An error occurred. Please try again.',
    };
  }
}
