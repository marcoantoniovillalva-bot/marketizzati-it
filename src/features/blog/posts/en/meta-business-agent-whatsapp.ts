import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "meta-business-agent-whatsapp",
  "title": "Meta Business Agent for WhatsApp: A Practical Guide",
  "description": "Learn how to set up Meta Business Agent for WhatsApp, configure customer replies, and review its capabilities and limits.",
  "date": "2026-11-03",
  "readTime": 5,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Practical guide to Meta Business Agent",
    "Activate and set up the WhatsApp Business AI agent",
    "Practical guide to Meta",
    "Meta Business practical guide",
    "Meta Business Agent",
    "Activate Business Agent"
  ],
  "image": "/images/blog/covers/meta-business-agent-whatsapp-wide.en.webp",
  "imageTall": "/images/blog/covers/meta-business-agent-whatsapp-tall.en.webp",
  "videoPreview": "/videos/preview/meta-business-agent-whatsapp.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7704246025153678625",
  "imageAlt": "Meta Business Agent — the AI agent that answers your customers on WhatsApp Business",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/01-slide-01.en.webp",
      "alt": "Meta Business Agent — the AI agent that answers your customers on WhatsApp Business"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find",
      "content": ""
    },
    {
      "type": "intro",
      "content": "In the video I explained Meta’s new tool for responding to customers on WhatsApp. **What is Meta Business Agent?** It’s Meta’s AI assistant that replies to customers on behalf of your business—answering questions, product advice, bookings and requests—while letting you step in when needed. Meta is rolling it out gradually. Information verified on Meta and WhatsApp official pages on 3 November 2026."
    },
    {
      "type": "list",
      "items": [
        "Check whether you can already enable it and how, step by step.",
        "Teach it about your business: past chats, catalog, documents, website.",
        "Decide when the agent replies and when you reply.",
        "Understand the difference with the new WhatsApp MCP, which is for developers.",
        "Costs and limits, before turning it on with real customers."
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** the agent speaks **on behalf of your business**. Before enabling it for everyone, teach it prices, hours and rules, and test replies using a colleague’s or family member’s number."
    },
    {
      "type": "cta",
      "heading": "Do you want us to set it up?",
      "content": "**If you want to save time, write to us.** We’ll prepare the info to teach the agent and pick the right solution with you: app, API or a custom assistant."
    },
    {
      "type": "h3",
      "heading": "Official links",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Meta Business Agent announcement (Meta Newsroom, June 3, 2026)](https://about.fb.com/news/2026/06/meta-business-agent/)",
        "[How to set up Meta Business Agent (WhatsApp Help Center)](https://faq.whatsapp.com/1153795669452207/?cms_platform=android&lang=it)",
        "[Meta Business AI waitlist](https://business.facebook.com/ai/welcome/)",
        "[WhatsApp Business Tools MCP (Meta for Developers)](https://developers.facebook.com/documentation/mcp/whatsapp-business-tools-mcp)",
        "[WhatsApp Business Platform pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. What it is and what it can do",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/02-slide-02.en.webp",
      "alt": "Meta Business Agent Practical Guide"
    },
    {
      "type": "paragraph",
      "content": "Meta Business Agent replies in WhatsApp chat with your business information. According to Meta it can **answer questions, recommend catalog products, book appointments, collect prospect data and close sales**. If you connect a catalog or calendar, booking and ordering buttons also appear in the chat. It works in the free WhatsApp Business app and, for larger companies, on the WhatsApp Business Platform (API)."
    },
    {
      "type": "h2",
      "heading": "2. Check if you can enable it",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/03-slide-03.en.webp",
      "alt": "Meta Business Agent Practical Guide"
    },
    {
      "type": "paragraph",
      "content": "Meta is rolling it out gradually, country by country and business by business. Here are the steps outlined by the WhatsApp Help Center:"
    },
    {
      "type": "list",
      "items": [
        "Update and open the **WhatsApp Business** app.",
        "In the **Tools** tab, tap **AI Agent**.",
        "Tap **Continue**, then **Accept**.",
        "If prompted, confirm with fingerprint or facial recognition and tap **Confirm**."
      ]
    },
    {
      "type": "callout",
      "content": "**If you don’t see “AI Agent”:** the feature isn’t available for your business yet. You can join the **waitlist** on Meta’s Business AI site (link above). Not all languages are supported yet: the agent’s language depends on the business phone number."
    },
    {
      "type": "h2",
      "heading": "3. Teach it about your business",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/04-slide-04.en.webp",
      "alt": "Meta Business Agent Practical Guide"
    },
    {
      "type": "paragraph",
      "content": "Before responding to customers, the agent needs to learn how your business works. You can give it:"
    },
    {
      "type": "list",
      "items": [
        "**Past chats** (up to the last six months, optional): learn how you usually reply.",
        "**Catalog** on WhatsApp or Commerce Manager: products, prices, photos.",
        "**Documents and photos**: price list, opening hours, sales terms, FAQs.",
        "**Website**: the business's public information."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Help me prepare a document to upload to the WhatsApp Business AI agent for [business name, what you sell, city]. Ask me one question at a time about opening hours, prices, deliveries, returns, payments and customer FAQs; then write a clear document in Italian with headings and short sentences. Do not make up information."
    },
    {
      "type": "paragraph",
      "content": "With Claude or ChatGPT you can prepare the document with your business rules in 15 minutes."
    },
    {
      "type": "h2",
      "heading": "4. Decide when you intervene",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/05-slide-05.en.webp",
      "alt": "Meta Business Agent practical guide"
    },
    {
      "type": "paragraph",
      "content": "After activation, in **Tools → Your AI agent → AI replies** choose when the agent responds. Within a single chat you can turn it on or off via the spark icon or the ⋮ → AI replies menu. This way you handle delicate conversations (complaints, important quotes). If it can’t answer, the agent collects the question: review them weekly and add replies."
    },
    {
      "type": "h2",
      "heading": "5. The agent is not the new MCP",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/06-slide-06.en.webp",
      "alt": "Meta Business Agent practical guide"
    },
    {
      "type": "paragraph",
      "content": "They are two different things announced a few months apart: the agent talks to customers, the MCP helps developers set up WhatsApp."
    },
    {
      "type": "table",
      "headers": [
        "",
        "Meta Business Agent",
        "WhatsApp Business Tools MCP"
      ],
      "rows": [
        [
          "Who it’s for",
          "For your business: chat with customers",
          "For developers: set up the platform"
        ],
        [
          "Where to use it",
          "WhatsApp Business app (and API)",
          "Claude Code, Codex CLI and Codex app"
        ],
        [
          "What it does",
          "Answers, advises, books, sells",
          "Numbers, message templates, webhook, business verification, Cloud API"
        ],
        [
          "Status",
          "Gradual rollout, waitlist",
          "Official Meta beta (Sept 2026), for development and testing"
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "**What is the Cloud API?** It’s Meta’s hosted version of the WhatsApp Business Platform: it lets you send and receive WhatsApp messages from software (CRM, ERP, chatbot). The official MCP connects via Claude Code or Codex at **https://mcp.facebook.com/whatsapp_business_tools** using Facebook Login for Business; from there describe what you need and the assistant creates numbers, templates and webhooks for you."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "With the MCP WhatsApp Business Tools, list my WhatsApp Business accounts and linked numbers, then create a service message template in Italian to confirm an appointment with name, date and time. Before creating anything, show me what you’ll do and wait for my OK."
    },
    {
      "type": "paragraph",
      "content": "for developers: have the assistant prepare the configuration, but you confirm every change."
    },
    {
      "type": "h2",
      "heading": "6. Costs and limits",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/07-slide-07.en.webp",
      "alt": "Practical guide Meta Business Agent"
    },
    {
      "type": "list",
      "items": [
        "**In the WhatsApp Business app** you start for free; with the **Meta One** subscription (Essential plan from $14.99 per month, prices vary by country) you get more access and more agent replies (observed in November 2026).",
        "**On the platform (API)** agent messages are pay‑as‑you‑go: Meta lists $2 per million tokens, roughly 4–5 cents per message (as of August 1 2026).",
        "**Availability**: only in certain countries and for certain businesses; in Italy the rollout is announced as gradual.",
        "**Excluded sectors** on the platform: finance, healthcare, gambling, alcohol and public administration.",
        "The agent speaks on your behalf: regularly monitor the conversations."
      ]
    },
    {
      "type": "h2",
      "heading": "Best practice and support Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/meta-business-agent-whatsapp/08-slide-08.en.webp",
      "alt": "Practical guide Meta Business Agent"
    },
    {
      "type": "paragraph",
      "content": "Turn it on only outside business hours, when you can't answer yourself, and read every evening the replies it gave. When you're sure, expand it. If you have many customers or want to connect it to your ERP, consider the API platform with a custom assistant. We can help you understand which solution fits you and set it up."
    },
    {
      "type": "cta",
      "heading": "Do you want a comparison for your case?",
      "content": "**If you want us to set it up, write to us.** Tell us how many messages you receive and what you sell: we'll tell you if the app is enough or you need the API."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF:** [Download PDF](/guide/meta-business-agent-whatsapp.pdf) (PDF in Italian)"
    }
  ]
}

export default post
