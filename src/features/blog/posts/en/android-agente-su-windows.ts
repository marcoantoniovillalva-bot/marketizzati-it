import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "android-agente-su-windows",
  "title": "ANDROID: set up the agent on Windows + 10 safe tests",
  "description": "ARTEMIS on Windows, Claude Code, Codex and Cursor. Setup, restore, ten tests and three prompts for developers. Checked: November 13, 2026.",
  "date": "2026-11-13",
  "readTime": 11,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "ANDROID",
    "set up the agent on Windows + 10 safe tests",
    "ARTEMIS on Windows",
    "Claude Code",
    "Codex and Cursor",
    "Setup"
  ],
  "image": "/images/blog/covers/android-agente-su-windows-wide.en.webp",
  "imageTall": "/images/blog/covers/android-agente-su-windows-tall.en.webp",
  "videoPreview": "/videos/preview/android-agente-su-windows.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7707718630523407649",
  "imageAlt": "ANDROID: set up the agent on Windows + 10 safe tests",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/01-slide-01.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe tests"
    },
    {
      "type": "h2",
      "heading": "1. What is ARTEMIS and what you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/02-slide-02.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe tests"
    },
    {
      "type": "intro",
      "content": "**ARTEMIS controls Android from written instructions.** It opens apps, taps elements and observes the outcome. Uses ADB, screenshots and screen hierarchy. It’s in the **google/artemis** repository. Also useful for exploring apps, reproducing bugs and gathering evidence. Source check: **November 13, 2026**."
    },
    {
      "type": "cta",
      "heading": "Shall we set up your first test?",
      "content": "Message us on WhatsApp with **ANDROID**. We’ll help you pick the test device and read the configuration."
    },
    {
      "type": "callout",
      "content": "**Free code. Check the costs.** The project is open source, **Apache-2.0**. It requires a configured model provider. APIs and the development assistant may have their own fees. It does not imply unlimited free use."
    },
    {
      "type": "list",
      "items": [
        "**Device:** test Android phone with data cable and USB debugging, or an emulator. Android Studio is used for the emulator path described here.",
        "**Windows PC:** PowerShell, ADB, Git, uv and Python 3.12 or newer. The bootstrap can install missing dependencies, scrcpy, FFmpeg and Node.js for the console.",
        "**Models:** credentials of a supported provider. Enter them locally in the wizard or in .env. Do not paste them in chat."
      ]
    },
    {
      "type": "paragraph",
      "content": "**Marketizzati Precautions:** use a dedicated environment. Remove personal accounts and SIM. Disable private notifications. Use dummy data. Do not open banking, email, gallery or password manager. Screenshots and logs may contain visible data. The pipeline can use remote models: recipients and storage are **to be verified** for the chosen provider."
    },
    {
      "type": "list",
      "items": [
        "[Google: project and requirements](https://github.com/google/artemis)",
        "[Phone provider and options](https://github.com/google/artemis/blob/main/.env.example)"
      ]
    },
    {
      "type": "h2",
      "heading": "2. Connect Android to Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/03-slide-03.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe runs"
    },
    {
      "type": "paragraph",
      "content": "**Choose a path.** For the phone use a data cable. For the emulator no cable is needed. Connect only one device during the initial runs."
    },
    {
      "type": "list",
      "items": [
        "**Prepare ADB.** In Android Studio open SDK Manager → SDK Tools and install Android SDK Platform-Tools. Alternatively download the Windows package from the official page below and extract it, e.g., to C:/Android/platform-tools.",
        "**Make adb available.** Add the platform-tools folder to the Windows user Path and reopen PowerShell. If you work inside that folder, you can use .\\adb.exe instead of adb: the .\\ prefix is PowerShell syntax for a local executable.",
        "**Phone:** in Settings search for Build number and tap it seven times. The path varies by manufacturer. Open Developer Options and enable USB Debugging. Do not unlock the bootloader.",
        "**Connect and authorize.** Unlock the screen. Plug the cable and accept the RSA debug request on the phone only for your PC. Windows may ask for the manufacturer’s USB driver.",
        "**Emulator alternative:** in Android Studio open Device Manager → Create Virtual Device. Choose hardware and system image. Finish and launch the AVD. Do not add personal accounts."
      ]
    },
    {
      "type": "paragraph",
      "content": "In PowerShell check the connection with the command documented by Android:"
    },
    {
      "type": "code",
      "content": "adb devices"
    },
    {
      "type": "paragraph",
      "content": "A serial should appear with status **device**. With **unauthorized**, check the phone’s authorization. With **offline**, the device isn’t ready. If the list is empty, check cable, driver or AVD launch. Keep the serial: it will replace **SERIAL** in prompts."
    },
    {
      "type": "list",
      "items": [
        "[Android: Platform-Tools for Windows](https://developer.android.com/tools/releases/platform-tools)",
        "[Android: ADB debug and authorization](https://developer.android.com/tools/adb)",
        "[Android: developer options](https://developer.android.com/studio/debug/dev-options)",
        "[Android: driver and physical device](https://developer.android.com/studio/run/device)",
        "[Android Studio: create an emulator](https://developer.android.com/studio/run/managing-avds)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Install and connect your assistant",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/04-slide-04.en.webp",
      "alt": "ANDROID: configure the agent on Windows + 10 safe trials"
    },
    {
      "type": "callout",
      "content": "**Read first. Then run.** First copy the files from section 4. The launch command downloads and installs components. start.bat calls PowerShell with ExecutionPolicy Bypass for that process. Read start.bat and scripts/start.ps1. Do not bypass your organization’s policies."
    },
    {
      "type": "paragraph",
      "content": "With Git installed, open PowerShell in the folder where you want to keep ARTEMIS. Here’s the official quick start for Windows:"
    },
    {
      "type": "code",
      "content": "git clone https://github.com/google/artemis.git\ncd artemis\n.\\start.bat"
    },
    {
      "type": "paragraph",
      "content": "When asked to install MCP and rules in IDEs, answer **n** if you want to pick a single editor. Saying yes to the bootstrap configures all planned targets. The console normally opens at **http://localhost:8000**. Let the setup finish."
    },
    {
      "type": "paragraph",
      "content": "Open another PowerShell in the ARTEMIS folder. The wizard configures keys and device but **overwrites .env**—save it first if it already has settings. At the IDE step pick **8 — Skip for now** to later run the targeted command. Check the diagnosis:"
    },
    {
      "type": "code",
      "content": "uv run artemis init\nuv run artemis doctor"
    },
    {
      "type": "paragraph",
      "content": "**Claude Code:** add MCP server and global rules with the command supported by the project. It’s not a plugin:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install claude"
    },
    {
      "type": "paragraph",
      "content": "**Official variants:** choose Codex or Cursor instead of Claude. No need to run both:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install codex\nuv run artemis mcp --install cursor"
    },
    {
      "type": "paragraph",
      "content": "Restart the editor or reload the MCP server. In Claude Code check **/mcp** and ensure ARTEMIS is available. If missing or failing, read the error and use doctor. Don’t blindly approve new permissions."
    },
    {
      "type": "paragraph",
      "content": "**TO VERIFY on your PC:** the setup wasn’t run for this guide. Menu names and compatibility depend on versions. To view the proposed configuration use the official generator (uv can still sync the environment): **uv run artemis mcp --generate-config claude**."
    },
    {
      "type": "h2",
      "heading": "4. Review the changes and go back",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/05-slide-05.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe tests"
    },
    {
      "type": "paragraph",
      "content": "The installer modifies **global** files. First back up existing files. Note any missing ones. Then compare differences. The Claude target also affects Claude Desktop."
    },
    {
      "type": "table",
      "headers": [
        "Windows files",
        "What changes"
      ],
      "rows": [
        [
          "%USERPROFILE%/.claude.json",
          "Adds or updates mcpServers.artemis."
        ],
        [
          "%APPDATA%/Claude/claude_desktop_config.json",
          "Adds the server to Claude Desktop as well."
        ],
        [
          "%USERPROFILE%/.claude/rules/artemis.md",
          "Writes the global ARTEMIS test rules."
        ],
        [
          "%USERPROFILE%/.claude/CLAUDE.md",
          "Removes any old duplicated ARTEMIS block. It may delete the file if it only contained that block."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "In the examined installation path **no changes to settings.json, hook or permissions.allow rules** of Claude are found. ARTEMIS rules require exploring the app before writing tests. They are not a technical protection."
    },
    {
      "type": "paragraph",
      "content": "**Codex:** edit config.toml and AGENTS.md, or AGENTS.override.md if already present and not empty, in the CODEX_HOME folder (default .codex in the user profile). **Cursor:** edit .cursor/mcp.json, .cursorrules and .cursor/rules/artemis.mdc in the user profile. Save these files as well if you choose those targets."
    },
    {
      "type": "paragraph",
      "content": "Check Claude from PowerShell (Anthropic commands): **claude mcp list** and **claude mcp get artemis**."
    },
    {
      "type": "h3",
      "heading": "How to cancel",
      "content": "Marketizzati procedure based on the read files, **to be verified locally**. Stop the tasks. From the ARTEMIS folder stop the console; then remove the Claude registration at user level:"
    },
    {
      "type": "code",
      "content": "uv run artemis stop\nclaude mcp remove artemis --scope user"
    },
    {
      "type": "paragraph",
      "content": "In Claude Desktop remove only mcpServers.artemis if added by the setup. Selectively restore artemis.md and CLAUDE.md from backups. Keep other changes. For Codex or Cursor restore only the ARTEMIS blocks in the specified files. Do not delete entire configuration folders. No mcp --uninstall command is documented."
    },
    {
      "type": "paragraph",
      "content": "The first task may install **Artemis Accessibility Helper** on the phone. To remove it, keep only the test device connected and run the official command below. MCP removal does not uninstall the helper or PC dependencies. When finished, disconnect the cable and disable USB debugging."
    },
    {
      "type": "code",
      "content": "uv run artemis helper uninstall"
    },
    {
      "type": "h2",
      "heading": "5. Five trials without an account",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/06-slide-06.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe trials"
    },
    {
      "type": "paragraph",
      "content": "Marketizzati prompts **to verify**, not official Google tests. Replace **SERIAL** with your serial number. Paste one prompt at a time into the assistant linked to ARTEMIS. Supervise the screen. If an app is missing, report the limitation without installing it. The instructions do not guarantee every action is correct."
    },
    {
      "type": "code",
      "label": "TEST 1 — ANDROID VERSION",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Open Settings and read the Android version. Do not report IMEI, hardware serial numbers or account data. Do not change settings. Finish within 8 actions."
    },
    {
      "type": "code",
      "label": "TEST 2 — SCREENSHOT",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Open the main Settings page. Take a screenshot only if it shows no personal data. Return the available evidence. Do not invent a file path. Finish within 4 actions."
    },
    {
      "type": "code",
      "label": "TEST 3 — BATTERY",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Open Settings → Battery. Read the percentage if available. Do not turn on power saving or any other toggle. Report any error dialogs. Finish within 6 actions."
    },
    {
      "type": "code",
      "label": "TEST 4 — CALCULATOR",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Open the system Calculator if present. Calculate 17 + 25. Check that the result is 42. Do not open the history. If it is missing, say so. Finish within 8 actions."
    },
    {
      "type": "code",
      "label": "TEST 5 — NAVIGATION",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. From Settings open Display, go back, then go to Home. Check each step without touching any toggles. Report the point where you get stuck. Finish within 6 actions."
    },
    {
      "type": "paragraph",
      "content": "**Result to look for:** observed actions and consistent evidence. An unexecuted step remains unverified. Do not ask the agent to bypass protected screens."
    },
    {
      "type": "h2",
      "heading": "6. Another five controlled tests",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/07-slide-07.en.webp",
      "alt": "ANDROID: configure the agent on Windows + 10 secure tests"
    },
    {
      "type": "paragraph",
      "content": "For tests 8–10 prepare your own demo app already installed, with no real data. Use a local backend or test environment. Replace **APP_DEMO** with the app name. If a function is missing, the correct result is “not verifiable”."
    },
    {
      "type": "code",
      "label": "TEST 6 — SEARCH IN SETTINGS",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. In Settings search for Battery. Open the relevant result and check the title. Do not change any options. If search does not exist, say so. Finish within 8 actions."
    },
    {
      "type": "code",
      "label": "TEST 7 — CALCULATOR INFO",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. From Settings open the info page of the system Calculator app. Read the version if visible. Do not delete data, uninstall, or change permissions. Finish within 8 actions."
    },
    {
      "type": "code",
      "label": "TEST 8 — EMPTY FIELDS",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Use the Pro profile. Open the APP_DEMO login and submit the empty form once. Check the errors on the required fields. Do not use other accounts. Finish within 6 actions."
    },
    {
      "type": "code",
      "label": "TEST 9 — FAKE LOGIN",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Use the Pro profile. In APP_DEMO enter demo@example.test and the dummy password prova-sbagliata. Submit once. Check for the expected rejection, without retrying. Do not use password recovery. Finish within 8 actions."
    },
    {
      "type": "code",
      "label": "TEST 10 — NO RESULT",
      "content": "Use ARTEMIS only on the test device SERIAL. Stop if personal data appears. Use the Pro profile. In the local search of APP_DEMO type zzz-nessun-risultato. Check the empty state. Go back to the home screen. Do not create or delete items. Finish within 8 actions."
    },
    {
      "type": "paragraph",
      "content": "For each test note: objective, expected result, observed result, available screenshot and encountered limit. Action limits written in prompts are model requests. They are not a technical block set by the guide."
    },
    {
      "type": "list",
      "items": [
        "[Google: mode, diagnostics and device selection](https://github.com/google/artemis/blob/main/mcp_server/rules.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "7. Three prompts for app developers",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/08-slide-08.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 safe tests"
    },
    {
      "type": "paragraph",
      "content": "Marketed models **to verify**. Replace **SERIAL**, **APP_DEMO** and expectations with your project's. Use a test build and synthetic data. For plans, checks, diagnostics and reports request **Pro**. Flash is for simple actions and lacks the same verification or final report."
    },
    {
      "type": "code",
      "label": "DEVELOPER 1 — REPRODUCE A BUG",
      "content": "With ARTEMIS Pro, only on SERIAL, explore APP_DEMO: Home → Search → text zzz. Expected: empty state, no crash. Prepare a short plan, then check the path within 12 actions. Collect available screenshots and logs without personal data. Report expected, observed and repeatable steps. Do not change code or data. If evidence is missing, write NOT VERIFIED."
    },
    {
      "type": "code",
      "label": "DEVELOPER 2 — UI REGRESSION",
      "content": "With ARTEMIS Pro, only on SERIAL, check three paths in APP_DEMO: Home → Detail → Back; search with no results; empty login. Use only synthetic data. At most 8 actions per path. For each one report expected, observed, outcome and evidence. Do not send messages, do not buy anything and do not change permissions. Stop if a real account appears."
    },
    {
      "type": "code",
      "label": "DEVELOPER 3 — FROM TEST TO CODE",
      "content": "With ARTEMIS Pro, explore the Home → Search path of APP_DEMO on SERIAL, within 8 actions. Then propose a runnable test in the framework already present in my project. Use observed locators and explicit waits. Do not invent IDs or coordinates. State prerequisites and asserts. Do not install dependencies and do not modify files unless I ask. Mark as TO BE VERIFIED the parts you did not run."
    },
    {
      "type": "callout",
      "content": "**Limits to remember:** 99%+ is the figure claimed on the AndroidWorld benchmark. It doesn’t guarantee success on your app. The model may miss taps and reads. Timing, language, layout and protected screens can affect outcomes. Native Android Studio and iOS plugins are on the roadmap, not yet promised. Device support and data handling still need verification."
    },
    {
      "type": "list",
      "items": [
        "[Google: Flash and Pro](https://github.com/google/artemis#execution-profiles-flash-vs-pro)",
        "[Google: evidence‑based test rules](https://github.com/google/artemis/blob/main/mcp_server/rules.md)",
        "[Google: roadmap and benchmark](https://github.com/google/artemis#roadmap)"
      ]
    },
    {
      "type": "h3",
      "heading": "Bring ANDROID to your project",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/09-slide-09.en.webp",
      "alt": "ANDROID: set up the agent on Windows + 10 secure tests"
    },
    {
      "type": "cta",
      "heading": "Want to set it up with us?",
      "content": "Message us on WhatsApp with **ANDROID**. We'll help you prep Windows, pick a test, and read screenshots, logs and config."
    },
    {
      "type": "h3",
      "heading": "Sources — checked November 13, 2026",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Google: ARTEMIS, README and license](https://github.com/google/artemis)",
        "[Google: MCP installer and modified files](https://github.com/google/artemis/blob/main/artemis/interfaces/cli/commands/mcp.py)",
        "[Google: device provider and privacy](https://github.com/google/artemis/blob/main/.env.example)",
        "[Android: ADB and Platform‑Tools](https://developer.android.com/tools/adb)",
        "[Anthropic: MCP server management](https://code.claude.com/docs/en/mcp)",
        "[OpenAI: MCP Codex configuration](https://developers.openai.com/codex/mcp)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Capabilities and commands come from official sources. Precautions, ten tests and three prompts are Marketizzati. Setup, restore and prompts weren’t tested on Windows for this resource. No software was installed during preparation. The guide doesn’t guarantee error‑free or data‑safe operation."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF:** [Download PDF](/guide/android-agente-su-windows.pdf) (PDF in Italian)"
    }
  ]
}

export default post
