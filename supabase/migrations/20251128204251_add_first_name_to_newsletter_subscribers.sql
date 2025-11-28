/*
  # Add first_name field to newsletter_subscribers

  1. Changes
    - Add `first_name` column to `newsletter_subscribers` table
    - Column is required (NOT NULL) for new subscriptions
    - Existing records will have a default empty string value

  2. Notes
    - This allows capturing subscriber names for personalization
    - Existing subscribers will need to be handled gracefully in the application
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'newsletter_subscribers' AND column_name = 'first_name'
  ) THEN
    ALTER TABLE newsletter_subscribers ADD COLUMN first_name text NOT NULL DEFAULT '';
  END IF;
END $$;