import { ADS } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const adsPrice = `${ADS.monthly} € a month for Google and ChatGPT together; buy it with your website and the first ${ADS.launchMonths} months cost ${ADS.launchMonthly} € a month`

export const googleAdsEn: ServiceCopy = {
  meta: { title: `Google Ads management for tradespeople and small businesses from ${ADS.monthly} €/month | Marketizzati`, description: `Google Ads and ChatGPT Ads management for tradespeople in Lombardy: ${adsPrice}. Ad budget paid directly to Google, account in your name.` },
  label: '01 · Google Ads advertising', title: 'Ads for people searching for you,', italic: 'with payment per click.',
  answer: `With Google Ads, your ad can appear at the top when someone in your area searches for your service. Management costs **${adsPrice}**. You pay the ad budget (from ${ADS.minBudgetMonthly} € a month) directly to Google, using an account in your name.`,
  cta: 'ads', visual: 'none',
  blocks: [
    { label: '02 · What I do', title: 'Small campaigns,', italic: 'focused on your area.', points: ['I choose searches for paid services: "roller shutter repair Lodi", rather than "how to repair a roller shutter".', 'I exclude terms that waste your budget: free, DIY, course, jobs.', 'I set the area around where you actually work.', 'I check and adjust weekly, with a report at the end of the month.'] },
    { label: '03 · Clear expectations', title: 'No promised', italic: 'number of calls.', text: 'Calls depend on the market, area and budget. I commit to the work: carefully set up campaigns, regular checks and a plain explanation every month. You can cancel management whenever you want.' },
  ],
  faq: [
    { q: 'How much does Google Ads management cost?', a: `${ADS.monthly} € a month for Google Ads and ChatGPT Ads together. With your website, the first ${ADS.launchMonths} months cost ${ADS.launchMonthly} € a month.` },
    { q: 'How much ad budget do I need?', a: `From ${ADS.minBudgetMonthly} € a month, paid directly to Google. We decide together, looking at the results.` },
    { q: 'Do I keep the account?', a: 'Yes, it is in your name from day one.' },
    { q: 'Can I cancel?', a: 'Yes. You can cancel ongoing management whenever you want. It ends at the close of the month you have already paid for.' },
  ], related: ['chatgptAds', 'prezzi', 'siti'],
}

export const chatgptAdsEn: ServiceCopy = {
  meta: { title: 'ChatGPT Ads in Italy: how they work and what they cost | Marketizzati', description: `ChatGPT Ads in Italy: what they are, how ads inside ChatGPT work, what they cost and who they suit. Management together with Google Ads from ${ADS.monthly} €/month.` },
  label: '01 · ChatGPT Ads', title: 'Advertising inside ChatGPT,', italic: 'in plain language.',
  answer: `**ChatGPT Ads** are ads that appear in ChatGPT conversations, related to what someone is asking. In Lombardy, searches for "chatgpt ads" grew by over 1.300% in a year, with little competition so far. I manage them together with Google Ads: **${adsPrice}**.`,
  cta: 'ads', visual: 'none',
  blocks: [
    { label: '02 · How they work', title: 'An answer,', italic: 'with your ad alongside it.', points: ['Someone asks ChatGPT who can repair a boiler near their home, for example.', 'A relevant ad may appear alongside the answer, marked as sponsored.', 'You pay the platform based on usage, within a budget you choose.', 'Formats and rules change often. I check the official OpenAI pages before every campaign.'] },
    { label: '03 · Who it suits', title: 'A channel to explore,', italic: 'while competition is low.', text: 'It may suit you if you cover a specific area and sell a service people ask about: repairs, installations or quotes. A small budget lets us test whether it works for you. We always use it alongside Google, which remains the main channel.' },
    { label: '04 · Without ads', title: 'Help ChatGPT find your business,', italic: 'without paying for ads.', text: 'Clear information on the web helps ChatGPT find your business: prices, services, areas and reviews. That is why I put prices and details in readable text, complete your Google profile and write pages with ChatGPT answers in mind too.' },
  ],
  faq: [
    { q: 'Are ChatGPT Ads available in Italy?', a: 'ChatGPT advertising is expanding country by country, and advertiser terms change often. Before starting, I check the official OpenAI pages to see what is available for your business.' },
    { q: 'How much do ChatGPT Ads cost?', a: `You choose the budget and pay it directly to OpenAI. My management, together with Google Ads, costs ${ADS.monthly} € a month.` },
    { q: 'Google Ads or ChatGPT Ads?', a: 'For a tradesperson, Google remains the first channel. ChatGPT is an additional way to be found where competition is still low.' },
  ], related: ['googleAds', 'prezzi', 'schedaGoogle'],
}

