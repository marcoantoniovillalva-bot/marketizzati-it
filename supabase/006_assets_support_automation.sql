-- ============================================
-- Assets import, support ops, automation execution base
-- ============================================

CREATE TABLE IF NOT EXISTS public.client_assets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  source TEXT DEFAULT 'manual',
  asset_type TEXT DEFAULT 'reference',
  title TEXT,
  url TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.client_assets ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own assets" ON public.client_assets;
CREATE POLICY "Users can view own assets"
  ON public.client_assets FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can manage client assets" ON public.client_assets;
CREATE POLICY "Admins can manage client assets"
  ON public.client_assets FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

ALTER TABLE public.client_requests
  ADD COLUMN IF NOT EXISTS admin_note TEXT,
  ADD COLUMN IF NOT EXISTS resolved_at TIMESTAMPTZ;

CREATE OR REPLACE FUNCTION public.touch_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS touch_client_workspaces_updated_at ON public.client_workspaces;
CREATE TRIGGER touch_client_workspaces_updated_at
  BEFORE UPDATE ON public.client_workspaces
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

DROP TRIGGER IF EXISTS touch_client_steps_updated_at ON public.client_steps;
CREATE TRIGGER touch_client_steps_updated_at
  BEFORE UPDATE ON public.client_steps
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

DROP TRIGGER IF EXISTS touch_client_tasks_updated_at ON public.client_tasks;
CREATE TRIGGER touch_client_tasks_updated_at
  BEFORE UPDATE ON public.client_tasks
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

DROP TRIGGER IF EXISTS touch_automation_runs_updated_at ON public.automation_runs;
CREATE TRIGGER touch_automation_runs_updated_at
  BEFORE UPDATE ON public.automation_runs
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

DROP TRIGGER IF EXISTS touch_client_requests_updated_at ON public.client_requests;
CREATE TRIGGER touch_client_requests_updated_at
  BEFORE UPDATE ON public.client_requests
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();
