import { OFFER, savingIfPaidNow } from '../lib/offer'
import type { HomeCopy } from './home-types'

export const homeEn: HomeCopy = {
  meta: { title: "Websites, Google Ads & AI automation | Marketizzati", description: "Websites, Google and ChatGPT advertising, AI agents and social content for small businesses across Italy." },
  hero: {
    label: "Our services", title: "Websites and digital marketing", italic: "for small businesses", lead: "From websites and advertising to AI agents and social content, tailored solutions help you find customers and save time throughout Italy.",
    price: '', ctaPrimary: "Our services", ctaWhatsapp: 'WhatsApp', note: '',
    browser: { url: 'idraulicorossi.it', brand: 'Idraulico Rossi', headline: 'Same-day emergency plumbing.', cta: 'Call now', services: ['Leaks and repairs', 'Boilers', 'New bathrooms'] },
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
    ctaBuy: 'Book a call', ctaTalk: 'Want to talk first?', source: 'A business website costs an average of 1.000–3.000 € (sources: futuraweb.eu, uretech.it, milowebapp.it).',
  },
  steps: {
    label: '04 · How it works', title: 'Four steps,', italic: 'then your website is online.',
    items: [
      { title: 'Book a call', text: 'Pick a time in the calendar, or message me on WhatsApp.' },
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
  services: { label: "Our services", title: "Four solutions,", italic: "one joined-up approach.",
    items: [
      { key: "siti", title: "Website design", text: `A professional website with a logo and Google Business Profile included. From ${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months.`, tag: "Websites", links: [{ key: "siti", label: "Explore websites" }, { key: "prezzi", label: "See website pricing" }] },
      { key: "googleAds", title: "Google and ChatGPT advertising", text: "Campaigns that reach people looking for your services. ChatGPT ads where available; ad spend is separate.", tag: "Advertising", links: [{ key: "googleAds", label: "Explore Google Ads" }, { key: "chatgptAds", label: "Explore ChatGPT Ads" }] },
      { key: "agenti", title: "AI agents and automation", text: "Assistants that answer enquiries, collect requests and book appointments, plus custom business process automation.", tag: "AI and automation", links: [{ key: "agenti", label: "Explore AI agents" }, { key: "sistemi", label: "Explore automation" }] },
      { key: "social", title: "Social media and video content", text: "Editorial planning, profile management and content for your channels. Short videos and social advertising quoted individually.", tag: "Content", links: [{ key: "social", label: "Explore social media" }, { key: "video", label: "Explore video" }] },
    ],
    chat: { title: '', status: '', messages: [] }, quoteCta: '',
  },
  blog: { title: "Blog and free guides", text: "Practical advice and guides based on our videos to help you navigate digital marketing.", cta: "Read the blog" },
  projects: { label: '06 · Completed work', title: 'See the projects here,', italic: 'without leaving this website.', intro: 'Explore each project on marketizzati.it, with previews and animations showing how it works.', cta: 'See all projects' },
  about: { label: '07 · Who is behind this', title: 'Marco and Gabriela,', italic: 'real people behind your website.', text: 'I am Marco, a backend developer and content creator: I handle logic, automations and AI. Gabriela Villalva, of Villalva Digital Studio, designs and builds the websites with me. No agency with ten layers: on WhatsApp you talk to the people working on your project.', badges: ['Traffic Master Certified · Florida Global University', 'Local AI with Nexoft'], partnersTitle: 'I work with', cta: 'Let’s talk' },
  faq: { linkLabel: "See pricing and inclusions",
    label: '08 · Questions', title: 'The questions', italic: 'people ask me most.',
    items: [
      { q: "How much does a website cost?", a: `From ${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months, including a logo and Google profile.` },
      { q: "How much does it cost to build a website?", a: "It depends on the project. See what is included and the payment options." },
      { q: "What is the price of a website?", a: "It depends on the project. See what is included and the payment options." },
      { q: "How much does a simple website cost?", a: "It depends on its content and features. See what the offer includes." },
      { q: "How much does a professional website cost?", a: "It depends on the project. See what is included and the payment options." },
    ],
  },
  final: { title: 'Your website,', italic: 'online in two weeks.', text: `${OFFER.oneOff} € or ${OFFER.monthly} € a month. Logo and Google Business Profile included.`, ctaBuy: 'Book a call', ctaWhatsapp: 'Message me on WhatsApp' },
}
