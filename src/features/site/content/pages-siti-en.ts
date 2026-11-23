import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € upfront or ${OFFER.monthly} € a month for ${OFFER.months} months`

export const sitiEn: ServiceCopy = {
  meta: { title: `Professional website design from ${OFFER.oneOff} €`, description: `Websites for tradespeople in Lombardy: up to ${OFFER.maxPages} pages, text based on real searches, logo and Google profile. ${price}.` },
  label: '01 · Website design', title: 'A website that makes it easy', italic: 'to get in touch.',
  answer: `I build **professional websites with several pages** for tradespeople and small businesses: text based on what customers in your area search for on Google, call and message buttons, logo and Google Business Profile included. It costs **${price}** and goes online in around ${OFFER.deliveryWeeks} weeks.`,
  cta: 'buy', visual: 'browser',
  blocks: [
    { label: '02 · The method', title: 'First the searches,', italic: 'then the pages.', text: 'I start with what people type into Google when they need you: "emergency plumber Pavia", "stuck roller shutter who to call". Each main service gets a page that answers that search.', points: ['Research into search terms in your area, with actual search volumes.', `Up to ${OFFER.maxPages} pages: one per service, plus contact, Privacy and Cookies.`, 'Clear text that speaks directly to your customers, without jargon.', 'Individual page titles and descriptions, sitemap, Search Console and Bing Webmaster Tools.'] },
    { label: '03 · Made for phones', title: 'People looking for you are in a hurry,', italic: 'with a phone in their hand.', text: 'Most people look for a tradesperson on their phone, often with an urgent problem. The website loads quickly and puts what they need first: calling, messaging on WhatsApp and checking where you work.', points: ['A visible "Call" button.', 'WhatsApp with one tap.', 'A contact form delivered to your email.', 'Photos of your work, service areas and opening hours clearly shown.'] },
    { label: '04 · What you keep', title: 'You own the website,', italic: 'with no rental fee.', text: `Your domain, email, logo and Google profile are in your name from day one. After the last instalment, the website is yours too, including the code. There is no fee to keep it online: just domain and email, around ${OFFER.hostingPerYear} € a year.` },
  ],
  faq: [
    { q: 'How much does a website cost to build?', a: `With Marketizzati, ${price}, including a logo, Google profile and ${OFFER.supportDays} days of support.` },
    { q: 'How many pages does the website have?', a: `Up to ${OFFER.maxPages}, plus Privacy and Cookies. Usually: home, one page per main service, about and contact.` },
    { q: 'Do you write the text?', a: 'Yes. I base it on real customer searches in your area. You read it and tell me what to change.' },
    { q: 'What platform do you use?', a: 'A custom website that is fast and lightweight. When it is finished, you own the code.' },
  ], related: ['prezzi', 'artigiani', 'schedaGoogle'],
}

export const artigianiEn: ServiceCopy = {
  meta: { title: 'Websites for plumbers, electricians and other trades', description: `Websites for plumbers, electricians, window fitters, builders, salons and restaurants: ${price}, logo included.` },
  label: '01 · Websites for tradespeople', title: 'A website for people', italic: 'who work with their hands.',
  answer: `A website for tradespeople with Marketizzati costs **${price}**, logo and Google profile included. It is designed for you if you work all day and have little time: send me photos and information, I handle the rest, and your website goes online in around ${OFFER.deliveryWeeks} weeks.`,
  cta: 'buy', visual: 'browser',
  blocks: [
    { label: '02 · By trade', title: 'Every trade', italic: 'has its own searches.', text: 'People search for the problem they need to solve. That is where your website starts.', cards: [
      { title: 'Plumber', text: 'Emergencies, leaks, boilers and new bathrooms: a page for each need, with a call button at the top.' },
      { title: 'Electrician', text: 'Wiring, faults, fuse boxes, EV chargers and certificates: people want to know if you do their type of job and cover their area.' },
      { title: 'Windows and roller shutters', text: 'Shutter repairs, insect screens, awnings and windows: many specific local searches, each with its own page.' },
      { title: 'Building company', text: 'Renovations, bathrooms and façades: before-and-after photos, service areas and a simple way to request a site visit.' },
      { title: 'Beauty salon and hairdresser', text: 'Services, indicative prices, opening hours and WhatsApp booking. Your Google profile matters as much as your website.' },
      { title: 'Restaurant and bar', text: 'An up-to-date menu, opening hours, directions and bookings. Easy to read on a phone.' },
    ] },
    { label: '03 · Your time', title: 'I ask you for', italic: 'twenty minutes.', points: ['Send your logo (if you have one), work photos, services, areas and opening hours through the client area.', 'We have a 20-minute call.', 'I send you the website to read. You tell me what to change.', 'It goes online, with corrections included for 30 days.'] },
  ],
  faq: [
    { q: 'How much does a website for a plumber or electrician cost?', a: `The same for every trade: ${price}, logo and Google profile included.` },
    { q: 'I do not have professional photos. Is that a problem?', a: 'No. Phone photos of your work are fine. I edit them, and use stock images too if needed.' },
    { q: 'Can I pay in instalments?', a: `Yes: ${OFFER.months} instalments of ${OFFER.monthly} €. After the last one, the website is yours.` },
    { q: 'I work in several towns. Can you include them all?', a: 'Yes, your service areas go on both your website and Google profile.' },
  ], related: ['prezzi', 'siti', 'schedaGoogle'],
}

export const schedaEn: ServiceCopy = {
  meta: { title: 'Google Business Profile: how to set it up and use it', description: 'Google Business Profile for tradespeople: setup, verification, categories, photos and reviews. Or I create it for you with your website.' },
  label: '01 · Google Business Profile', title: 'Your Google profile,', italic: 'often the first thing people see.',
  answer: `Your **Google Business Profile** (formerly Google My Business) is the panel showing your name, phone number, opening hours, photos and reviews on Google and Maps. It gives customers another way to call you. Creating one on Google is free. With Marketizzati, **I create or update it for you**, included with your website from ${OFFER.oneOff} €.`,
  cta: 'buy', visual: 'none',
  blocks: [
    { label: '02 · Setting it up', title: 'Create it yourself:', italic: 'the steps.', cards: [
      { title: '1. Sign in', text: 'Go to business.google.com using a Google account owned by your business.' },
      { title: '2. Name and category', text: 'Use your real business name, without added search terms, and the most specific category available, such as "Plumber".' },
      { title: '3. Service area', text: 'If you visit customers, list the towns you cover instead of your home address.' },
      { title: '4. Verification', text: 'Google checks that the business is yours, using a code by post, a phone call or a short video. Google decides the timing.' },
      { title: '5. Fill in the details', text: 'Opening hours, services, phone number, website and at least 10 real photos of your work.' },
      { title: '6. Reviews', text: 'Ask each happy customer for a review and reply to all reviews, including negative ones.' },
    ] },
    { label: '03 · Common mistakes', title: 'Mistakes that can', italic: 'hide your profile.', points: ['Adding search terms to your name ("Rossi Emergency Plumber Pavia") risks suspension.', 'Two profiles for the same business.', 'An address that does not match reality.', 'Photos from the internet instead of your own work.', 'Opening hours never updated for public holidays.'] },
    { label: '04 · I can do it for you', title: 'Short on time?', italic: 'I can set it up.', text: `Your Google profile is included with your website: I create it and arrange verification, or update your existing profile with services, areas, opening hours, photos and your website link. If you only need the profile, **message me on WhatsApp**.` },
  ],
  faq: [
    { q: 'Are Google My Business and Google Business Profile the same thing?', a: 'Yes. Google changed the name in 2021, but it is the same profile.' },
    { q: 'How much does a Google profile cost?', a: `It is free on Google. With Marketizzati, it is included with your website (${OFFER.oneOff} € or ${OFFER.monthly} €/month): I create or update it for you.` },
    { q: 'My profile is suspended. What should I do?', a: 'Check your name, address and category. The issue is often there. Then request a review from Google. I can take a look if you want.' },
    { q: 'How long does verification take?', a: 'From a few days to a few weeks, depending on the method Google chooses.' },
  ], related: ['prezzi', 'siti', 'artigiani'],
}
