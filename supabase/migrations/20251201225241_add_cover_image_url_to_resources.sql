/*
  # Add cover image URL to resources table

  1. Changes
    - Add `cover_image_url` column to `resources` table to store mobile-friendly cover images
    - Column is optional (nullable) to allow flexibility

  2. Purpose
    - Enables displaying static cover images on mobile devices
    - Provides better mobile UX since PDFs don't always render in iframes on mobile browsers
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'resources' AND column_name = 'cover_image_url'
  ) THEN
    ALTER TABLE resources ADD COLUMN cover_image_url text;
  END IF;
END $$;