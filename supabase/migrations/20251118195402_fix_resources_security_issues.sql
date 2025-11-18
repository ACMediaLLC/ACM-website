/*
  # Fix Resources Table Security Issues

  ## Overview
  This migration addresses two security issues identified in the resources table:
  1. Removes unused index `idx_resources_category` that has not been used
  2. Secures function `update_resources_updated_at` by setting an immutable search_path

  ## Changes Made

  ### 1. Remove Unused Index
  - Drop `idx_resources_category` index as it's not being utilized
  - This reduces maintenance overhead and improves write performance

  ### 2. Secure Function Search Path
  - Recreate `update_resources_updated_at` function with SECURITY DEFINER and immutable search_path
  - This prevents potential privilege escalation attacks through search_path manipulation
  - Sets explicit `search_path = public` to ensure function always references correct schema

  ## Security Impact
  - Reduces attack surface by removing unused database objects
  - Prevents search_path manipulation attacks on trigger function
  - Maintains all existing functionality while improving security posture
*/

-- Drop the unused category index
DROP INDEX IF EXISTS idx_resources_category;

-- Recreate the function with secure search_path settings
CREATE OR REPLACE FUNCTION update_resources_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;