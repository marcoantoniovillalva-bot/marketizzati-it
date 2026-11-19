import type { Locale } from '../lib/routes'

/** Booking page on cal.com (connected to Marco's Google Calendar). */
export const CAL_LINK = 'https://cal.com/marketizzati/30min'

export interface AutomationPlanCopy {
  title: string
  badge?: string
  /** Shown instead of a price for the custom project. */
  priceLabel?: string
  note: string
  points: string[]
  /** Checkout plan for "Paga e parti"; none for the custom project. */
  plan?: 'automation_quarterly' | 'automation_monthly'
}

export interface AutomationCopy {
  label: string
  title: string
  italic: string
  intro: string
  pillars: { title: string; text: string }[]
  perMonth: string
  plans: AutomationPlanCopy[]
  pay: string
  talk: string
  tell: string
}

const IT: AutomationCopy = {
  label: 'Piani automazioni',
  title: 'Automazioni e agenti AI,',
  italic: 'in abbonamento.',
  intro: 'Un prezzo chiaro al mese, oppure un progetto a corpo. Prenota 30 minuti e ne parliamo.',
  pillars: [
    { title: 'Capisco', text: 'Prima di costruire guardiamo **cosa ti fa perdere tempo** e cosa conviene automatizzare davvero.' },
    { title: 'Costruisco', text: 'Agenti su WhatsApp, email e telefono, collegamenti tra i tuoi programmi, **AI locale** se i dati sono delicati.' },
    { title: 'Mantengo', text: 'Controllo, correggo e miglioro ogni mese, così le automazioni **continuano a funzionare**.' },
  ],
  perMonth: '/ mese',
  plans: [
    { title: 'Abbonamento trimestrale', badge: 'Consigliato', note: 'Impegno di tre mesi, poi rinnovi se ti serve.', points: ['Priorità decise insieme ogni mese', 'Analisi, sviluppo e manutenzione nello stesso prezzo', 'Il tuo team impara a usarle e resta autonomo'], plan: 'automation_quarterly' },
    { title: 'Abbonamento mensile', note: 'Mese per mese, ti fermi quando vuoi.', points: ['Tutto quello del trimestrale', 'Per partire con un primo mese di prova'], plan: 'automation_monthly' },
    { title: 'Progetto a corpo', priceLabel: 'Su misura', note: 'Un obiettivo preciso, un prezzo chiuso.', points: ['Per esempio: un agente vocale, un agente WhatsApp, un gestionale, un collegamento tra i tuoi programmi', 'Preventivo dopo la prima chiacchierata'] },
  ],
  pay: 'Paga e parti',
  talk: 'Parliamone in 30 minuti',
  tell: 'Raccontami il progetto',
}

const ES: AutomationCopy = {
  ...IT,
  label: 'Planes de automatización',
  title: 'Automatizaciones y agentes de IA,',
  italic: 'en suscripción.',
  intro: 'Un precio claro al mes o un proyecto cerrado. Reserva 30 minutos y lo hablamos.',
  pillars: [
    { title: 'Entiendo', text: 'Antes de construir vemos **qué te hace perder tiempo** y qué conviene automatizar de verdad.' },
    { title: 'Construyo', text: 'Agentes en WhatsApp, email y teléfono, conexiones entre tus programas, **IA local** si los datos son delicados.' },
    { title: 'Mantengo', text: 'Reviso, corrijo y mejoro cada mes, para que las automatizaciones **sigan funcionando**.' },
  ],
  perMonth: '/ mes',
  plans: [
    { title: 'Suscripción trimestral', badge: 'Recomendado', note: 'Compromiso de tres meses, luego renuevas si lo necesitas.', points: ['Prioridades decididas juntos cada mes', 'Análisis, desarrollo y mantenimiento en el mismo precio', 'Tu equipo aprende a usarlas y es autónomo'], plan: 'automation_quarterly' },
    { title: 'Suscripción mensual', note: 'Mes a mes, paras cuando quieras.', points: ['Todo lo del trimestral', 'Para empezar con un primer mes de prueba'], plan: 'automation_monthly' },
    { title: 'Proyecto cerrado', priceLabel: 'A medida', note: 'Un objetivo concreto, un precio cerrado.', points: ['Por ejemplo: un agente de voz, un agente de WhatsApp, un sistema de gestión, una conexión entre tus programas', 'Presupuesto tras la primera charla'] },
  ],
  pay: 'Paga y empieza',
  talk: 'Hablemos 30 minutos',
  tell: 'Cuéntame el proyecto',
}

const EN: AutomationCopy = {
  ...IT,
  label: 'Automation plans',
  title: 'Automations and AI agents,',
  italic: 'by subscription.',
  intro: 'One clear monthly price, or a fixed-price project. Book 30 minutes and we talk it through.',
  pillars: [
    { title: 'Understand', text: 'Before building we look at **what wastes your time** and what is really worth automating.' },
    { title: 'Build', text: 'Agents on WhatsApp, email and phone, links between your tools, **local AI** when data is sensitive.' },
    { title: 'Maintain', text: 'I check, fix and improve every month, so the automations **keep working**.' },
  ],
  perMonth: '/ month',
  plans: [
    { title: 'Quarterly subscription', badge: 'Recommended', note: 'Three-month commitment, then renew if you need it.', points: ['Priorities agreed together every month', 'Analysis, development and maintenance in one price', 'Your team learns to use them and stays independent'], plan: 'automation_quarterly' },
    { title: 'Monthly subscription', note: 'Month to month, stop whenever you like.', points: ['Everything in the quarterly plan', 'To start with a first trial month'], plan: 'automation_monthly' },
    { title: 'Fixed-price project', priceLabel: 'Custom', note: 'One clear goal, one fixed price.', points: ['For example: a voice agent, a WhatsApp agent, a management system, a link between your tools', 'Quote after the first chat'] },
  ],
  pay: 'Pay and start',
  talk: 'Let’s talk for 30 minutes',
  tell: 'Tell me about the project',
}

export const getAutomationCopy = (locale: Locale): AutomationCopy => ({ it: IT, es: ES, en: EN })[locale] ?? IT
