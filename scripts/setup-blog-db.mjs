import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://luhfsvgbpnaxdeydxtrn.supabase.co'
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1aGZzdmdicG5heGRleWR4dHJuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MTMyOTkyMSwiZXhwIjoyMDg2OTA1OTIxfQ.saEh_Kb5iaDI_iKZKkBCMu5keuYVVZVVB6gQYT1NbTM'

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY)

// Check if table exists
const { data: existing, error: checkErr } = await supabase
  .from('blog_posts')
  .select('id')
  .limit(1)

if (existing !== null) {
  console.log('✅ blog_posts table already exists')
} else {
  console.log('ℹ️  blog_posts table does not exist yet.')
  console.log('\n👉 Run this SQL in Supabase Dashboard → SQL Editor:')
  console.log('   https://supabase.com/dashboard/project/luhfsvgbpnaxdeydxtrn/sql/new\n')
  console.log(`CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  read_time INT NOT NULL DEFAULT 5,
  category TEXT NOT NULL DEFAULT 'Marketing',
  keywords TEXT[] DEFAULT '{}',
  image TEXT DEFAULT '',
  image_alt TEXT DEFAULT '',
  sections JSONB NOT NULL DEFAULT '[]',
  published BOOLEAN NOT NULL DEFAULT false,
  locale TEXT NOT NULL DEFAULT 'it',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read published" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Admin full access" ON blog_posts
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles
      WHERE profiles.id = auth.uid()
      AND profiles.role = 'admin'
    )
  );`)
}

// Create blog-images storage bucket
const { data: buckets } = await supabase.storage.listBuckets()
const exists = buckets?.some(b => b.name === 'blog-images')

if (!exists) {
  const { error } = await supabase.storage.createBucket('blog-images', {
    public: true,
    fileSizeLimit: 10485760,
    allowedMimeTypes: ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  })
  if (error) {
    console.log('❌ Bucket error:', error.message)
    console.log('→ Create "blog-images" bucket manually in Supabase Dashboard → Storage (PUBLIC)')
  } else {
    console.log('✅ blog-images storage bucket created (PUBLIC)')
  }
} else {
  console.log('✅ blog-images bucket already exists')
}
