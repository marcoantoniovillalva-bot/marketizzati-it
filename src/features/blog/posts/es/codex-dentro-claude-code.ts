import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "codex-dentro-claude-code",
  "title": "Codex dentro Claude Code, dos agentes IA en una sola conversación",
  "description": "La guía prometida en el video: qué es el plugin oficial de OpenAI que lleva Codex dentro de Claude Code, qué necesitas, los 4 comandos de instalación…",
  "date": "2026-10-26",
  "readTime": 12,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "Codex dentro Claude Code",
    "dos agentes IA en una sola conversación",
    "La guía prometida en el video",
    "qué es el plugin oficial de OpenAI que lleva Codex dentro de Claude Code",
    "qué necesitas"
  ],
  "image": "/images/blog/covers/codex-dentro-claude-code-wide.es.webp",
  "imageTall": "/images/blog/covers/codex-dentro-claude-code-tall.es.webp",
  "videoPreview": "/videos/preview/codex-dentro-claude-code.mp4",
  "imageAlt": "El plugin oficial de OpenAI que hace trabajar a Codex dentro de Claude Code: instalación, comandos, prompts listos, limitaciones y costos",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/01-slide-01.es.webp",
      "alt": "El plugin oficial de OpenAI que hace trabajar a Codex dentro de Claude Code: instalación, comandos, prompts listos, limitaciones y costos"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Si ya pagas Claude y ChatGPT, probablemente los usas en dos ventanas distintas. Con el **plugin Codex para Claude Code**, publicado por OpenAI como proyecto open source, puedes invocar **Codex** (el agente de programación de OpenAI) directamente desde el chat de **Claude Code**: Claude escribe, Codex revisa o asume una tarea, y tú te quedas en la misma conversación. Aquí tienes todos los comandos del video, verificados en la documentación oficial, más lo que en el video no hubo tiempo de mencionar."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprendes a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "entender qué hace el plugin y cuándo conviene usarlo;",
        "comprobar en 2 minutos que tienes todo lo necesario (planes, programas, sistema operativo);",
        "instalarlo con los 4 comandos del video y conectar tu cuenta ChatGPT;",
        "usar /codex:review, /codex:rescue y los demás comandos, con prompts listos para copiar;",
        "mantener bajo control límites, costos y seguridad;",
        "resolver por ti mismo los problemas más comunes."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** **/codex:review controla, /codex:rescue actúa.** La revisión nunca toca tus archivos; rescue, en cambio, puede modificarlos. Antes de asignar una tarea a Codex, guarda el trabajo con Git (un commit), así siempre puedes volver atrás."
    },
    {
      "type": "cta",
      "heading": "¿Quieres un equipo de agentes IA ya configurado?",
      "content": "Si deseas usar Claude Code y Codex en tus proyectos (sitio, automatizaciones, gestión) sin perder horas en configuraciones, escríbeme por WhatsApp: revisamos juntos por dónde empezar."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Plugin Codex para Claude Code (GitHub, OpenAI)](https://github.com/openai/codex-plugin-cc)",
        "[Claude Code - instalar plugin y marketplace](https://code.claude.com/docs/en/discover-plugins)",
        "[Claude Code - app Desktop](https://code.claude.com/docs/en/desktop)",
        "[Claude Code - requisitos e instalación](https://code.claude.com/docs/en/setup)",
        "[Codex CLI - instalación](https://learn.chatgpt.com/docs/codex/cli)",
        "[Codex - acceso con ChatGPT o clave API](https://learn.chatgpt.com/docs/auth)",
        "[Codex - precios y límites](https://learn.chatgpt.com/docs/pricing)",
        "[Codex con tu plan ChatGPT (centro de ayuda)](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)",
        "[Node.js - descarga](https://nodejs.org/en/download)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué es el plugin Codex para Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/02-slide-02.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué es el plugin Codex para Claude Code?** Es una extensión gratuita y de código abierto (licencia Apache 2.0) publicada por OpenAI el 30 de marzo de 2026 en el repositorio **openai/codex-plugin-cc**, que añade a Claude Code los comandos **/codex:…**. No es un programa nuevo: usa la **Codex CLI** instalada en tu ordenador, con la misma cuenta, la misma configuración y la misma carpeta de proyecto. En práctica, Claude Code se convierte en el líder del equipo y Codex el segundo agente al que puedes llamar cuando lo necesites."
    },
    {
      "type": "table",
      "headers": [
        "Quién",
        "Qué es",
        "Rol en el equipo"
      ],
      "rows": [
        [
          "**Claude Code**",
          "el agente de programación de Anthropic (app de escritorio, terminal, VS Code)",
          "el chat donde trabajas: escribe, modifica, coordina"
        ],
        [
          "**Codex**",
          "el agente de programación de OpenAI, incluido en los planes ChatGPT",
          "la segunda opinión: revisa el código o asume una tarea"
        ],
        [
          "**El plugin**",
          "el \"puente\" oficial de OpenAI (versión 1.0.6, julio 2026)",
          "añade los comandos /codex:… y un subagente llamado codex:codex-rescue"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Cuando conviene a un emprendedor:** **segunda opinión** antes de publicar un sitio o una automatización; **desbloqueo** cuando Claude da vueltas sobre un error; **ahorro** de los límites de Claude, delegando a Codex tareas largas; **control de seguridad** del código escrito por la IA."
    },
    {
      "type": "h2",
      "heading": "2. Qué necesitas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/03-slide-03.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "El plugin es gratuito, pero se necesitan los dos \"cerebros\": un plan Claude que incluya Claude Code y una cuenta ChatGPT para Codex. Precios detectados en octubre de 2026 en las páginas oficiales, en dólares y sin IVA."
    },
    {
      "type": "table",
      "headers": [
        "Requisito",
        "Detalle",
        "Costo"
      ],
      "rows": [
        [
          "**Claude Code**",
          "app Claude Desktop (pestaña Code), terminal o VS Code. El plan Free de Claude **no** incluye Claude Code",
          "Claude Pro 17 $/mes (anual) o 20 $ mensual; Max desde 100 $"
        ],
        [
          "**Cuenta ChatGPT** o clave API OpenAI",
          "Codex está incluido en los planes ChatGPT, también Free y Go; con la clave API pagas por consumo",
          "Free 0 $, Go 8 $, Plus 20 $, Pro desde 100 $ al mes"
        ],
        [
          "**Node.js 18.18 o posterior**",
          "es necesario para que el plugin funcione (y trae npm)",
          "gratis, de nodejs.org"
        ],
        [
          "**Codex CLI**",
          "si falta, la instala /codex:setup en el paso 4",
          "gratis"
        ],
        [
          "**Sistema operativo**",
          "Windows 10 1809+ (preferible Windows 11), macOS 13+, Ubuntu 20.04+",
          "-"
        ],
        [
          "**Git** (recomendado)",
          "/codex:review trabaja sobre los cambios registrados por Git; en Windows instala Git for Windows",
          "gratis, de git-scm.com"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** en el video digo que funciona también con el plan **Free** de ChatGPT, y es lo que declara OpenAI. Pero la página de precios de Codex, para Free y Go, solo menciona un modelo base \"en la app de escritorio, según disponibilidad\", mientras que la CLI está listada a partir de **Plus**. Con Free pruébalo, pero espera límites bajos: para uso regular necesitas Plus."
    },
    {
      "type": "h2",
      "heading": "3. Instalación: los 4 comandos del video",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/04-slide-04.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en una sola conversación"
    },
    {
      "type": "paragraph",
      "content": "Abre **Claude Code** (en la app Desktop, pestaña **Code**) y abre la carpeta de tu proyecto. En el chat escribe estos comandos **uno a la vez**, esperando a que cada uno termine. Son copiados del README oficial de OpenAI: escríbelos exactamente así, todo en minúsculas."
    },
    {
      "type": "code",
      "content": "# 1. Aggiunge il marketplace di OpenAI (il \"negozio\" da cui arriva il plugin)\n/plugin marketplace add openai/codex-plugin-cc\n# 2. Installa il plugin \"codex\" dal marketplace \"openai-codex\"\n/plugin install codex@openai-codex\n# 3. Ricarica i plugin per attivarlo subito\n/reload-plugins\n# 4. Controlla che Codex sia installato e collegato\n/codex:setup\n# 5. Se /codex:setup dice che non hai fatto l'accesso:\n!codex login"
    },
    {
      "type": "list",
      "items": [
        "**/plugin marketplace add openai/codex-plugin-cc** - Claude Code responde \"Successfully added marketplace\".",
        "**/plugin install codex@openai-codex** - se abre la pestaña del plugin: elige **Install for you** (lo tendrás en todos los proyectos). Atención: instala el **plugin**, aún no el programa Codex.",
        "**/reload-plugins** - activa el plugin sin reiniciar. A menudo Claude Code lo hace solo tras la instalación: volver a lanzarlo no causa daño.",
        "**/codex:setup** - verifica que la CLI de Codex esté instalada y conectada. Si falta y tienes npm, te propone **Install Codex**: acepta (ejecuta npm install -g @openai/codex).",
        "**!codex login** - el signo de exclamación ejecuta el comando desde el chat: se abre el navegador, elige **Sign in with ChatGPT** e inicia sesión. Si ya usas Codex en ese equipo, el acceso ya está hecho. Luego relanza /codex:setup para confirmar."
      ]
    },
    {
      "type": "callout",
      "content": "**Nota para la app Desktop:** si un comando /plugin responde \"isn't available in this environment\", haz lo mismo desde el menú: botón **+** junto al chat → **Plugins** (o **Add plugins**) → agrega el marketplace **openai/codex-plugin-cc** e instala **codex**. Funciona en sesiones locales y SSH, no en la nube. Desde el terminal también vale **claude plugin marketplace add openai/codex-plugin-cc** seguido de **claude plugin install codex@openai-codex**."
    },
    {
      "type": "paragraph",
      "content": "**¿Quieres instalar Codex manualmente?** En Windows abre PowerShell y ejecuta **powershell -ExecutionPolicy ByPass -c \"irm https://chatgpt.com/codex/install.ps1 | iex\"**; en Mac y Linux **curl -fsSL https://chatgpt.com/codex/install.sh | sh**; en cualquier caso **npm install -g @openai/codex**. **Cómo saber que está listo:** escribe **/codex** y verás la lista de comandos, y en **/agents** aparecerá el subagente **codex:codex-rescue**. Prueba recomendada del README: **/codex:review --background**, luego **/codex:status** y **/codex:result**."
    },
    {
      "type": "h2",
      "heading": "4. Todos los comandos y qué hacen",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/05-slide-05.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "En el video mostré dos: **/codex:rescue** para pasar una tarea y **/codex:review** para revisar el código sin modificarlo. El plugin tiene otros seis, útiles sobre todo para trabajos largos. Casi todos aceptan **--background** (trabaja en segundo plano mientras continúas con Claude) y **--wait** (esperas el resultado)."
    },
    {
      "type": "table",
      "headers": [
        "Comando",
        "Qué hace",
        "¿Modifica los archivos?"
      ],
      "rows": [
        [
          "**/codex:review**",
          "revisión del código de los cambios no guardados, o del branch respecto a main con **--base main**. Misma calidad que el /review dentro de Codex",
          "**No**"
        ],
        [
          "**/codex:adversarial-review**",
          "revisión \"crítica\": cuestiona decisiones, riesgos y alternativas. Acepta un texto libre después de las opciones",
          "**No**"
        ],
        [
          "**/codex:rescue <tarea>**",
          "pasa una tarea a Codex: investigar un bug, probar una corrección, continuar un trabajo. Opciones **--resume**, **--fresh**, **--model**, **--effort**",
          "**Sí, puede**"
        ],
        [
          "**/codex:status**",
          "muestra los trabajos de Codex en curso y recientes en el proyecto",
          "No"
        ],
        [
          "**/codex:result**",
          "muestra el resultado final de un trabajo y el ID para reabrirlo en Codex",
          "No"
        ],
        [
          "**/codex:cancel**",
          "detiene un trabajo en segundo plano",
          "No"
        ],
        [
          "**/codex:transfer**",
          "convierte la conversación de Claude Code en una sesión Codex para continuar con **codex resume <id>**",
          "No"
        ],
        [
          "**/codex:setup**",
          "verifica la instalación y el acceso; activa o desactiva la \"review gate\"",
          "No"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**También puedes pedirlo con palabras:** escribe a Claude \"pide a Codex que…\" y Claude pasa la tarea al subagente codex:codex-rescue. Las **review** solo se inician cuando las lanzas tú con el comando: Claude no puede iniciarlas solo."
    },
    {
      "type": "h2",
      "heading": "5. Prompt listos para copiar",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/06-slide-06.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "Escríbelos en el chat de Claude Code, en la carpeta del proyecto. Puedes escribirlos en italiano. Sustituye las partes entre corchetes. La combinación más útil es el \"equipo\": **Codex revisa, Claude corrige, tú apruebas**."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Control antes de guardar",
      "content": "/codex:review"
    },
    {
      "type": "paragraph",
      "content": "haz que Codex revise los cambios recién hechos por Claude, sin que toque nada. Si son muchos, añade --background y luego usa /codex:status y /codex:result."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Claude corrige lo que ha encontrado Codex",
      "content": "Lee la revisión de Codex arriba. Divide los problemas en críticos, importantes y menores, explícalos en palabras simples y corrige solo los críticos. Luego dime qué archivos has cambiado y qué queda por decidir."
    },
    {
      "type": "paragraph",
      "content": "es el trabajo en equipo del video: un agente controla, el otro sistema, tú decides las prioridades."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Revisión crítica antes de publicar",
      "content": "/codex:adversarial-review --base main verifica si la gestión de los datos de clientes, pagos y contraseñas es segura y qué ocurre si un servicio externo no responde"
    },
    {
      "type": "paragraph",
      "content": "no solo busca errores de escritura: cuestiona las decisiones y los riesgos, como lo haría un consultor externo."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Cuando Claude se bloquea por un error",
      "content": "/codex:rescue descubre por qué [il modulo contatti non invia le email] y corrígelo con la modificación más pequeña y segura posible. No toques otros archivos y explícamela causa."
    },
    {
      "type": "paragraph",
      "content": "el \"rescue\" (salvataggio): un segundo agente con ojos nuevos suele encontrar de inmediato lo que el primero no ve."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Solo investigación, sin modificaciones",
      "content": "/codex:rescue analiza [la pagina del carrello che a volte va in errore], encuentra las causas más probables y propone soluciones, pero no modifiques ningún archivo."
    },
    {
      "type": "paragraph",
      "content": "cuando quieres entender antes de actuar: rescue ejecuta lo que pides, así que díselo claramente que no debe tocar nada."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Tarea larga en segundo plano",
      "content": "/codex:rescue --background [aggiungi i test automatici alle funzioni di login e di pagamento]"
    },
    {
      "type": "paragraph",
      "content": "Codex trabaja mientras tú continúas con Claude. Comprueba con /codex:status, lee con /codex:result, deténlo con /codex:cancel."
    },
    {
      "type": "code",
      "label": "PROMPT 7 · Segunda opinión sobre un plan",
      "content": "Antes de proceder, pide a Codex una segunda opinión sobre este plan: [descrivi la modifica]. Quiero saber riesgos, alternativas más simples y qué podría romperse. Luego compara su respuesta con la tuya y dime qué aconsejas."
    },
    {
      "type": "paragraph",
      "content": "dos modelos de empresas diferentes razonan de forma distinta: la comparación te ayuda a decidir mejor."
    },
    {
      "type": "code",
      "label": "PROMPT 8 · Continuar el trabajo dentro de Codex",
      "content": "/codex:transfer"
    },
    {
      "type": "paragraph",
      "content": "lleva toda la conversación a Codex: copia el comando codex resume que te devuelve y continúa en la app o en el terminal de Codex. Necesita una versión reciente de Codex."
    },
    {
      "type": "h2",
      "heading": "6. Límites, costos y seguridad",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/07-slide-07.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "Cada comando /codex:… usa **los límites de tu plan ChatGPT** (los mismos de Codex en la app, web y terminal); Claude consume solo la pequeña parte necesaria para pasar la tarea y mostrarte el resultado. Con una clave API pagas por consumo según tarifas API de OpenAI. Los límites dependen del modelo, tamaño del proyecto y duración de la tarea: una revisión de muchos archivos consume mucho más que una pregunta rápida."
    },
    {
      "type": "table",
      "headers": [
        "Qué saber",
        "Por qué importa",
        "Qué hacer"
      ],
      "rows": [
        [
          "**Límites compartidos**",
          "Codex en el plugin, la app y la CLI extrae del mismo paquete",
          "controla el uso en chatgpt.com/codex/settings/usage"
        ],
        [
          "**Puerta de revisión**",
          "con /codex:setup --enable-review-gate Codex revisa cada respuesta de Claude: el README advierte que puede crear un ciclo largo y \"consumir rápidamente los límites\"",
          "actívala solo si sigues la sesión; desactívala con --disable-review-gate"
        ],
        [
          "**Rescue modifica los archivos**",
          "Codex trabaja en la misma carpeta, sobre los mismos archivos que Claude",
          "haz un commit antes y revisa los cambios después"
        ],
        [
          "**Dos empresas, dos servicios**",
          "el código que haces analizar a Codex se envía a OpenAI, el de Claude a Anthropic",
          "ninguna contraseña ni datos de clientes en el código; usa el archivo .env"
        ],
        [
          "**Trabajos largos**",
          "revisar muchos archivos y tareas complejas puede tardar minutos",
          "usa --background y /codex:status"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**¿Cuánto gastas realmente?:** plugin 0 €. Si ya tienes Claude Pro y ChatGPT Plus, **sin coste adicional**: usas los límites que ya pagas. Desde cero, la combinación recomendada es Claude Pro + ChatGPT Plus, unos 40 $ al mes (precios de octubre 2026, sin IVA)."
    },
    {
      "type": "h2",
      "heading": "7. Si algo no funciona",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/08-slide-08.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "El primer paso es siempre **/codex:setup**: te indica qué falta. En Windows el plugin aún tiene algunos issues abiertos en GitHub: si algo se comporta raro, actualiza el plugin y Codex primero."
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
          "**Los comandos /codex no aparecen**",
          "plugin aún no activo",
          "**/reload-plugins**, o cierra y vuelve a abrir la sesión; verifica en **/plugin** → Installed"
        ],
        [
          "**\"Marketplace not found\"** en la instalación",
          "falta el paso 1 o hay un error tipográfico",
          "relanza **/plugin marketplace add openai/codex-plugin-cc** y luego la instalación"
        ],
        [
          "**/codex:setup: Codex no encontrado**",
          "Codex CLI no instalada o terminal debe reabrirse",
          "acepta **Install Codex**, o **npm install -g @openai/codex**, luego vuelve a abrir Claude Code"
        ],
        [
          "**npm no encontrado**",
          "Node.js no instalado o demasiado antiguo",
          "instala Node.js LTS desde nodejs.org (requiere 18.18 o superior)"
        ],
        [
          "**Codex no autenticado**",
          "acceso no realizado en este ordenador",
          "**!codex login**; para comprobar **!codex login status**"
        ],
        [
          "**\"Límite alcanzado\"**",
          "has agotado los límites del plan ChatGPT",
          "espera el reinicio, compra créditos o cambia a un plan superior"
        ],
        [
          "**/codex:review dice que no hay nada**",
          "ninguna modificación respecto al último commit, o carpeta sin Git",
          "usa **--base main** para revisar la rama; inicializa Git en el proyecto"
        ],
        [
          "**Plugin antiguo o con errores**",
          "versión no actualizada",
          "**/plugin marketplace update openai-codex** y luego /reload-plugins"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "8. Mejores prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/codex-dentro-claude-code/09-slide-09.es.webp",
      "alt": "Guía práctica: Codex dentro de Claude Code, dos agentes IA en un solo chat"
    },
    {
      "type": "paragraph",
      "content": "Dos agentes valen el doble solo si tienen **roles claros**: Claude Code construye, Codex revisa o desbloquea, tú decides qué entra en el proyecto. Tres hábitos: un commit antes de cada tarea, una revisión antes de publicar, correcciones aprobadas por ti."
    },
    {
      "type": "h3",
      "heading": "¿Cuándo puede ser útil un soporte profesional?",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "quieres usar Claude Code y Codex pero no sabes por dónde empezar con la instalación;",
        "tienes proyectos creados con IA que nadie ha revisado nunca;",
        "quieres un flujo de trabajo con revisiones automáticas y reglas claras para tu equipo;"
      ]
    },
    {
      "type": "h3",
      "heading": "¿Cómo podemos ayudarte?",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Configuración de Claude Code, Codex y del plugin en tus ordenadores",
        "Revisiones de código y controles de seguridad con IA",
        "Automatizaciones y pequeños softwares construidos con IA",
        "Formación para ti y tu equipo"
      ]
    },
    {
      "type": "h3",
      "heading": "Recordatorio: los comandos a mano",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Comando",
        "Cuándo",
        "Qué hace"
      ],
      "rows": [
        [
          "/plugin marketplace add openai/codex-plugin-cc",
          "una sola vez",
          "añade el marketplace de OpenAI"
        ],
        [
          "/plugin install codex@openai-codex + /reload-plugins",
          "una sola vez",
          "instala y activa el plugin"
        ],
        [
          "/codex:setup",
          "si algo no funciona",
          "verifica la instalación y el acceso"
        ],
        [
          "!codex login",
          "si necesitas acceso",
          "conecta tu cuenta de ChatGPT"
        ],
        [
          "/codex:review",
          "antes de publicar",
          "revisión sin cambios"
        ],
        [
          "/codex:rescue <compito>",
          "cuando necesites ayuda",
          "pasa una tarea a Codex"
        ],
        [
          "/codex:status · /codex:result",
          "trabajos en segundo plano",
          "avance y resultado"
        ]
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparación sobre tu caso?",
      "content": "Escríbeme por WhatsApp y dime qué estás construyendo con la IA: te diré cómo organizar Claude Code y Codex para que trabajen realmente en equipo, y qué plan te conviene."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF (PDF en italiano):** [Descarga el PDF](/guide/codex-dentro-claude-code.pdf)"
    }
  ]
}

export default post
