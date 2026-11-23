import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "claude-per-instagram",
  "title": "Claude trabajando en tu Instagram",
  "description": "Cómo conectar Instagram a Claude con Composio, los prompts listos para publicar, responder a los comentarios y leer las estadísticas, y los límites que…",
  "date": "2026-10-22",
  "readTime": 12,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "Claude trabajando en tu Instagram",
    "Cómo conectar Instagram a Claude con Composio",
    "los prompts listos para publicar",
    "responder a los comentarios y leer las estadísticas",
    "y los límites que conocer"
  ],
  "image": "/images/blog/covers/claude-per-instagram-wide.es.webp",
  "imageTall": "/images/blog/covers/claude-per-instagram-tall.es.webp",
  "videoPreview": "/videos/preview/claude-per-instagram.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7700323352560274721",
  "imageAlt": "Manual operativo para que Claude publique, responda y analice tu perfil de Instagram, sin escribir una sola línea de código y sin perder el control",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/01-slide-01.webp",
      "alt": "Manual operativo para que Claude publique, responda y analice tu perfil de Instagram, sin escribir una sola línea de código y sin perder el control"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Claude puede publicar en tu Instagram, pero **no como piensas**: Instagram no está entre los conectores oficiales de Claude. La conexión pasa por **Composio**, un servicio que actúa como \"puente\" entre la inteligencia artificial y más de mil apps, gestionando por ti accesos y autorizaciones. Composio usa las API oficiales de Instagram: nada de trucos, nada de contraseñas compartidas. Esta guía te lleva desde la conexión hasta los prompts ya preparados, y te explica qué puede y qué no puede hacer Claude, para que evites la confusión que veo a menudo en los comentarios."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprenderás a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "preparar tu perfil (cuenta creador o empresa);",
        "conectar Claude a Composio y Composio a Instagram, paso a paso;",
        "entender qué puede hacer Claude: publicaciones, carruseles, reels, historias, comentarios, mensajes y estadísticas;",
        "usar los prompts listos para publicar, responder y analizar los resultados;",
        "conocer los límites de Instagram, para no perder tiempo;",
        "trabajar con seguridad, aprobando cada publicación.;"
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** Claude prepara, tú apruebas. Siempre muestra la vista previa (texto, imagen, hora) antes de cualquier publicación o respuesta pública: es tu perfil y tu reputación."
    },
    {
      "type": "cta",
      "heading": "¿Quieres un Instagram que trabaje incluso cuando no estás?",
      "content": "Creamos automatizaciones a medida: respuestas a comentarios con envío de recursos por DM, contenidos generados por IA, informes semanales y conexión con WhatsApp y CRM. Escríbeme por WhatsApp y dime qué vendes."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Composio - página para conectar Claude](https://composio.dev/claude)",
        "[Composio Connect - guía oficial (URL MCP)](https://docs.composio.dev/docs/composio-connect)",
        "[Composio - herramientas Instagram disponibles](https://docs.composio.dev/toolkits/instagram)",
        "[Composio - precios](https://composio.dev/pricing)",
        "[Claude - conectores personalizados (guía Anthropic)](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp)",
        "[Claude Code - conectar un MCP](https://code.claude.com/docs/en/mcp)",
        "[Instagram - pasar a una cuenta profesional](https://help.instagram.com/502981923235522/?locale=it_IT)",
        "[Instagram - etiquetar los contenidos creados con IA](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT)",
        "[Meta - publicación vía API (límites y formatos)](https://developers.facebook.com/docs/instagram-platform/content-publishing)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Antes de empezar: qué necesitas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/02-slide-02.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Para comenzar no gastas nada. Necesitas cuatro cosas: un perfil profesional de Instagram, una cuenta Claude, una cuenta Composio y tus contenidos en un enlace público (Instagram descarga fotos y videos de allí)."
    },
    {
      "type": "table",
      "headers": [
        "Qué",
        "Dónde",
        "Coste (octubre 2026)"
      ],
      "rows": [
        [
          "Cuenta Instagram creador o empresa",
          "App Instagram (capítulo 2)",
          "Gratis"
        ],
        [
          "Cuenta Claude",
          "[claude.ai](https://claude.ai/) o Claude Desktop",
          "Gratis: 1 conector personalizado. Pro, Max, Team: más conectores"
        ],
        [
          "Cuenta Composio",
          "[composio.dev](https://composio.dev/)",
          "Plan Hobby gratuito, sin tarjeta. Con la app de Composio: 20.000 acciones al mes incluidas"
        ],
        [
          "Fotos y videos online",
          "Tu sitio o un servicio de hosting",
          "Fotos solo en JPG"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** además de las acciones incluidas, Composio cobra $0,0002 por acción (o el plan Pro a $29 al mes). Para un negocio que publica algunos posts a la semana, el plan gratuito basta y sobra. Precios consultados en octubre de 2026 en la página oficial."
    },
    {
      "type": "h2",
      "heading": "2. Cambia a la cuenta profesional (creator o empresa)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/03-slide-03.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Las API de Instagram funcionan **solo con cuentas para profesionales** (creator o empresa), no con las personales. El cambio es gratuito, lleva un minuto y se puede revertir."
    },
    {
      "type": "list",
      "items": [
        "Abre la app de Instagram y toca tu foto de perfil.",
        "Toca el menú ☰ en la parte superior derecha (Ajustes y actividad).",
        "En la sección \"Para profesionales\" toca **Tipo de cuenta y herramientas**.",
        "Toca **Cambiar a una cuenta para profesionales**.",
        "Elige la categoría que describe tu negocio.",
        "Selecciona **Creador** o **Empresa** y pulsa Siguiente. El enlace a una página de Facebook es opcional: puedes omitirlo."
      ]
    },
    {
      "type": "table",
      "headers": [
        "Tipo de cuenta",
        "Para quién es",
        "Con Claude"
      ],
      "rows": [
        [
          "Empresa",
          "Tiendas, negocios locales, marcas, servicios",
          "Funciona"
        ],
        [
          "Creador",
          "Profesionales, marca personal, artistas",
          "Funciona"
        ],
        [
          "Personal",
          "Uso privado",
          "No funciona"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Atención:** si tu cuenta es privada, se vuelve pública y todas las solicitudes de follow pendientes se aceptan. Puedes volver a la cuenta personal cuando quieras, pero pierdes estadísticas y herramientas profesionales."
    },
    {
      "type": "h2",
      "heading": "3. Conecta Claude a Composio y Composio a Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/04-slide-04.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Un **conector** (o MCP) es un enlace que le da a Claude nuevas herramientas. Composio te da una única dirección para pegar en Claude: desde ahí Claude puede usar Instagram y las otras apps que decidas conectar."
    },
    {
      "type": "list",
      "items": [
        "Abre [claude.ai](https://claude.ai/) o Claude Desktop y ve a **Personaliza → Conectores** (en inglés: Customize → Connectors).",
        "Haz clic en **+** y luego en **Añadir conector personalizado**.",
        "Como nombre escribe **Composio** y pega la URL aquí abajo, luego haz clic en Añadir.",
        "Se abre el navegador: accede (o regístrate) a Composio y autoriza la conexión.",
        "Vuelve al chat y escribe: \"Conecta mi cuenta de Instagram a través de Composio\". Claude te da un enlace: ábrelo, accede a Instagram y concede los permisos solicitados.",
        "Haz una prueba con el primer prompt del capítulo 5: Claude debe leer el nombre de tu perfil."
      ]
    },
    {
      "type": "code",
      "content": "https://connect.composio.dev/mcp"
    },
    {
      "type": "callout",
      "content": "**Atajo:** en la página [composio.dev/claude](https://composio.dev/claude) está el botón \"Add to Claude\", que abre la configuración de los conectores con la URL ya completada."
    },
    {
      "type": "h3",
      "heading": "Si Claude no usa el conector",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "en el chat haz clic en **+** → Conectores y verifica que Composio esté activo;",
        "en el prompt escribe explícitamente \"usa Composio\";",
        "si Claude dice que no puede responder a los comentarios, repite la conexión y concede todos los permisos: sin permiso de gestión de comentarios esas acciones no funcionan;",
        "plan Team o Enterprise: el conector lo añade primero el propietario de la organización, luego cada uno se conecta con su cuenta."
      ]
    },
    {
      "type": "h3",
      "heading": "¿Usas Claude Code? Un solo comando",
      "content": ""
    },
    {
      "type": "code",
      "content": "# dal terminale\nclaude mcp add --transport http composio https://connect.composio.dev/mcp\n\n# poi dentro Claude Code: /mcp → Composio → autenticati nel browser\n/mcp"
    },
    {
      "type": "callout",
      "content": "**Seguridad:** Anthropic recuerda que los conectores personalizados no están verificados por Anthropic: conecta solo servicios de confianza, revisa los permisos que otorgas y usa \"Permitir siempre\" solo para acciones de solo lectura. Para publicar, deja que Claude te pida confirmación cada vez."
    },
    {
      "type": "h2",
      "heading": "4. Qué puede hacer Claude en tu Instagram",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/05-slide-05.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Composio ofrece **más de 30 acciones de Instagram** (en el video contaba 29: el número crece con las actualizaciones). Con Composio Connect Claude no las ve todas a la vez: las busca y usa cuando las necesita, por eso es clave pedir claramente lo que deseas."
    },
    {
      "type": "table",
      "headers": [
        "Área",
        "Qué puede hacer Claude",
        "A saber"
      ],
      "rows": [
        [
          "Publicación",
          "Publicación con foto, carruseles (2-10 elementos), reel y stories",
          "Publica en dos pasos: prepara el contenido, luego publícalo"
        ],
        [
          "Comentarios",
          "Leer, responder, eliminar, activar o desactivar los comentarios de una publicación",
          "Se necesita permiso para gestionar los comentarios"
        ],
        [
          "Menciones",
          "Responder a quien te menciona",
          ""
        ],
        [
          "Mensajes directos",
          "Leer conversaciones, enviar texto e imágenes",
          "Solo a quien te ha escrito, normalmente dentro de 24 h de su mensaje"
        ],
        [
          "Estadísticas",
          "Datos del perfil y de cada publicación",
          "Algunos datos no aparecen bajo 100 seguidores"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** Instagram no tiene una verdadera programación de publicaciones vía API. Si pides \"publica mañana a las 18\", Claude debe estar activo en ese momento (por ejemplo con las actividades programadas de Claude, si tu plan las incluye). Para programar de forma fiable usa una herramienta dedicada (ver el Bonus)."
    },
    {
      "type": "h2",
      "heading": "5. Los prompts que funcionan (copia y pega)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/06-slide-06.webp",
      "alt": "Guía práctica: Claude que trabaja en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Copia el prompt, sustituye las partes entre corchetes y pégalo en Claude con Composio activo. Todos los prompts que publican piden primero una vista previa: mantén este hábito."
    },
    {
      "type": "h3",
      "heading": "Enlace y control",
      "content": ""
    },
    {
      "type": "code",
      "content": "Usa Composio e controlla il mio account Instagram: dimmi nome utente, numero di follower, gli ultimi 5 post con data e numero di like e commenti, e quanti post posso ancora pubblicare nelle prossime 24 ore. Non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Verifica que el enlace funcione, sin riesgos."
    },
    {
      "type": "h3",
      "heading": "Publicar",
      "content": ""
    },
    {
      "type": "code",
      "content": "Prepara un post Instagram con questa foto: [LINK PUBBLICO DELLA FOTO .jpg]. Argomento: [ARGOMENTO]. Scrivi una didascalia per [IL TUO CLIENTE IDEALE] con: prima riga che incuriosisce, 3 frasi utili, invito a commentare [PAROLA] e massimo 5 hashtag pertinenti. Mostrami l'anteprima e pubblica solo quando ti scrivo \"OK pubblica\"."
    },
    {
      "type": "paragraph",
      "content": "Es el prompt base: tú controlas el texto, Claude hace el resto."
    },
    {
      "type": "code",
      "content": "Crea un carosello Instagram con queste immagini, in quest'ordine: [LINK 1], [LINK 2], [LINK 3]. Tema: [TEMA]. Scrivi una didascalia che riassuma il carosello e inviti a salvarlo. Prima di pubblicare mostrami ordine delle immagini e testo."
    },
    {
      "type": "paragraph",
      "content": "Los carruseles son el formato más guardado: Claude los monta por ti."
    },
    {
      "type": "code",
      "content": "Pubblica come Reel questo video: [LINK PUBBLICO DEL VIDEO .mp4]. Scrivi una didascalia con la parola chiave [PAROLA CHIAVE] nella prima riga, una domanda per i commenti e 3-5 hashtag. Il contenuto [È / NON È] creato con l'IA: se lo è, segnalo come contenuto generato con l'IA. Mostrami tutto prima di pubblicare."
    },
    {
      "type": "paragraph",
      "content": "Recuerdas a Claude también la etiqueta IA, cuando sea necesario."
    },
    {
      "type": "code",
      "content": "Pubblica questa immagine come storia: [LINK PUBBLICO .jpg]. Poi dimmi se è stata pubblicata correttamente."
    },
    {
      "type": "paragraph",
      "content": "Las historias vía API no pueden tener stickers: para enlaces y encuestas usa la app."
    },
    {
      "type": "h3",
      "heading": "Planificar el contenido",
      "content": ""
    },
    {
      "type": "code",
      "content": "Analizza i miei ultimi 20 post Instagram e dimmi quali argomenti e formati hanno avuto più interazioni. Poi proponi un piano editoriale di 7 giorni per [LA MIA ATTIVITÀ] a [CITTÀ]: per ogni giorno formato (reel, carosello, foto o storia), idea, prima riga della didascalia e orario consigliato in base ai miei dati. Non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Empieza por tus números, no por ideas al azar."
    },
    {
      "type": "h3",
      "heading": "Comentarios y mensajes",
      "content": ""
    },
    {
      "type": "code",
      "content": "Leggi i commenti degli ultimi 3 post e dividili in: domande, complimenti, critiche e spam. Per domande e complimenti scrivi una risposta breve, cordiale e nel mio tono ([DESCRIVI IL TUO TONO: es. diretto, simpatico, dai del tu]). Mostrami l'elenco commento → risposta e rispondi solo a quelli che approvo. Non eliminare nulla senza chiedermelo."
    },
    {
      "type": "paragraph",
      "content": "Responde a todos en pocos minutos, sin respuestas automáticas frías."
    },
    {
      "type": "code",
      "content": "Controlla i messaggi diretti non letti. Fammi un riassunto di chi ha scritto e cosa chiede, segnala le possibili richieste di preventivo e prepara una bozza di risposta per ognuno. Non inviare nulla senza la mia conferma."
    },
    {
      "type": "paragraph",
      "content": "No pierdes a los clientes que te escriben por DM."
    },
    {
      "type": "h3",
      "heading": "Estadísticas e informes",
      "content": ""
    },
    {
      "type": "code",
      "content": "Fammi il report Instagram degli ultimi 7 giorni: copertura, interazioni, nuovi follower, i 3 post migliori e i 3 peggiori con il motivo probabile. Chiudi con 3 azioni concrete per la prossima settimana. Scrivilo in modo semplice, come se lo spiegassi a un imprenditore che non è esperto di social."
    },
    {
      "type": "paragraph",
      "content": "Cada lunes sabes qué funciona, en 2 minutos."
    },
    {
      "type": "code",
      "content": "Prendi il mio post con più interazioni degli ultimi 3 mesi e proponi 3 modi per riutilizzarlo: un carosello, un reel parlato (con il testo da leggere) e una storia. Non pubblicare: voglio solo le bozze."
    },
    {
      "type": "paragraph",
      "content": "Multiplicas los contenidos que ya han funcionado."
    },
    {
      "type": "h2",
      "heading": "6. Los límites que debes conocer (y las reglas de Meta)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/07-slide-07.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude usa las API oficiales de Instagram, por lo que tiene los mismos límites que Meta impone a todas las apps de publicación. Saber esto te ahorra intentos inútiles. Recuerda: usa Claude para trabajar mejor, no más. Menos publicaciones pero útiles, respuestas reales a los comentarios y un ritmo constante son lo que premia el algoritmo y te protege de las limitaciones."
    },
    {
      "type": "table",
      "headers": [
        "Qué",
        "Via Claude",
        "Nota"
      ],
      "rows": [
        [
          "Foto",
          "Sí",
          "Solo JPG, máximo 8 MB, desde un enlace público"
        ],
        [
          "Reel",
          "Sí",
          "MP4 o MOV, de 3 segundos a 15 minutos, formato 9:16 recomendado"
        ],
        [
          "Historias",
          "Sí",
          "Sin stickers (enlace, encuestas, ubicación)"
        ],
        [
          "Carruseles",
          "Sí",
          "Los elementos se recortan como el primero"
        ],
        [
          "Colaboradores",
          "Sí",
          "Hasta 3 por publicación, reel o carrusel"
        ],
        [
          "Música de la biblioteca de Instagram",
          "No",
          "Solo el audio original del video"
        ],
        [
          "Filtros y etiquetas de productos",
          "No",
          "Desde la app"
        ],
        [
          "Programar una publicación",
          "No (nativo)",
          "Se necesita una herramienta dedicada o una actividad planificada"
        ],
        [
          "Cantidad",
          "Limitada",
          "50 publicaciones cada 24 h (Meta indica 50 o 100 en distintas páginas: el límite real se verifica con la acción correspondiente)"
        ],
        [
          "Leyenda",
          "Sí",
          "Máximo 2.200 caracteres, 30 hashtags y 20 menciones"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Enlace público:** Instagram descarga el archivo del enlace que le pases. El enlace debe abrir directamente el archivo (a menudo termina en .jpg o .mp4), no una página de vista previa: los enlaces normales de Google Drive suelen no funcionar. Usa tu sitio o un servicio de hosting de imágenes y videos."
    },
    {
      "type": "h3",
      "heading": "Las reglas de Meta a respetar",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "**Contenido IA:** videos fotorrealistas y audio realista creados o modificados con IA deben etiquetarse como \"Contenido IA\", de lo contrario arriesgas sanciones ([guía Instagram](https://help.instagram.com/iphone-app/761121959519495/?locale=it_IT));",
        "**No spam:** publicar o interactuar automáticamente con frecuencias muy altas, o con contenido repetitivo, puede llevar a limitaciones del perfil ([estándares de la comunidad sobre spam](https://transparency.meta.com/it-it/policies/community-standards/spam/));",
        "**Mensajes:** puedes escribir en DM solo a quien te haya escrito primero; la ventana estándar para responder es de 24 horas;",
        "**Respuesta privada a un comentario:** un solo mensaje, dentro de 7 días del comentario;",
        "**No comprar likes o seguidores**, ni siquiera \"automáticamente\"."
      ]
    },
    {
      "type": "h2",
      "heading": "Bonus: alternativas a Composio y recursos para Claude Code",
      "content": "Composio es la opción más flexible, pero no la única. Si lo que necesitas es principalmente **programar** los posts, estos servicios tienen un conector para Claude y un calendario real."
    },
    {
      "type": "table",
      "headers": [
        "Servicio",
        "Qué hace con Instagram",
        "Precio (octubre 2026)",
        "Cómo conectarlo"
      ],
      "rows": [
        [
          "[Metricool](https://claude.com/connectors/metricool-social-media-management)",
          "Programa publicaciones, carruseles y reels; estadísticas de varios socials",
          "También funciona con el plan gratuito de Metricool",
          "Conector en el directorio de Claude, verificado por Anthropic"
        ],
        [
          "[Buffer](https://developers.buffer.com/guides/integrations/claude.html)",
          "Crea y programa publicaciones en Instagram y otros socials",
          "Depende del plan de Buffer (por confirmar)",
          "Personaliza → Conectores → busca \"Buffer\""
        ],
        [
          "[Zernio](https://zernio.com/instagram-mcp)",
          "Publicaciones, carruseles, reels, historias, comentarios, DM y estadísticas",
          "MCP gratuito; 2 cuentas Instagram gratis, luego $6/mes por cuenta",
          "Conector personalizado: https://mcp.zernio.com/mcp"
        ],
        [
          "[Meta Ads MCP](https://developers.facebook.com/documentation/ads-commerce/ads-ai-connectors/ads-mcp-server/ads-mcp-server-overview)",
          "Solo campañas publicitarias, sin publicaciones orgánicas",
          "Por verificar",
          "Conector oficial Meta: https://mcp.facebook.com/ads"
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "Para quien usa Claude Code",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Documentación MCP de Claude Code](https://code.claude.com/docs/en/mcp): cómo añadir, autenticar y gestionar los conectores (comandos claude mcp add y /mcp);",
        "[Composio Connect](https://docs.composio.dev/docs/composio-connect): la URL única y el plugin de Composio para Claude Code y otros agentes;",
        "[Herramientas Instagram de Composio](https://docs.composio.dev/toolkits/instagram): la lista completa de acciones, útil para redactar prompts precisos;",
        "[Guía Meta para la publicación](https://developers.facebook.com/docs/instagram-platform/content-publishing): formatos, dimensiones y límites actualizados."
      ]
    },
    {
      "type": "code",
      "content": "Ogni lunedì mattina: usa Composio, leggi le statistiche Instagram della settimana passata, scrivi il report in 10 righe con 3 azioni consigliate e prepara 3 bozze di post per la settimana (formato, testo, idea per l'immagine). Salva tutto in un documento e non pubblicare nulla."
    },
    {
      "type": "paragraph",
      "content": "Usar como tarea programada en Claude o en Claude Code: cada semana obtienes informes y borradores listos."
    },
    {
      "type": "h2",
      "heading": "7. Buenas prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/claude-per-instagram/08-slide-08.webp",
      "alt": "Guía práctica: Claude trabajando en tu Instagram"
    },
    {
      "type": "paragraph",
      "content": "Claude es un excelente asistente social, pero la estrategia sigue siendo tuya: a quién te diriges, qué vendes, qué acción esperas del cliente. Con estos puntos claros, la IA te ahorra horas semanales sin perder la personalidad de tu perfil."
    },
    {
      "type": "h3",
      "heading": "Cuándo puede ser útil un soporte profesional",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "quieres que quien comenta una palabra reciba automáticamente el recurso en DM;",
        "publicas poco porque no tienes tiempo para crear contenido;",
        "tienes muchos mensajes y comentarios y corres el riesgo de perder solicitudes de presupuesto;",
        "quieres conectar Instagram con WhatsApp, CRM y funnel de ventas;",
        "quieres un agente IA con Claude construido sobre tu negocio."
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
        "Automatizaciones Instagram: comentario → DM con el recurso, respuestas y captura de contactos",
        "Contenidos, reels e imágenes creados con IA",
        "Agentes IA con Claude para redes, clientes y back‑office",
        "Funnel, WhatsApp y CRM conectados",
        "Formación para ti y tu equipo"
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una consulta sobre tu caso?",
      "content": "Escríbeme por WhatsApp, dime qué vendes y envíame el enlace de tu perfil de Instagram: te diré qué automatizar primero y cómo."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/claude-per-instagram.pdf) (PDF en italiano)"
    }
  ]
}

export default post
