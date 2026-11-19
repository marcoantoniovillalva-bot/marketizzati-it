import type { PlanCardData } from '../components/plan-cards'
import { WA_LINK } from '../lib/links'
import { ADS, AUTOMATION, euro, OFFER } from '../lib/offer'
import type { Locale } from '../lib/routes'
import { CAL_LINK, getAutomationCopy } from './automation'

const T = {
  it: {
    month: '/ mese', perInstalment: `× ${OFFER.months} rate`,
    siteOnce: 'Sito · paghi subito', siteMonthly: 'Sito · a rate', save: `Risparmi ${OFFER.monthly * OFFER.months - OFFER.oneOff} €`,
    onceNote: 'Una volta sola. Il sito, il logo e il codice sono tuoi.', monthlyNote: `${OFFER.months} rate da ${OFFER.monthly} €, poi il sito è tuo. Totale ${OFFER.monthly * OFFER.months} €.`,
    sitePoints: ['Logo e scheda Google inclusi', `Fino a ${OFFER.maxPages} pagine, testi sulle ricerche della tua zona`, 'Pulsanti per chiamarti e scriverti su WhatsApp', `Online in circa ${OFFER.deliveryWeeks} settimane dal materiale`, `${OFFER.supportDays} giorni di assistenza`],
    monthlyPoints: ['Tutto quello del pagamento unico', 'Il sito è online dalla prima rata', 'Dopo l’ultima rata è tuo, codice compreso'],
    addon: `Aggiungi la pubblicità Google + ChatGPT: ${ADS.launchMonths} mesi di gestione a ${ADS.launchMonthly} €/mese, poi si ferma da sola.`,
    buySite: 'Compra il sito', talkWa: 'Parliamone su WhatsApp',
    ads: 'Gestione Google Ads + ChatGPT Ads', adsNote: `Disdici quando vuoi. Se la prendi con il sito costa ${ADS.launchMonthly} €/mese per i primi ${ADS.launchMonths} mesi.`,
    adsPoints: ['Campagne sulle ricerche di chi ti cerca davvero', 'Annunci anche dentro ChatGPT, dove è disponibile', 'Account intestati a te, report ogni mese', `Budget annunci a parte, da ${ADS.minBudgetMonthly} €/mese, pagato alle piattaforme`],
    buyAds: 'Attiva la gestione',
    social: 'Social e video', socialPrice: 'Su preventivo', socialNote: 'Contenuti, gestione dei profili e Meta Ads: dipende da quanti contenuti e canali.',
    socialPoints: ['Piano editoriale e pubblicazione', 'Reel, sottotitoli e motion graphics', 'Pubblicità su Facebook e Instagram'],
    market: `Valore di mercato ${euro(OFFER.marketValue, 'it')}`,
  },
  es: {
    month: '/ mes', perInstalment: `× ${OFFER.months} cuotas`,
    siteOnce: 'Web · pago único', siteMonthly: 'Web · a plazos', save: `Ahorras ${OFFER.monthly * OFFER.months - OFFER.oneOff} €`,
    onceNote: 'Un solo pago. La web, el logo y el código son tuyos.', monthlyNote: `${OFFER.months} cuotas de ${OFFER.monthly} €, luego la web es tuya. Total ${OFFER.monthly * OFFER.months} €.`,
    sitePoints: ['Logo y ficha de Google incluidos', `Hasta ${OFFER.maxPages} páginas, textos según las búsquedas de tu zona`, 'Botones para llamarte y escribirte por WhatsApp', `Online en unas ${OFFER.deliveryWeeks} semanas desde el material`, `${OFFER.supportDays} días de asistencia`],
    monthlyPoints: ['Todo lo del pago único', 'La web está online desde la primera cuota', 'Tras la última cuota es tuya, código incluido'],
    addon: `Añade la publicidad Google + ChatGPT: ${ADS.launchMonths} meses de gestión a ${ADS.launchMonthly} €/mes, luego se detiene sola.`,
    buySite: 'Comprar la web', talkWa: 'Hablemos por WhatsApp',
    ads: 'Gestión Google Ads + ChatGPT Ads', adsNote: `Cancela cuando quieras. Con la web cuesta ${ADS.launchMonthly} €/mes los primeros ${ADS.launchMonths} meses.`,
    adsPoints: ['Campañas en las búsquedas de quien te busca de verdad', 'Anuncios también dentro de ChatGPT, donde esté disponible', 'Cuentas a tu nombre, informe cada mes', `Presupuesto de anuncios aparte, desde ${ADS.minBudgetMonthly} €/mes, pagado a las plataformas`],
    buyAds: 'Activar la gestión',
    social: 'Redes y vídeo', socialPrice: 'Con presupuesto', socialNote: 'Contenidos, gestión de perfiles y Meta Ads: depende de cuántos contenidos y canales.',
    socialPoints: ['Plan editorial y publicación', 'Reels, subtítulos y motion graphics', 'Publicidad en Facebook e Instagram'],
    market: `Valor de mercado ${euro(OFFER.marketValue, 'es')}`,
  },
  en: {
    month: '/ month', perInstalment: `× ${OFFER.months} instalments`,
    siteOnce: 'Website · pay once', siteMonthly: 'Website · instalments', save: `Save ${OFFER.monthly * OFFER.months - OFFER.oneOff} €`,
    onceNote: 'One payment. The website, the logo and the code are yours.', monthlyNote: `${OFFER.months} instalments of ${OFFER.monthly} €, then the website is yours. Total ${OFFER.monthly * OFFER.months} €.`,
    sitePoints: ['Logo and Google profile included', `Up to ${OFFER.maxPages} pages, written around local searches`, 'Call and WhatsApp buttons', `Online in about ${OFFER.deliveryWeeks} weeks from the material`, `${OFFER.supportDays} days of support`],
    monthlyPoints: ['Everything in the one-off plan', 'Online from the first instalment', 'After the last instalment it is yours, code included'],
    addon: `Add Google + ChatGPT ads: ${ADS.launchMonths} months of management at ${ADS.launchMonthly} €/month, then it stops on its own.`,
    buySite: 'Buy the website', talkWa: 'Talk on WhatsApp',
    ads: 'Google Ads + ChatGPT Ads management', adsNote: `Cancel any time. With a website it costs ${ADS.launchMonthly} €/month for the first ${ADS.launchMonths} months.`,
    adsPoints: ['Campaigns on the searches of people really looking for you', 'Ads inside ChatGPT too, where available', 'Accounts in your name, monthly report', `Ad budget separate, from ${ADS.minBudgetMonthly} €/month, paid to the platforms`],
    buyAds: 'Start the management',
    social: 'Social and video', socialPrice: 'Custom quote', socialNote: 'Content, profile management and Meta Ads: it depends on how much content and how many channels.',
    socialPoints: ['Content plan and publishing', 'Reels, subtitles and motion graphics', 'Facebook and Instagram ads'],
    market: `Market value ${euro(OFFER.marketValue, 'en')}`,
  },
} as const

