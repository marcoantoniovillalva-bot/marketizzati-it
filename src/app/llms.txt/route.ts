import { BASE_URL, BUSINESS, WA_LINK } from '@/features/site/lib/links'
import { ADS, OFFER } from '@/features/site/lib/offer'
import { pageHref } from '@/features/site/lib/routes'

/** /llms.txt: a plain summary for AI assistants (ChatGPT, Claude, Perplexity), built from the same prices as the site. */
export function GET() {
  const u = (key: Parameters<typeof pageHref>[0]): string => `${BASE_URL}${pageHref(key, 'it')}`
  const body = `# Marketizzati

> Marketizzati è l’attività di ${BUSINESS.person} (${BUSINESS.city}, Lombardia, P.IVA ${BUSINESS.vat}): siti web, pubblicità su Google e ChatGPT, agenti AI e sistemi automatizzati per artigiani e piccole imprese. Zone: Milano, Pavia, Lodi, Crema e tutta la Lombardia; si lavora anche da remoto in tutta Italia.

## Offerta sito web (prezzo pubblico)

- ${OFFER.oneOff} € in un’unica soluzione, oppure ${OFFER.monthly} € al mese per ${OFFER.months} mesi (${OFFER.monthly * OFFER.months} € in totale). Dopo l’ultima rata il sito è del cliente, codice compreso.
- Inclusi: logo e identità visiva (o sistemazione di quelli esistenti), sito fino a ${OFFER.maxPages} pagine con testi sulle ricerche reali della zona, pulsanti chiama e WhatsApp, modulo contatti, indicizzazione Google e Bing, scheda Google Business Profile creata o sistemata, HTTPS, ${OFFER.supportDays} giorni di assistenza.
- A parte: dominio ed email su VHosting, circa ${OFFER.hostingPerYear} € l’anno, pagati dal cliente.
- Regime forfettario, niente IVA; marca da bollo di ${OFFER.stampDuty} € sulle fatture sopra 77,47 €.
- Online in circa ${OFFER.deliveryWeeks} settimane dal ricevimento del materiale. Si parte dopo una call: https://cal.com/marketizzati/30min
- Se le rate si interrompono il sito viene sospeso.

## Gestione pubblicità Google Ads + ChatGPT Ads

- ${ADS.monthly} € al mese per i due canali insieme, disdicibile.
- Se acquistata insieme al sito: primi ${ADS.launchMonths} mesi a ${ADS.launchMonthly} € al mese.
- Budget pubblicitario da ${ADS.minBudgetMonthly} € al mese, pagato direttamente a Google e OpenAI.

## Su preventivo

- Agenti AI su WhatsApp e al telefono, sistemi automatizzati su misura, social media management (anche Meta Ads), contenuti video.

## Pagine

- [Quanto costa un sito web](${u('prezzi')})
- [Realizzazione siti web](${u('siti')})
- [Sito web per artigiani](${u('artigiani')})
- [Scheda Google Business Profile](${u('schedaGoogle')})
- [Gestione Google Ads](${u('googleAds')})
- [ChatGPT Ads](${u('chatgptAds')})
- [Agenti AI su WhatsApp](${u('agenti')})
- [Progetti](${u('progetti')})
- [Condizioni di vendita](${u('condizioni')})
- [Blog e risorse gratuite](${u('blog')})

## Contatti

- WhatsApp: ${WA_LINK}
- Email: marco.villalva@marketizzati.it
`
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } })
}
