import type { Locale } from '../lib/routes'

/** Short labels inside the animated explainers. Decorative: the full text stays in the page copy. */
export interface VisualCopy {
  diy: { diy: string; pro: string; loading: string; banner: string; call: string; whatsapp: string }
  price: { site: string; logo: string; google: string; market: string; you: string; once: string; included: string; items: string[] }
  own: { month: string; paying: string; yours: string; code: string }
  steps: string[]
  keywords: { title: string; local: string; queries: [string, string, string]; pages: [string, string, string] }
  phone: { brand: string; hero: string; call: string; whatsapp: string; form: string }
  upload: { title: string; items: [string, string, string, string]; done: string }
  maps: { query: string; name: string; category: string; open: string; call: string; route: string; site: string; reviews: string }
  adsPrice: { title: string; month: string; withSite: string; alone: string; budget: string }
  ads: { google: string; sponsored: string; adTitle: string; chatgpt: string; question: string; answer: string; site: string }
  voice: { incoming: string; agent: string; lines: [string, string]; booked: string; slot: string }
  automation: { nodes: [string, string, string, string]; caption: string }
  social: { days: string[]; post: string; reel: string; story: string; ads: string }
  video: { raw: string; cut: string; subs: string; music: string; export: string }
  showcase: { flow: [string, string, string, string]; prospect: [string, string, string, string]; aigent: [string, string, string, string]; flowTag: string; prospectTag: string; aigentTag: string }
}

