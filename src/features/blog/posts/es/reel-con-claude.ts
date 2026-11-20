import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "reel-con-claude",
  "title": "Reel con Claude: montar los reels con Claude Code",
  "description": "El flujo real de Marco y el recorrido simplificado para un emprendedor",
  "date": "2026-10-31",
  "readTime": 10,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guía práctica Reel con Claude",
    "El flujo real de Marco y el recorrido simplificado para un emprendedor",
    "Guía práctica Reel",
    "práctica Reel con",
    "Reel con Claude",
    "con Claude Il"
  ],
  "image": "/images/blog/covers/reel-con-claude-wide.es.webp",
  "imageTall": "/images/blog/covers/reel-con-claude-tall.es.webp",
  "videoPreview": "/videos/preview/reel-con-claude.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7702845855186832673",
  "imageAlt": "Reel con Claude — el paso a paso para empezar y qué automatizar después",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/01-slide-01.webp",
      "alt": "Reel con Claude — el paso a paso para empezar y qué automatizar después"
    },
    {
      "type": "h2",
      "heading": "Antes de empezar: lo que encontrarás",
      "content": ""
    },
    {
      "type": "intro",
      "content": "En el video te prometí el **paso a paso gratuito** para hacer lo mismo: partir del material grabado, montar un reel, preparar portada, textos y recurso, llegar a la publicación y la entrega por DM. Aquí tienes el sistema que he construido y una versión más sencilla para tu empresa. **La guía es gratuita; las herramientas no son todas gratuitas.** Fuentes oficiales verificadas el 31 de octubre de 2026."
    },
    {
      "type": "list",
      "items": [
        "Prepara tu primer reel con una carpeta, un agente y una plantilla reutilizable.",
        "Usa los prompts listos para montaje, guía y textos; revisa el resultado antes de publicar.",
        "Añade enlaces y DM solo después de una prueba; conoce costos y límites."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** un prompt breve funciona bien **después** de que hayas preparado un sistema. La primera configuración lleva tiempo y puede requerir ayuda técnica. No es necesario recrear todo mi software para empezar."
    },
    {
      "type": "cta",
      "heading": "¿Quieres el flujo listo para tu negocio?",
      "content": "**Si quieres que lo hagamos nosotros, escríbenos.** Partimos de tu forma de trabajar, preparamos plantillas y enlaces y te mostramos cómo usarlos."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales para comenzar",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Claude Code e instalación](https://code.claude.com/docs/en/overview)",
        "[Habilidades reutilizables](https://code.claude.com/docs/en/skills)",
        "[Remotion y licencia](https://www.remotion.dev/docs/license)",
        "[HyperFrames, alternativa HTML](https://github.com/heygen-com/hyperframes)",
        "[Composio para Instagram](https://docs.composio.dev/toolkits/instagram)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué he construido realmente",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/02-slide-02.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**He conectado herramientas y scripts en una pipeline personalizada.** Claude guía el trabajo y llama a instrucciones guardadas; la transcripción, captura y render los hacen programas. Requiere revisión humana."
    },
    {
      "type": "table",
      "headers": [
        "Paso real",
        "Qué hay detrás",
        "Versión simple"
      ],
      "rows": [
        [
          "Montaje",
          "Whisper/faster-whisper, Python, corrección de subtítulos, seguimiento facial, plano zoom y renderizado con Remotion.",
          "Una plantilla, subtítulos corregidos y pocos zoom."
        ],
        [
          "Tutorial y gráficos",
          "Playwright registra páginas y acciones reales; b‑roll y poses de la mascota están sincronizados.",
          "Graba tú la demo; usa dos iconos o una pose ya preparada."
        ],
        [
          "Guía y textos",
          "Especificaciones JSON, diapositivas HTML, DOCX y conversión PDF; portada a partir de fotograma real.",
          "Un documento breve, un título y cuatro descripciones controladas."
        ],
        [
          "Publicación y DM",
          "Motor separado con cola, API, cuentas vinculadas, webhook y reglas por palabra/publicación.",
          "Publícalo tú y entrega inicialmente el enlace a mano."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "En mi flujo actual el desenfoque y la corrección de color son un trabajo aparte: puedes omitirlos al iniciar. Algunos scripts editoriales usan API de consumo mediante OpenRouter; no están incluidos automáticamente en la suscripción a Claude. El sistema de publicación está personalizado: **no es Composio**."
    },
    {
      "type": "h2",
      "heading": "2. Prepara una vez tu pequeño sistema",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/03-slide-03.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "Necesitas un ordenador, el metraje, el guion exacto y tus recursos de marca. Empieza con **un video corto**, por ejemplo 30–60 segundos: es una recomendación de trabajo, no un límite técnico. Si ya tienes un plan adecuado de Claude Code o Codex, úsalo sin comprar otros servicios. [Playwright](https://playwright.dev/docs/intro) solo sirve si automatizas las grabaciones."
    },
    {
      "type": "list",
      "items": [
        "Crea una carpeta llamada **Reel empresa**, con tres subcarpetas: **Entrada**, **Trabajo**, **Entrega**. En Entrada coloca una copia del video, el guion y el logo. Conserva los originales.",
        "Instala Claude Code siguiendo la página oficial e inicia sesión. Abre la carpeta de trabajo en el programa. Si la instalación se bloquea, copia el mensaje al agente y pídele que explique el problema en italiano. No pegues contraseñas ni claves en el chat.",
        "Haz que prepare **una sola plantilla**: vertical, subtítulos legibles, colores de tu marca y dos niveles de zoom. Elige Remotion si partes de una plantilla React; HyperFrames es una alternativa HTML. No necesitas ambos.",
        "Guarda las instrucciones aprobadas como skill. Descarga la skill ya preparada desde este enlace: [SKILL_Reel_Semplice.md](https://drive.google.com/file/d/19u4cdUSEhG1XZxKIrk8PpQVPD2HiZE7c/view?usp=sharing). Luego pide al agente que la adapte e instale como skill de proyecto según la documentación oficial. Es un punto de partida, no un editor ya instalado."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Prepara en esta carpeta un flujo para un reel vertical. Lee Entrada y conserva los originales. Primero verifica el ordenador y dependencias; explícale qué falta. Usa un solo motor, Remotion o HyperFrames, con licencia adecuada para mi empresa. Crea una plantilla mínima con subtítulos y dos zoom; sin música generada, desenfoque o servicios de pago. Guarda los resultados en Trabajo y Entrega. Antes de descargar componentes grandes indícame tamaño y motivo. No publiques nada. Dame una vista previa de 10 segundos e instrucciones simples para reutilizar la plantilla."
    },
    {
      "type": "paragraph",
      "content": "Hace visible el trabajo inicial y te permite aprobar un estilo antes de procesar todo el video."
    },
    {
      "type": "h2",
      "heading": "3. Del metraje al primer reel",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/04-slide-04.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Primero léelo, luego míralo y escúchalo.** Whisper reconoce el habla; nombres, siglas y puntuación pueden estar equivocados. Una plantilla reutilizable reduce el trabajo, pero la dirección y el control siguen siendo importantes. El modelo local no tiene tarifa por minuto: usa memoria y procesador, y en CPU puede tardar bastante tiempo."
    },
    {
      "type": "list",
      "items": [
        "Haz que transcriban el material en italiano con marcas de tiempo, comparando el resultado con el guion. Corrige primero los nombres de las herramientas y la palabra de la CTA.",
        "Corta solo esperas y partes acordadas. Pide subtítulos breves y un cambio de zoom en las frases clave; evita un efecto distinto en cada palabra.",
        "Añade tu propia grabación de pantalla en los puntos del tutorial. Para el primer video puedes grabarla manualmente; Playwright es una opción avanzada. Tú gestionas el login y los consentimientos.",
        "Revisa la vista previa de 10 segundos, corrige estilo y posición de los subtítulos, luego solicita el MP4 completo. Formato: 1080×1920, 30 fps, voz comprensible. Verifica también en el móvil."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Usa la plantilla aprobada para el video de Entrada. Compara la transcripción con el guion, señala palabras dudosas y conserva las marcas de tiempo. Corta solo esperas iniciales/finales y pausas aprobadas. Pon subtítulos breves y pocos zooms en frases importantes; no cubras la cara. Usa solo los materiales proporcionados con fuente y licencia anotadas. Crea la vista previa y luego el MP4 completo; prepara una lista de verificación sin publicar."
    },
    {
      "type": "paragraph",
      "content": "Hace que la solicitud sea repetible y reduce el riesgo de correcciones creativas no deseadas."
    },
    {
      "type": "callout",
      "content": "**Control antes de continuar:** ninguna palabra recortada, subtítulos correctos, cara y título dentro del recorte social, música más baja que la voz. Una voz clara vale más que una mascota animada. Si algo es incierto, corrígelo antes del render final."
    },
    {
      "type": "h2",
      "heading": "4. Portada, textos y recurso útil",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/05-slide-05.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "El recurso debe mantener **la promesa hecha en el video**. Primero identifica la palabra a comentar y el material a enviar; luego prepara una guía concreta con pasos, enlaces y limitaciones. La portada parte de un fotograma real, muestra tu cara y usa un título corto. Las imágenes generadas son opcionales; puedes usar el fotograma con texto y logo sin costes adicionales."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Del guion aprobado extrae tema, palabra CTA y promesa exacta. Prepara una guía compacta en italiano que cumpla la promesa, con enlaces oficiales verificados, acciones simples, costos y límites. No inventes funciones, resultados o precios. Escribe textos distintos para Instagram, TikTok, LinkedIn y YouTube Shorts; Instagram y TikTok bajo 2.200 caracteres incluidos los hashtags. Usa una sola palabra CTA. Propón un título de portada en dos líneas y un fotograma real nítido. Guarda un borrador de la guía en DOCX/PDF y los textos en Entrega. Deja [LINK_GUIDA_DA_INSERIRE] hasta que te proporcione la URL pública."
    },
    {
      "type": "paragraph",
      "content": "mantiene coherentes video, guía y comentario sin prometer más de lo que entregas."
    },
    {
      "type": "list",
      "items": [
        "Abre el PDF y revisa cada página. Verifica que los enlaces y capturas no contengan datos privados y que los pasos sean aplicables a tu negocio.",
        "Carga la guía en tu carpeta Drive, configura el acceso que deseas ofrecer a los lectores y prueba el enlace en una ventana sin iniciar sesión. Luego sustituye el marcador de posición en los textos.",
        "Revisa la portada y el recorte de la cuadrícula: título y rostro deben quedar centrados. Lee de nuevo las cuatro descripciones antes de copiarlas a las plataformas."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Publicación y DM sin complicarte",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/06-slide-06.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Primero publica y entrega tú.** Prueba el reel, la palabra RECURSO y el enlace de la guía con un contacto disponible para pruebas. Cuando funcione puedes automatizar un solo canal. Composio puede simplificar la conexión a Instagram; no monta el video ni crea por sí mismo un sistema completo de comentarios y mensajes."
    },
    {
      "type": "list",
      "items": [
        "Entrega mínima: publica el reel desde la app, lee los comentarios y envía la guía manualmente cuando la mensajería lo permita. Si el DM falla, invita a la persona a escribirte en privado.",
        "Opción Composio: crea una cuenta, elige Instagram y conecta un perfil **Business o Creator** mediante OAuth. Completa personalmente el acceso y los consentimientos. Revisa qué acciones están disponibles para tu conexión.",
        "Haz que el agente prepare un borrador de publicación y revísalo. Comienza sin programación ni envíos masivos; añade la publicación solo tras una prueba exitosa.",
        "Para comentario → DM necesitas un flujo que capture el comentario, reconozca la palabra en la publicación correcta y use una **respuesta privada al comentario** compatible con Meta. Si el conector no expone esta acción, recurre al envío manual o a un servicio que la soporte explícitamente.",
        "Prueba con una cuenta que te siga, una que no te siga, comentario repetido y enlace inaccesible. Mantén un método para ver errores e intervenir. El control de seguimiento no está garantizado; mi rama de Facebook no lo ejecuta."
      ]
    },
    {
      "type": "callout",
      "content": "**El límite que cambia el flujo:** el envío normal de mensajes en Instagram requiere la ventana de respuesta aplicable: un comentario no abre automáticamente las 24 h. Meta permite una respuesta privada al comentario dentro de 7 días, con un solo mensaje inicial; los siguientes dependen de la respuesta del usuario. Conectar Composio no elimina estos requisitos. Fuentes: [Meta](https://developers.facebook.com/documentation/instagram-platform/private-replies) y [Composio](https://docs.composio.dev/kb/guide/toolkits-instagram)."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Evalúa solo Instagram para empezar. Verifica la cuenta, permisos y acciones realmente disponibles en Composio. Prepara una prueba sin publicar. Para la palabra RISORSA en la publicación elegida verifica si está soportada la respuesta privada al comentario; no la sustituyas por un DM normal fuera de la ventana. Si falta, explícale cómo entregarla manualmente. Muéstrame la publicación, texto, destinatarios de prueba y posibles errores antes de la activación. No prometas que el follow sea siempre verificable."
    },
    {
      "type": "paragraph",
      "content": "evita confundir un enlace exitoso con una automatización ya funcional."
    },
    {
      "type": "h2",
      "heading": "6. Costos y ruta avanzada",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/07-slide-07.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "**Puedes saltarte música IA, mascota animada, grabación automática de tutoriales y publicación multired.** El primer resultado útil es un reel correcto con una guía realmente accesible. Añade una automatización solo si el tiempo ahorrado justifica la configuración y el mantenimiento. Precios detectados en octubre de 2026, en dólares; verifica moneda, impuestos y plan al momento de la compra."
    },
    {
      "type": "table",
      "headers": [
        "Voz",
        "Costo o condición",
        "Cómo empezar"
      ],
      "rows": [
        [
          "[Código Claude](https://claude.com/pricing)",
          "Pro: 20 $/mes mensual, límites de uso. API por consumo separadas.",
          "Usa el plan ya disponible y verifica el límite."
        ],
        [
          "[Whisper y Playwright locales](https://github.com/SYSTRAN/faster-whisper)",
          "Sin tarifa por minuto; se necesitan ordenador, espacio y tiempo.",
          "Transcribe localmente y graba el tutorial a mano."
        ],
        [
          "[Remotion](https://www.remotion.dev/docs/license)",
          "Gratis para individuos/organizaciones hasta 3 personas. Más, licencia por confirmar.",
          "Para equipos mayores verifica la categoría antes del trabajo."
        ],
        [
          "[HyperFrames](https://github.com/heygen-com/hyperframes)",
          "Apache 2.0; quedan máquina, agente y servicios externos.",
          "Alternativa a Remotion, no es un componente obligatorio."
        ],
        [
          "[Composio](https://composio.dev/pricing)",
          "Hobby 0 $ con cuota y parada al límite; proveedores de IA separados.",
          "Opcional: comienza con publicación y envío manuales."
        ],
        [
          "[Musica Replicate](https://replicate.com/minimax/music-2.6)",
          "MiniMax Music 2.6: 0,15 $ por archivo generado.",
          "Sáltala; usa una pista con licencia adecuada o solo voz."
        ],
        [
          "[Codex](https://github.com/openai/codex)",
          "Acceso y límites dependen del plan; API eventualmente por consumo.",
          "Alternativa de desarrollo si ya lo usas."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Para Remotion, más de tres personas la página oficial distingue Creators (25 $/usuario/mes) y Automators (0,01 $/render, mínimo 100 $/mes): el tipo de uso debe evaluarse. Las cuotas de Composio también dependen de las apps OAuth usadas: no considerarlo ilimitado. Una pista royalty‑free conserva condiciones de licencia; una pista generada no se vuelve automáticamente libre de derechos."
    },
    {
      "type": "h3",
      "heading": "Cuándo pasar al sistema avanzado",
      "content": "Si publicas con continuidad, puedes añadir dirección de b‑roll, grabaciones Playwright, música en los beats, reutilizar la mascota y un motor de publicación. Mi motor separado sube el video, programa los cuatro canales, sigue el procesamiento y asocia la regla de comentarios. Requiere hosting, archivo, base de datos, permisos y mantenimiento; no es un plugin que se enciende. TikTok puede requerir el último paso manual si la app no está aprobada para publicación directa. Los costos del sistema completo dependen del uso: **ningún costo mensual total está garantizado aquí**."
    },
    {
      "type": "h2",
      "heading": "Mejores prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/reel-con-claude/08-slide-08.webp",
      "alt": "Guía práctica Reel con Claude"
    },
    {
      "type": "paragraph",
      "content": "Para saber si el sistema te sirve, completa primero un ciclo: **filmado → reel revisado → guía accesible → entrega exitosa**. Mide cuánto tiempo tardaste y dónde te detuviste. Podemos ayudarte a configurar la plantilla, simplificar el proceso, conectar cuentas y formar a los usuarios. El control editorial sigue siendo tuyo."
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparación para tu caso?",
      "content": "**Si quieres que lo hagamos por ti, escríbenos.** Cuéntanos cuántos videos preparas, en qué canales publicas y qué deseas enviar a quien comenta: elegiremos juntos la versión más sencilla de mantener."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF (PDF en italiano):** [Descarga el PDF](/guide/reel-con-claude.pdf)"
    }
  ]
}

export default post
