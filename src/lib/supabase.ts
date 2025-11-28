import { createClient } from '@supabase/supabase-js';
import { subscribeToKit } from './kit';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  message: string;
}

export interface NewsletterSubscriber {
  first_name: string;
  email: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  file_url: string;
  download_count: number;
  created_at: string;
  updated_at: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) throw error;
}

export async function subscribeToNewsletter(data: NewsletterSubscriber) {
  const { data: insertedData, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{
      first_name: data.first_name,
      email: data.email,
      synced_to_kit: false,
      kit_sync_attempts: 0,
    }])
    .select()
    .single();

  if (error) throw error;

  if (insertedData) {
    const synced = await subscribeToKit({
      first_name: data.first_name,
      email: data.email,
    });

    if (synced) {
      await supabase
        .from('newsletter_subscribers')
        .update({
          synced_to_kit: true,
          last_kit_sync_attempt: new Date().toISOString(),
        })
        .eq('id', insertedData.id);
    } else {
      await supabase
        .from('newsletter_subscribers')
        .update({
          kit_sync_attempts: 1,
          last_kit_sync_attempt: new Date().toISOString(),
        })
        .eq('id', insertedData.id);
    }
  }
}

export async function getResources(): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data || [];
}

export async function incrementDownloadCount(resourceId: string) {
  const { error } = await supabase.rpc('increment', {
    row_id: resourceId
  });

  if (error) {
    const { data: resource } = await supabase
      .from('resources')
      .select('download_count')
      .eq('id', resourceId)
      .single();

    if (resource) {
      await supabase
        .from('resources')
        .update({ download_count: resource.download_count + 1 })
        .eq('id', resourceId);
    }
  }
}
