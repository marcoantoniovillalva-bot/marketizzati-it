import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "montare-video-con-claude-code",
  "title": "Montar los videos con Claude Code",
  "description": "Los 5 herramientas gratuitas, paso a paso en Windows",
  "date": "2026-11-09",
  "readTime": 7,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Montar los videos con Claude Code",
    "Los 5 herramientas gratuitas",
    "paso a paso en Windows",
    "Montar los videos",
    "los videos con",
    "video con Claude"
  ],
  "image": "/images/blog/covers/montare-video-con-claude-code-wide.es.webp",
  "imageTall": "/images/blog/covers/montare-video-con-claude-code-tall.es.webp",
  "videoPreview": "/videos/preview/montare-video-con-claude-code.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7706265157642685728",
  "imageAlt": "Montar los videos con Claude Code: los 5 herramientas gratuitas, paso a paso en Windows",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/01-slide-01.webp",
      "alt": "Montar los videos con Claude Code: los 5 herramientas gratuitas, paso a paso en Windows"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás",
      "content": ""
    },
    {
      "type": "intro",
      "content": "En el video mostré las cinco herramientas gratuitas que Claude Code usa para montar mis reels. **¿Cómo se monta un video con Claude Code?** Claude Code actúa como director: lee el guion y los archivos, decide cortes, subtítulos y gráficos, y hace trabajar cinco programas gratuitos: **Whisper** (transcripción), **Silero VAD** (pausas), **OpenCV y RVM** (rostro y fondo), **Remotion** (gráficos) y **FFmpeg** (corte, audio, exportación). Comandos y precios verificados en las páginas oficiales el 9 de noviembre de 2026."
    },
    {
      "type": "list",
      "items": [
        "Qué necesitas y cuánto cuesta (solo Claude Code es de pago).",
        "Los comandos para instalar cada herramienta en Windows.",
        "Para qué sirve cada herramienta, con el comando que yo uso.",
        "El archivo CLAUDE.md es el primer prompt para que Claude monte el video."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** **no tienes que aprender a usar los cinco programas.** Los instalas una vez, luego le pides a Claude Code lo que quieres lograr: él escribe y ejecuta los comandos. Tú controlas el resultado."
    },
    {
      "type": "cta",
      "heading": "¿Quieres la pipeline ya lista?",
      "content": "**Si quieres ahorrar tiempo, escríbenos.** Instalamos y configuramos la pipeline en tu ordenador y la adaptamos a tu estilo de video."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code — instalación y requisitos](https://code.claude.com/docs/en/setup)",
        "[Claude — planes y precios](https://claude.com/pricing)",
        "[faster-whisper (Whisper rápido, licencia MIT)](https://github.com/SYSTRAN/faster-whisper)",
        "[OpenAI Whisper (el modelo original)](https://github.com/openai/whisper)",
        "[Silero VAD (licencia MIT)](https://github.com/snakers4/silero-vad)",
        "[RobustVideoMatting — RVM (licencia GPL-3.0)](https://github.com/PeterL1n/RobustVideoMatting)",
        "[OpenCV](https://opencv.org/)",
        "[Remotion y su licencia](https://www.remotion.dev/docs/license)",
        "[FFmpeg](https://ffmpeg.org/)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Cómo funciona",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/02-slide-02.webp",
      "alt": "Montar videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Claude Code es el **director**: le das el video bruto, el guion y tus reglas de estilo, él prepara el plan y llama a las herramientas. Whisper escribe cada palabra con su tiempo exacto; Silero detecta las pausas a eliminar; OpenCV sigue la cara y RVM separa a la persona del fondo; Remotion dibuja subtítulos, títulos y animaciones; FFmpeg corta, ajusta el audio y exporta el archivo para Instagram y TikTok."
    },
    {
      "type": "h2",
      "heading": "2. Qué necesitas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/03-slide-03.webp",
      "alt": "Montar videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Un PC con **Windows 10 (versión 1809 o posterior) o Windows 11** y al menos 4 GB de RAM (para video se recomiendan más: 16 GB son adecuados). Las cinco herramientas son gratuitas; solo necesitas una suscripción a Claude."
    },
    {
      "type": "table",
      "headers": [
        "Qué",
        "Coste",
        "Comando en Windows (PowerShell)"
      ],
      "rows": [
        [
          "**Claude Pro** (incluye Claude Code)",
          "18 € al mes + IVA, o 15 € al mes + IVA con suscripción anual",
          "suscripción en claude.com/pricing"
        ],
        [
          "**Python 3.12**",
          "gratis",
          "winget install -e --id Python.Python.3.12"
        ],
        [
          "**Node.js LTS** (para Remotion)",
          "gratis",
          "winget install -e --id OpenJS.NodeJS.LTS"
        ],
        [
          "**Git para Windows** (recomendado)",
          "gratis",
          "winget install -e --id Git.Git"
        ],
        [
          "**FFmpeg**",
          "gratis",
          "winget install -e --id Gyan.FFmpeg"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** el plan gratuito de Claude **no incluye** Claude Code: se necesita Pro, Max o un plan Team/Enterprise. En el video digo «al menos 20 euros al mes»: hoy el Pro cuesta 18 € al mes más IVA (aprox. 22 € con el IVA al 22%)."
    },
    {
      "type": "h2",
      "heading": "3. Instala Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/04-slide-04.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Abre **PowerShell** (el prompt comienza con PS C:\\) y pega el comando oficial. No es necesario abrirlo como administrador."
    },
    {
      "type": "code",
      "content": "irm https://claude.ai/install.ps1 | iex\nclaude --version\nclaude"
    },
    {
      "type": "paragraph",
      "content": "En el primer inicio **claude** abre el navegador para acceder con tu cuenta. Alternativamente: **winget install Anthropic.ClaudeCode**. Crea una carpeta para los videos (por ejemplo C:\\video-editor), ábrela en la terminal y lanza claude desde allí."
    },
    {
      "type": "h2",
      "heading": "4. Whisper: cada palabra con su tiempo",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/05-slide-05.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Yo uso **faster-whisper**, una versión más rápida de Whisper que funciona bien incluso sin GPU. Crea un entorno Python en la carpeta del proyecto e instálalo:"
    },
    {
      "type": "code",
      "content": "py -3.12 -m venv .venv\n.venv\\Scripts\\activate\npip install faster-whisper"
    },
    {
      "type": "paragraph",
      "content": "Con **word_timestamps** obtienes el inicio y el fin de cada palabra: de aquí nacen los subtítulos y los cortes al segundo exacto. El modelo **large-v3** es el más preciso en italiano (pesa alrededor de 3 GB, se descarga solo la primera vez)."
    },
    {
      "type": "code",
      "content": "from faster_whisper import WhisperModel\nmodel = WhisperModel(\"large-v3\", device=\"cpu\", compute_type=\"int8\")\nsegments, _ = model.transcribe(\"video.mp4\", language=\"it\", word_timestamps=True)\nfor s in segments:\n    for w in s.words:\n        print(f\"{w.start:.2f} {w.end:.2f} {w.word}\")"
    },
    {
      "type": "h2",
      "heading": "5. Silero VAD: elimina las pausas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/06-slide-06.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué es Silero VAD?** Es un detector de voz: para cada fragmento de audio indica si estás hablando o no. Con estos tiempos Claude corta las pausas innecesarias. En el video 16 eliminó 3,4 segundos de pausas en 73."
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
      "content": "**Importante:** corta solo las pausas más largas de un par de décimas de segundo y deja un poco de espacio antes y después de cada frase, de lo contrario el habla parece «masticada». Y alinea los cortes a los fotogramas (30 por segundo), así el audio no se desincroniza."
    },
    {
      "type": "h2",
      "heading": "6. Rostro y fondo: OpenCV y RVM",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/07-slide-07.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "**OpenCV** encuentra la cara en cada fotograma: sirve para colocar los subtítulos a la altura correcta y para los zoom. **RVM (Robust Video Matting)** separa a la persona del fondo, fotograma a fotograma: así puedes cambiar el fondo, ponerlo en blanco y negro o escribir un texto detrás de ti. En Mac el mismo trabajo lo hace **Apple Vision**, ya incluido en el sistema."
    },
    {
      "type": "code",
      "content": "pip install opencv-python onnxruntime numpy"
    },
    {
      "type": "paragraph",
      "content": "El modelo de RVM se descarga de la página Releases del proyecto en GitHub: yo uso **rvm_mobilenetv3_fp32.onnx**, que funciona en el procesador sin tarjeta gráfica. RVM tiene licencia **GPL-3.0**: puedes usarlo para tus videos; si lo incluyes en un software que distribuyes, se aplican las obligaciones de la GPL."
    },
    {
      "type": "h2",
      "heading": "7. Remotion: subtítulos, títulos y animaciones",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/08-slide-08.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Remotion crea videos con código (React): cada texto, subtítulo o animación es un componente que Claude escribe por ti. Crea el proyecto con:"
    },
    {
      "type": "code",
      "content": "npx create-video@latest\nnpm run dev"
    },
    {
      "type": "callout",
      "content": "**Licencia:** Remotion es gratuito para **personas individuales**, para **empresas de hasta 3 empleados** y para organizaciones sin ánimo de lucro. Con más de 3 empleados se necesita la **Company License** (remotion.dev/docs/license)."
    },
    {
      "type": "h2",
      "heading": "8. FFmpeg: corte, audio y exportación",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/09-slide-09.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "FFmpeg es el cuchillo suizo del video: corta, une, baja la música bajo la voz y comprime el archivo. Para Instagram y TikTok exporto en **vertical 1080 × 1920**, 30 fps, H.264 y audio AAC, con la voz alrededor de **-14 LUFS** (el nivel que normalizan las plataformas)."
    },
    {
      "type": "code",
      "content": "ffmpeg -i montato.mp4 -vf \"scale=1080:1920\" -r 30 -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p -af loudnorm=I=-14:TP=-1.5:LRA=11 -c:a aac -b:a 256k -ar 48000 -movflags +faststart reel.mp4"
    },
    {
      "type": "h2",
      "heading": "9. El archivo CLAUDE.md y el primer prompt",
      "content": "En la carpeta del proyecto crea un archivo **CLAUDE.md**: Claude lo lee en cada sesión. Escríbele tus reglas de estilo, así no las repites cada vez. Un ejemplo para adaptar:"
    },
    {
      "type": "code",
      "content": "# Regole per i miei reel\n- Formato 9:16, 1080x1920, 30 fps.\n- Trascrizione con faster-whisper large-v3, lingua italiana.\n- Taglia le pause con Silero VAD (solo oltre 0,2 s, tagli sui fotogrammi).\n- Sottotitoli grandi, 2-4 parole, una parola chiave evidenziata nel mio colore.\n- Grafiche con Remotion: poche parole, icone e loghi veri.\n- Musica sempre almeno 15 dB sotto la voce.\n- Export finale con FFmpeg a -14 LUFS."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "En la carpeta video-grezzi está mi reel. Transcríbelo con faster‑whisper, elimina las pausas con Silero, añade subtítulos con Remotion siguiendo el CLAUDE.md y expórtalo con FFmpeg para Instagram. Antes de renderizar muéstrame el plan de cortes y 5 fotogramas de prueba."
    },
    {
      "type": "paragraph",
      "content": "Pedir el plan y los fotogramas antes del render te permite corregir errores cuando cuestan poco."
    },
    {
      "type": "h2",
      "heading": "Best practice y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/montare-video-con-claude-code/10-slide-10.webp",
      "alt": "Montar los videos con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Empieza con un video corto y una sola cosa a la vez (primero los subtítulos, luego los cortes, luego los gráficos). Conserva el material original, revisa siempre la vista previa y escribe en el CLAUDE.md cada corrección: el video quedará mejor. Si prefieres usar una pipeline ya funcional, podemos instalarla y adaptarla a tu estilo."
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparación para tu caso?",
      "content": "**Si quieres que te ayudemos, escríbenos.** Cuéntanos qué video haces y con qué ordenador: te diremos cómo configurar la pipeline."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descargar el PDF](/guide/montare-video-con-claude-code.pdf) (PDF en italiano)"
    }
  ]
}

export default post
