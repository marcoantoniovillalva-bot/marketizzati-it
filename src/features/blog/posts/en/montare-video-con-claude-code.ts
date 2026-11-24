import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "montare-video-con-claude-code",
  "title": "Editing videos with Claude Code",
  "description": "Learn how to edit videos with Claude Code and five free tools, from transcription and subtitles to the final export on Windows.",
  "date": "2026-11-09",
  "readTime": 7,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Editing videos with Claude Code",
    "The 5 free tools",
    "step by step on Windows",
    "Editing videos",
    "videos with",
    "video with Claude"
  ],
  "image": "/images/blog/covers/montare-video-con-claude-code-wide.en.webp",
  "imageTall": "/images/blog/covers/montare-video-con-claude-code-tall.en.webp",
  "videoPreview": "/videos/preview/montare-video-con-claude-code.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7706265157642685728",
  "imageAlt": "Editing videos with Claude Code: the 5 free tools, step by step on Windows",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/01-slide-01.en.webp",
      "alt": "Editing videos with Claude Code: the 5 free tools, step by step on Windows"
    },
    {
      "type": "h2",
      "heading": "Before you start: what you’ll find",
      "content": ""
    },
    {
      "type": "intro",
      "content": "In the video I showed the five free tools Claude Code uses to edit my reels. **How to edit a video with Claude Code?** It reads the script, decides cuts, subtitles and graphics, and runs five free programs: **Whisper**, **Silero VAD**, **OpenCV & RVM**, **Remotion**, **FFmpeg**. Commands and prices checked on official sites on 9 Nov 2026."
    },
    {
      "type": "list",
      "items": [
        "What you need and how much it costs (only Claude Code is paid).",
        "Commands to install each tool on Windows.",
        "What each tool is for, with the command I use.",
        "The CLAUDE.md file is the first prompt to get Claude to edit the video."
      ]
    },
    {
      "type": "callout",
      "content": "**Key rule:** **you don’t have to learn how to use the five programs.** Install them once, then ask Claude Code what you want to achieve: it writes and runs the commands. You check the result."
    },
    {
      "type": "cta",
      "heading": "Do you want the ready‑made pipeline?",
      "content": "**If you want to save time, write to us.** We install and configure the pipeline on your computer and tailor it to your video style."
    },
    {
      "type": "h3",
      "heading": "Official links",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code — installation and requirements](https://code.claude.com/docs/en/setup)",
        "[Claude — plans and pricing](https://claude.com/pricing)",
        "[faster-whisper (Fast Whisper, MIT license)](https://github.com/SYSTRAN/faster-whisper)",
        "[OpenAI Whisper (the original model)](https://github.com/openai/whisper)",
        "[Silero VAD (MIT license)](https://github.com/snakers4/silero-vad)",
        "[RobustVideoMatting — RVM (GPL‑3.0 license)](https://github.com/PeterL1n/RobustVideoMatting)",
        "[OpenCV](https://opencv.org/)",
        "[Remotion and its license](https://www.remotion.dev/docs/license)",
        "[FFmpeg](https://ffmpeg.org/)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. How it works",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/02-slide-02.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Claude Code is the **regista**: give raw video, script and style rules, it plans and calls tools. Whisper transcribes with exact timing; Silero finds cuts; OpenCV tracks face, RVM separates person from background; Remotion adds subtitles and animations; FFmpeg trims, fixes audio and exports for Instagram and TikTok."
    },
    {
      "type": "h2",
      "heading": "2. What you need",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/03-slide-03.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "A PC with **Windows 10 (version 1809 or later) or Windows 11** and at least 4 GB RAM (videos need more: 16 GB is fine). The five tools are free; only a Claude subscription is required."
    },
    {
      "type": "table",
      "headers": [
        "What",
        "Cost",
        "Command on Windows (PowerShell)"
      ],
      "rows": [
        [
          "**Claude Pro** (include Claude Code)",
          "€18 per month + VAT, or €15 per month + VAT with annual plan",
          "subscription at claude.com/pricing"
        ],
        [
          "**Python 3.12**",
          "free",
          "winget install -e --id Python.Python.3.12"
        ],
        [
          "**Node.js LTS** (for Remotion)",
          "free",
          "winget install -e --id OpenJS.NodeJS.LTS"
        ],
        [
          "**Git for Windows** (recommended)",
          "free",
          "winget install -e --id Git.Git"
        ],
        [
          "**FFmpeg**",
          "free",
          "winget install -e --id Gyan.FFmpeg"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Note:** Claude’s free plan excludes Claude Code; you need Pro, Max or a Team/Enterprise plan. I said “at least €20/mo”: Pro is €18/mo + VAT (~€22 with 22% VAT)."
    },
    {
      "type": "h2",
      "heading": "3. Install Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/04-slide-04.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Open **PowerShell** (prompt starts with PS C:\\) and paste the official command. No need to run as admin."
    },
    {
      "type": "code",
      "content": "irm https://claude.ai/install.ps1 | iex\nclaude --version\nclaude"
    },
    {
      "type": "paragraph",
      "content": "On first launch **claude** opens the browser to sign in. Or run **winget install Anthropic.ClaudeCode**. Create a video folder (e.g., C:\\video-editor), open it in the terminal and launch Claude from there."
    },
    {
      "type": "h2",
      "heading": "4. Whisper: every word with its timestamp",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/05-slide-05.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "I use **faster-whisper**, a faster Whisper build that works well even without a GPU. Create a Python env in the project folder and install it:"
    },
    {
      "type": "code",
      "content": "py -3.12 -m venv .venv\n.venv\\Scripts\\activate\npip install faster-whisper"
    },
    {
      "type": "paragraph",
      "content": "With **word_timestamps** you get each word’s start and end, which creates subtitles and frame‑accurate cuts. The **large-v3** model is the most accurate in Italian (≈3 GB, auto‑downloads on first use)."
    },
    {
      "type": "code",
      "content": "from faster_whisper import WhisperModel\nmodel = WhisperModel(\"large-v3\", device=\"cpu\", compute_type=\"int8\")\nsegments, _ = model.transcribe(\"video.mp4\", language=\"it\", word_timestamps=True)\nfor s in segments:\n    for w in s.words:\n        print(f\"{w.start:.2f} {w.end:.2f} {w.word}\")"
    },
    {
      "type": "h2",
      "heading": "5. Silero VAD: remove pauses",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/06-slide-06.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**What is Silero VAD?** It’s a voice detector: for each audio chunk it tells if you’re speaking. Claude uses these cues to cut silent gaps. In video 16 it removed 3.4 seconds of pauses out of 73."
    },
    {
      "type": "code",
      "content": "pip install silero-vad"
    },
    {
      "type": "code",
      "content": "from silero_vad import load_silero_vad, read_audio, get_speech_timestamps\nmodel = load_silero_vad()\nwav = read_audio(\"voce.wav\")\nprint(get_speech_timestamps(wav, model, return_seconds=True))"
    },
    {
      "type": "callout",
      "content": "**Important:** only cut pauses longer than a few tenths of a second and leave a bit of breathing room before and after each sentence, otherwise speech sounds “chopped”. Align cuts to frames (30 fps) so audio stays in sync."
    },
    {
      "type": "h2",
      "heading": "6. Face and background: OpenCV and RVM",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/07-slide-07.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**OpenCV** detects the face in every frame: it’s used to place subtitles at the right height and to handle zooms. **RVM (Robust Video Matting)** separates the person from the background frame‑by‑frame, letting you change the background, make it black‑and‑white, or add text behind you. On Mac the same job is done by **Apple Vision**, already built into the system."
    },
    {
      "type": "code",
      "content": "pip install opencv-python onnxruntime numpy"
    },
    {
      "type": "paragraph",
      "content": "The RVM model is downloaded from the project’s Releases page on GitHub: I use **rvm_mobilenetv3_fp32.onnx**, which runs on the CPU without a GPU. RVM is under **GPL‑3.0**: you can use it for your videos; if you bundle it in software you distribute, the GPL obligations apply."
    },
    {
      "type": "h2",
      "heading": "7. Remotion: subtitles, titles and animations",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/08-slide-08.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Remotion creates videos with code (React): each caption, subtitle or animation is a component that Claude writes for you. Create the project with:"
    },
    {
      "type": "code",
      "content": "npx create-video@latest\nnpm run dev"
    },
    {
      "type": "callout",
      "content": "**License:** Remotion is free for **individuals**, for **companies up to 3 employees**, and for non‑profits. Over 3 employees requires a **Company License** (remotion.dev/docs/license)."
    },
    {
      "type": "h2",
      "heading": "8. FFmpeg: cutting, audio and export",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/09-slide-09.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "FFmpeg is the Swiss‑army knife of video: cut, join, lower music under speech and compress the file. For Instagram and TikTok I export in **vertical 1080 × 1920**, 30 fps, H.264 and AAC audio, with voice around **‑14 LUFS** (the level platforms normalize to)."
    },
    {
      "type": "code",
      "content": "ffmpeg -i montato.mp4 -vf \"scale=1080:1920\" -r 30 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:a aac -b:a 256k -ar 48000 -movflags +faststart reel.mp4"
    },
    {
      "type": "h2",
      "heading": "9. The CLAUDE.md file and the first prompt",
      "content": "In the project folder create a **CLAUDE.md** file: Claude reads it each session. Write your style rules there so you don’t repeat them every time. An example to adapt:"
    },
    {
      "type": "code",
      "content": "# Regole per i miei reel\n- Formato 9:16, 1080x1920, 30 fps.\n- Trascrizione con faster-whisper large-v3, lingua italiana.\n- Taglia le pause con Silero VAD (solo oltre 0,2 s, tagli sui fotogrammi).\n- Sottotitoli grandi, 2-4 parole, una parola chiave evidenziata nel mio colore.\n- Grafiche con Remotion: poche parole, icone e loghi veri.\n- Musica sempre almeno 15 dB sotto la voce.\n- Export finale con FFmpeg a -14 LUFS."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "In the video-raw folder is my reel. Transcribe it with faster‑whisper, remove pauses with Silero, add subtitles with Remotion following CLAUDE.md and export with FFmpeg for Instagram. Before rendering, show me the cut plan and 5 test frames."
    },
    {
      "type": "paragraph",
      "content": "Ask for the plan and frames before rendering so you can fix errors while they’re cheap."
    },
    {
      "type": "h2",
      "heading": "Best practice and support Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/10-slide-10.en.webp",
      "alt": "Edit videos with Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Start with a short clip and one step at a time (first subtitles, then cuts, then graphics). Keep the original raw, always preview, and log every tweak in CLAUDE.md: the final video will be better. If you prefer an existing pipeline, we can install it and adapt it to your style."
    },
    {
      "type": "cta",
      "heading": "Want a comparison for your case?",
      "content": "**If you want us to help, write to us.** Tell us what video you make and your computer: we’ll show you how to set up the pipeline."
    },
    {
      "type": "callout",
      "content": "**Free guide in PDF:** [Download the PDF](/guide/montare-video-con-claude-code.pdf) (PDF in Italian)"
    }
  ]
}

export default post
