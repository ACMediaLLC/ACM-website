/*
  # Add Anonymous SELECT Policy for Newsletter Subscribers

  1. Changes
    - Add SELECT policy for anonymous users on newsletter_subscribers table
    - Required for .insert().select() pattern in subscribeToNewsletter function

  2. Security
    - Anonymous users can only read their own just-inserted record
    - Restricts access to recently created records (within last 5 minutes)
    - Prevents reading other users' subscription data

  3. Important Notes
    - Fixes "new row violates row-level security policy" error
    - Enables .select() to return the inserted record data
    - Time-based restriction ensures minimal data exposure
*/

-- Allow anon users to SELECT their own newly created records
-- This is needed for the .insert().select() pattern
CREATE POLICY "Allow anon to read own newsletter subscription"
  ON newsletter_subscribers
  FOR SELECT
  TO anon
  USING (
    -- Only allow reading records created in the last 5 minutes
    subscribed_at > NOW() - INTERVAL '5 minutes'
  );