export function sitePlans(locale: Locale): PlanCardData[] {
  const t = T[locale]
  return [
    { title: t.siteOnce, badge: t.save, price: OFFER.oneOff, was: t.market, note: t.onceNote, points: [...t.sitePoints], addon: t.addon, pay: { plan: 'site_oneoff', label: t.buySite }, talk: { label: t.talkWa, href: WA_LINK } },
    { title: t.siteMonthly, price: OFFER.monthly, suffix: t.perInstalment, note: t.monthlyNote, points: [...t.monthlyPoints], addon: t.addon, pay: { plan: 'site_monthly', label: t.buySite }, talk: { label: t.talkWa, href: WA_LINK } },
  ]
}

export function adsPlans(locale: Locale): PlanCardData[] {
  const t = T[locale]
  return [{ title: t.ads, price: ADS.monthly, suffix: t.month, note: t.adsNote, points: [...t.adsPoints], pay: { plan: 'ads_only', label: t.buyAds }, talk: { label: t.talkWa, href: WA_LINK } }]
}

export function automationPlans(locale: Locale): PlanCardData[] {
  const a = getAutomationCopy(locale)
  return a.plans.map((p) => ({
    title: p.title,
    badge: p.badge,
    price: p.plan ? (p.plan === 'automation_quarterly' ? AUTOMATION.quarterly : AUTOMATION.monthly) : p.priceLabel ?? '',
    suffix: p.plan ? a.perMonth : undefined,
    note: p.note,
    points: p.points,
    pay: p.plan ? { plan: p.plan, label: a.pay } : undefined,
    talk: { label: p.plan ? a.talk : a.tell, href: CAL_LINK },
  }))
}

export function socialPlans(locale: Locale): PlanCardData[] {
  const t = T[locale]
  return [{ title: t.social, price: t.socialPrice, note: t.socialNote, points: [...t.socialPoints], talk: { label: t.talkWa, href: WA_LINK } }]
}
