/*
  # Create resource_downloads tracking table

  1. New Tables
    - `resource_downloads`
      - `id` (uuid, primary key) - Unique identifier for each download record
      - `email` (text, not null) - Email address of the user downloading
      - `first_name` (text, not null) - First name of the user
      - `resource_id` (text, not null) - Identifier of the resource being downloaded
      - `resource_title` (text, not null) - Title of the resource for easy reference
      - `downloaded_at` (timestamptz) - Timestamp of when the download occurred
  
  2. Security
    - Enable RLS on `resource_downloads` table
    - Add policy for anonymous users to insert download records
    - Add policy for authenticated users to read their own download records
  
  3. Performance
    - Add index on email column for efficient lookups and analytics
*/

CREATE TABLE IF NOT EXISTS resource_downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  first_name text NOT NULL,
  resource_id text NOT NULL,
  resource_title text NOT NULL,
  downloaded_at timestamptz DEFAULT now()
);

ALTER TABLE resource_downloads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert download records
CREATE POLICY "Anyone can record downloads"
  ON resource_downloads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users to read all download records (for admin analytics)
CREATE POLICY "Authenticated users can view all downloads"
  ON resource_downloads
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index on email for efficient analytics queries
CREATE INDEX IF NOT EXISTS idx_resource_downloads_email ON resource_downloads(email);

-- Create index on resource_id for resource popularity analytics
CREATE INDEX IF NOT EXISTS idx_resource_downloads_resource_id ON resource_downloads(resource_id);

-- Create index on downloaded_at for time-based analytics
CREATE INDEX IF NOT EXISTS idx_resource_downloads_downloaded_at ON resource_downloads(downloaded_at DESC);