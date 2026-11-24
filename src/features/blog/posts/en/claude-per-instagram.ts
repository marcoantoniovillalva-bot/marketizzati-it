import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "claude-per-instagram",
  "title": "Claude working on your Instagram",
  "description": "How to connect Instagram to Claude with Composio, ready prompts to post, reply to comments and read stats, and the limits to…",
  "date": "2026-10-22",
  "readTime": 12,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Practical guide",
    "Claude working on your Instagram",
    "How to connect Instagram to Claude with Composio",
    "ready prompts to post",
    "reply to comments and read stats",
    "and the limits to know"
  ],
  "image": "/images/blog/covers/claude-per-instagram-wide.en.webp",
  "imageTall": "/images/blog/covers/claude-per-instagram-tall.en.webp",
  "videoPreview": "/videos/preview/claude-per-instagram.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7700323352560274721",
  "imageAlt": "Operational manual to have Claude publish, reply and analyze your Instagram profile, no code and no loss of control",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/01-slide-01.webp",
      "alt": "Operational manual to have Claude publish, reply and analyze your Instagram profile, no code and no loss of control"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find in this guide",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Claude can post on your Instagram, but **not the way you think**: Instagram isn’t among Claude’s official connectors. The link goes through **Composio**, a service that acts as a “bridge” between AI and over a thousand apps, handling accesses and authorizations for you. Composio uses Instagram’s official APIs: no tricks, no shared passwords. This guide takes you from the connection to ready prompts, and explains what Claude can and cannot do, so you avoid the confusion I often see in comments."
    },
    {
      "type": "h3",
      "heading": "In this guide you’ll learn to:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "set up your profile (creator or business account);",
        "connect Claude to Composio and Composio to Instagram, step by step;",
        "learn what Claude can do: posts, carousels, reels, stories, comments, messages and analytics;",
        "use ready-made prompts to publish, reply and analyze results;",
        "know Instagram's limits so you don't waste time;",
        "work safely, with you approving every post."
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** Claude drafts, you approve. Always see the preview (text, image, time) before any post or public reply: it's your profile and reputation."
    },
    {
      "type": "cta",
      "heading": "Want an Instagram that works even when you're away?",
      "content": "We build custom automations for you: comment replies with resource DM, AI‑generated content, weekly reports and integration with WhatsApp and CRM. Message me on WhatsApp and tell me what you sell."
    },
    {
      "type": "h3",
      "heading": "Official links",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Composio - page to connect Claude](https://composio.dev/claude)",
        "[Composio Connect - official guide (URL MCP)](https://docs.composio.dev/docs/composio-connect)",
        "[Composio - available Instagram tools](https://docs.composio.dev/toolkits/instagram)",
        "[Composio - pricing](https://composio.dev/pricing)",
        "[Claude - custom connectors (Anthropic guide)](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)",
        "[Claude Code - connect an MCP](https://code.claude.com/docs/en/mcp)",
        "[Instagram - switch to a professional account](https://help.instagram.com/502981923235522/?locale=it_IT)",
        "[Instagram - tag AI‑generated content](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT)",
        "[Meta - publishing via API (limits and formats)](https://developers.facebook.com/docs/instagram-platform/content-publishing)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Before you start: what you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/02-slide-02.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "You start for free. You need four things: a professional Instagram profile, a Claude account, a Composio account, and your content on a public link (Instagram pulls photos and videos from it)."
    },
    {
      "type": "table",
      "headers": [
        "What",
        "Where",
        "Cost (October 2026)"
      ],
      "rows": [
        [
          "Instagram creator or business account",
          "Instagram app (chapter 2)",
          "Free"
        ],
        [
          "Claude Account",
          "[claude.ai](https://claude.ai/) or Claude Desktop",
          "Free: 1 custom connector. Pro, Max, Team: more connectors"
        ],
        [
          "Composio Account",
          "[composio.dev](https://composio.dev/)",
          "Free Hobby plan, no card needed. With the Composio app: 20,000 actions per month included"
        ],
        [
          "Online photos and videos",
          "Your website or a hosting service",
          "Photos only in JPG"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Note:** beyond the included actions, Composio charges $0.0002 per action (or the Pro plan at $29/month). For a business posting a few times a week, the free plan is enough. Prices checked October 2026 on the official page."
    },
    {
      "type": "h2",
      "heading": "2. Switch to a professional account (creator or business)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/03-slide-03.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "Instagram APIs work **only with professional accounts** (creator or business), not personal ones. Switching is free, takes a minute, and can be undone."
    },
    {
      "type": "list",
      "items": [
        "Open the Instagram app and tap your profile picture.",
        "Tap the menu ☰ at the top right (Settings and activity).",
        "In the \"For professionals\" section, tap **Account type and tools**.",
        "Tap **Switch to a professional account**.",
        "Choose the category that describes your business.",
        "Select **Creator** or **Business** and tap Next. Linking a Facebook Page is optional: you can skip it."
      ]
    },
    {
      "type": "table",
      "headers": [
        "Account type",
        "Who it’s for",
        "With Claude"
      ],
      "rows": [
        [
          "Business",
          "Stores, local businesses, brands, services",
          "Works"
        ],
        [
          "Creator",
          "Professionals, personal brands, artists",
          "Works"
        ],
        [
          "Personal",
          "Private use",
          "It doesn't work"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Warning:** if your account is private, make it public and all pending follow requests will be accepted. You can switch back to a personal account anytime, but you’ll lose stats and pro tools."
    },
    {
      "type": "h2",
      "heading": "3. Connect Claude to Composio and Composio to Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/04-slide-04.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "A **connector** (or MCP) is a link that gives Claude new tools. Composio provides a single address to paste into Claude: from there Claude can use Instagram and any other apps you choose to connect."
    },
    {
      "type": "list",
      "items": [
        "Open [claude.ai](https://claude.ai/) or Claude Desktop and go to **Customize → Connectors**.",
        "Click **+** and then **Add custom connector**.",
        "Enter **Composio** as the name and paste the URL below, then click Add.",
        "A browser opens: sign in (or register) to Composio and authorize the connection.",
        "Return to chat and type: \"Connect my Instagram account via Composio\". Claude will give you a link: open it, log into Instagram and grant the requested permissions.",
        "Test it with the first prompt from chapter 5: Claude must read your profile name."
      ]
    },
    {
      "type": "code",
      "content": "https://connect.composio.dev/mcp"
    },
    {
      "type": "callout",
      "content": "**Shortcut:** on the page [composio.dev/claude](https://composio.dev/claude) there’s an \"Add to Claude\" button that opens the connector settings with the URL pre‑filled."
    },
    {
      "type": "h3",
      "heading": "If Claude doesn’t use the connector",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "in the chat click **+** → Connectors and make sure Composio is active;",
        "in the prompt explicitly write \"use Composio\";",
        "if Claude says it can’t reply to comments, redo the connection and grant all permissions: without comment‑management permission those actions won’t work;",
        "Team or Enterprise plan: the connector is added first by the organization owner, then each user connects from their own account."
      ]
    },
    {
      "type": "h3",
      "heading": "Using Claude Code? One single command",
      "content": ""
    },
    {
      "type": "code",
      "content": "# from the terminal\nclaude mcp add --transport http composio https://connect.composio.dev/mcp\n\n# then inside Claude Code: /mcp → Composio → authenticate in the browser\n/mcp"
    },
    {
      "type": "callout",
      "content": "**Security:** Anthropic notes that custom connectors aren’t verified by Anthropic: connect only services you trust, review granted permissions and use “Always allow” only for read‑only actions. For publishing, let Claude ask for confirmation each time;"
    },
    {
      "type": "h2",
      "heading": "4. What Claude can do on your Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/05-slide-05.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "Composio offers **more than 30 Instagram actions** (the video showed 29; the count grows with updates). With Composio Connect Claude doesn’t see them all at once: it searches and uses them as needed, so be clear about what you want;"
    },
    {
      "type": "table",
      "headers": [
        "Area",
        "What Claude can do",
        "Things to know"
      ],
      "rows": [
        [
          "Publication",
          "Posts with photos, carousels (2-10 items), reels and stories",
          "Publish in two steps: prepare the content, then publish it"
        ],
        [
          "Comments",
          "Read, reply, delete, enable or disable comments on a post",
          "Comment management permission required"
        ],
        [
          "Mentions",
          "Reply to those who mention you",
          ""
        ],
        [
          "Direct messages",
          "Read conversations, send text and images",
          "Only to people who have messaged you, usually within 24 hours of their message"
        ],
        [
          "Analytics",
          "Profile data and individual post metrics",
          "Some data isn’t available under 100 followers"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Important:** Instagram doesn’t have real post scheduling via API. If you say “publish tomorrow at 6 pm”, Claude must be active then (e.g., with Claude’s scheduled tasks if your plan includes them). To schedule reliably use a dedicated tool (see the Bonus)."
    },
    {
      "type": "h2",
      "heading": "5. Prompts that work (copy‑paste)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/06-slide-06.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "Copy the prompt, replace the bracketed parts and paste it into Claude with Composio active. All publishing prompts ask for a preview first: keep this habit."
    },
    {
      "type": "h3",
      "heading": "Connection and check",
      "content": ""
    },
    {
      "type": "code",
      "content": "Use Composio and check my Instagram account: tell me the username, follower count, the last 5 posts with date and number of likes and comments, and how many posts I can still publish in the next 24 hours. Don't publish anything."
    },
    {
      "type": "paragraph",
      "content": "Make sure the connection works, risk‑free."
    },
    {
      "type": "h3",
      "heading": "Publish",
      "content": ""
    },
    {
      "type": "code",
      "content": "Prepare an Instagram post with this photo: [PUBLIC LINK TO THE PHOTO .jpg]. Topic: [TOPIC]. Write a caption for [YOUR IDEAL CUSTOMER] with: a first line that sparks curiosity, 3 useful sentences, an invitation to comment [WORD] and at most 5 relevant hashtags. Show me the preview and publish only when I write \"OK publish\"."
    },
    {
      "type": "paragraph",
      "content": "It’s the base prompt: you review the text, Claude does the rest."
    },
    {
      "type": "code",
      "content": "Create an Instagram carousel with these images, in this order: [LINK 1], [LINK 2], [LINK 3]. Theme: [THEME]. Write a caption that summarizes the carousel and invites people to save it. Before publishing, show me the image order and the text."
    },
    {
      "type": "paragraph",
      "content": "Carousels are the most saved format: Claude assembles them for you."
    },
    {
      "type": "code",
      "content": "Publish this video as a Reel: [PUBLIC LINK TO THE VIDEO .mp4]. Write a caption with the keyword [KEYWORD] in the first line, a question for the comments and 3-5 hashtags. The content [IS / IS NOT] created with AI: if it is, flag it as AI-generated content. Show me everything before publishing."
    },
    {
      "type": "paragraph",
      "content": "Remind Claude to add the AI label when needed."
    },
    {
      "type": "code",
      "content": "Publish this image as a story: [PUBLIC LINK .jpg]. Then tell me whether it was published correctly."
    },
    {
      "type": "paragraph",
      "content": "Stories via API can’t have stickers: use the app for links and polls."
    },
    {
      "type": "h3",
      "heading": "Planning content",
      "content": ""
    },
    {
      "type": "code",
      "content": "Analyze my last 20 Instagram posts and tell me which topics and formats got the most engagement. Then propose a 7-day editorial plan for [MY BUSINESS] in [CITY]: for each day, format (reel, carousel, photo or story), idea, first line of the caption and recommended time based on my data. Don't publish anything."
    },
    {
      "type": "paragraph",
      "content": "Start with your numbers, not random ideas."
    },
    {
      "type": "h3",
      "heading": "Comments and messages",
      "content": ""
    },
    {
      "type": "code",
      "content": "Read the comments on the last 3 posts and sort them into: questions, compliments, criticism and spam. For questions and compliments write a short, friendly reply in my tone ([DESCRIBE YOUR TONE: e.g. direct, friendly, informal]). Show me the comment → reply list and reply only to the ones I approve. Don't delete anything without asking me."
    },
    {
      "type": "paragraph",
      "content": "Reply to everyone in minutes, without cold auto‑responses."
    },
    {
      "type": "code",
      "content": "Check the unread direct messages. Give me a summary of who wrote and what they ask, flag possible quote requests and prepare a draft reply for each one. Don't send anything without my confirmation."
    },
    {
      "type": "paragraph",
      "content": "You don’t lose customers who DM you."
    },
    {
      "type": "h3",
      "heading": "Stats and reports",
      "content": ""
    },
    {
      "type": "code",
      "content": "Give me the Instagram report for the last 7 days: reach, interactions, new followers, the 3 best and 3 worst posts with the likely reason. Close with 3 concrete actions for next week. Write it in a simple way, as if explaining it to a business owner who is not a social media expert."
    },
    {
      "type": "paragraph",
      "content": "Every Monday you know what works, in 2 minutes."
    },
    {
      "type": "code",
      "content": "Take my post with the most engagement from the last 3 months and propose 3 ways to reuse it: a carousel, a spoken reel (with the script to read) and a story. Don't publish: I only want the drafts."
    },
    {
      "type": "paragraph",
      "content": "You multiply content that already worked."
    },
    {
      "type": "h2",
      "heading": "6. Limits to know (and Meta’s rules)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/07-slide-07.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude uses Instagram’s official API, so it shares Meta’s publishing limits. Knowing this saves wasted attempts. Remember: use Claude to work smarter, not harder. Fewer but useful posts, genuine comment replies and a steady rhythm please the algorithm and shield you from limits."
    },
    {
      "type": "table",
      "headers": [
        "What",
        "Via Claude",
        "Note"
      ],
      "rows": [
        [
          "Photo",
          "Yes",
          "JPG only, up to 8 MB, from a public link"
        ],
        [
          "Reel",
          "Yes",
          "MP4 or MOV, from 3 seconds to 15 minutes, 9:16 format recommended"
        ],
        [
          "Stories",
          "Yes",
          "No stickers (link, polls, location)"
        ],
        [
          "Carousels",
          "Yes",
          "Elements are cropped like the first one"
        ],
        [
          "Collaborators",
          "Yes",
          "Up to 3 per post, reel or carousel"
        ],
        [
          "Music from Instagram's library",
          "No",
          "Only the video's original audio"
        ],
        [
          "Product filters and tags",
          "No",
          "Do it in the app"
        ],
        [
          "Schedule a post",
          "No (native)",
          "Requires a dedicated tool or a planned activity"
        ],
        [
          "Quantity",
          "Limited",
          "50 posts per 24 hours (Meta lists 50 or 100 on different pages: the actual limit is checked via the specific action)"
        ],
        [
          "Caption",
          "Yes",
          "Maximum 2,200 characters, 30 hashtags and 20 mentions"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Public link:** Instagram downloads the file from the link you provide. The link must open the file directly (often ends with .jpg or .mp4), not a preview page: regular Google Drive sharing links usually don’t work. Use your site or an image/video hosting service."
    },
    {
      "type": "h3",
      "heading": "Meta rules to follow",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**AI content:** photorealistic videos and realistic audio created or edited with AI must be labeled as “AI content”, otherwise you risk penalties ([Instagram guide](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT));",
        "**No spam:** posting or interacting automatically at very high frequencies, or with repetitive content, can lead to profile restrictions ([community spam standards](https://transparency.meta.com/it-it/policies/community-standards/spam/));",
        "**Messages:** you can DM only those who messaged you first; the standard reply window is 24 hours;",
        "**Private reply to a comment:** one message, within 7 days of the comment;",
        "**No bought likes or followers**, not even “automatically”."
      ]
    },
    {
      "type": "h2",
      "heading": "Bonus: alternatives to Composio and resources for Claude Code",
      "content": "Composio is the most flexible option, but not the only one. If you mainly need to **schedule** posts, these services have a Claude connector and a real calendar."
    },
    {
      "type": "table",
      "headers": [
        "Service",
        "What it does with Instagram",
        "Price (October 2026)",
        "How to connect it"
      ],
      "rows": [
        [
          "[Metricool](https://claude.com/connectors/metricool-social-media-management)",
          "Schedule posts, carousels and reels; analytics across multiple socials",
          "Works also with Metricool's free plan",
          "Connector in Claude's directory, verified by Anthropic"
        ],
        [
          "[Buffer](https://developers.buffer.com/guides/integrations/claude.html)",
          "Create and schedule posts on Instagram and other socials",
          "Depends on the Buffer plan (to be confirmed)",
          "Customize → Connectors → search \"Buffer\""
        ],
        [
          "[Zernio](https://zernio.com/instagram-mcp)",
          "Posts, carousels, reels, stories, comments, DMs and analytics",
          "Free MCP; 2 free Instagram accounts, then $6/month per account",
          "Connector custom: https://mcp.zernio.com/mcp"
        ],
        [
          "[Meta Ads MCP](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview)",
          "Only ad campaigns, no organic posts",
          "To be checked",
          "Official Meta connector: https://mcp.facebook.com/ads"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "For those using Claude Code",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code MCP Documentation](https://code.claude.com/docs/en/mcp): how to add, authenticate and manage connectors (claude mcp add and /mcp commands);",
        "[Composio Connect](https://docs.composio.dev/docs/composio-connect): the unique URL and Composio plugin for Claude Code and other agents;",
        "[Composio Instagram Tools](https://docs.composio.dev/toolkits/instagram): full list of actions, handy for writing precise prompts;",
        "[Meta Publishing Guide](https://developers.facebook.com/docs/instagram-platform/content-publishing): updated formats, sizes and limits."
      ]
    },
    {
      "type": "code",
      "content": "Every Monday morning: use Composio, read last week's Instagram stats, write the report in 10 lines with 3 recommended actions and prepare 3 post drafts for the week (format, text, image idea). Save everything in a document and don't publish anything."
    },
    {
      "type": "paragraph",
      "content": "Use as a scheduled task in Claude or Claude Code: weekly reports and drafts ready."
    },
    {
      "type": "h2",
      "heading": "7. Best practices and Marketizzati support",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/08-slide-08.webp",
      "alt": "Practical guide: Claude working on your Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude is a great social assistant, but strategy stays yours: audience, product, desired action. Clear goals let AI save you hours weekly without losing your voice."
    },
    {
      "type": "h3",
      "heading": "When you might need professional support",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "You want anyone who comments a word to automatically receive the resource via DM;",
        "You post little because you don’t have time to create content;",
        "You have many messages and comments and risk missing quote requests;",
        "You want to connect Instagram to WhatsApp, CRM, and sales funnels;",
        "You want an AI agent with Claude built around your business."
      ]
    },
    {
      "type": "h3",
      "heading": "How can we help you",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Instagram automations: comment → DM with the resource, replies and lead capture",
        "Content, reels and images created with AI",
        "AI agents with Claude for social, clients and back‑office",
        "Funnels, WhatsApp and CRM linked",
        "Training for you and your team"
      ]
    },
    {
      "type": "cta",
      "heading": "Want a discussion about your case?",
      "content": "Message me on WhatsApp, tell me what you sell and send your Instagram profile link: I’ll tell you what to automate first and how."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF:** [Download PDF](/guide/claude-per-instagram.pdf) (PDF in Italian)"
    }
  ]
}

export default post
