/*
  # Add Kit Sync Tracking to Newsletter Subscribers

  1. Changes
    - Add `synced_to_kit` (boolean) column to track if subscriber has been synced to Kit
      - Default: false (new subscribers need to be synced)
    - Add `kit_sync_attempts` (integer) column to track number of sync retry attempts
      - Default: 0 (no attempts yet)
    - Add `last_kit_sync_attempt` (timestamptz) column to track when last sync was attempted
      - Default: null (never attempted)
    - Add index on `synced_to_kit` for efficient querying of unsynced records

  2. Purpose
    - Enable background sync process to identify unsynced subscribers
    - Track retry attempts to prevent infinite retry loops
    - Monitor sync health and identify problematic records

  3. Notes
    - Existing subscribers will have synced_to_kit = false and need manual sync
    - Max retry attempts should be limited (e.g., 5) to avoid infinite loops
    - Background job should query WHERE synced_to_kit = false AND kit_sync_attempts < 5
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'newsletter_subscribers' AND column_name = 'synced_to_kit'
  ) THEN
    ALTER TABLE newsletter_subscribers ADD COLUMN synced_to_kit boolean DEFAULT false NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'newsletter_subscribers' AND column_name = 'kit_sync_attempts'
  ) THEN
    ALTER TABLE newsletter_subscribers ADD COLUMN kit_sync_attempts integer DEFAULT 0 NOT NULL;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'newsletter_subscribers' AND column_name = 'last_kit_sync_attempt'
  ) THEN
    ALTER TABLE newsletter_subscribers ADD COLUMN last_kit_sync_attempt timestamptz;
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_synced_to_kit
  ON newsletter_subscribers(synced_to_kit)
  WHERE synced_to_kit = false;