export const agentiEn: ServiceCopy = {
  meta: { title: 'AI assistants for business on WhatsApp and the phone | Marketizzati', description: 'AI assistants that answer customers on WhatsApp and the phone, even at night: information, appointments and important cases passed to you. Quoted individually.' },
  label: '01 · AI assistants on WhatsApp', title: 'An answer for your customers,', italic: 'even while you work.',
  answer: 'An **AI assistant** answers your customers on WhatsApp, and by voice on the phone if needed, at any hour. It shares prices and opening hours, asks relevant questions, books appointments and passes important cases to you. This is custom work: **I quote after understanding how you work**.',
  cta: 'quote', visual: 'phone',
  blocks: [
    { label: '02 · What it does', title: 'While you work,', italic: 'your customers get an answer.', points: ['Replies on WhatsApp, including evenings and public holidays.', 'Uses your information: services, indicative prices, areas and opening hours.', 'Books appointments in your calendar and sends reminders.', 'Voice assistant: answers calls and calls back people you could not speak to.', 'Alerts you when a person is needed. You can join the chat whenever you want.'] },
    { label: '03 · A real example', title: 'Already built', italic: 'for estate agencies.', text: 'AIGENT answers estate agency customers on WhatsApp and the phone, 24 hours a day. It checks their needs, suggests suitable homes and books viewings. The same approach can be adapted to garages, professional practices, tradespeople and shops.' },
  ],
  faq: [
    { q: 'How much does a WhatsApp AI assistant cost?', a: 'It depends on what it needs to do and how many messages it handles. Message me on WhatsApp for a clear quote.' },
    { q: 'Does it reply on my behalf?', a: 'Yes, on behalf of your business, following rules you choose. We test it together before making it available to everyone.' },
    { q: 'Do I need WhatsApp Business?', a: 'Yes. Depending on your needs, we use the WhatsApp Business app or the official Meta APIs.' },
  ], related: ['sistemi', 'progetti', 'siti'],
}

export const sistemiEn: ServiceCopy = {
  meta: { title: 'Custom automated systems and business tools with AI | Marketizzati', description: 'Custom systems to automate quotes, reminders, invoices and follow-up calls, including voice assistants. Quoted individually.' },
  label: '01 · Automated systems', title: 'Let the system handle', italic: 'the repetitive tasks.',
  answer: 'I build **custom systems** to handle repetitive work: collect enquiries, prepare quotes, send reminders and invoices, and call customers back, including through a **voice assistant**. A website with several pages is part of the fixed-price offer. A system like this **needs an individual quote**.',
  cta: 'quote', visual: 'none',
  blocks: [
    { label: '02 · Examples', title: 'What you can', italic: 'automate.', cards: [
      { title: 'Enquiries and quotes', text: 'A customer writes in. The system collects the details and prepares a draft quote for you to approve.' },
      { title: 'Reminders and follow-up calls', text: 'Appointments, deadlines and annual maintenance: messages and calls are sent automatically.' },
      { title: 'Custom business tools', text: 'Customers, jobs, photos and documents in one place, accessible from your phone on site too.' },
      { title: 'Voice assistants', text: 'An assistant that calls, listens and books appointments, then leaves you a summary.' },
    ] },
    { label: '03 · Completed work', title: 'ProspectBot and Zernflow,', italic: 'two private systems.', text: 'ProspectBot finds businesses without a website, collects their details, prepares a proposal and has a voice assistant call to book an appointment. Zernflow receives enquiries, routes them, replies and keeps track of everything. They are private client systems, but you can see how they work on the projects page.' },
  ],
  faq: [
    { q: 'How much does a custom system cost?', a: 'It depends on what it needs to do. Tell me about your work on WhatsApp and I will prepare a quote.' },
    { q: 'Do I need to change the software I use?', a: 'Not necessarily. Where possible, the system connects to the tools you already use.' },
  ], related: ['agenti', 'progetti', 'contatti'],
}

export const socialEn: ServiceCopy = {
  meta: { title: 'Social media management and Meta advertising for small businesses | Marketizzati', description: 'Content creation, publishing, profile management and Facebook and Instagram advertising (Meta Ads) for tradespeople and small businesses. Quoted individually.' },
  label: '01 · Social media management', title: 'Show your work,', italic: 'regularly.',
  answer: 'I handle **content creation, publishing and profile management**, plus **Facebook and Instagram advertising** (Meta Ads). This is a custom service: **I prepare a quote** based on how much content you need and which channels you use.',
  cta: 'quote', visual: 'none',
  blocks: [{ label: '02 · What is included', title: 'From the idea', italic: 'to the published post.', points: ['A content plan based on topics your customers care about.', 'Short videos and posts showing your real work.', 'Publishing and profile management.', 'Content advertising with Meta Ads. You pay the ad budget directly to Meta.'] }],
  faq: [
    { q: 'How much does social media management cost?', a: 'It depends on the amount of content and the channels. Message me on WhatsApp for a quote.' },
    { q: 'Do I have to be on camera?', a: 'Not necessarily. We can use photos and videos of your work, including ones taken on your phone.' },
  ], related: ['video', 'blog', 'contatti'],
}

export const videoEn: ServiceCopy = {
  meta: { title: 'Videos for social media and websites: reels and animation | Marketizzati', description: 'Vertical videos, reels and animated graphics to present your business on Instagram, TikTok and your website. Quoted individually.' },
  label: '01 · Video content', title: 'Videos that explain', italic: 'in thirty seconds.',
  answer: 'I create **vertical videos, reels and animated graphics**: from editing footage shot on your phone to animations explaining a service. This service is **quoted individually**, on its own or with social media management.',
  cta: 'quote', visual: 'none',
  blocks: [{ label: '02 · Formats', title: 'Short, clear,', italic: 'made for phones.', points: ['Reels and TikToks from your footage, with subtitles and a good pace.', 'Animated graphics to explain a service or product.', 'Videos for your website and advertising campaigns.'] }],
  faq: [{ q: 'How much does a video cost?', a: 'It depends on length and production work. Message me on WhatsApp with an example of what you like.' }],
  related: ['social', 'blog', 'contatti'],
}
