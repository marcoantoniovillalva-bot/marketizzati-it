-- Orders bought on the public site with Stripe (website offer, Google + ChatGPT ads management).
-- Written only by the Stripe webhook with the service role; a client can read their own rows in the portal.

CREATE TABLE IF NOT EXISTS public.site_orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  email TEXT NOT NULL,
  full_name TEXT,
  business_name TEXT,
  tax_code TEXT,              -- P.IVA or codice fiscale
  invoice_channel TEXT,       -- SDI code or PEC
  phone TEXT,
  plan TEXT NOT NULL CHECK (plan IN ('site_oneoff', 'site_monthly', 'ads_only')),
  ads_launch BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'suspended', 'completed', 'canceled')),
  stripe_session_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  terms_version TEXT NOT NULL,
  terms_accepted_at TIMESTAMPTZ NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS site_orders_subscription_idx ON public.site_orders (stripe_subscription_id);
CREATE INDEX IF NOT EXISTS site_orders_user_idx ON public.site_orders (user_id);

ALTER TABLE public.site_orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Clients can view own orders" ON public.site_orders;
CREATE POLICY "Clients can view own orders"
  ON public.site_orders FOR SELECT
  USING (auth.uid() = user_id);