const IT: VisualCopy = {
  diy: { diy: 'Fai da te', pro: 'Con Marketizzati', loading: 'Caricamento…', banner: 'Creato con un builder gratuito', call: 'Chiama', whatsapp: 'WhatsApp' },
  price: { site: 'Sito', logo: 'Logo', google: 'Scheda Google', market: 'Valore di mercato', you: 'Paghi', once: 'una volta', included: 'Tutto incluso', items: ['Logo', 'Fino a 9 pagine', 'Chiama e WhatsApp', 'Scheda Google', 'Google e Bing', '30 giorni di assistenza'] },
  own: { month: 'mese', paying: 'Paghi la rata', yours: 'Il sito è tuo', code: 'codice compreso' },
  steps: ['Paghi', 'Materiale', 'Costruisco', 'Online'],
  keywords: { title: 'Cosa cercano i clienti', local: 'idraulico {city}', queries: ['idraulico vicino a me', 'perdita acqua urgente', 'rifare bagno prezzo'], pages: ['Pronto intervento', 'Servizi', 'Preventivo'] },
  phone: { brand: 'Rossi Impianti', hero: 'Idraulico a Vigevano, interventi in giornata', call: 'Chiama', whatsapp: 'WhatsApp', form: 'Chiedi un preventivo' },
  upload: { title: 'Mi mandi', items: ['Logo', 'Foto dei lavori', 'Servizi', 'Zone e orari'], done: 'Al resto penso io' },
  maps: { query: 'elettricista vigevano', name: 'Bianchi Elettricità', category: 'Elettricista', open: 'Aperto ora', call: 'Chiama', route: 'Indicazioni', site: 'Sito web', reviews: 'recensioni' },
  adsPrice: { title: 'Gestione Google Ads + ChatGPT Ads', month: 'Mese', withSite: 'Con il sito', alone: 'Senza sito', budget: 'Il budget per gli annunci lo paghi a parte' },
  ads: { google: 'Google', sponsored: 'Sponsorizzato', adTitle: 'Idraulico in zona · Preventivo gratuito', chatgpt: 'ChatGPT', question: 'Chi mi rifà il bagno a Vigevano?', answer: 'Ecco alcune ditte della zona:', site: 'Il tuo sito' },
  voice: { incoming: 'Chiamata in arrivo', agent: 'Risponde l’assistente', lines: ['Buongiorno, ho una perdita in cucina.', 'Le fisso un sopralluogo, va bene domani alle 9?'], booked: 'Appuntamento in agenda', slot: 'Domani · 9:00' },
  automation: { nodes: ['Richiesta', 'AI legge', 'Gestionale', 'Avviso a te'], caption: 'Succede da solo, ogni volta' },
  social: { days: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'], post: 'Post', reel: 'Reel', story: 'Storia', ads: 'Meta Ads' },
  video: { raw: 'Girato', cut: 'Taglio', subs: 'Sottotitoli', music: 'Musica', export: 'Pronto per Reel e TikTok' },
  showcase: { flow: ['Video', 'Tutti i social', 'Commento', 'Messaggio'], prospect: ['Google Maps', 'Dati attività', 'Proposta', 'Chiamata AI'], aigent: ['WhatsApp, email', 'Agente AI', 'Browser e cloud', 'Appuntamento'], flowTag: 'Contenuti e follow-up', prospectTag: 'Contatti e outreach', aigentTag: 'Comunicazione con i clienti' },
}

const ES: VisualCopy = {
  diy: { diy: 'Hazlo tú mismo', pro: 'Con Marketizzati', loading: 'Cargando…', banner: 'Creado con un constructor gratuito', call: 'Llamar', whatsapp: 'WhatsApp' },
  price: { site: 'Web', logo: 'Logo', google: 'Perfil de Google', market: 'Valor de mercado', you: 'Pagas', once: 'una vez', included: 'Todo incluido', items: ['Logo', 'Hasta 9 páginas', 'Llamar y WhatsApp', 'Perfil de Google', 'Google y Bing', '30 días de asistencia'] },
  own: { month: 'mes', paying: 'Pagas la cuota', yours: 'La web es tuya', code: 'código incluido' },
  steps: ['Pagas', 'Material', 'Construyo', 'Online'],
  keywords: { title: 'Lo que buscan los clientes', local: 'fontanero {city}', queries: ['fontanero cerca de mí', 'fuga de agua urgente', 'reformar baño precio'], pages: ['Urgencias', 'Servicios', 'Presupuesto'] },
  phone: { brand: 'Rossi Instalaciones', hero: 'Fontanero en Vigevano, intervenciones en el día', call: 'Llamar', whatsapp: 'WhatsApp', form: 'Pide presupuesto' },
  upload: { title: 'Me envías', items: ['Logo', 'Fotos de trabajos', 'Servicios', 'Zonas y horarios'], done: 'Del resto me ocupo yo' },
  maps: { query: 'electricista vigevano', name: 'Bianchi Electricidad', category: 'Electricista', open: 'Abierto ahora', call: 'Llamar', route: 'Cómo llegar', site: 'Sitio web', reviews: 'reseñas' },
  adsPrice: { title: 'Gestión Google Ads + ChatGPT Ads', month: 'Mes', withSite: 'Con la web', alone: 'Sin web', budget: 'El presupuesto de los anuncios se paga aparte' },
  ads: { google: 'Google', sponsored: 'Patrocinado', adTitle: 'Fontanero en tu zona · Presupuesto gratis', chatgpt: 'ChatGPT', question: '¿Quién me reforma el baño en Vigevano?', answer: 'Aquí tienes algunas empresas de la zona:', site: 'Tu web' },
  voice: { incoming: 'Llamada entrante', agent: 'Responde el asistente', lines: ['Buenos días, tengo una fuga en la cocina.', 'Le agendo una visita, ¿le va bien mañana a las 9?'], booked: 'Cita en la agenda', slot: 'Mañana · 9:00' },
  automation: { nodes: ['Solicitud', 'La IA lee', 'Gestión', 'Aviso para ti'], caption: 'Pasa solo, cada vez' },
  social: { days: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'], post: 'Post', reel: 'Reel', story: 'Story', ads: 'Meta Ads' },
  video: { raw: 'Grabado', cut: 'Corte', subs: 'Subtítulos', music: 'Música', export: 'Listo para Reels y TikTok' },
  showcase: { flow: ['Vídeo', 'Todas las redes', 'Comentario', 'Mensaje'], prospect: ['Google Maps', 'Datos', 'Propuesta', 'Llamada IA'], aigent: ['WhatsApp, email', 'Agente IA', 'Navegador y nube', 'Cita'], flowTag: 'Contenidos y seguimiento', prospectTag: 'Contactos y outreach', aigentTag: 'Comunicación con clientes' },
}

const EN: VisualCopy = {
  diy: { diy: 'Do it yourself', pro: 'With Marketizzati', loading: 'Loading…', banner: 'Made with a free site builder', call: 'Call', whatsapp: 'WhatsApp' },
  price: { site: 'Website', logo: 'Logo', google: 'Google profile', market: 'Market value', you: 'You pay', once: 'once', included: 'All included', items: ['Logo', 'Up to 9 pages', 'Call and WhatsApp', 'Google profile', 'Google and Bing', '30 days of support'] },
  own: { month: 'month', paying: 'You pay the instalment', yours: 'The website is yours', code: 'code included' },
  steps: ['You pay', 'Material', 'I build', 'Online'],
  keywords: { title: 'What customers search for', local: 'plumber {city}', queries: ['plumber near me', 'urgent water leak', 'bathroom renovation price'], pages: ['Emergency', 'Services', 'Quote'] },
  phone: { brand: 'Rossi Plumbing', hero: 'Plumber in Vigevano, same-day call-outs', call: 'Call', whatsapp: 'WhatsApp', form: 'Ask for a quote' },
  upload: { title: 'You send me', items: ['Logo', 'Photos of your work', 'Services', 'Areas and hours'], done: 'I handle the rest' },
  maps: { query: 'electrician vigevano', name: 'Bianchi Electrics', category: 'Electrician', open: 'Open now', call: 'Call', route: 'Directions', site: 'Website', reviews: 'reviews' },
  adsPrice: { title: 'Google Ads + ChatGPT Ads management', month: 'Month', withSite: 'With a website', alone: 'Without a website', budget: 'The ad budget is paid separately' },
  ads: { google: 'Google', sponsored: 'Sponsored', adTitle: 'Local plumber · Free quote', chatgpt: 'ChatGPT', question: 'Who can redo my bathroom in Vigevano?', answer: 'Here are a few local companies:', site: 'Your website' },
  voice: { incoming: 'Incoming call', agent: 'The assistant answers', lines: ['Hello, I have a leak in the kitchen.', 'I can book a visit, does tomorrow at 9 work?'], booked: 'Appointment booked', slot: 'Tomorrow · 9:00' },
  automation: { nodes: ['Request', 'AI reads it', 'Your system', 'You get notified'], caption: 'It happens on its own, every time' },
  social: { days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], post: 'Post', reel: 'Reel', story: 'Story', ads: 'Meta Ads' },
  video: { raw: 'Footage', cut: 'Cut', subs: 'Subtitles', music: 'Music', export: 'Ready for Reels and TikTok' },
  showcase: { flow: ['Video', 'Every channel', 'Comment', 'Message'], prospect: ['Google Maps', 'Business data', 'Proposal', 'AI call'], aigent: ['WhatsApp, email', 'AI agent', 'Browser and cloud', 'Appointment'], flowTag: 'Content and follow-up', prospectTag: 'Leads and outreach', aigentTag: 'Client communication' },
}

export const getVisualCopy = (locale: Locale): VisualCopy => ({ it: IT, es: ES, en: EN })[locale] ?? IT
