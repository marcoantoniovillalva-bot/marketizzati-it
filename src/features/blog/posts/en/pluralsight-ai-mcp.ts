import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "pluralsight-ai-mcp",
  "title": "Pluralsight AI MCP: business courses linked to your AI",
  "description": "How to connect Pluralsight to Claude Code, Codex and other AI tools to create training paths from business goals and measure the outcomes.",
  "date": "2026-10-20",
  "readTime": 9,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Practical guide",
    "Pluralsight AI MCP",
    "How to connect Pluralsight to Claude Code",
    "Codex and other AI tools to create training paths from business goals and measure the outcomes",
    "Pluralsight practical guide",
    "Pluralsight AI practice"
  ],
  "image": "/images/blog/covers/pluralsight-ai-mcp-wide.en.webp",
  "imageTall": "/images/blog/covers/pluralsight-ai-mcp-tall.en.webp",
  "videoPreview": "/videos/preview/pluralsight-ai-mcp.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7699552149348388129",
  "imageAlt": "Operational manual to connect Pluralsight to your AI, build training paths from a business goal and measure whether the training delivers results",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/01-slide-01.en.webp",
      "alt": "Operational manual to connect Pluralsight to your AI, build training paths from a business goal and measure whether the training delivers results"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find in this guide",
      "content": ""
    },
    {
      "type": "intro",
      "content": "On October 14, 2026 Pluralsight launched the **AI MCP**: a connector that brings courses, labs, analytics and skill data about your team straight into the AI platform your company already uses (Claude, ChatGPT, Copilot, Gemini, Cursor). This guide is aimed at entrepreneurs and managers: you don’t need to be a developer to know what to ask, who to ask, and how to read the results."
    },
    {
      "type": "h3",
      "heading": "In this guide you will learn to:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "understand what AI MCP really does and whether your company can use it;",
        "activate it for your Pluralsight plan without wasting time;",
        "connect it to **Claude Code** and learn what you need to know about **Codex**;",
        "turn a business goal (e.g., reduce code errors) into a training path for the team;",
        "measure whether the training improved tickets resolved, development times and productivity;",
        "use ready‑to‑copy prompts and adapt them."
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** the AI reads training data and suggests plans and reports. Decisions remain yours: Pluralsight itself warns that AI recommendations can be inaccurate and must be verified."
    },
    {
      "type": "cta",
      "heading": "Don't have time to set it up?",
      "content": "We’ll activate it for your team: MCP connection, integration with Jira or GitHub, and an initial impact report ready to present. Message me on WhatsApp and tell me how many people are on your team and which result you want to improve."
    },
    {
      "type": "h3",
      "heading": "Official and useful links",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Official Pluralsight AI MCP press release](https://www.pluralsight.com/newsroom/press-releases/pluralsight-launches-ai-mcp-bringing-expert-led-learning-into-ai)",
        "[Official (Help Center) AI MCP guide](https://help.pluralsight.com/hc/en-us/articles/54384284845972-Pluralsight-AI-MCP)",
        "[2026 news: AI MCP and Skill IQ Suite](https://www.pluralsight.com/resources/blog/news/2026-new-features-ai-mcp-skill-iq-suite)",
        "[Pluralsight AI page](https://www.pluralsight.com/ai)",
        "[Business plan pricing](https://www.pluralsight.com/businesses/pricing)",
        "[Claude Code - connect an MCP server](https://code.claude.com/docs/en/mcp)",
        "[Codex - connect an MCP server](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)",
        "[Pluralsight AI Terms of Use](https://legal.pluralsight.com/policies?name=pluralsight-artificial-intelligence-terms-of-use)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. What you need before starting",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/02-slide-02.en.webp",
      "alt": "Practical guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "AI MCP isn’t a download‑able app: it’s a feature of Pluralsight’s business plans that “turns on” inside your company’s AI tools. First, check these points."
    },
    {
      "type": "h3",
      "heading": "Quick check",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Pluralsight Team or Enterprise plan**: AI MCP isn’t available for individual plans. For business customers there’s no extra cost.",
        "**Corporate AI‑tool license**: you need your organization’s account (e.g., Claude Team/Enterprise, ChatGPT Enterprise). A personal subscription isn’t enough, as MCP appears only in tools linked to your Pluralsight plan.",
        "**Activation by your Pluralsight contact**: they enable the feature and send you the setup materials.",
        "**Manager role**: you’ll see analytics only for teams where you’re listed as manager.",
        "**Recommended**: Jira, GitHub or GitLab already linked to your AI, if you want to measure tickets and development time (chapter 5)."
      ]
    },
    {
      "type": "callout",
      "content": "**Strategic first choice:** write on a sheet a single measurable goal for the team (e.g., \"fewer bugs in production\", \"onboarding new developers in 30 days\"). The rest of the guide starts from there."
    },
    {
      "type": "h2",
      "heading": "2. Activate AI MCP for your company",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/03-slide-03.en.webp",
      "alt": "Practical guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Activation is done once, at the plan level: the admin cannot enable it for a single user, it’s enabled for the whole organization."
    },
    {
      "type": "h3",
      "heading": "Operational steps",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Write to your Pluralsight contact (account manager or business support) and request activation of **AI MCP** for your plan.",
        "If the plan was created before October 7 2026, an explicit opt‑in is required; for newer plans you still receive the materials from the contact.",
        "Receive the **setup materials**: they contain the MCP server address and access method. Keep them; they’re needed by every team member.",
        "The admin enables the feature for the entire plan.",
        "Each user connects MCP in their AI tool and accesses both Pluralsight and your company’s AI tool."
      ]
    },
    {
      "type": "callout",
      "content": "**Important:** the server address isn’t published online: it comes only with Pluralsight materials. Beware of guides that claim a “universal” address."
    },
    {
      "type": "h2",
      "heading": "3. Connect it to Claude Code (and what to know about Codex)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/04-slide-04.en.webp",
      "alt": "Practical Guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Claude Code is among the officially supported tools. The commands below follow Claude Code's official documentation: replace **<PLURALSIGHT_MCP_URL>** with the address found in the Pluralsight materials."
    },
    {
      "type": "h3",
      "heading": "Claude Code, step by step",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Open the terminal in the project folder (or anywhere if you add it for your user).",
        "Add the Pluralsight MCP server using the command below.",
        "Launch Claude Code and type **/mcp** to log into Pluralsight (if the server uses browser login).",
        "Check that it shows \"Connected\" with **claude mcp list**.",
        "Make the first request in Italian (you’ll find the prompts in chapter 4)."
      ]
    },
    {
      "type": "code",
      "content": "claude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --scope user\nclaude mcp list\n# se i materiali ti danno un token invece del login:\nclaude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --header \"Authorization: Bearer <TOKEN>\""
    },
    {
      "type": "h3",
      "heading": "What about Codex?",
      "content": "Currently OpenAI Codex **does not appear** in the official supported tools list. You can try connecting it with standard Codex commands, but the “tool linked to an enterprise plan” requirement may block it. If it fails, use Claude Code or ChatGPT Enterprise, which are supported."
    },
    {
      "type": "code",
      "content": "codex mcp add pluralsight --url <PLURALSIGHT_MCP_URL>\ncodex mcp login pluralsight\ncodex mcp list\n# oppure nel file ~/.codex/config.toml:\n[mcp_servers.pluralsight]\nurl = \"<PLURALSIGHT_MCP_URL>\""
    },
    {
      "type": "table",
      "headers": [
        "Tool",
        "Officially supported",
        "How to connect"
      ],
      "rows": [
        [
          "Claude (Chat, Code, Cowork)",
          "Yes",
          "Claude Code: claude mcp add. Chat/Cowork: from admin"
        ],
        [
          "Cursor",
          "Yes",
          "Cursor MCP Settings"
        ],
        [
          "GitHub Copilot / VS Code",
          "Yes",
          "VS Code MCP Configuration"
        ],
        [
          "ChatGPT (Enterprise)",
          "Yes",
          "Connectors, enabled by admin"
        ],
        [
          "Gemini Enterprise",
          "Yes",
          "Administration Console"
        ],
        [
          "Microsoft Copilot",
          "Yes",
          "Copilot Studio"
        ],
        [
          "OpenAI Codex",
          "Not listed",
          "codex mcp add (to be verified)"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Security:** connect only MCP servers you trust and do not store tokens or passwords in project files shared with others. Use the --scope user option to keep them only on your computer."
    },
    {
      "type": "h2",
      "heading": "4. From business goal to learning path",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/05-slide-05.en.webp",
      "alt": "Practical guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Here’s the real breakthrough: you no longer pick courses one by one. Give the AI a business goal and it builds a plan with courses, short videos, labs and quizzes, and assigns it to the team in a Pluralsight channel."
    },
    {
      "type": "table",
      "headers": [
        "If you want to achieve…",
        "What to ask the AI",
        "What to check"
      ],
      "rows": [
        [
          "Fewer code errors",
          "A plan for testing, code review and debugging",
          "Production bugs and rejected reviews"
        ],
        [
          "Faster onboarding",
          "A learning path for new hires on your stack",
          "Days to first independent release"
        ],
        [
          "More security",
          "Application security training",
          "Vulnerabilities found in checks"
        ],
        [
          "Cloud migration",
          "Cloud path and certifications",
          "Verified skills (Skill IQ Verified)"
        ]
      ]
    },
    {
      "type": "code",
      "content": "Il nostro obiettivo è ridurre i bug nel servizio pagamenti. Analizza il repository e crea un piano di formazione Pluralsight per il mio team, con corsi, laboratori e un test finale. Proponi la durata in settimane."
    },
    {
      "type": "paragraph",
      "content": "Starts from a concrete business outcome and gives you a ready‑to‑approve plan."
    },
    {
      "type": "code",
      "content": "Cosa dovrebbe studiare dopo il mio team su Pluralsight? Metti corsi, laboratori e valutazioni in un canale e assegnalo al team [NOME TEAM]."
    },
    {
      "type": "paragraph",
      "content": "Saves you from manually hunting content and keeps everything tracked in a channel."
    },
    {
      "type": "code",
      "content": "Trasforma gli errori emersi negli ultimi test e nelle ultime code review in un percorso Pluralsight mirato, una sezione per ogni tipo di errore."
    },
    {
      "type": "paragraph",
      "content": "Links training to real issues in your code, not generic courses."
    },
    {
      "type": "callout",
      "content": "**Note:** these prompts are examples built on scenarios described by Pluralsight. Adapt them with your team name, timeframe, and goal."
    },
    {
      "type": "h2",
      "heading": "5. Measure whether the training truly delivers",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/06-slide-06.en.webp",
      "alt": "Practical guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "That's why entrepreneurs find it useful: stop counting courses, focus on work improvement. Note: Pluralsight analytics track study and skills; **tickets and development times come from Jira, GitHub or GitLab**, which you must link to the same AI."
    },
    {
      "type": "table",
      "headers": [
        "Metric",
        "Source",
        "What to watch"
      ],
      "rows": [
        [
          "Study and practice hours",
          "Pluralsight Analytics",
          "Consistency over time, not spikes"
        ],
        [
          "Progress through the path",
          "Pluralsight Analytics (duration‑weighted)",
          "Who is stuck and for how long"
        ],
        [
          "Certified skills",
          "Skill IQ Verified",
          "Passed / not passed against expert threshold"
        ],
        [
          "Ticket closure time",
          "Jira (MCP connected)",
          "Before and after training"
        ],
        [
          "Commits and reviews",
          "GitHub or GitLab (MCP connected)",
          "Rejected reviews and merge times"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Skill IQ: the three levels",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Discovery**: ~15‑minute test to gauge the starting level (repeatable every 14 days).",
        "**Prep**: practice exams for certifications, with unlimited attempts.",
        "**Verified**: passed / not passed against an expert‑defined threshold; the most useful metric to demonstrate improvement."
      ]
    },
    {
      "type": "code",
      "content": "Usando Jira e GitLab, confronta il tempo medio di chiusura dei ticket e i commit del team [NOME TEAM] nei 60 giorni prima e nei 60 giorni dopo la formazione Pluralsight. Scrivi un report di una pagina con i numeri e 3 conclusioni."
    },
    {
      "type": "paragraph",
      "content": "It's the report you can bring to a meeting to decide whether to keep investing."
    },
    {
      "type": "callout",
      "content": "**Practical rule:** snapshot the numbers before starting training. Without a “before”, any “after” is just opinion."
    },
    {
      "type": "h2",
      "heading": "6. Monthly routine for the manager",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Week 1: pick a team goal and record the baseline numbers.",
        "Week 1: ask the AI for the training plan and post it in a channel.",
        "Week 2: check who’s stalled and ask the AI for a per‑person summary.",
        "Week 3: have those who finished a section take the Skill IQ test.",
        "Week 4: request the before/after report from Jira or GitLab and decide: continue, change or stop."
      ]
    },
    {
      "type": "h3",
      "heading": "Limits and security to know",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "there’s a daily request limit per user, plus your AI tool’s limits;",
        "the announcement mentions read‑only access, but the official guide says the MCP can also create channels and assign teams: always verify before confirming;",
        "AI recommendations must be validated by a human;",
        "data use is governed by the AI terms and Pluralsight’s privacy policy (link at the start)."
      ]
    },
    {
      "type": "h2",
      "heading": "7. Best practices and Marketizzati support",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/07-slide-07.en.webp",
      "alt": "Practical guide: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "The AI MCP cuts planning and measurement time dramatically. Value appears only when the goal is clear, baseline data are reliable, and tools (Pluralsight, Jira, GitHub, your AI) are well integrated."
    },
    {
      "type": "h3",
      "heading": "When you might need professional support",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "you don’t have time to set up MCP and AI tools for the whole team;",
        "you want to connect Jira or GitHub to measure real impact;",
        "you need to present a report to management on training ROI;",
        "you want to use AI to automate other business processes."
      ]
    },
    {
      "type": "h3",
      "heading": "How we can help",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "MCP and corporate AI tools setup",
        "Connecting Jira, GitHub and GitLab",
        "Training impact report",
        "Hands‑on team training on AI use",
        "Custom automations for your company"
      ]
    },
    {
      "type": "cta",
      "heading": "Want a discussion about your case?",
      "content": "Message me on WhatsApp, tell me how many people are on your team and which result you want to improve: I’ll suggest the first step."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF (PDF in Italian):** [Download the PDF](/guide/pluralsight-ai-mcp.pdf)"
    }
  ]
}

export default post
