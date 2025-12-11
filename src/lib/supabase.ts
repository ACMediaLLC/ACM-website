import { createClient } from '@supabase/supabase-js';

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

export interface ResourceDownload {
  email: string;
  first_name: string;
  resource_id: string;
  resource_title: string;
}

export async function submitContactForm(data: ContactSubmission) {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) throw error;
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

export async function recordResourceDownload(data: ResourceDownload): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('resource_downloads')
      .insert([data]);

    if (error) {
      console.error('Failed to record resource download:', error);
      return false;
    }
    return true;
  } catch (error) {
    console.error('Exception while recording resource download:', error);
    return false;
  }
}
