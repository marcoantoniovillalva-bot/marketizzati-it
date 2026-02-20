export const siteConfig = {
  companyName: 'Marketizzati',
  companySlogan: 'La Digital Factory per il tuo business',
  companyDescription: 'Aiutiamo PMI e professionisti a trasformare la loro visione in un business digitale strutturato, attraverso il Metodo Z·START e una Digital Factory potenziata dall\'AI.',
  partitaIva: '03028360182',
  codiceFiscale: '',
  codiceRea: '',

  contact: {
    email: 'info@marketizzati.it',
    pec: '',
    phone: '+393516528344',
    whatsapp: '+393516528344',
    address: '',
    city: '',
    country: 'Italia',
  },

  social: {
    instagram: '',
    linkedin: '',
    facebook: '',
    tiktok: '',
  },

  services: [
    {
      id: 'strategia',
      icon: 'Target',
      titleKey: 'services.strategia.title',
      descriptionKey: 'services.strategia.description',
    },
    {
      id: 'branding',
      icon: 'Palette',
      titleKey: 'services.branding.title',
      descriptionKey: 'services.branding.description',
    },
    {
      id: 'web',
      icon: 'Globe',
      titleKey: 'services.web.title',
      descriptionKey: 'services.web.description',
    },
    {
      id: 'ai-automation',
      icon: 'Cpu',
      titleKey: 'services.ai.title',
      descriptionKey: 'services.ai.description',
    },
    {
      id: 'funnel',
      icon: 'TrendingUp',
      titleKey: 'services.funnel.title',
      descriptionKey: 'services.funnel.description',
    },
    {
      id: 'content',
      icon: 'PenTool',
      titleKey: 'services.content.title',
      descriptionKey: 'services.content.description',
    },
  ],

  method: {
    name: 'Z·START',
    steps: [
      { number: 1, letter: 'Z', titleKey: 'method.step1.title', descriptionKey: 'method.step1.description', duration: '1-2 settimane' },
      { number: 2, letter: 'S', titleKey: 'method.step2.title', descriptionKey: 'method.step2.description', duration: '2-3 settimane' },
      { number: 3, letter: 'T', titleKey: 'method.step3.title', descriptionKey: 'method.step3.description', duration: '3-6 settimane' },
      { number: 4, letter: 'A', titleKey: 'method.step4.title', descriptionKey: 'method.step4.description', duration: '4-8 settimane' },
      { number: 5, letter: 'R', titleKey: 'method.step5.title', descriptionKey: 'method.step5.description', duration: 'Cicli di 30 giorni' },
      { number: 6, letter: 'T', titleKey: 'method.step6.title', descriptionKey: 'method.step6.description', duration: 'Trimestrale' },
    ],
  },

  consultation: {
    duration: 30,
    maxPerWeek: 10,
    challenges: [
      'non-so-da-dove-iniziare',
      'ho-un-business-ma-non-cresce',
      'voglio-monetizzare-online',
      'ho-bisogno-di-una-strategia',
      'voglio-automatizzare',
      'altro',
    ],
  },
} as const

export type SiteConfig = typeof siteConfig
