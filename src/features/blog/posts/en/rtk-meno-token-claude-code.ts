import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "rtk-meno-token-claude-code",
  "title": "RTK: fewer tokens wasted with Claude Code",
  "description": "TOKEN Guide: Windows installation, measurements, five use cases and four prompts. Verified on November 10, 2026.",
  "date": "2026-11-10",
  "readTime": 9,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "RTK",
    "fewer tokens wasted with Claude Code",
    "TOKEN Guide",
    "Windows installation",
    "measurements",
    "five use cases and four prompts"
  ],
  "image": "/images/blog/covers/rtk-meno-token-claude-code-wide.webp",
  "imageTall": "/images/blog/covers/rtk-meno-token-claude-code-tall.webp",
  "videoPreview": "/videos/preview/rtk-meno-token-claude-code.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7706859214056017185",
  "imageAlt": "RTK: fewer tokens wasted with Claude Code — free TOKEN guide",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/01-slide-01.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code — free TOKEN guide"
    },
    {
      "type": "h2",
      "heading": "1. What is RTK and what you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/02-slide-02.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code"
    },
    {
      "type": "intro",
      "content": "**RTK stands for Rust Token Killer.** In the reel I say «RTX», but the correct name is RTK. It trims command text before Claude Code reads it. Here you’ll find the installation, five use cases and four ready prompts. Official sources verified on **November 10, 2026**."
    },
    {
      "type": "cta",
      "heading": "Want to set it up in your project?",
      "content": "Message us on WhatsApp with the word **TOKEN**. We’ll help you verify the setup and measure the result on your work."
    },
    {
      "type": "paragraph",
      "content": "Imagine a test that prints 500 lines of successes and few errors. It’s the official quick‑start example: RTK keeps failures and summarizes passed tests. Claude Code already limits overly long outputs, but the text it reads still consumes context and usage. With API it impacts billed tokens; a subscription eats plan limits."
    },
    {
      "type": "list",
      "items": [
        "**Claude Code already working**, with an enabled account or API access. Claude’s free plan isn’t enough.",
        "**Windows and PowerShell**, with winget available. For Claude Code: Windows 10 1809 or later and at least 4 GB RAM, per Anthropic.",
        "A project and its existing tools: RTK won’t install Git, Python, or the program you need to filter.",
        "For the standard automatic filter you need to check the **Bash** tool. Git for Windows provides Git Bash. The separate PowerShell tool is **to be verified**."
      ]
    },
    {
      "type": "callout",
      "content": "**Cost and license:** the CLI is free. Hooks and filters are Apache‑2.0. The full edition also includes a BUSL‑1.1 engine with its own terms. There’s a pure Apache‑2.0 edition. Both use the same rtk name—pick one. Claude Code’s price is separate."
    },
    {
      "type": "h2",
      "heading": "2. Install RTK on Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/03-slide-03.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Open **PowerShell**. First check if RTK is already present. These two commands should show the version and a savings summary, even if empty. If they work, move to section 3."
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "If missing, use the Windows command listed in the official docs. winget must already be available:"
    },
    {
      "type": "code",
      "content": "winget install rtk-ai.rtk"
    },
    {
      "type": "paragraph",
      "content": "After installation, reopen the terminal and repeat the check:"
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "callout",
      "content": "**Similar name:** Rust Type Kit also exists. Don’t use the generic `cargo install rtk`. If the version shows but gain isn’t recognized, verify the package and path before proceeding."
    },
    {
      "type": "paragraph",
      "content": "**If winget isn’t available:** from the official releases download rtk‑x86_64‑pc‑windows‑msvc.zip. Extract rtk.exe and place it in a folder on your PATH. For other architectures the suitable Windows package is **to be verified**. Don’t double‑click the executable."
    },
    {
      "type": "paragraph",
      "content": "Some filters need **ripgrep**, the rg command, in the PATH. If you get a missing warning, the Windows docs say:"
    },
    {
      "type": "code",
      "content": "winget install BurntSushi.ripgrep.MSVC"
    },
    {
      "type": "paragraph",
      "content": "**Mac/Linux:** the README shows the following command if Homebrew is already installed. The official guide also provides the script for Linux, Mac and WSL."
    },
    {
      "type": "code",
      "content": "brew install rtk"
    },
    {
      "type": "list",
      "items": [
        "[Official installation and alternatives](https://www.rtk-ai.app/docs/getting-started/installation/)",
        "[Official releases](https://github.com/rtk-ai/rtk/releases)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Connect it to Claude Code and check the limits",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/04-slide-04.webp",
      "alt": "RTK: fewer wasted tokens with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "The automatic connection uses a **hook**: a rule that runs before the command. For example it turns git status into rtk git status. First you can see the expected changes. Then you apply the global config:"
    },
    {
      "type": "code",
      "content": "rtk init --global --dry-run\nrtk init --global"
    },
    {
      "type": "paragraph",
      "content": "The first command writes nothing. The second registers the hook in **~/.claude/settings.json** and applies to all user projects. Follow the prompts shown by the installer. For this guide you only need the command filter: keep the proxy and optional pipelines disabled. **Close and reopen Claude Code.**"
    },
    {
      "type": "callout",
      "content": "**Note on init:** rtk init without --global adds instructions to CLAUDE.md and a filter template in the project. Current versions do not install the automatic hook. Use --global, short -g, for that."
    },
    {
      "type": "list",
      "items": [
        "In Claude Code open /hooks and check the RTK PreToolUse hook.",
        "Ask Claude to run git status. See if it uses the Bash tool or the PowerShell tool.",
        "In the terminal look at the history below. Look for a new filtered execution. If it’s missing, the automation isn’t working."
      ]
    },
    {
      "type": "code",
      "content": "rtk gain --history"
    },
    {
      "type": "paragraph",
      "content": "**Windows is supported.** Since v0.37.2 RTK uses a native hook. But Claude Code’s standard filter catches the **Bash** tool: launching Claude from PowerShell doesn’t guarantee Bash usage. **PowerShell tool interception still needs verification**. You can explicitly try a supported RTK command:"
    },
    {
      "type": "code",
      "content": "rtk git status"
    },
    {
      "type": "paragraph",
      "content": "Read, Grep and Glob built‑ins bypass the Bash filter. The full edition adds extra options, but they aren’t required to start. An unfiltered command may pass unchanged. If you miss useful detail, request the full output with rtk bypass followed by the command."
    },
    {
      "type": "h2",
      "heading": "4. Measure before and after with rtk gain",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/05-slide-05.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Start with a small comparison. In a Git repo, without changing files between the two runs, compare the same state with and without the filter. First note the counters. Then run the steps below. bypass shows the full output and records the run with zero savings."
    },
    {
      "type": "code",
      "content": "rtk gain\nrtk bypass git status\nrtk git status\nrtk gain --history\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "In the history compare the two executions. In the summary view the difference from the initial counters. The cumulative percentage also includes the bypass run: it’s not just the filter’s percentage. Stats are shared across projects and sessions on the machine. Avoid other RTK commands during the test."
    },
    {
      "type": "h3",
      "heading": "How to read the numbers",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Item",
        "Meaning"
      ],
      "rows": [
        [
          "Input",
          "Estimated tokens of the original output."
        ],
        [
          "Output",
          "Estimated tokens after filtering."
        ],
        [
          "Saved",
          "Difference between Input and Output."
        ],
        [
          "Save%",
          "Reduction of output bytes, not of the invoice."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Illustrative example of the official quick start. **Not a measurement of your project:**"
    },
    {
      "type": "code",
      "content": "Total commands : 10\nInput tokens   : 50,000\nOutput tokens  : 5,000\nSaved          : 45,000  (90.0%)"
    },
    {
      "type": "callout",
      "content": "**Estimated tokens:** RTK uses bytes / 4. It doesn’t count the model’s exact tokens. The project advertises 60–90% on common commands and up to 90% less output. Your percentage must be measured. A 90% shorter output doesn’t make the whole session 90% cheaper."
    },
    {
      "type": "paragraph",
      "content": "To continue: measure a comparable workday and check retained errors. For cost impact also look at Claude usage. Don’t compare two consecutive installations: the second may print less because packages are already present. Don’t reset history for this test."
    },
    {
      "type": "h2",
      "heading": "5. Five concrete use cases",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/06-slide-06.webp",
      "alt": "RTK: fewer wasted tokens with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Pick the case that exists in your project. The commands below are separate examples: you don’t have to run them all. Use the tools of the respective project. After each test check the result and the savings history."
    },
    {
      "type": "h3",
      "heading": "Test: find the failure immediately",
      "content": "In a Rust project, summarize passed tests and focus on failures. RTK also supports JavaScript, pytest and Go tests: verify your project’s command."
    },
    {
      "type": "code",
      "content": "rtk cargo test"
    },
    {
      "type": "h3",
      "heading": "Build: read errors and warnings",
      "content": "Still in a Rust project, cut compilation noise. If a diagnostic detail is missing, retry with bypass."
    },
    {
      "type": "code",
      "content": "rtk cargo build"
    },
    {
      "type": "h3",
      "heading": "Git log and diff: review changes",
      "content": "Read a compact history and a diff with less context. Before approving a delicate change, revert to the full diff if needed."
    },
    {
      "type": "code",
      "content": "rtk git log\nrtk git diff"
    },
    {
      "type": "h3",
      "heading": "Packages: remove progress bars",
      "content": "In a Node.js project, install the dependencies declared by the project. The npm filter reduces noise, but can also remove warnings: to diagnose an installation check the full output."
    },
    {
      "type": "code",
      "content": "rtk npm install"
    },
    {
      "type": "h3",
      "heading": "Long logs: group repetitions",
      "content": "With Docker already present, **rtk docker logs container-name** summarizes repetitions of the last 100 log lines (replace container-name with an existing container). If the exact error sequence is missing, use bypass."
    },
    {
      "type": "h2",
      "heading": "6. Four ready prompts and CLAUDE.md",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/07-slide-07.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Paste one prompt at a time into Claude Code, from the project folder. They are templates to adapt. **When you use them, Claude can run commands and modify the configuration.** Here they are just ready‑to‑copy texts."
    },
    {
      "type": "code",
      "label": "PROMPT 1 — SETUP",
      "content": "Install and configure RTK for this project using only the official rtk-ai/rtk docs. First check rtk --version and rtk gain. On Windows run winget install rtk-ai.rtk if missing. Show me rtk init --global --dry-run and explain that the hook applies to all projects. Configure only the base filter. Verify which shell tool you use and run rtk gain --history. Flag PowerShell for review if not intercepted."
    },
    {
      "type": "code",
      "label": "PROMPT 2 — TEST",
      "content": "Find the test command for this project. Check if RTK supports it. Run it with the filter and report failures, messages and final outcome. If details are missing, use rtk bypass on the same command. Do not modify code in this initial diagnosis."
    },
    {
      "type": "code",
      "label": "PROMPT 3 — GIT REVIEW",
      "content": "Use rtk git log and rtk git diff to explain local changes. If the diff context is insufficient, get the full output with rtk bypass git diff. List files, issues and points to check. Do not create a commit."
    },
    {
      "type": "code",
      "label": "PROMPT 4 — MEASUREMENT",
      "content": "Log RTK gain. Compare rtk bypass git status and rtk git status without modifying files during tests. Read rtk gain --history and the final summary. Separate cumulative counters and single commands. Explain estimated tokens, output percentage and measurement limits. Do not promise euro savings or reset history."
    },
    {
      "type": "h3",
      "heading": "One line for CLAUDE.md",
      "content": "Add this rule to the existing CLAUDE.md without deleting the other instructions. It's an editorial reminder, not a replacement for the hook:"
    },
    {
      "type": "code",
      "content": "- Usa RTK per i comandi supportati; se mancano dettagli usa rtk bypass, controlla rtk gain e verifica l'hook quando usi PowerShell."
    },
    {
      "type": "h3",
      "heading": "Start with a command, then measure",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/08-slide-08.webp",
      "alt": "RTK: fewer tokens wasted with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Test a simple command first. Ensure the filter keeps needed data. Then extend to test, build and log. **It must stay short yet useful.** If not, get full output. PC compatibility still to verify."
    },
    {
      "type": "cta",
      "heading": "Need help with Claude Code?",
      "content": "Message us on WhatsApp with **TOKEN**. Tell us which project you use and where you waste time. We'll help set up RTK, verify commands and read results."
    },
    {
      "type": "h3",
      "heading": "Official sources — checked November 10, 2026",
      "content": "Commands and limits: [RTK installation](https://www.rtk-ai.app/docs/getting-started/installation/), [quick start](https://www.rtk-ai.app/docs/getting-started/quick-start/), [supported commands](https://www.rtk-ai.app/docs/resources/what-rtk-covers/). Measures: [rtk gain](https://www.rtk-ai.app/docs/analytics/gain/) and [meaning of savings](https://www.rtk-ai.app/docs/resources/savings-explained/). Licenses: [RTK editions](https://www.rtk-ai.app/docs/resources/editions/)."
    },
    {
      "type": "paragraph",
      "content": "Code checks: [RTK hook](https://github.com/rtk-ai/rtk/blob/master/src/hooks/constants.rs), [npm](https://github.com/rtk-ai/rtk/blob/master/src/cmds/js/npm_cmd.rs), [Docker log](https://github.com/rtk-ai/rtk/blob/master/src/cmds/cloud/container.rs). For Claude Code: [PowerShell hook](https://code.claude.com/docs/en/hooks#windows-powershell-tool), [setup](https://code.claude.com/docs/en/setup), [command output](https://code.claude.com/docs/en/tools-reference#output-limits) and [costs](https://code.claude.com/docs/en/costs). Repository: [rtk-ai/rtk](https://github.com/rtk-ai/rtk)."
    },
    {
      "type": "callout",
      "content": "**Free PDF guide:** [Download PDF](/guide/rtk-meno-token-claude-code.pdf) (PDF in Italian)"
    }
  ]
}

export default post
