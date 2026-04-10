# Marketizzati — Digital Marketing Agency Platform

> Full-stack client portal for a digital marketing agency. Clients access their deliverables, track automation sequences, download resources, and communicate — all in one branded space.

**Live:** [marketizzati.it](https://marketizzati.it)

---

## What it does

Marketizzati is a production SaaS that replaces scattered emails and Drive folders with a centralised client workspace. Each client gets a private portal with their assets, automation status, and a communication channel.

Key features:
- **Client Portal** — Personalised workspace per client with assets, resources, and timeline
- **Resource Library** — Upload, version, and share files (PDFs, HTML, videos) with granular visibility controls (public/private/per-client)
- **Automation Engine** — Trigger and track drip sequences, email automations, and task pipelines
- **Admin Dashboard** — Per-client detail view, step management, activity timeline, and resource duplication
- **Google Ads Integration** — Conversion tracking wired to `AW-18067362849`
- **i18n** — Full Italian/English internationalisation with language switcher

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS 3.4 |
| Auth & Database | Supabase (PostgreSQL + Row-Level Security) |
| OAuth | Google OAuth (manual flow — shows brand domain, not supabase.co) |
| Email | Resend + transactional sequences |
| Analytics | Google Ads conversion tracking |
| State | Zustand |
| Deployment | Vercel |

---

## Architecture

**Feature-first layout** — `auth`, `portal`, `resources`, `automations`, and `admin` each own their components, hooks, and server actions.

**RLS everywhere** — every Supabase table has Row-Level Security policies. Clients can only read their own data; admins have elevated access via service role in Server Actions only.

**Server Actions over API routes** — mutations and data fetching run as Next.js Server Actions, keeping credentials server-side.

---

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (auth)/            # Login, callback
│   ├── portal/            # Client-facing portal
│   ├── admin/             # Admin dashboard
│   └── api/               # Webhooks, callbacks
├── features/
│   ├── auth/              # Google OAuth + session
│   ├── portal/            # Client workspace
│   ├── resources/         # File management
│   ├── automations/       # Sequence engine
│   └── admin/             # Admin controls
└── shared/                # UI components, lib, types
```

---

## Local Setup

```bash
git clone https://github.com/marcoantoniovillalva-bot/marketizzati-it
cd marketizzati-it
npm install
cp .env.local.example .env.local   # fill in Supabase + Google OAuth keys
npm run dev
```

---

## Deployment

Deployed on Vercel. Google OAuth redirect URIs must be registered in Google Cloud Console for both `localhost` and the production domain.

---

## About

Built by [Marco Antonio Villalva](https://lurumi.it) — full-stack developer and founder of Marketizzati, building AI-integrated tools for marketing agencies.
