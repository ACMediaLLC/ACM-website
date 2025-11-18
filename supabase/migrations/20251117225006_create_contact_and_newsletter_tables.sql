/*
  # AC Media Contact and Newsletter Tables

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Contact's full name
      - `email` (text) - Contact's email address
      - `organization` (text, optional) - Contact's organization name
      - `message` (text) - Message content from contact form
      - `created_at` (timestamptz) - Timestamp of submission
    
    - `newsletter_subscribers`
      - `id` (uuid, primary key) - Unique identifier for each subscriber
      - `email` (text, unique) - Subscriber's email address
      - `subscribed_at` (timestamptz) - Timestamp of subscription
      - `is_active` (boolean) - Whether subscription is active

  2. Security
    - Enable RLS on both tables
    - Add policies for public insert access (form submissions)
    - Add policies for authenticated admin read access
    
  3. Important Notes
    - Forms are public-facing, so insert policies allow anon access
    - Read access restricted to authenticated users only (admin)
    - Email validation handled at application layer
    - Duplicate email handling for newsletter via UNIQUE constraint
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  organization text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contact submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read newsletter subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to update newsletter subscribers"
  ON newsletter_subscribers
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);