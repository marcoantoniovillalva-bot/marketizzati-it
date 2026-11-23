import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "pluralsight-ai-mcp",
  "title": "Pluralsight AI MCP: los cursos empresariales conectados a tu IA",
  "description": "Cómo conectar Pluralsight a Claude Code, Codex y a otras herramientas de IA para crear rutas formativas a partir de objetivos de negocio y medir sus…",
  "date": "2026-10-20",
  "readTime": 9,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "Pluralsight AI MCP",
    "Cómo conectar Pluralsight a Claude Code",
    "Codex y otras herramientas de IA para crear rutas formativas a partir de objetivos de negocio y medir sus resultados",
    "Guía práctica Pluralsight",
    "práctica Pluralsight AI"
  ],
  "image": "/images/blog/covers/pluralsight-ai-mcp-wide.es.webp",
  "imageTall": "/images/blog/covers/pluralsight-ai-mcp-tall.es.webp",
  "videoPreview": "/videos/preview/pluralsight-ai-mcp.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7699552149348388129",
  "imageAlt": "Manual operativo para conectar Pluralsight a tu IA, crear rutas formativas a partir de un objetivo de negocio y medir si la formación genera resultados",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/01-slide-01.webp",
      "alt": "Manual operativo para conectar Pluralsight a tu IA, crear rutas formativas a partir de un objetivo de negocio y medir si la formación genera resultados"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "El 14 octubre 2026 Pluralsight lanzó el **AI MCP**, un conector que lleva cursos, laboratorios, análisis y datos de competencias al IA que ya usas (Claude, ChatGPT, Copilot, Gemini, Cursor). Guía para emprendedores y managers; no hace falta ser desarrollador para saber qué preguntar y leer los resultados."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprenderás a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "entender qué hace realmente la IA MCP y si tu empresa puede usarla;",
        "activarla para tu plan Pluralsight sin perder tiempo;",
        "conectarla a **Claude Code** y saber qué hay que conocer sobre **Codex**;",
        "convertir un objetivo de negocio (p.ej. reducir errores en el código) en un itinerario formativo para el equipo;",
        "medir si la formación ha mejorado tickets resueltos, tiempos de desarrollo y productividad;",
        "usar prompts listos para copiar y adaptar."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** la IA lee los datos de la formación y propone planes e informes. Las decisiones siguen siendo tuyas: Pluralsight advierte que las recomendaciones de la IA pueden ser imprecisas y deben verificarse."
    },
    {
      "type": "cta",
      "heading": "¿No tienes tiempo para configurarla?",
      "content": "La activamos nosotros para tu equipo: conexión del MCP, integración con Jira o GitHub y un primer informe de impacto listo para presentar. Escríbeme por WhatsApp y dime cuántas personas tiene tu equipo y qué resultado quieres mejorar."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales y útiles",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Comunicado oficial Pluralsight AI MCP](https://www.pluralsight.com/newsroom/press-releases/pluralsight-launches-ai-mcp-bringing-expert-led-learning-into-ai)",
        "[Guía oficial (Help Center) AI MCP](https://help.pluralsight.com/hc/en-us/articles/54384284845972-Pluralsight-AI-MCP)",
        "[Novedades 2026: AI MCP y Skill IQ Suite](https://www.pluralsight.com/resources/blog/news/2026-new-features-ai-mcp-skill-iq-suite)",
        "[Página IA de Pluralsight](https://www.pluralsight.com/ai)",
        "[Precios de los planes business](https://www.pluralsight.com/businesses/pricing)",
        "[Claude Code - conectar un servidor MCP](https://code.claude.com/docs/en/mcp)",
        "[Codex - conectar un servidor MCP](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)",
        "[Términos de uso IA de Pluralsight](https://legal.pluralsight.com/policies?name=pluralsight-artificial-intelligence-terms-of-use)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué necesitas antes de empezar",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/02-slide-02.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "La AI MCP no es una app para descargar: es una función de los planes empresariales de Pluralsight que se \"activa\" dentro de las herramientas IA de tu empresa. Primero verifica estos puntos."
    },
    {
      "type": "h3",
      "heading": "Revisión rápida",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Plan Pluralsight Team o Enterprise**: la AI MCP no está disponible para planes individuales. Para clientes business no tiene costes adicionales.",
        "**Licencia empresarial de la herramienta IA**: se necesita la cuenta de tu organización (p.ej. Claude Team/Enterprise, ChatGPT Enterprise). Una suscripción personal no basta, porque el MCP solo aparece en las herramientas vinculadas a tu plan Pluralsight.",
        "**Activación por el referente de Pluralsight**: es él quien habilita la función y te envía los materiales de configuración.",
        "**Rol de manager**: verás los análisis solo de los equipos en los que estés como manager.",
        "**Recomendado**: Jira, GitHub o GitLab ya conectados a tu IA, si quieres medir tickets y tiempos de desarrollo (capítulo 5)."
      ]
    },
    {
      "type": "callout",
      "content": "**Primera elección estratégica:** escribe en una hoja un único objetivo medible para el equipo (p.ej. \"menos bugs en producción\", \"onboarding de nuevos desarrolladores en 30 días\"). Todo lo demás de la guía parte de ahí."
    },
    {
      "type": "h2",
      "heading": "2. Activa la AI MCP para tu empresa",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/03-slide-03.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "La activación se realiza una sola vez, a nivel de plan: el administrador no puede habilitarla para un solo usuario, la habilita para toda la organización."
    },
    {
      "type": "h3",
      "heading": "Pasos operativos",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Escribe a tu referente de Pluralsight (account manager o asistencia business) y solicita activar la **AI MCP** para tu plan.",
        "Si el plan se creó antes del 7 de octubre de 2026 requiere una adhesión explícita (opt‑in); para los planes más recientes recibes igualmente el material del referente.",
        "Recibe los **materiales de setup**: contienen la dirección del servidor MCP y el método de acceso. Guárdalos: son necesarios para cada persona del equipo.",
        "El administrador habilita la función para todo el plan.",
        "Cada usuario conecta el MCP en su herramienta IA y accede tanto a Pluralsight como a la herramienta IA de tu empresa."
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** la dirección del servidor no se publica online: llega solo con el material de Pluralsight. Desconfía de guías que indiquen una \"universales\"."
    },
    {
      "type": "h2",
      "heading": "3. Conéctalo a Claude Code (y qué saber sobre Codex)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/04-slide-04.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Claude Code está entre las herramientas soportadas oficialmente. Los comandos a continuación siguen la documentación oficial de Claude Code: sustituye **<PLURALSIGHT_MCP_URL>** con la dirección que encuentres en los materiales de Pluralsight."
    },
    {
      "type": "h3",
      "heading": "Claude Code, paso a paso",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Abre la terminal en la carpeta del proyecto (o donde sea, si lo añades para tu usuario).",
        "Añade el servidor MCP de Pluralsight con el comando siguiente.",
        "Inicia Claude Code y escribe **/mcp** para acceder a Pluralsight (si el servidor usa el login vía navegador).",
        "Comprueba que aparezca \"Connected\" con **claude mcp list**.",
        "Haz la primera solicitud en italiano (encuentras los prompts en el capítulo 4)."
      ]
    },
    {
      "type": "code",
      "content": "claude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --scope user\nclaude mcp list\n# se i materiali ti danno un token invece del login:\nclaude mcp add --transport http pluralsight <PLURALSIGHT_MCP_URL> --header \"Authorization: Bearer <TOKEN>\""
    },
    {
      "type": "h3",
      "heading": "¿Y con Codex?",
      "content": "En este momento OpenAI Codex **no aparece** en la lista oficial de herramientas soportadas. Puedes intentar conectarlo con los comandos estándar de Codex, pero el requisito \"herramienta vinculada al plan empresarial\" podría bloquearlo. Si no funciona, usa Claude Code o ChatGPT Enterprise, que están soportados."
    },
    {
      "type": "code",
      "content": "codex mcp add pluralsight --url <PLURALSIGHT_MCP_URL>\ncodex mcp login pluralsight\ncodex mcp list\n# oppure nel file ~/.codex/config.toml:\n[mcp_servers.pluralsight]\nurl = \"<PLURALSIGHT_MCP_URL>\""
    },
    {
      "type": "table",
      "headers": [
        "Herramienta",
        "Soportado oficialmente",
        "Cómo se conecta"
      ],
      "rows": [
        [
          "Claude (Chat, Code, Cowork)",
          "Sí",
          "Claude Code: claude mcp add. Chat/Cowork: del admin"
        ],
        [
          "Cursor",
          "Sí",
          "Configuración MCP de Cursor"
        ],
        [
          "GitHub Copilot / VS Code",
          "Sí",
          "Configuración MCP de VS Code"
        ],
        [
          "ChatGPT (Enterprise)",
          "Sí",
          "Conectores, activados por el admin"
        ],
        [
          "Gemini Enterprise",
          "Sí",
          "Consola de administración"
        ],
        [
          "Microsoft Copilot",
          "Sí",
          "Copilot Studio"
        ],
        [
          "OpenAI Codex",
          "No listado",
          "codex mcp add (por verificar)"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Seguridad:** conecta solo servidores MCP de los que confíes y no guardes tokens o contraseñas en los archivos del proyecto compartidos con otros. Usa la opción --scope user para mantenerlos solo en tu ordenador."
    },
    {
      "type": "h2",
      "heading": "4. Del objetivo de negocio al itinerario formativo",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/05-slide-05.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Aquí está la verdadera novedad: ya no eliges los cursos uno a uno. Dale a la IA un objetivo de negocio y ella construye un plan con cursos, videos cortos, laboratorios y pruebas, y lo asigna al equipo en un canal Pluralsight."
    },
    {
      "type": "table",
      "headers": [
        "Si quieres obtener…",
        "Qué preguntar a la IA",
        "Qué controlar"
      ],
      "rows": [
        [
          "Menos errores en el código",
          "Un plan sobre pruebas, revisión de código y depuración",
          "Error en producción y revisiones rechazadas"
        ],
        [
          "Onboarding más rápido",
          "Un recorrido para los nuevos contratados en tu stack",
          "Días hasta el primer lanzamiento autónomo"
        ],
        [
          "Más seguridad",
          "Formación en seguridad de aplicaciones",
          "Vulnerabilidades encontradas en los controles"
        ],
        [
          "Migración a la nube",
          "Recorrido y certificaciones cloud",
          "Competencias verificadas (Skill IQ Verified)"
        ]
      ]
    },
    {
      "type": "code",
      "content": "Il nostro obiettivo è ridurre i bug nel servizio pagamenti. Analizza il repository e crea un piano di formazione Pluralsight per il mio team, con corsi, laboratori e un test finale. Proponi la durata in settimane."
    },
    {
      "type": "paragraph",
      "content": "Parte de un resultado de negocio concreto y te brinda un plan ya ordenado para aprobar."
    },
    {
      "type": "code",
      "content": "Cosa dovrebbe studiare dopo il mio team su Pluralsight? Metti corsi, laboratori e valutazioni in un canale e assegnalo al team [NOME TEAM]."
    },
    {
      "type": "paragraph",
      "content": "Te evita buscar los contenidos manualmente y deja todo rastreado en un canal."
    },
    {
      "type": "code",
      "content": "Trasforma gli errori emersi negli ultimi test e nelle ultime code review in un percorso Pluralsight mirato, una sezione per ogni tipo di errore."
    },
    {
      "type": "paragraph",
      "content": "Vincula la formación a los problemas reales de tu código, no a cursos genéricos."
    },
    {
      "type": "callout",
      "content": "**Nota:** estos prompts son ejemplos construidos sobre los escenarios descritos por Pluralsight. Adáptalos con el nombre del equipo, el periodo y el objetivo."
    },
    {
      "type": "h2",
      "heading": "5. Mide si la formación realmente funciona",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/06-slide-06.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "Es el punto que hace que esta herramienta sea interesante para un emprendedor: ya no cuentas los cursos completados, sino si el trabajo ha mejorado. Atención, sin embargo: los análisis de Pluralsight miden estudio y competencias; **tickets y tiempos de desarrollo provienen de Jira, GitHub o GitLab**, que debes conectar a la misma IA."
    },
    {
      "type": "table",
      "headers": [
        "Métrica",
        "De dónde proviene",
        "Qué observar"
      ],
      "rows": [
        [
          "Horas de estudio y práctica",
          "Analytics Pluralsight",
          "Constancia en el tiempo, no los picos"
        ],
        [
          "Avance del recorrido",
          "Analytics Pluralsight (ponderado por la duración)",
          "Quién está detenido y desde cuándo"
        ],
        [
          "Competencias certificadas",
          "Skill IQ Verified",
          "Aprobado / no aprobado respecto al umbral experto"
        ],
        [
          "Tiempo de cierre de tickets",
          "Jira (MCP conectado)",
          "Antes y después de la formación"
        ],
        [
          "Commit y revisiones",
          "GitHub o GitLab (MCP conectado)",
          "Revisiones rechazadas y tiempos de merge"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Skill IQ: los tres niveles",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Discovery**: prueba de unos 15 minutos para conocer el nivel inicial (repetible cada 14 días).",
        "**Prep**: exámenes de práctica para certificaciones, con intentos ilimitados.",
        "**Verified**: aprobado / no aprobado según un umbral definido por expertos; es el dato más útil para demostrar una mejora."
      ]
    },
    {
      "type": "code",
      "content": "Usando Jira e GitLab, confronta il tempo medio di chiusura dei ticket e i commit del team [NOME TEAM] nei 60 giorni prima e nei 60 giorni dopo la formazione Pluralsight. Scrivi un report di una pagina con i numeri e 3 conclusioni."
    },
    {
      "type": "paragraph",
      "content": "Es el informe que puedes llevar a la reunión para decidir si seguir invirtiendo."
    },
    {
      "type": "callout",
      "content": "**Regla práctica:** fotografía los números antes de iniciar la formación. Sin un \"antes\", cualquier \"después\" es una opinión."
    },
    {
      "type": "h2",
      "heading": "6. Rutina mensual para el manager",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Semana 1: elige un objetivo para el equipo y guarda los números de partida.",
        "Semana 1: pide a la IA el plan formativo y asígnalo en un canal.",
        "Semana 2: revisa quién está estancado y solicita a la IA un resumen por persona.",
        "Semana 3: haz que los que terminaron una parte del recorrido realicen el test Skill IQ.",
        "Semana 4: solicita el informe antes/después con Jira o GitLab y decide: continuar, cambiar o detenerse."
      ]
    },
    {
      "type": "h3",
      "heading": "Límites y seguridad que debes conocer",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "hay un límite diario de peticiones por usuario, además de los límites de tu herramienta IA;",
        "el comunicado habla de acceso solo lectura, pero la guía oficial indica que el MCP también puede crear canales y asignar equipos: verifica siempre antes de confirmar;",
        "las recomendaciones de la IA deben ser validadas por una persona;",
        "el uso de datos está regulado por los términos de IA y la política de privacidad de Pluralsight (enlace al inicio)."
      ]
    },
    {
      "type": "h2",
      "heading": "7. Buenas prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/pluralsight-ai-mcp/07-slide-07.webp",
      "alt": "Guía práctica: Pluralsight AI MCP"
    },
    {
      "type": "paragraph",
      "content": "El AI MCP reduce mucho el tiempo para planificar y medir la formación. Pero el valor llega solo si el objetivo es claro, los datos iniciales son fiables y las herramientas (Pluralsight, Jira, GitHub, tu IA) están bien conectadas."
    },
    {
      "type": "h3",
      "heading": "Cuando puede resultarte útil un soporte profesional",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "no tienes tiempo de configurar MCP y herramientas de IA para todo el equipo;",
        "quieres conectar Jira o GitHub para medir el impacto real;",
        "debes presentar a la dirección un informe sobre el retorno de la formación;",
        "quieres usar la IA también para automatizar otros procesos empresariales."
      ]
    },
    {
      "type": "h3",
      "heading": "Cómo podemos ayudarte",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Configuración de los MCP y de las herramientas de IA empresariales",
        "Conexión de Jira, GitHub y GitLab",
        "Informe de impacto de la formación",
        "Formación práctica del equipo en el uso de la IA",
        "Automatizaciones a medida para tu empresa"
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una conversación sobre tu caso?",
      "content": "Escríbeme por WhatsApp, dime cuántas personas tiene tu equipo y qué resultado quieres mejorar: te indicaré el primer paso a seguir."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Scarica il PDF](/guide/pluralsight-ai-mcp.pdf) (PDF en italiano)"
    }
  ]
}

export default post
