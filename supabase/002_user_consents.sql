-- User Consents table for GDPR compliance
-- Each consent type is stored as a separate record for audit trail

CREATE TABLE IF NOT EXISTS user_consents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  consent_type TEXT NOT NULL CHECK (consent_type IN ('terms', 'marketing', 'newsletter')),
  granted BOOLEAN NOT NULL DEFAULT false,
  granted_at TIMESTAMPTZ,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for fast lookups by user
CREATE INDEX idx_user_consents_user_id ON user_consents(user_id);

-- Unique constraint: one record per user per consent type
CREATE UNIQUE INDEX idx_user_consents_unique ON user_consents(user_id, consent_type);

-- RLS policies
ALTER TABLE user_consents ENABLE ROW LEVEL SECURITY;

-- Users can read their own consents
CREATE POLICY "Users can read own consents"
  ON user_consents FOR SELECT
  USING (auth.uid() = user_id);

-- Users can insert their own consents
CREATE POLICY "Users can insert own consents"
  ON user_consents FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own consents (e.g., withdraw marketing consent)
CREATE POLICY "Users can update own consents"
  ON user_consents FOR UPDATE
  USING (auth.uid() = user_id);

-- Add phone column to profiles table
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS phone TEXT;
