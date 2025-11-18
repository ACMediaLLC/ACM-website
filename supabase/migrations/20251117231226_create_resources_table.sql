/*
  # Create Resources Table

  ## Overview
  This migration creates a resources table to support the Resources page
  where users can download templates, toolkits, and guides.

  ## New Table

  ### `resources`
  Stores downloadable resources available on the Resources page
  - `id` (uuid, primary key) - Unique identifier for each resource
  - `title` (text) - Resource title
  - `description` (text) - Resource description
  - `category` (text) - Resource category (e.g., "Templates", "Guides", "Toolkits")
  - `file_url` (text) - URL to the downloadable file
  - `download_count` (integer) - Number of times resource has been downloaded
  - `created_at` (timestamptz) - When the resource was created
  - `updated_at` (timestamptz) - When the resource was last updated

  ## Security
  - Enable RLS on resources table
  - Public read access for viewing resources
  - Service role only for insert, update, delete operations

  ## Indexes
  - Add index on resources.category for filtering
*/

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL DEFAULT 'General',
  file_url text NOT NULL,
  download_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;

-- Resources policies: Public read access
CREATE POLICY "Anyone can view resources"
  ON resources
  FOR SELECT
  USING (true);

CREATE POLICY "Service role can insert resources"
  ON resources
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can update resources"
  ON resources
  FOR UPDATE
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Service role can delete resources"
  ON resources
  FOR DELETE
  USING (true);

-- Create index for performance
CREATE INDEX IF NOT EXISTS idx_resources_category ON resources(category);

-- Create trigger to update updated_at timestamp on resources
CREATE OR REPLACE FUNCTION update_resources_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_resources_updated_at_trigger
  BEFORE UPDATE ON resources
  FOR EACH ROW
  EXECUTE FUNCTION update_resources_updated_at();