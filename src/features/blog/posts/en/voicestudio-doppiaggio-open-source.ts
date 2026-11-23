import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "voicestudio-doppiaggio-open-source",
  "title": "VoiceStudio, the open‑source dubbing studio on your computer",
  "description": "The promised guide in the video: link to the official VoiceStudio repo, requirements, step‑by‑step install on Windows, macOS and Linux, first voice…",
  "date": "2026-10-27",
  "readTime": 11,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Practical guide",
    "VoiceStudio",
    "the open‑source dubbing studio on your computer",
    "The promised guide in the video",
    "link to the official VoiceStudio repository",
    "requirements"
  ],
  "image": "/images/blog/covers/voicestudio-doppiaggio-open-source-wide.webp",
  "imageTall": "/images/blog/covers/voicestudio-doppiaggio-open-source-tall.webp",
  "videoPreview": "/videos/preview/voicestudio-doppiaggio-open-source.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7701699199821253920",
  "imageAlt": "VoiceStudio, the open‑source, on‑premise alternative to ElevenLabs: link, requirements, installation, licenses and use cases",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/01-slide-01.webp",
      "alt": "VoiceStudio, the open‑source, on‑premise alternative to ElevenLabs: link, requirements, installation, licenses and use cases"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find in this guide",
      "content": ""
    },
    {
      "type": "intro",
      "content": "In the video I talked about **VoiceStudio**, the open‑source project that’s currently one of the most followed on GitHub: clone a voice, dub videos, transcribe audio, create audiobooks and connect to AI agents, **all on your computer**. Here’s what I promised: the repo link, the requirements and the installation guide, plus the things I didn’t have time to cover in the video—costs, licenses and how to use it in a company. All information verified on the official pages on 27 October 2026."
    },
    {
      "type": "h3",
      "heading": "In this guide you’ll learn how to:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "understand what VoiceStudio does and when it can replace a subscription like ElevenLabs;",
        "check in 2 minutes if your computer is suitable (8 GB RAM, 10 GB storage);",
        "install it on Windows, Mac or Linux and create the first voice;",
        "connect it to Claude Code, Codex or Cursor via API and MCP;",
        "learn the licenses, the app is free but the default voice model isn’t for commercial use;",
        "troubleshoot the most common issues yourself.;"
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** **the app is free even for work, voice models have their own licenses.** The default model (OmniVoice) has a **non‑commercial** license (CC‑BY‑NC). Feel free to try it; before publishing company content choose a model with a suitable license or get advice. And only clone voices of people who gave you consent."
    },
    {
      "type": "cta",
      "heading": "Want a corporate voice under your control?",
      "content": "If you want to use VoiceStudio for courses, videos or voice agents without spending hours on setup, models and licenses, message me on WhatsApp: we’ll see where to start together."
    },
    {
      "type": "h3",
      "heading": "Official links (the promised one in the video is the first)",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[VoiceStudio GitHub Repository (debpalash/VoiceStudio)](https://github.com/debpalash/VoiceStudio)",
        "[Download: latest version (Windows, Mac, Linux, Android)](https://github.com/debpalash/VoiceStudio/releases/latest)",
        "[Official website and hardware requirements](https://voicestudio.sh/download)",
        "[Installation guide for Windows](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/windows.md)",
        "[Installation guide for macOS](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/macos.md)",
        "[Installation guide for Linux](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/linux.md)",
        "[Troubleshooting](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/troubleshooting.md)",
        "[Connect agents with MCP](https://voicestudio.sh/docs/mcp)",
        "[License in plain language](https://voicestudio.sh/license)",
        "[Default OmniVoice model and its license (Hugging Face)](https://huggingface.co/k2-fsa/OmniVoice)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. What is VoiceStudio and what can it do",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/02-slide-02.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your PC"
    },
    {
      "type": "paragraph",
      "content": "**What is VoiceStudio?** It’s a **open‑source** desktop app (AGPL‑3.0) that runs entirely locally, a home‑grown alternative to ElevenLabs. Created by Palash Debnath, formerly **OmniVoice Studio**, it had about **90,000 GitHub stars** on 27 Oct 2026, with version **0.5.7** released the day before. No account needed, no usage counter: it goes online only to download a model or an update."
    },
    {
      "type": "table",
      "headers": [
        "Feature",
        "What it does",
        "Company example"
      ],
      "rows": [
        [
          "**Voice cloning**",
          "copies a voice from a short clean recording (the site says usually 3 seconds are enough)",
          "your voice for course lessons"
        ],
        [
          "**Voice design**",
          "create a new voice from a description: gender, age, accent, tone",
          "a brand voice for videos"
        ],
        [
          "**Video dubbing**",
          "transcribes, translates and re-dubs each person with their own voice and original timing; also exports subtitles",
          "the same video in English or Spanish"
        ],
        [
          "**Dictation and transcription**",
          "from audio to text, also with a widget for dictation",
          "meeting minutes, texts from voice recordings"
        ],
        [
          "**Audiobooks and stories**",
          "long texts read in chapters, with queued jobs",
          "an ebook turned into audio"
        ],
        [
          "**API and MCP**",
          "local OpenAI‑compatible API and MCP server for AI agents",
          "Claude Code that generates audio on its own"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Note:** the project claims **646 languages**, Italian included. Final quality depends on the chosen model and your computer: always test with your texts before deciding."
    },
    {
      "type": "h2",
      "heading": "2. Requirements: what you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/03-slide-03.webp",
      "alt": "Practical guide: VoiceStudio, the open-source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "In the video I said \"minimum 8 GB RAM\": that's the check the app performs during installation. The site, however, recommends **16 GB or more** for comfortable work, especially with dubbing. The graphics card (GPU) is not required: without it, the app runs on the CPU, just slower."
    },
    {
      "type": "table",
      "headers": [
        "Requirement",
        "Detail",
        "Notes"
      ],
      "rows": [
        [
          "**Memory (RAM)**",
          "8 GB minimum, 16 GB or more recommended",
          "with 8 GB long jobs may stall"
        ],
        [
          "**Disk space**",
          "about 10 GB free for app, Python environment and models",
          "without an NVIDIA GPU about 5 GB is enough"
        ],
        [
          "**Windows**",
          "Windows 10 or 11, 64‑bit (x64)",
          "Windows on ARM: experimental"
        ],
        [
          "**Mac**",
          "Apple Silicon (M1‑M5) with macOS 13.3 or later",
          "**Mac Intel: not supported** for the local engine"
        ],
        [
          "**Linux**",
          "x86_64 (AppImage, .deb, Snap) or Docker",
          "AppImage requires glibc 2.39 or newer"
        ],
        [
          "**GPU (optional)**",
          "NVIDIA with CUDA on Windows and Linux; automatic Metal on Apple Silicon Macs",
          "4 GB of video memory is enough to get started"
        ],
        [
          "**Extra programs**",
          "none: Python, FFmpeg and models are downloaded by the app on first launch",
          "an internet connection is required for the initial downloads"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "3. Step‑by‑step installation",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/04-slide-04.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "The easiest way is to download the installer from the **Releases** page on GitHub (no account, no payment). The latest verified version is **0.5.7 from October 26, 2026**: on Windows the file is called **VoiceStudio-0.5.7-win-x64.exe** (about 222 MB), on Mac **VoiceStudio-0.5.7-mac-arm64.dmg** (about 281 MB)."
    },
    {
      "type": "list",
      "items": [
        "**Download** the installer for your system from [github.com/debpalash/VoiceStudio/releases/latest](https://github.com/debpalash/VoiceStudio/releases/latest). Download only from here or voicestudio.sh, never from copy sites.",
        "**Install.** On Windows open the .exe file: install for your user, no administrator rights needed. On Mac open the .dmg and drag the app to Applications; on first launch right‑click → **Open** to confirm.",
        "**First launch.** The wizard checks the computer (RAM, disk, GPU) and downloads Python, FFmpeg and required components. It may take several minutes: keep the computer on and connected.",
        "**Voice model.** When the app asks, install the model. Models without a clearly commercial license, including the default one, require you to **accept the license** once in the Model Catalog.",
        "**Final check.** In **Settings → About → Run self-check** the app verifies the device, FFmpeg, disk space, RAM and installed engines."
      ]
    },
    {
      "type": "code",
      "content": "# In alternativa, installazione con un comando\n# Windows (PowerShell, non come amministratore):\nirm https://voicestudio.sh/install.ps1 | iex\n# macOS (Apple Silicon) e Linux (Terminale):\ncurl -fsSL https://voicestudio.sh/install | sh\n# Server o computer con Docker (interfaccia web su http://localhost:3900):\ndocker run -d --pull always --name omnivoice -p 127.0.0.1:3900:3900 -v omnivoice-data:/app/omnivoice_data palashdeb/omnivoice-studio:latest"
    },
    {
      "type": "code",
      "label": "PROMPT · Have your AI agent install it (Claude Code, Codex, Cursor)",
      "content": "Install the VoiceStudio Electron app on this device and verify it works, following https://github.com/debpalash/VoiceStudio/blob/main/docs/install/agent.md"
    },
    {
      "type": "paragraph",
      "content": "It's the official README prompt: the agent checks your hardware, asks permission before downloading a model (size and license) and finally generates an audio sample. You can add \"reply in Italian\"."
    },
    {
      "type": "h2",
      "heading": "4. The first voice in 5 minutes",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/05-slide-05.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "Open **Voice cloning**, choose a sample voice or add a clean recording of the voice to copy, type the text and hit generate. If the model is missing, the app will suggest installing it. Alternatively use **Voice design**: describe the voice in words (e.g., \"female, adult, warm and calm tone\") and VoiceStudio creates it without recordings."
    },
    {
      "type": "list",
      "items": [
        "**Reference recording:** quiet room, no music, a single speaker, good microphone. Better a few clean seconds than a noisy minute.",
        "**Consent:** clone only your own voice or that of someone who gave you written permission. Impersonating someone is prohibited by the project’s terms of use (and by law).",
        "**Test before publishing:** listen to proper names, numbers and foreign words; if needed adjust pronunciation in the text."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Connect it to AI agents via API and MCP",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/06-slide-06.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "**What is MCP?** The Model Context Protocol is the standard that an AI agent like Claude Code uses to access external tools. When VoiceStudio is open, its MCP server is already running at **http://localhost:3900/mcp/** (trailing slash), with no keys required. From agents you can generate speech, clone or design a voice, transcribe, and view available voices. Developers also have a **local OpenAI‑compatible API** on port 3900."
    },
    {
      "type": "code",
      "content": "# Claude Code: aggiunge VoiceStudio come server MCP (con l'app VoiceStudio aperta)\nclaude mcp add --transport http voicestudio http://localhost:3900/mcp/"
    },
    {
      "type": "code",
      "label": "PROMPT · Audio from text, directly from the agent",
      "content": "Use VoiceStudio to read this text with the voice [profile name] and save the audio in the project folder: [paste the text]"
    },
    {
      "type": "paragraph",
      "content": "the agent uses VoiceStudio’s generate_speech tool: no copy‑paste between programs, and the audio never leaves your computer."
    },
    {
      "type": "callout",
      "content": "**Important:** the MCP server **has no password**: never expose it to the internet. To use it from another computer on the network go to **Settings → Sharing → Local network** and set a PIN, only on trusted networks. The claude mcp add command above follows Claude Code’s standard syntax; alternatively the app exports ready‑made configurations in the **Integrations** section (Claude Code, Cursor, Codex CLI)."
    },
    {
      "type": "h2",
      "heading": "6. How to use it in your company",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/07-slide-07.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "The real advantage, as I say in the video, is having “a dubbing studio inside the company”: audio, transcripts and voice prints stay on your computer and aren’t uploaded to an external service. That’s how it can save an entrepreneur time."
    },
    {
      "type": "table",
      "headers": [
        "Use case",
        "How",
        "Watch out for"
      ],
      "rows": [
        [
          "**Courses and training**",
          "record a few seconds of your voice and generate lessons from the text",
          "model license if the course is paid"
        ],
        [
          "**Videos for social**",
          "voice‑over for reels and tutorials, also in multiple versions",
          "always review pronunciation and pacing"
        ],
        [
          "**Foreign markets**",
          "dub the same video in other languages, with subtitles",
          "have a native speaker check the translation"
        ],
        [
          "**Voice agents and assistants**",
          "local voice and transcript linked to your agent via API or MCP",
          "customer data stays in-house: a privacy advantage"
        ],
        [
          "**Meetings and voice notes**",
          "audio and voice transcription to text for archiving",
          "inform participants that you are recording"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "7. How much does it cost: VoiceStudio or ElevenLabs?",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/08-slide-08.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "In the video I say “potentially lower recurring costs”: the ‘potentially’ is important. VoiceStudio open source costs **$0**, but you pay for hardware, setup time and, for some uses, licenses. Prices captured in October 2026 on the official pages, in dollars, taxes excluded."
    },
    {
      "type": "table",
      "headers": [
        "Option",
        "Price",
        "What’s included"
      ],
      "rows": [
        [
          "**VoiceStudio open source**",
          "$0",
          "all app features, also usable at work; runs on your computer"
        ],
        [
          "**VoiceStudio Pro**",
          "99 $ per user/year, or 299 $ one‑time (Lifetime)",
          "closed build with commercial license “to show to the client”, 3 devices, preview features; does not cover model licenses"
        ],
        [
          "**ElevenLabs Free**",
          "0 $ (10,000 credits per month)",
          "no commercial license: must credit ElevenLabs"
        ],
        [
          "**ElevenLabs Starter**",
          "6 $ per month",
          "commercial license, instant cloning, dubbing"
        ],
        [
          "**ElevenLabs Creator / Pro**",
          "22 $ / 99 $ per month",
          "professional cloning, more credits, higher‑quality audio"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**When it really pays off:** for massive audio production (courses, dubbing, many variants) or confidential data, a local solution can pay off. For a few minutes monthly, top quality without hassle or ready phone voice agents, a cloud service like ElevenLabs is more convenient. Test on your texts; no official independent Italian test (**to verify** case‑by‑case)."
    },
    {
      "type": "h2",
      "heading": "8. Licenses, limits and common issues",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/09-slide-09.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio on your computer"
    },
    {
      "type": "paragraph",
      "content": "**App:** AGPL-3.0 license. You can use it at work and earn without doing anything. Obligations only trigger if you **distribute it inside your own product** or offer others a **modified version over the internet**: then you must make the code available. **Models:** the default **k2-fsa/OmniVoice** has Apache 2.0 code but model weights are licensed **CC-BY-NC (non‑commercial)**. Among alternative engines, for example **VoxCPM2** lists an Apache‑2.0 license: always check the license in the Model Catalog or on the page [voicestudio.sh/library](https://voicestudio.sh/library) before commercial use. This guide is not legal advice."
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
          "**Installation stuck on \"System RAM\"**",
          "the computer has less than 8 GB usable",
          "update to the latest version (tolerates the real 7.8 GB of 8 GB PCs); if below minimum, better get a new computer"
        ],
        [
          "**First launch extremely slow**",
          "downloading Python and libraries (several GB)",
          "let it finish; in **Details** see where it downloads from and if it stopped"
        ],
        [
          "**Generation very slow**",
          "no GPU: runs on CPU",
          "choose a lightweight engine (KittenTTS, Supertonic-3, PocketTTS) and a small Whisper model"
        ],
        [
          "**Memory full after many jobs**",
          "multiple models loaded together",
          "top **Flush** button → **Unload all + flush**"
        ],
        [
          "**C: drive full**",
          "additional engines take up several GB",
          "move the engines to another drive using the OMNIVOICE_ENGINES_DIR variable (see Windows guide)"
        ],
        [
          "**The agent gets a license error**",
          "model license not yet accepted",
          "open it in the Model Catalog and accept it once"
        ],
        [
          "**Mac: “the app is damaged”**",
          "macOS security block (Gatekeeper)",
          "follow the Gatekeeper section of the macOS guide"
        ],
        [
          "**Mac Intel**",
          "not supported for the local engine",
          "use it connected to a VoiceStudio on another computer, or use Windows/Linux/Mac Apple Silicon"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "9. Best practices and Marketizzati support",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/10-slide-10.webp",
      "alt": "Practical guide: VoiceStudio, the open‑source dubbing studio for your computer"
    },
    {
      "type": "paragraph",
      "content": "Three habits for using VoiceStudio in business without surprises: **written consent** for every cloned voice, **verified model license** before publishing, **a listening test** on each content before it reaches clients. Keep the app updated: the project releases new versions very often."
    },
    {
      "type": "h3",
      "heading": "When might you need professional support",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "You want to produce courses, videos or series dubbings but lack time to set up models and hardware;",
        "You need a voice agent or automation that uses a corporate voice while keeping data in‑house;",
        "You’re unsure which models and licenses are allowed for your commercial content."
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
        "Installation and configuration of VoiceStudio on your computers or a server",
        "Selection of models and verification of licenses for commercial use",
        "IA automations and voice agents (Claude Code, MCP, API)",
        "Training for you and your team"
      ]
    },
    {
      "type": "cta",
      "heading": "Want a consultation for your case?",
      "content": "Message me on WhatsApp and tell me what you want to do with voice (courses, videos, dubbings, agents): I’ll let you know if VoiceStudio fits, on which computer and with which model."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF:** [Download the PDF](/guide/voicestudio-doppiaggio-open-source.pdf) (PDF in Italian)"
    }
  ]
}

export default post
