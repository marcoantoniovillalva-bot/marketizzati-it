import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "voicestudio-doppiaggio-open-source",
  "title": "VoiceStudio, el estudio de doblaje de código abierto en tu ordenador",
  "description": "La guía prometida en el video: enlace al repositorio oficial de VoiceStudio, requisitos, instalación paso a paso en Windows, Mac y Linux, primera voz…",
  "date": "2026-10-27",
  "readTime": 11,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "VoiceStudio",
    "el estudio de doblaje de código abierto en tu ordenador",
    "La guía prometida en el video",
    "enlace al repositorio oficial de VoiceStudio",
    "requisitos"
  ],
  "image": "/images/blog/covers/voicestudio-doppiaggio-open-source-wide.es.webp",
  "imageTall": "/images/blog/covers/voicestudio-doppiaggio-open-source-tall.es.webp",
  "videoPreview": "/videos/preview/voicestudio-doppiaggio-open-source.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7701699199821253920",
  "imageAlt": "VoiceStudio, la alternativa de código abierto y local a ElevenLabs: enlace, requisitos, instalación, licencias y casos de uso",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/01-slide-01.webp",
      "alt": "VoiceStudio, la alternativa de código abierto y local a ElevenLabs: enlace, requisitos, instalación, licencias y casos de uso"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "En el video hablo de **VoiceStudio**, proyecto open source muy popular en GitHub: clona voces, dobla videos, transcribe audio, crea audiolibros y se conecta a agentes IA, **todo en tu ordenador**. Aquí tienes el enlace al repositorio, requisitos y guía de instalación, además de costos, licencias y uso empresarial. Información verificada el 27 de octubre de 2026."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprenderás a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "entender qué hace VoiceStudio y cuándo puede sustituir una suscripción como ElevenLabs;",
        "comprobar en 2 minutos si tu ordenador es adecuado (8 GB de RAM, 10 GB de espacio);",
        "instalarlo en Windows, Mac o Linux y crear la primera voz;",
        "conectarlo a Claude Code, Codex o Cursor con API y MCP;",
        "conocer las licencias, porque la app es gratuita pero el modelo de voz predeterminado no es para uso comercial;",
        "resolver por ti mismo los problemas más comunes."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** **la app es gratis también para trabajo, los modelos de voz tienen licencias propias.** El modelo predeterminado (OmniVoice) tiene una licencia **no comercial** (CC-BY-NC). Pruébalo libremente; antes de publicar contenido para tu empresa elige un modelo con licencia adecuada o pide consejo. Y clona solo voces de personas que te hayan dado su consentimiento."
    },
    {
      "type": "cta",
      "heading": "¿Quieres una voz corporativa bajo tu control?",
      "content": "Si quieres usar VoiceStudio para cursos, videos o agentes de voz sin perder horas entre instalación, modelos y licencias, escríbeme por WhatsApp: veamos juntos por dónde empezar."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales (el prometido en el video es el primero)",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Repositorio GitHub de VoiceStudio (debpalash/VoiceStudio)](https://github.com/debpalash/VoiceStudio)",
        "[Descarga: última versión (Windows, Mac, Linux, Android)](https://github.com/debpalash/VoiceStudio/releases/latest)",
        "[Sitio oficial y requisitos de hardware](https://voicestudio.sh/download)",
        "[Guía de instalación para Windows](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/windows.md)",
        "[Guía de instalación para macOS](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/macos.md)",
        "[Guía de instalación para Linux](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/linux.md)",
        "[Resolución de problemas](https://github.com/debpalash/VoiceStudio/blob/main/docs/install/troubleshooting.md)",
        "[Conectar los agentes con MCP](https://voicestudio.sh/docs/mcp)",
        "[Licencia en palabras sencillas](https://voicestudio.sh/license)",
        "[Modelo predeterminado OmniVoice y su licencia (Hugging Face)](https://huggingface.co/k2-fsa/OmniVoice)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué es VoiceStudio y qué puede hacer",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/02-slide-02.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué es VoiceStudio?** App **open source** (AGPL‑3.0) que funciona en tu PC, alternativa a ElevenLabs. Creada por Palash Debnath, antes **OmniVoice Studio**, con ~90 000 estrellas (27 oct 2026) y versión **0.5.7**. No necesita cuenta; solo se conecta al descargar modelo."
    },
    {
      "type": "table",
      "headers": [
        "Función",
        "Qué hace",
        "Ejemplo en empresa"
      ],
      "rows": [
        [
          "**Clonación de voz**",
          "copia una voz a partir de una breve grabación limpia (según el sitio suelen bastar 3 segundos)",
          "tu voz para las lecciones de un curso"
        ],
        [
          "**Voice design**",
          "crea una nueva voz a partir de una descripción: género, edad, acento, tono",
          "una voz de marca para los videos"
        ],
        [
          "**Doblaje de video**",
          "transcribe, traduce y vuelve a doblar, cada persona con su voz y los tiempos originales; también exporta los subtítulos",
          "el mismo video en inglés o español"
        ],
        [
          "**Dictado y transcripción**",
          "del audio al texto, también con un widget para dictar",
          "actas de reuniones, textos a partir de los audios"
        ],
        [
          "**Audiolibros y cuentos**",
          "textos largos leídos por capítulos, con trabajos en cola",
          "un ebook convertido en audio"
        ],
        [
          "**API y MCP**",
          "API local compatible con OpenAI y servidor MCP para agentes IA",
          "Claude Code que genera audio por sí solo"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** el proyecto declara **646 idiomas**, incluido el italiano. La calidad final depende del modelo elegido y de tu PC: siempre haz una prueba con tus textos antes de decidir."
    },
    {
      "type": "h2",
      "heading": "2. Requisitos: qué necesitas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/03-slide-03.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "En el video dije \"mínimo 8 GB de RAM\": es el control que la app hace al instalarse. El sitio recomienda **16 GB o más** para trabajar cómodamente, sobre todo con los doblajes. La tarjeta gráfica (GPU) no es obligatoria: sin ella, la app funciona con el procesador, solo más lento."
    },
    {
      "type": "table",
      "headers": [
        "Requisito",
        "Detalle",
        "Notas"
      ],
      "rows": [
        [
          "**Memoria (RAM)**",
          "8 GB mínimo, 16 GB o más recomendados",
          "con 8 GB los trabajos largos pueden bloquearse"
        ],
        [
          "**Espacio en disco**",
          "aprox. 10 GB libres para la app, entorno Python y modelos",
          "sin GPU NVIDIA bastan aprox. 5 GB"
        ],
        [
          "**Windows**",
          "Windows 10 o 11 de 64 bits (x64)",
          "Windows en ARM: experimental"
        ],
        [
          "**Mac**",
          "Apple Silicon (M1-M5) con macOS 13.3 o posterior",
          "**Mac Intel: no soportados** para el motor local"
        ],
        [
          "**Linux**",
          "x86_64 (AppImage, .deb, Snap) o Docker",
          "AppImage requiere glibc 2.39 o posterior"
        ],
        [
          "**GPU (opcional)**",
          "NVIDIA con CUDA en Windows y Linux; Metal automático en los Mac Apple Silicon",
          "4 GB de memoria de vídeo son suficientes para empezar"
        ],
        [
          "**Programas extra**",
          "ninguno: Python, FFmpeg y los modelos los descarga la app al primer inicio",
          "se necesita una conexión para las descargas iniciales"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "3. Instalación paso a paso",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/04-slide-04.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje de código abierto en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "La forma más sencilla es descargar el instalador desde la página **Releases** de GitHub (sin cuenta, sin pago). La última versión verificada es la **0.5.7 del 26 de octubre de 2026**: en Windows el archivo se llama **VoiceStudio-0.5.7-win-x64.exe** (≈ 222 MB), en Mac **VoiceStudio-0.5.7-mac-arm64.dmg** (≈ 281 MB)."
    },
    {
      "type": "list",
      "items": [
        "**Descarga** el instalador adecuado para tu sistema desde [github.com/debpalash/VoiceStudio/releases/latest](https://github.com/debpalash/VoiceStudio/releases/latest). Descarga solo aquí o desde voicestudio.sh, nunca de sitios copiados.",
        "**Instala.** En Windows abre el .exe: instala para tu usuario, sin derechos de administrador. En Mac abre el .dmg y arrastra la app a Aplicaciones; al primer inicio clic derecho → **Abrir** para confirmar.",
        "**Primer inicio.** El asistente verifica el PC (RAM, disco, GPU) y descarga Python, FFmpeg y los componentes necesarios. Puede tardar varios minutos: deja el equipo encendido y conectado.",
        "**Modelo de voz.** Cuando la app lo solicite, instala el modelo. Los modelos sin licencia comercial clara, incluido el predeterminado, requieren **aceptar la licencia** una vez en el Catálogo de modelos.",
        "**Comprobación final.** En **Settings → About → Run self-check** la app verifica por sí sola el dispositivo, FFmpeg, espacio en disco, RAM y motores instalados."
      ]
    },
    {
      "type": "code",
      "content": "# In alternativa, installazione con un comando\n# Windows (PowerShell, non come amministratore):\nirm https://voicestudio.sh/install.ps1 | iex\n# macOS (Apple Silicon) e Linux (Terminale):\ncurl -fsSL https://voicestudio.sh/install | sh\n# Server o computer con Docker (interfaccia web su http://localhost:3900):\ndocker run -d --pull always --name omnivoice -p 127.0.0.1:3900:3900 -v omnivoice-data:/app/omnivoice_data palashdeb/omnivoice-studio:latest"
    },
    {
      "type": "code",
      "label": "PROMPT · Haz que tu agente IA (Claude Code, Codex, Cursor) lo instale",
      "content": "Install the VoiceStudio Electron app on this device and verify it works, following https://github.com/debpalash/VoiceStudio/blob/main/docs/install/agent.md"
    },
    {
      "type": "paragraph",
      "content": "es el prompt oficial del README: el agente revisa tu hardware, pide permiso antes de descargar un modelo (con tamaño y licencia) y al final genera una prueba de audio. Puedes añadir \"respóndeme en italiano\"."
    },
    {
      "type": "h2",
      "heading": "4. La primera voz en 5 minutos",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/05-slide-05.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje de código abierto en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "Abre **Voice cloning**, elige una voz de ejemplo o añade una grabación limpia de la voz a copiar, escribe el texto y pulsa generar. Si falta el modelo, la app te sugiere instalarlo. Alternativamente usa **Voice design**: describe la voz con palabras (p. ej. \"voz femenina, adulta, tono cálido y calmado\") y VoiceStudio la crea sin grabaciones."
    },
    {
      "type": "list",
      "items": [
        "**Grabación de referencia:** habitación silenciosa, sin música, una sola persona hablando, buen micrófono. Mejor unos segundos limpios que un minuto ruidoso.",
        "**Consentimiento:** clona solo tu propia voz o la de quien te haya dado permiso por escrito. Suplantar a alguien está prohibido por las normas del proyecto (y por la ley).",
        "**Prueba antes de publicar:** escucha nombres propios, números y palabras extranjeras; si es necesario corrige la pronunciación en el texto."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Conectarlo a los agentes IA con API y MCP",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/06-slide-06.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué es el MCP?** El Model Context Protocol es el estándar con el que un agente IA como Claude Code usa herramientas externas. Cuando VoiceStudio está abierto, su servidor MCP ya está activo en **http://localhost:3900/mcp/** (con la barra final), sin claves. Desde los agentes puedes generar habla, clonar o diseñar una voz, transcribir y ver las voces disponibles. Para programadores también hay una **API local compatible con OpenAI** en el puerto 3900."
    },
    {
      "type": "code",
      "content": "# Claude Code: aggiunge VoiceStudio come server MCP (con l'app VoiceStudio aperta)\nclaude mcp add --transport http voicestudio http://localhost:3900/mcp/"
    },
    {
      "type": "code",
      "label": "PROMPT · Audio a partir de un texto, directamente desde el agente",
      "content": "Usa VoiceStudio para leer este texto con la voz [nombre del perfil] y guarda el audio en la carpeta del proyecto: [pega el texto]"
    },
    {
      "type": "paragraph",
      "content": "el agente usa la herramienta generate_speech de VoiceStudio: nada de copiar‑pegar entre programas, y el audio no sale de tu ordenador."
    },
    {
      "type": "callout",
      "content": "**Importante:** el servidor MCP **no tiene contraseña**: nunca lo expongas a internet. Para usarlo desde otro ordenador de la red hay **Settings → Sharing → Local network** con un PIN, solo en redes de confianza. El comando claude mcp add arriba sigue la sintaxis estándar de Claude Code; alternativamente la app exporta configuraciones listas en la sección **Integrations** (Claude Code, Cursor, Codex CLI)."
    },
    {
      "type": "h2",
      "heading": "6. Cómo usarlo en tu empresa",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/07-slide-07.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "La verdadera ventaja, como digo en el video, es tener \"un estudio de doblaje dentro de la empresa\": audio, transcripciones y huellas de voz permanecen en tu ordenador y no se suben a un servicio externo. Así es como puede ahorrar tiempo a un emprendedor."
    },
    {
      "type": "table",
      "headers": [
        "Caso de uso",
        "Cómo",
        "Atención a"
      ],
      "rows": [
        [
          "**Cursos y formación**",
          "grabas unos segundos de tu voz y generas las lecciones a partir del texto",
          "licencia del modelo si el curso es de pago"
        ],
        [
          "**Video para redes sociales**",
          "voz en off para reels y tutoriales, también en varias versiones",
          "relee siempre pronunciación y ritmo"
        ],
        [
          "**Mercados extranjeros**",
          "doblaje del mismo video en otros idiomas, con subtítulos",
          "haz que un nativo revise la traducción"
        ],
        [
          "**Agentes de voz y asistentes**",
          "voz y transcripción locales conectadas a tu agente vía API o MCP",
          "Los datos de los clientes permanecen en casa: una ventaja para la privacidad"
        ],
        [
          "**Reuniones y notas de voz**",
          "transcripción de audio y voces a texto para archivar",
          "informa a los participantes que grabas"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "7. ¿Cuánto cuesta: VoiceStudio o ElevenLabs?",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/08-slide-08.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "En el video digo \"potencialmente menos costos recurrentes\": lo potencial es importante. VoiceStudio open source cuesta **0 $**, pero pagas en hardware, tiempo de configuración y, para algunos usos, licencias. Precios detectados en octubre de 2026 en las páginas oficiales, en dólares, sin impuestos."
    },
    {
      "type": "table",
      "headers": [
        "Opción",
        "Precio",
        "Qué incluye"
      ],
      "rows": [
        [
          "**VoiceStudio open source**",
          "0 $",
          "todas las funciones de la app, uso también en el trabajo; funciona en tu ordenador"
        ],
        [
          "**VoiceStudio Pro**",
          "99 $ por usuario/año, o 299 $ una sola vez (Lifetime)",
          "build cerrada con licencia comercial \"para mostrar al cliente\", 3 dispositivos, funciones en preview; no cubre las licencias de los modelos"
        ],
        [
          "**ElevenLabs Free**",
          "0 $ (10.000 créditos al mes)",
          "sin licencia comercial: obligación de citar ElevenLabs"
        ],
        [
          "**ElevenLabs Starter**",
          "6 $ al mes",
          "licencia comercial, clonación instantánea, doblaje"
        ],
        [
          "**ElevenLabs Creator / Pro**",
          "22 $ / 99 $ al mes",
          "clonación profesional, más créditos, audio de calidad superior"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "Cuando realmente conviene: si produces **mucho audio** (cursos, doblajes, muchas variantes) o manejas **datos confidenciales**, una solución local puede ser rentable. Si solo necesitas pocos minutos al mes, la máxima calidad sin complicaciones o voces telefónicas listas, un servicio cloud como ElevenLabs puede ser más cómodo. La calidad debe probarse con tus textos: no hay un test oficial independiente en italiano (**por verificar** caso por caso)."
    },
    {
      "type": "h2",
      "heading": "8. Licencias, límites y problemas comunes",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/09-slide-09.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "**La app:** licencia AGPL-3.0. Puedes usarla en el trabajo y ganar sin hacer nada. Las obligaciones aparecen solo si la **distribuyes dentro de tu producto** o si ofreces a otros **una versión modificada por internet**: en ese caso debes poner el código a disposición. **Los modelos:** el predeterminado **k2-fsa/OmniVoice** tiene código Apache 2.0 pero los pesos del modelo bajo licencia **CC-BY-NC (no comercial)**. Entre los motores alternativos, por ejemplo **VoxCPM2** indica en su ficha una licencia Apache-2.0: revisa siempre la licencia en el Catálogo de modelos o en la página [voicestudio.sh/library](https://voicestudio.sh/library) antes de uso comercial. Esta guía no es asesoría legal."
    },
    {
      "type": "table",
      "headers": [
        "Problema",
        "Causa probable",
        "Solución"
      ],
      "rows": [
        [
          "**Instalación bloqueada en \"System RAM\"**",
          "el ordenador tiene menos de 8 GB utilizables",
          "actualiza a la última versión (tolerará los 7,8 GB reales de PCs de 8 GB); si está por debajo, lo mejor es cambiar de equipo"
        ],
        [
          "**Primer arranque muy lento**",
          "está descargando Python y librerías (varios GB)",
          "deja que termine; en **Details** verás de dónde descarga y si se ha detenido"
        ],
        [
          "**Generación muy lenta**",
          "sin GPU: funciona con el procesador",
          "elige un motor ligero (KittenTTS, Supertonic-3, PocketTTS) y un modelo Whisper pequeño"
        ],
        [
          "**Memoria llena tras muchos trabajos**",
          "demasiados modelos cargados simultáneamente",
          "botón **Flush** en la parte superior → **Unload all + flush**"
        ],
        [
          "**Disco C: lleno**",
          "los motores adicionales ocupan varios GB",
          "mueve los motores a otro disco con la variable OMNIVOICE_ENGINES_DIR (ver guía Windows)"
        ],
        [
          "**El agente recibe un error de licencia**",
          "licencia del modelo aún no aceptada",
          "ábrela en el Catálogo de modelos y acéptala una vez"
        ],
        [
          "**Mac: \"la app está dañada\"**",
          "bloqueo de seguridad de macOS (Gatekeeper)",
          "sigue la sección Gatekeeper de la guía macOS"
        ],
        [
          "**Mac Intel**",
          "no soportado para el motor local",
          "úsalo conectado a un VoiceStudio en otro ordenador, o usa Windows/Linux/Mac Apple Silicon"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "9. Mejores prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/voicestudio-doppiaggio-open-source/10-slide-10.webp",
      "alt": "Guía práctica: VoiceStudio, el estudio de doblaje open source en tu ordenador"
    },
    {
      "type": "paragraph",
      "content": "Tres hábitos para usar VoiceStudio en la empresa sin sorpresas: **consentimiento escrito** para cada voz clonada, **licencia del modelo verificada** antes de publicar, **una prueba de escucha** en cada contenido antes de que llegue a los clientes. Y mantén la app actualizada: el proyecto lanza nuevas versiones muy a menudo."
    },
    {
      "type": "h3",
      "heading": "Cuando puede resultarte útil un soporte profesional",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "quieres producir cursos, vídeos o doblajes en serie pero no tienes tiempo de configurar modelos y equipos;",
        "quieres un agente de voz o una automatización que use una voz corporativa manteniendo los datos en casa;",
        "no estás seguro de qué modelos y licencias puedes usar para tus contenidos comerciales."
      ]
    },
    {
      "type": "h3",
      "heading": "¿Cómo podemos ayudarte",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Instalación y configuración de VoiceStudio en tus ordenadores o en un servidor",
        "Selección de modelos y verificación de licencias para uso comercial",
        "Automatizaciones y agentes IA vinculados a la voz (Claude Code, MCP, API)",
        "Formación para ti y tu equipo"
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparativa para tu caso?",
      "content": "Escríbeme por WhatsApp y cuéntame qué quieres hacer con la voz (cursos, vídeos, doblajes, agentes): te diré si VoiceStudio es lo que necesitas, en qué ordenador y con qué modelo."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Scarica il PDF](/guide/voicestudio-doppiaggio-open-source.pdf)"
    }
  ]
}

export default post
