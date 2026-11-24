import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "codex-dentro-claude-code",
  "title": "Codex inside Claude Code, two AI agents in one chat",
  "description": "The promised guide in the video: what is the official OpenAI plugin that brings Codex into Claude Code, what you need, the 4 install commands…",
  "date": "2026-10-26",
  "readTime": 12,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Practical guide",
    "Codex inside Claude Code",
    "two AI agents in one chat",
    "The promised guide in the video",
    "what is the official OpenAI plugin that brings Codex into Claude Code",
    "what you need"
  ],
  "image": "/images/blog/covers/codex-dentro-claude-code-wide.en.webp",
  "imageTall": "/images/blog/covers/codex-dentro-claude-code-tall.en.webp",
  "videoPreview": "/videos/preview/codex-dentro-claude-code.mp4",
  "imageAlt": "The official OpenAI plugin that runs Codex inside Claude Code: installation, commands, ready prompts, limits and costs",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/01-slide-01.webp",
      "alt": "The official OpenAI plugin that runs Codex inside Claude Code: installation, commands, ready prompts, limits and costs"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find in this guide",
      "content": ""
    },
    {
      "type": "intro",
      "content": "If you already pay for Claude and ChatGPT, you probably use them in two separate windows. With the **Codex plugin for Claude Code**, released by OpenAI as open‑source, you can call **Codex** (OpenAI’s programming agent) directly from the **Claude Code** chat: Claude writes, Codex checks or takes over a task, and you stay in the same conversation. Here are all the video commands, verified against the official docs, plus the ones omitted in the video."
    },
    {
      "type": "h3",
      "heading": "In this guide you’ll learn to:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "understand what the plugin does and when it makes sense to use it;",
        "verify in 2 minutes that you have everything needed (plans, software, operating system);",
        "install it with the 4 commands from the video and link your ChatGPT account;",
        "use /codex:review, /codex:rescue and other commands, with ready‑to‑copy prompts;",
        "keep limits, costs and security under control;",
        "solve the most common issues on your own."
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** **/codex:review checks, /codex:rescue acts.** Review never touches your files; rescue can modify them. Before assigning a task to Codex, save your work with Git (a commit) so you can always revert."
    },
    {
      "type": "cta",
      "heading": "Want a ready‑configured AI agent team?",
      "content": "If you want to use Claude Code and Codex on your projects (website, automations, ERP) without spending hours on setup, message me on WhatsApp: we’ll see where to start together."
    },
    {
      "type": "h3",
      "heading": "Official links",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Codex Plugin for Claude Code (GitHub, OpenAI)](https://github.com/openai/codex-plugin-cc)",
        "[Claude Code – install plugin and marketplace](https://code.claude.com/docs/en/discover-plugins)",
        "[Claude Code – Desktop app](https://code.claude.com/docs/en/desktop)",
        "[Claude Code – requirements and installation](https://code.claude.com/docs/en/setup)",
        "[Codex CLI - installation](https://learn.chatgpt.com/docs/codex/cli)",
        "[Codex - login with ChatGPT or API key](https://learn.chatgpt.com/docs/auth)",
        "[Codex - pricing and limits](https://learn.chatgpt.com/docs/pricing)",
        "[Codex with your ChatGPT plan (help center)](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)",
        "[Node.js - download](https://nodejs.org/en/download)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. What is the Codex plugin for Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/02-slide-02.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "**What is the Codex plugin for Claude Code?** A free open‑source (Apache 2.0) extension released by OpenAI on 30 Mar 2026 in **openai/codex-plugin-cc**, adding **/codex:…** commands. It uses the installed **Codex CLI** with the same account and project folder, making Claude Code the lead and Codex a second agent you can call."
    },
    {
      "type": "table",
      "headers": [
        "Who",
        "What is",
        "Role in the team"
      ],
      "rows": [
        [
          "**Claude Code**",
          "Anthropic's programming agent (Desktop app, terminal, VS Code)",
          "the chat you work in: writes, edits, coordinates"
        ],
        [
          "**Codex**",
          "OpenAI's programming agent, included in ChatGPT plans",
          "second opinion: reviews code or takes on a task"
        ],
        [
          "**The plugin**",
          "the official OpenAI \"bridge\" (version 1.0.6, July 2026)",
          "adds /codex:… commands and a sub‑agent called codex:codex-rescue"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**When it makes sense for a founder:** **second opinion** before launching a site or automation; **unlock** when Claude loops on an error; **save** Claude’s limits by delegating long tasks to Codex; **security check** on AI‑written code."
    },
    {
      "type": "h2",
      "heading": "2. What you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/03-slide-03.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "The plugin is free, but you need both \"brains\": a Claude plan that includes Claude Code and a ChatGPT account for Codex. Prices checked October 2026 on official pages, in USD, tax excluded."
    },
    {
      "type": "table",
      "headers": [
        "Requirement",
        "Detail",
        "Cost"
      ],
      "rows": [
        [
          "**Claude Code**",
          "Claude Desktop app (Code tab), terminal or VS Code. Claude's Free plan **does not** include Claude Code",
          "Claude Pro $17/month (annual) or $20 monthly; Max from $100"
        ],
        [
          "**ChatGPT Account** or OpenAI API key",
          "Codex is included in ChatGPT plans, even Free and Go; with the API key you pay per use",
          "Free $0, Go $8, Plus $20, Pro from $100 per month"
        ],
        [
          "**Node.js 18.18 or later**",
          "required for the plugin to work (and includes npm)",
          "free, from nodejs.org"
        ],
        [
          "**Codex CLI**",
          "if missing, install it with /codex:setup at step 4",
          "free"
        ],
        [
          "**Operating system**",
          "Windows 10 1809+ (preferably Windows 11), macOS 13+, Ubuntu 20.04+",
          "-"
        ],
        [
          "**Git** (recommended)",
          "/codex:review works on changes recorded by Git; on Windows install Git for Windows",
          "free, from git-scm.com"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Important:** in the video I say it also works with ChatGPT **Free** plan, as OpenAI states. However Codex pricing page lists only a base model for Free and Go \"in the desktop app, subject to availability\", while the CLI appears from **Plus** onward. Try Free, but expect low limits: for regular use you need Plus."
    },
    {
      "type": "h2",
      "heading": "3. Installation: the 4 commands from the video",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/04-slide-04.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "Open **Claude Code** (Desktop app, **Code** tab) and open your project folder. In the chat type these commands **one by one**, waiting for each to finish. They are copied from OpenAI’s official README: type them exactly as shown, all lowercase."
    },
    {
      "type": "code",
      "content": "# 1. Add the OpenAI marketplace (the \"store\" the plugin comes from)\n/plugin marketplace add openai/codex-plugin-cc\n# 2. Install the \"codex\" plugin from the \"openai-codex\" marketplace\n/plugin install codex@openai-codex\n# 3. Reload the plugins to activate it right away\n/reload-plugins\n# 4. Check that Codex is installed and connected\n/codex:setup\n# 5. If /codex:setup says you are not logged in:\n!codex login"
    },
    {
      "type": "list",
      "items": [
        "**/plugin marketplace add openai/codex-plugin-cc** – Claude Code replies \"Successfully added marketplace\".",
        "**/plugin install codex@openai-codex** – the plugin tab opens: choose **Install for you** (it will be available in all projects). Note: install the **plugin**, not the Codex program yet.",
        "**/reload-plugins** – activates the plugin without restarting. Claude Code often does this automatically after installation; re‑launching causes no harm.",
        "**/codex:setup** – checks that the Codex CLI is installed and linked. If missing and you have npm, it offers **Install Codex**: accept (runs npm install -g @openai/codex).",
        "**!codex login** – the exclamation runs the command from chat: a browser opens, choose **Sign in with ChatGPT** and log in. If Codex is already set up on that machine, you’re already logged in. Then run /codex:setup again to confirm."
      ]
    },
    {
      "type": "callout",
      "content": "**Desktop app note:** if a /plugin command returns \"isn't available in this environment\", do the same via the menu: **+** button next to chat → **Plugins** (or **Add plugins**) → add marketplace **openai/codex-plugin-cc** and install **codex**. Works in local and SSH sessions, not in cloud ones. From terminal you can also run **claude plugin marketplace add openai/codex-plugin-cc** followed by **claude plugin install codex@openai-codex**."
    },
    {
      "type": "paragraph",
      "content": "**Want to install Codex manually?** On Windows open PowerShell and run **powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"**; on macOS/Linux **curl -fsSL https://chatgpt.com/codex/install.sh | sh**; anywhere **npm install -g @openai/codex**. **How to know it’s ready:** type **/codex** to see the command list, and **/agents** will show sub‑agent **codex:codex-rescue**. First recommended test from the README: **/codex:review --background**, then **/codex:status** and **/codex:result**."
    },
    {
      "type": "h2",
      "heading": "4. All commands and what they do",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/05-slide-05.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "In the video I showed two: **/codex:rescue** to hand over a task and **/codex:review** to have the code checked without changing it. The plugin has six more, especially useful for long jobs. Almost all accept **--background** (runs in the background while you keep using Claude) and **--wait** (waits for the result)."
    },
    {
      "type": "table",
      "headers": [
        "Command",
        "What it does",
        "Modifies files?"
      ],
      "rows": [
        [
          "**/codex:review**",
          "Reviews code of unsaved changes or the branch against main with **--base main**. Same quality as the /review inside Codex",
          "**No**"
        ],
        [
          "**/codex:adversarial-review**",
          "Critical review: challenges choices, risks and alternatives. Accepts free‑form text after the options",
          "**No**"
        ],
        [
          "**/codex:rescue <task>**",
          "Hands a task to Codex: investigate a bug, try a fix, continue work. Options **--resume**, **--fresh**, **--model**, **--effort**",
          "**Yes, it can**"
        ],
        [
          "**/codex:status**",
          "shows current and recent Codex jobs in the project",
          "No"
        ],
        [
          "**/codex:result**",
          "displays the final result of a job and its ID to reopen it in Codex",
          "No"
        ],
        [
          "**/codex:cancel**",
          "stops a background job",
          "No"
        ],
        [
          "**/codex:transfer**",
          "converts a Claude Code conversation into a Codex session to continue with **codex resume <id>**",
          "No"
        ],
        [
          "**/codex:setup**",
          "checks installation and access; enables or disables the \"review gate\"",
          "No"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**You can also ask it in plain words:** write to Claude \"ask Codex to…\" and Claude hands the task to the sub‑agent codex:codex-rescue. **Reviews** only start when you launch them with the command: Claude can’t start them alone."
    },
    {
      "type": "h2",
      "heading": "5. Ready‑to‑copy prompts",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/06-slide-06.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "Paste them in Claude Code’s chat, in the project folder. You can write them in Italian. Replace the parts in square brackets. The most useful combo is the \"team\": **Codex reviews, Claude corrects, you approve**."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Pre‑save check",
      "content": "/codex:review"
    },
    {
      "type": "paragraph",
      "content": "Have Codex review the changes just made by Claude, without touching anything. If many, add --background then use /codex:status and /codex:result."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Claude corrects what Codex found",
      "content": "Read Codex’s review above. Split issues into critical, important, minor; explain them simply and fix only the critical ones. Then tell me which files you changed and what remains undecided."
    },
    {
      "type": "paragraph",
      "content": "It’s the video’s teamwork: one agent checks, the other fixes, you set the priorities."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Critical review before publishing",
      "content": "/codex:adversarial-review --base main checks if customer data, payments and passwords are secure and what happens if an external service doesn’t respond"
    },
    {
      "type": "paragraph",
      "content": "It doesn’t just look for typos: it challenges choices and risks like an external consultant would."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · When Claude gets stuck on an error",
      "content": "/codex:rescue find out why [the contact module doesn't send emails] and fix it with the smallest, safest change. Don't touch other files and explain the cause."
    },
    {
      "type": "paragraph",
      "content": "the \"rescue\" (save): a second agent with fresh eyes often spots what the first misses."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Investigation only, no changes",
      "content": "/codex:rescue analyze [the cart page that sometimes errors], find the most likely causes and suggest solutions, but do not modify any file."
    },
    {
      "type": "paragraph",
      "content": "when you want to understand before acting: rescue does exactly what you ask, so tell it clearly not to touch anything."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Long task in background",
      "content": "/codex:rescue --background [add automated tests to login and payment functions]"
    },
    {
      "type": "paragraph",
      "content": "Codex works while you continue with Claude. Check with /codex:status, read with /codex:result, stop it with /codex:cancel."
    },
    {
      "type": "code",
      "label": "PROMPT 7 · Second opinion on a plan",
      "content": "Before proceeding, ask Codex for a second opinion on this plan: [describe the change]. I want risks, simpler alternatives, and what could break. Then compare its answer with yours and tell me your recommendation."
    },
    {
      "type": "paragraph",
      "content": "two different company models think differently: comparison helps you decide better."
    },
    {
      "type": "code",
      "label": "PROMPT 8 · Continue work inside Codex",
      "content": "/codex:transfer"
    },
    {
      "type": "paragraph",
      "content": "move the whole conversation to Codex: copy the codex resume command it returns and continue in the Codex app or terminal. Requires a recent Codex version."
    },
    {
      "type": "h2",
      "heading": "6. Limits, costs and security",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/07-slide-07.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "Each /codex command:… uses **the limits of your ChatGPT plan** (same as Codex in the app, web, and terminal); Claude only consumes the small portion needed to pass the task and show you the result. With an API key you pay per use at OpenAI’s API rates. Limits depend on model, project size, and task duration: a review of many files consumes far more than a quick question."
    },
    {
      "type": "table",
      "headers": [
        "What to know",
        "Why it matters",
        "What to do"
      ],
      "rows": [
        [
          "**Shared limits**",
          "Codex in the plugin, app, and CLI pulls from the same package",
          "check usage at chatgpt.com/codex/settings/usage"
        ],
        [
          "**Review gate**",
          "with /codex:setup --enable-review-gate Codex reviews every Claude response: the README warns it can create a long loop and \"quickly consume limits\"",
          "enable it only if you follow the session; disable with --disable-review-gate"
        ],
        [
          "**Rescue edits files**",
          "Codex works in the same folder, on the same files as Claude",
          "make a commit first and review changes afterwards"
        ],
        [
          "**Two companies, two services**",
          "the code you send to Codex is forwarded to OpenAI, Claude’s code goes to Anthropic",
          "no passwords or client data in the code; use the .env file"
        ],
        [
          "**Long jobs**",
          "reviewing many files and complex tasks can take minutes",
          "use --background and /codex:status"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**What you really spend:** plugin €0. If you already have Claude Pro and ChatGPT Plus, **no extra cost**: you use the limits you already pay for. Starting from scratch, the recommended combo is Claude Pro + ChatGPT Plus, about $40/month (Oct 2026 prices, excl. VAT)."
    },
    {
      "type": "h2",
      "heading": "7. If something doesn’t work",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/08-slide-08.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "The first step is always **/codex:setup**: it tells you what’s missing. On Windows the plugin still has open issues on GitHub: if anything behaves oddly, update the plugin and Codex first."
    },
    {
      "type": "table",
      "headers": [
        "Problem",
        "Likely cause",
        "Solution"
      ],
      "rows": [
        [
          "**/codex commands don’t appear**",
          "plugin not active yet",
          "**/reload-plugins**, or close and reopen the session; check **/plugin** → Installed"
        ],
        [
          "**\"Marketplace not found\"** during installation",
          "step 1 is missing or there’s a typo",
          "rerun **/plugin marketplace add openai/codex-plugin-cc** and then install again"
        ],
        [
          "**/codex:setup: Codex not found**",
          "Codex CLI not installed or terminal needs to be reopened",
          "accept **Install Codex**, or run **npm install -g @openai/codex**, then reopen Claude Code"
        ],
        [
          "**npm not found**",
          "Node.js not installed or too old",
          "install Node.js LTS from nodejs.org (requires 18.18 or newer)"
        ],
        [
          "**Codex not authenticated**",
          "login not performed on this computer",
          "**!codex login**; check with **!codex login status**"
        ],
        [
          "**\"Limit reached\"**",
          "you've reached the limits of the ChatGPT plan",
          "wait for the reset, buy credits or upgrade to a higher plan"
        ],
        [
          "**/codex:review says there's nothing**",
          "no changes since the last commit, or folder without Git",
          "use **--base main** to review the branch; initialize Git in the project"
        ],
        [
          "**Old or faulty plugin**",
          "outdated version",
          "**/plugin marketplace update openai-codex** then /reload-plugins"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "8. Best practices and Marketizzati support",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/09-slide-09.webp",
      "alt": "Practical guide: Codex inside Claude Code, two AI agents in one chat"
    },
    {
      "type": "paragraph",
      "content": "Two agents are twice as effective only with **clear roles**: Claude Code builds, Codex checks or unlocks, you decide what enters the project. Three habits: one commit before each task, a review before publishing, corrections approved by you."
    },
    {
      "type": "h3",
      "heading": "When you might need professional support",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "you want to use Claude Code and Codex but don't know where to start with installation;",
        "you have AI‑generated projects that no one has ever reviewed;",
        "you want a workflow with automated reviews and clear rules for your team;"
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
        "Setup Claude Code, Codex and the plugin on your computers",
        "Code reviews and security checks with AI",
        "Automations and small software built with AI",
        "Training for you and your team"
      ]
    },
    {
      "type": "h3",
      "heading": "Reminder: commands to keep handy",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Command",
        "When",
        "What it does"
      ],
      "rows": [
        [
          "/plugin marketplace add openai/codex-plugin-cc",
          "once only",
          "adds the OpenAI marketplace"
        ],
        [
          "/plugin install codex@openai-codex + /reload-plugins",
          "once only",
          "install and activate the plugin"
        ],
        [
          "/codex:setup",
          "if something goes wrong",
          "check installation and access"
        ],
        [
          "!codex login",
          "if access is needed",
          "link your ChatGPT account"
        ],
        [
          "/codex:review",
          "before publishing",
          "review without changes"
        ],
        [
          "/codex:rescue <compito>",
          "when you need help",
          "hand over a task to Codex"
        ],
        [
          "/codex:status · /codex:result",
          "background work",
          "progress and outcome"
        ]
      ]
    },
    {
      "type": "cta",
      "heading": "Want a consultation about your case?",
      "content": "Message me on WhatsApp and tell me what you’re building with AI: I’ll show you how to set up Claude Code and Codex to truly work together, and which plan suits you best."
    },
    {
      "type": "callout",
      "content": "**Free PDF guide (PDF in Italian):** [Download the PDF](/guide/codex-dentro-claude-code.pdf)"
    }
  ]
}

export default post
