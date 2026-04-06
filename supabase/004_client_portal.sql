-- ============================================
-- Marketizzati Client Portal + Admin Foundation
-- ============================================

ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS phone TEXT,
  ADD COLUMN IF NOT EXISTS avatar_url TEXT;

CREATE TABLE IF NOT EXISTS public.client_workspaces (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL UNIQUE,
  business_name TEXT,
  offer_name TEXT,
  niche TEXT,
  target_customer TEXT,
  main_goal TEXT,
  current_stage TEXT,
  primary_channel TEXT,
  notes TEXT,
  automation_focus TEXT,
  workspace_health INT DEFAULT 12 CHECK (workspace_health BETWEEN 0 AND 100),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.client_workspaces ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own workspace" ON public.client_workspaces;
CREATE POLICY "Users can view own workspace"
  ON public.client_workspaces FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own workspace" ON public.client_workspaces;
CREATE POLICY "Users can insert own workspace"
  ON public.client_workspaces FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own workspace" ON public.client_workspaces;
CREATE POLICY "Users can update own workspace"
  ON public.client_workspaces FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.client_steps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  code TEXT NOT NULL,
  title TEXT NOT NULL,
  summary TEXT NOT NULL,
  deliverable_title TEXT,
  next_action TEXT,
  status TEXT DEFAULT 'not_started' CHECK (status IN ('not_started', 'in_progress', 'completed', 'blocked')),
  progress INT DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, code)
);

ALTER TABLE public.client_steps ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own steps" ON public.client_steps;
CREATE POLICY "Users can view own steps"
  ON public.client_steps FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own steps" ON public.client_steps;
CREATE POLICY "Users can insert own steps"
  ON public.client_steps FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own steps" ON public.client_steps;
CREATE POLICY "Users can update own steps"
  ON public.client_steps FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.client_tasks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  step_code TEXT,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  is_automated BOOLEAN DEFAULT FALSE,
  due_label TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.client_tasks ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own tasks" ON public.client_tasks;
CREATE POLICY "Users can view own tasks"
  ON public.client_tasks FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own tasks" ON public.client_tasks;
CREATE POLICY "Users can insert own tasks"
  ON public.client_tasks FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own tasks" ON public.client_tasks;
CREATE POLICY "Users can update own tasks"
  ON public.client_tasks FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.automation_runs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  automation_type TEXT NOT NULL,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'queued', 'paused', 'completed')),
  summary TEXT,
  last_run_at TIMESTAMPTZ,
  next_run_at TIMESTAMPTZ,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.automation_runs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own automations" ON public.automation_runs;
CREATE POLICY "Users can view own automations"
  ON public.automation_runs FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own automations" ON public.automation_runs;
CREATE POLICY "Users can insert own automations"
  ON public.automation_runs FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own automations" ON public.automation_runs;
CREATE POLICY "Users can update own automations"
  ON public.automation_runs FOR UPDATE
  USING (auth.uid() = user_id);

CREATE TABLE IF NOT EXISTS public.client_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  type TEXT DEFAULT 'support' CHECK (type IN ('support', 'feedback', 'revision', 'automation')),
  title TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'in_review', 'resolved')),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.client_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own requests" ON public.client_requests;
CREATE POLICY "Users can view own requests"
  ON public.client_requests FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own requests" ON public.client_requests;
CREATE POLICY "Users can insert own requests"
  ON public.client_requests FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own requests" ON public.client_requests;
CREATE POLICY "Users can update own requests"
  ON public.client_requests FOR UPDATE
  USING (auth.uid() = user_id);
