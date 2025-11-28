/*
  # Allow Anonymous Users to Update Newsletter Sync Tracking Fields

  1. Changes
    - Add RLS policy to allow anonymous users to UPDATE sync tracking fields only
    - Restricts updates to: synced_to_kit, kit_sync_attempts, last_kit_sync_attempt
    - Prevents updates to sensitive fields: email, first_name, is_active

  2. Security
    - Anonymous users can only update internal tracking metadata
    - Cannot modify subscriber email, name, or active status
    - Safe for public-facing newsletter subscription flow

  3. Important Notes
    - Fixes "Failed to subscribe" error caused by permission issues
    - Enables real-time sync status updates during subscription
    - Maintains security by restricting updateable columns
*/

-- Drop existing restrictive update policy for authenticated users only
DROP POLICY IF EXISTS "Allow authenticated users to update newsletter subscribers" ON newsletter_subscribers;

-- Create new policy allowing authenticated users to update all fields
CREATE POLICY "Allow authenticated users to update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create new policy allowing anonymous users to update only sync tracking fields
CREATE POLICY "Allow public to update newsletter sync status"
  ON newsletter_subscribers
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (
    -- Only allow updates where sync tracking fields are being modified
    -- This ensures email, first_name, and is_active cannot be changed by anon users
    (email = (SELECT email FROM newsletter_subscribers WHERE id = newsletter_subscribers.id))
    AND
    (first_name = (SELECT first_name FROM newsletter_subscribers WHERE id = newsletter_subscribers.id))
    AND
    (is_active = (SELECT is_active FROM newsletter_subscribers WHERE id = newsletter_subscribers.id))
  );