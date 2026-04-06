-- ============================================
-- Dynamic resources + admin bootstrap
-- ============================================

ALTER TABLE public.resources
  ADD COLUMN IF NOT EXISTS embed_url TEXT,
  ADD COLUMN IF NOT EXISTS unlock_step_code TEXT,
  ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT TRUE;

CREATE TABLE IF NOT EXISTS public.resource_assignments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE NOT NULL,
  resource_id UUID REFERENCES public.resources(id) ON DELETE CASCADE NOT NULL,
  unlocked_by TEXT DEFAULT 'admin',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, resource_id)
);

ALTER TABLE public.resource_assignments ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own resource assignments" ON public.resource_assignments;
CREATE POLICY "Users can view own resource assignments"
  ON public.resource_assignments FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Admins can manage resource assignments" ON public.resource_assignments;
CREATE POLICY "Admins can manage resource assignments"
  ON public.resource_assignments FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

DROP POLICY IF EXISTS "Authenticated users can view resources" ON public.resources;
CREATE POLICY "Authenticated users can view resources"
  ON public.resources FOR SELECT
  USING (
    auth.uid() IS NOT NULL
    AND is_active = TRUE
    AND (
      is_premium = FALSE
      OR EXISTS (
        SELECT 1 FROM public.resource_assignments ra
        WHERE ra.resource_id = resources.id
          AND ra.user_id = auth.uid()
      )
      OR EXISTS (
        SELECT 1 FROM public.client_steps cs
        WHERE cs.user_id = auth.uid()
          AND cs.code = resources.unlock_step_code
          AND cs.status = 'completed'
      )
      OR EXISTS (
        SELECT 1 FROM public.profiles
        WHERE id = auth.uid() AND role = 'admin'
      )
    )
  );

DROP POLICY IF EXISTS "Admins can manage resources" ON public.resources;
CREATE POLICY "Admins can manage resources"
  ON public.resources FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url, role)
  VALUES (
    NEW.id,
    COALESCE(
      NEW.raw_user_meta_data->>'full_name',
      NEW.raw_user_meta_data->>'name',
      NULL
    ),
    COALESCE(
      NEW.raw_user_meta_data->>'avatar_url',
      NEW.raw_user_meta_data->>'picture',
      NULL
    ),
    CASE
      WHEN lower(COALESCE(NEW.email, '')) = 'marco.villalva@marketizzati.it' THEN 'admin'
      ELSE 'client'
    END
  )
  ON CONFLICT (id) DO UPDATE
  SET
    full_name = EXCLUDED.full_name,
    avatar_url = EXCLUDED.avatar_url,
    role = CASE
      WHEN lower(COALESCE(NEW.email, '')) = 'marco.villalva@marketizzati.it' THEN 'admin'
      ELSE public.profiles.role
    END,
    updated_at = now();

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

UPDATE public.profiles
SET role = 'admin', updated_at = now()
WHERE id IN (
  SELECT id
  FROM auth.users
  WHERE lower(email) = 'marco.villalva@marketizzati.it'
);

INSERT INTO public.resources (title, description, type, embed_url, is_premium, unlock_step_code, is_active, sort_order)
VALUES
  (
    'Framework Z-START',
    'Il framework completo per costruire il tuo business digitale con precisione industriale.',
    'guide',
    'https://gamma.app/embed/ch58toblx6t6bqo',
    FALSE,
    NULL,
    TRUE,
    1
  ),
  (
    'Checklist Lancio Digitale',
    'Le 50 cose da verificare prima di lanciare il tuo progetto online.',
    'template',
    'https://gamma.app/embed/9uarrvw0o9iwuqu',
    FALSE,
    'zero-point',
    TRUE,
    2
  ),
  (
    'Template Proposta Unica di Valore',
    'Una traccia pratica per definire USP e messaggio commerciale.',
    'template',
    'https://gamma.app/embed/022r2j0hif4ibw6',
    FALSE,
    'strategy',
    TRUE,
    3
  ),
  (
    'Guida SEO Base',
    'I fondamentali SEO spiegati semplice, per chi parte da zero.',
    'guide',
    'https://gamma.app/embed/63v04hmedgg3xwn',
    TRUE,
    'technology',
    TRUE,
    4
  ),
  (
    'Il Profilo Instagram Perfetto',
    'Biografia, setup e mappa strategica per un profilo che converte.',
    'guide',
    'https://gamma.app/embed/8j381x9j4rlmtdx',
    TRUE,
    'activation',
    TRUE,
    5
  )
ON CONFLICT DO NOTHING;
