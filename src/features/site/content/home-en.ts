import { ADS, OFFER, savingIfPaidNow } from '../lib/offer'
import type { HomeCopy } from './home-types'

export const homeEn: HomeCopy = {
  meta: {
    title: 'Websites for tradespeople and small businesses from 800 € | Marketizzati',
    description: `A professional website with up to ${OFFER.maxPages} pages, logo and Google Business Profile included: ${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months. Built by Marco, online in around 2 weeks.`,
  },
  hero: {
    label: 'Websites for tradespeople and small businesses', title: 'Your professional website,', italic: 'built by a real person.',
    lead: `Up to ${OFFER.maxPages} pages, logo and Google Business Profile included.`,
    price: `**${OFFER.oneOff} € upfront, or ${OFFER.monthly} € a month for ${OFFER.months} months.** Then it is yours.`,
    ctaPrimary: 'See what is included', ctaWhatsapp: 'Message me on WhatsApp', note: 'The price is right here. No waiting for a quote.',
    browser: { url: 'idraulicorossi.it', brand: 'Idraulico Rossi', headline: 'Same-day emergency plumbing in Pavia.', cta: 'Call now', services: ['Leaks and repairs', 'Boilers', 'New bathrooms'] },
  },
  problem: {
    label: '02 · Sound familiar?', title: 'You tried Wix or ChatGPT.', italic: 'Then work got in the way.',
    text: 'Building your own website looks easy. Then you have to decide what to write, make it findable on Google and keep it updated while you are out on jobs. There is never enough time, and the website stays half finished.',
    points: ['Others ask you to call for a quote, then take a week to reply.', 'I do it this way: **a public price, a website built by me, online in around 2 weeks.**'],
  },
  offer: {
    label: '03 · The offer', title: 'A public price,', italic: 'no quote needed.', marketLabel: 'Market value',
    marketDetail: `website ${OFFER.marketItems.site} € · logo ${OFFER.marketItems.logo} € · Google profile ${OFFER.marketItems.google} €`,
    oneOff: { title: 'Pay upfront', note: `one payment · save ${savingIfPaidNow} €` },
    monthly: { title: 'Pay in instalments', note: `a month for ${OFFER.months} months · less than 3.30 € a day` },
    includedTitle: 'What is included',
    included: ['Logo and visual identity. If you have one, I tidy it up.', `A website with up to ${OFFER.maxPages} pages, with text based on what customers in your area actually search for.`, 'Call and WhatsApp buttons, plus a contact form.', 'Google Business Profile: I create it or tidy up your existing one.', 'Google and Bing indexing, HTTPS and a business email if you need one.', `${OFFER.supportDays} days of support after launch.`],
    ownership: '**After the last instalment, the website is yours**, including the code. No ongoing fees to pay me.',
    hosting: `Separate cost: domain and email with VHosting, around ${OFFER.hostingPerYear} € a year, registered and paid for by you.`,
    stamp: `+ ${OFFER.stampDuty} € stamp duty per invoice (Italian flat-rate tax scheme, no VAT).`,
    ctaBuy: 'Buy your website', ctaTalk: 'Want to talk first?', source: 'A business website costs an average of 1.000–3.000 € (sources: futuraweb.eu, uretech.it, milowebapp.it).',
  },
  steps: {
    label: '04 · How it works', title: 'Four steps,', italic: 'then your website is online.',
    items: [
      { title: 'Choose how to pay', text: 'Pay here on the website, or talk to me on WhatsApp first.' },
      { title: 'Send me your material', text: 'Your logo if you have one, photos of your work, services and areas. Then a 20-minute call.' },
      { title: 'I write and build', text: 'Your website goes online around 2 weeks after I receive your material.' },
      { title: 'You get 30 days of support', text: 'Corrections and small changes are included. After that, changes are quoted on request.' },
    ],
  },
  stats: [
    { value: `${OFFER.oneOff} €`, label: 'one payment, and the website is yours' },
    { value: `${OFFER.maxPages} pages`, label: 'with text based on real searches' },
    { value: '~2 weeks', label: 'from your material to launch' },
    { value: `${OFFER.supportDays} days`, label: 'of support included' },
  ],
  services: {
    label: '05 · More than websites', title: 'Need more than a website?', italic: 'Here is what else I do.',
    items: [
      { key: 'googleAds', title: 'Google and ChatGPT advertising', text: `Management of both channels for ${ADS.monthly} € a month. Buy it with your website and the first ${ADS.launchMonths} months cost ${ADS.launchMonthly} € a month. You pay the ad budget directly to Google and OpenAI.`, tag: 'Available online' },
      { key: 'agenti', title: 'AI assistants on WhatsApp', text: 'They answer customers even at night, share prices and opening hours and book appointments. Voice calls too.', tag: 'Quoted individually' },
      { key: 'sistemi', title: 'Custom automated systems', text: 'Tools that handle repetitive tasks for you: quotes, reminders, invoices and follow-up calls.', tag: 'Quoted individually' },
      { key: 'social', title: 'Content and social media', text: 'I create and publish content, manage your profiles and run Facebook and Instagram ads.', tag: 'Quoted individually' },
    ],
    chat: { title: 'Idraulico Rossi', status: 'assistant replying', messages: [
      { from: 'client', text: 'Good evening, my kitchen tap is leaking. Can you come tomorrow?' },
      { from: 'agent', text: 'Good evening! We have 9:30 or 15:00 available tomorrow. Which works for you?' },
      { from: 'client', text: '9:30 works for me' },
      { from: 'agent', text: 'Booked ✅ You will get a reminder tomorrow morning at 8.' },
    ] }, quoteCta: 'For work that needs a quote',
  },
  projects: { label: '06 · Completed work', title: 'See the projects here,', italic: 'without leaving this website.', intro: 'Explore each project on marketizzati.it, with previews and animations showing how it works.', cta: 'See all projects' },
  about: { label: '07 · Who is behind this', title: 'Marco and Gabriela,', italic: 'real people behind your website.', text: 'I am Marco, a backend developer and content creator: I handle logic, automations and AI. Gabriela Villalva, of Villalva Digital Studio, designs and builds the websites with me. No agency with ten layers: on WhatsApp you talk to the people working on your project.', badges: ['Traffic Master Certified · Florida Global University', 'Local AI with Nexoft'], partnersTitle: 'I work with', cta: 'Let’s talk' },
  faq: {
    label: '08 · Questions', title: 'The questions', italic: 'people ask me most.',
    items: [
      { q: 'How much does a website cost per year?', a: `${OFFER.oneOff} € upfront, or ${OFFER.monthly} € a month for ${OFFER.months} months. Then just domain and email, around ${OFFER.hostingPerYear} € a year, paid to VHosting.` },
      { q: 'Can I pay in instalments?', a: `Yes: ${OFFER.months} instalments of ${OFFER.monthly} €. After the last one, the website is yours, including the code. If payments stop, the website is suspended until you resume paying.` },
      { q: 'Do I own the website?', a: 'Yes. Your domain, email, logo and Google profile are in your name from day one. The website becomes yours after the last instalment.' },
      { q: 'Do I need a logo already?', a: 'No, it is included. If you have one, I tidy it up.' },
      { q: 'I already have a Google profile or an old website.', a: 'The price stays the same. I update or rebuild them.' },
      { q: 'How soon is it online?', a: 'Around 2 weeks after I receive your material. Google decides how long profile verification takes.' },
      { q: 'Is VAT added?', a: `No. I use the Italian flat-rate tax scheme, so there is no VAT. Each invoice includes ${OFFER.stampDuty} € stamp duty.` },
      { q: 'What happens after 30 days?', a: 'Changes are available on request with a small quote. There are no monthly fees to pay me.' },
    ],
  },
  final: { title: 'Your website,', italic: 'online in two weeks.', text: `${OFFER.oneOff} € or ${OFFER.monthly} € a month. Logo and Google Business Profile included.`, ctaBuy: 'Buy your website', ctaWhatsapp: 'Message me on WhatsApp' },
}
