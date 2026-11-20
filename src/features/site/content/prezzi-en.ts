import type { PricesCopy } from './prezzi-it'
import { ADS, OFFER } from '../lib/offer'

export const prezziEn: PricesCopy = {
  meta: {
    title: `How much does a website cost? ${OFFER.oneOff} € or ${OFFER.monthly} €/month`,
    description: `Website prices in 2026: ${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months, logo and Google Business Profile included. Public price, no quote to wait for.`,
  },
  label: '01 · Prices', title: 'How much does a website cost?', italic: 'Here is the price.',
  answer: `A professional website with Marketizzati costs **${OFFER.oneOff} € upfront** or **${OFFER.monthly} € a month for ${OFFER.months} months**, including a logo, Google Business Profile, up to ${OFFER.maxPages} pages and ${OFFER.supportDays} days of support. After the last instalment, the website is yours. The only separate cost is domain and email, around ${OFFER.hostingPerYear} € a year.`,
  compare: {
    label: '02 · Comparison', title: 'What you actually pay,', italic: 'side by side.',
    columns: ['Marketizzati', 'Traditional agency', 'Do it yourself (Wix, ChatGPT)'],
    rows: [
      { label: 'Price', values: [`${OFFER.oneOff} € or ${OFFER.monthly} €/month × ${OFFER.months}`, '1.000–3.000 € or more, quoted individually', 'A website builder subscription, every year'] },
      { label: 'Logo', values: ['Included', 'Often extra', 'You make it'] },
      { label: 'Google profile', values: ['Included, created or updated', 'Often extra', 'You create it'] },
      { label: 'Text', values: ['Based on searches in your area', 'It depends', 'You write it'] },
      { label: 'You own the website', values: ['Yes, including the code', 'Depends on the contract', 'No: it stays on the builder'] },
      { label: 'Who answers you', values: ['Marco, on WhatsApp', 'An account manager', 'Nobody'] },
    ],
    note: 'Indicative market prices: a business website costs an average of 1.000–3.000 € (futuraweb.eu, uretech.it, milowebapp.it).',
  },
  ads: {
    label: '03 · Advertising', title: 'Want to advertise too?', italic: 'Add Google and ChatGPT ads.',
    text: `You can add Google and ChatGPT ads alongside your website. Buy them together and the first ${ADS.launchMonths} months of management cost ${ADS.launchMonthly} € a month. Management then stops automatically. If you want to continue, it costs ${ADS.monthly} € a month.`,
    points: ['Google Ads and ChatGPT Ads managed together.', `Ad budget from ${ADS.minBudgetMonthly} € a month, paid directly to Google and OpenAI.`, 'The advertising accounts are in your name.', 'No promised numbers: I show you what happens each month.'],
  },
  buy: { label: '04 · Buy', title: 'Choose how to pay,', italic: 'and we can start.', intro: 'Pay securely with Stripe. You then get access to the client area, where you upload your logo, photos and information.' },
  faq: {
    label: '05 · Questions', title: 'Questions about the price,', italic: 'clear answers.',
    items: [
      { q: 'How much does a website cost per month?', a: `${OFFER.monthly} € a month for ${OFFER.months} months (${OFFER.monthly * OFFER.months} € in total). Then no ongoing fees: just domain and email, around ${OFFER.hostingPerYear} € a year.` },
      { q: 'How much does a website cost per year?', a: `In the first year, ${OFFER.oneOff} € (or ${OFFER.monthly * OFFER.months} € in instalments), plus around ${OFFER.hostingPerYear} € for domain and email. From the second year, just ${OFFER.hostingPerYear} €.` },
      { q: 'Why does it cost less than an agency?', a: 'I do the work myself, with no middle steps, using a process I have used for other tradespeople. The work includes a logo, text, Google profile and a website with several pages.' },
      { q: 'What happens if I stop paying instalments?', a: 'The website is suspended until you resume paying. Once all instalments are paid, the website is yours and you owe me no further fees.' },
      { q: 'Can I pay upfront and add advertising later?', a: `Yes, but the discount for the first ${ADS.launchMonths} months at ${ADS.launchMonthly} € only applies when bought with the website. Management on its own costs ${ADS.monthly} € a month.` },
      { q: 'Is VAT added?', a: `No, I use the Italian flat-rate tax scheme. Each invoice over 77,47 € includes ${OFFER.stampDuty} € stamp duty.` },
      { q: 'Can I use this offer to replace an existing website?', a: 'Yes, the price stays the same. I reuse useful content and tidy up your logo and Google profile if you already have them.' },
    ],
  },
}
