import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "aggiornamenti-sicurezza-ottobre-2026",
  "title": "Actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)",
  "description": "Los prompts prometidos en el video para comprobar con Claude Code y Codex, proyecto por proyecto, qué actualizar tras los parches de seguridad de octubre…",
  "date": "2026-10-23",
  "readTime": 16,
  "category": "Siti web",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "actualizaciones de seguridad de octubre 2026 (PHP",
    "Node",
    "js",
    "Python",
    "Go"
  ],
  "image": "/images/blog/covers/aggiornamenti-sicurezza-ottobre-2026-wide.es.webp",
  "imageTall": "/images/blog/covers/aggiornamenti-sicurezza-ottobre-2026-tall.es.webp",
  "videoPreview": "/videos/preview/aggiornamenti-sicurezza-ottobre-2026.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7700691838247685408",
  "imageAlt": "Qué ocurrió realmente en octubre 2026, quién está en riesgo, qué actualizar y los prompts para que Claude Code y Codex lo revisen proyecto por proyecto",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/01-slide-01.webp",
      "alt": "Qué ocurrió realmente en octubre 2026, quién está en riesgo, qué actualizar y los prompts para que Claude Code y Codex lo revisen proyecto por proyecto"
    },
    {
      "type": "h2",
      "heading": "Antes de comenzar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Entre el 17 y el 22 de octubre de 2026 llegaron, casi simultáneamente, varias actualizaciones de seguridad: **PHP** corrigió dos vulnerabilidades críticas, **Node.js** diez, y una autoridad certificadora, **eMudhra**, tuvo ocho claves intermedias débiles, al punto que **Python**, **Go**, **Rust** y muchos sistemas operativos actualizaron los certificados de confianza. En redes se dice \"han hackeado todos los lenguajes\". No es así. Aquí tienes los hechos verificados de fuentes oficiales y, sobre todo, los **prompts para Claude Code y Codex** que prometí en el video, para revisar cada proyecto y saber exactamente qué actualizar."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprenderás a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "entender qué ha ocurrido realmente, sin alarmismos y con fuentes;",
        "reconocer si tu sitio, tus apps o tus scripts están afectados;",
        "saber las versiones mínimas a instalar para PHP, Node.js, Python, Go y Rust;",
        "comprobar tu sitio y el hosting aunque no seas técnico;",
        "hacer que Claude Code o Codex analicen cada proyecto con prompts listos, solo lectura;",
        "pedir lo correcto a tu desarrollador o a tu hosting, y obtener una confirmación escrita."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** actualizar el código no basta. Un parche está activo solo cuando llega **donde realmente se ejecuta tu proyecto**: el servidor, el contenedor, el binario compilado o el entorno virtual. Por eso se revisa proyecto por proyecto: versiones, Dockerfile, lockfile e imágenes en el servidor, luego se actualiza, se recompila sin caché, se prueba y se redistribuye."
    },
    {
      "type": "cta",
      "heading": "¿Quieres que revisemos tus proyectos?",
      "content": "Si tienes un sitio WordPress, un e‑commerce, automatizaciones o una app y no sabes por dónde empezar, escríbeme por WhatsApp: veamos juntos qué usas, qué hay que actualizar y quién debe hacerlo (tú, el desarrollador o el hosting)."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[PHP - aviso de seguridad y lanzamientos del 21 de octubre de 2026](https://www.php.net/archive/2026.php)",
        "[PHP - versiones soportadas y fechas de fin de soporte](https://www.php.net/supported-versions.php)",
        "[Node.js - Lanzamientos de seguridad del 21 de octubre de 2026](https://nodejs.org/en/blog/vulnerability/october-2026-security-releases)",
        "[Node.js - versiones y fin de vida](https://nodejs.org/en/about/previous-releases)",
        "[Mozilla - blog sobre el caso eMudhra](https://blog.mozilla.org/security/2026/10/20/protecting-firefox-users-following-the-compromise-of-emudhra-intermediate-certificates/)",
        "[Cloudflare - qué saber sobre los certificados eMudhra](https://blog.cloudflare.com/emudhra-certificate-compromise/)",
        "[Sitio técnico del incidente, pruebas y versiones correctas](https://emudhra.we-have-a-problem.com/)",
        "[Python - información para usuarios de Python](https://discuss.python.org/t/information-for-python-users-regarding-emudhra-emsign-ca-certificate-security-incident/109576)",
        "[Go - historial de lanzamientos (1.27.3 y 1.26.10)](https://go.dev/doc/devel/release)",
        "[Rust - rustup 1.29.2](https://blog.rust-lang.org/2026/10/20/Rustup-1.29.2/)",
        "[Amazon Threat Intelligence - PHP2Shell](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/)",
        "[Claude Code - documentación](https://code.claude.com/docs/en/overview)",
        "[Codex CLI (OpenAI) - documentación](https://developers.openai.com/codex/cli)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué ocurrió realmente (octubre de 2026)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/02-slide-02.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre de 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Son **tres hechos diferentes** que llegaron en la misma semana. Dos son bugs en el software (PHP y Node.js) y se solucionan actualizando. El tercero afecta a una autoridad certificadora (eMudhra): no es un bug de los lenguajes, pero Python, Go, Rust y los sistemas operativos tuvieron que actualizar la lista de certificados de confianza. **¿Qué es una CVE?** Es el código público, por ejemplo CVE-2026-109618, que identifica una vulnerabilidad: lo usas para preguntar al desarrollador o al hosting \"¿esto es correcto?\"."
    },
    {
      "type": "table",
      "headers": [
        "Qué",
        "Qué ocurrió (fuente oficial)",
        "Gravedad"
      ],
      "rows": [
        [
          "**PHP**",
          "El 21/10/2026 PHP 8.5.12, 8.4.27, 8.3.36 y 8.2.35 corrigen **CVE-2026-109618** y **CVE-2026-109619** (también llamado \"PHP2Shell\"): un atacante puede ejecutar código en el servidor **sin credenciales**. Amazon ha detectado **intentos** de explotación desde el 17/10, antes del parche.",
          "Crítica (CVSS 4.0: 9.2)"
        ],
        [
          "**Node.js**",
          "El 21/10/2026 Node.js 22.23.4, 24.22.1 y 26.12.1 corrigen **10 vulnerabilidades** (4 altas, 3 medias, 3 bajas). La más grave está en el decodificador **Brotli** (CVE-2026-111497): datos comprimidos manipulados pueden provocar ejecución de código. Las demás afectan DNS, certificados, números aleatorios, permisos de archivos, HTTP y ZIP.",
          "Alta para Node.js (9.2 para Google, que gestiona Brotli)"
        ],
        [
          "**eMudhra**",
          "El 17/10/2026 un investigador demostró que las **claves privadas de 8 certificados intermedios** de eMudhra eran débiles y **recuperables** a partir de los certificados públicos. Con esas claves se podían crear certificados HTTPS falsos para cualquier sitio.",
          "Seria para los programas no actualizados"
        ],
        [
          "**Python, Go, Rust y sistemas**",
          "Del 19 al 22/10 se lanzaron certifi 2026.10.19, pip 26.2.2, uv 0.13.4, Go 1.27.3 y 1.26.10, rustup 1.29.2 y los paquetes ca-certificates/NSS de Red Hat, Ubuntu, Debian y otros, que **dejan de confiar** en esos certificados.",
          "Por actualizar, sin \"hackeo\" de los lenguajes"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Sin sensacionalismos:** nadie ha \"hackeado todos los lenguajes a la vez\". Amazon habla de **intentos** de explotación en PHP y aclara que no está claro si habrían funcionado en sistemas reales (hoy ve intentos generalizados). Cloudflare no ha detectado explotación activa del caso eMudhra en sus servicios; eMudhra afirma que su infraestructura no fue vulnerada, que no hubo robo de datos y que de los 8 intermedios nunca se emitió un certificado. Para usar un certificado falso, el atacante también debe estar \"en medio\" de la conexión (man-in-the-middle). El riesgo es real para quien se quede atrás, no es el fin de Internet."
    },
    {
      "type": "paragraph",
      "content": "**Fechas resumidas:** 17/10 notificación de eMudhra a Mozilla, Google, Apple y Microsoft (Firefox y Chrome bloquean los certificados el mismo día, Microsoft desde el 20/10, Apple desde el 22/10) y primer intento en PHP visto por Amazon; 18/10 eMudhra revoca los 8 intermedios; 19/10 Go 1.27.3 y 1.26.10; 20/10 Mozilla publica el aviso y rustup 1.29.2; 21/10 lanzamientos de seguridad de PHP y Node.js; 23/10 PHP publica otro aviso informativo (ver sección 3)."
    },
    {
      "type": "h2",
      "heading": "2. ¿Estás en riesgo? Depende de lo que uses",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/03-slide-03.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "La pregunta correcta no es \"¿uso PHP?\" sino \"**qué versión** está ejecutándose y dónde?\". Un sitio WordPress, WooCommerce, PrestaShop o Joomla funciona con PHP; muchas apps, API, sitios Next.js y automatizaciones corren en Node.js; bots, scrapers e integraciones suelen estar en Python. Si usas una plataforma gestionada (Shopify, Wix, Squarespace) el servidor lo actualiza normalmente el proveedor, pero las integraciones a medida deben revisarse por separado."
    },
    {
      "type": "table",
      "headers": [
        "Si tienes…",
        "Te interesa si…",
        "Qué hacer"
      ],
      "rows": [
        [
          "Sitio en PHP (WordPress, WooCommerce, PrestaShop, Joomla, Laravel…)",
          "el servidor usa PHP anterior a 8.2.35, 8.3.36, 8.4.27 o 8.5.12, o PHP 8.1 o más antiguo",
          "pregunta al hosting la versión exacta y la actualización; con PHP 8.1 o anteriores planifica la migración"
        ],
        [
          "Apps, API, sitios o automatizaciones en Node.js",
          "la versión es anterior a 22.23.4, 24.22.1 o 26.12.1, o Node.js 20, 25 o más antiguo (fin de vida)",
          "actualiza Node.js, recompila y redistribuye"
        ],
        [
          "Scripts, bots e integraciones en Python",
          "pip anterior a 26.2.2, certifi anterior a 2026.10.19, uv anterior a 0.13.4, conda anterior a 26.9.4",
          "actualiza en **cada** entorno virtual y en cada imagen Docker"
        ],
        [
          "Servicios o herramientas en Go",
          "compilados con Go antes de 1.26.10, o 1.27.0-1.27.2",
          "recompila con Go actualizado y redistribuye"
        ],
        [
          "Herramientas en Rust",
          "rustls-webpki antes de 0.103.16, webpki-roots / webpki-root-certs antes de 1.0.10, rustup antes de 1.29.2",
          "actualiza las dependencias y recompila"
        ],
        [
          "Contenedores Docker y servidores Linux",
          "imágenes base o paquete ca-certificates no actualizados después del 20/10",
          "actualiza los paquetes y reconstruye las imágenes sin caché"
        ],
        [
          "Navegador, PC y móvil",
          "no actualizas desde hace semanas",
          "actualiza normalmente: los navegadores ya están protegidos"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** para PHP el problema está en el motor, no en el tema o los plugins. Según php.net están en riesgo todas las instalaciones que responden a peticiones web (PHP-FPM, Apache con mod_php, php-cgi, FrankenPHP, LiteSpeed); el riesgo más alto es con **mod_php**, donde el ataque funciona antes incluso de que se ejecute el código del sitio. El certificado HTTPS de tu sitio, sin embargo, casi con certeza no tiene nada que ver: los 8 intermedios eMudhra nunca han emitido certificados."
    },
    {
      "type": "h2",
      "heading": "3. Las acciones mínimas para cada tecnología",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/04-slide-04.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Estas son las **versiones mínimas** indicadas por fuentes oficiales al 23 de octubre de 2026. \"Mínimas\" significa que sirven esas o posteriores del mismo branch: si usas PHP 8.3, necesitas la 8.3.36 o más reciente, no necesariamente la 8.5. **Después de cada actualización** el servicio debe reiniciarse o redistribuirse, de lo contrario seguirá ejecutando la versión antigua en memoria."
    },
    {
      "type": "table",
      "headers": [
        "Tecnología",
        "Versión mínima",
        "Acción mínima"
      ],
      "rows": [
        [
          "**PHP**",
          "8.5.12 · 8.4.27 · 8.3.36 · 8.2.35",
          "actualiza y reinicia **todos** los workers (PHP‑FPM, Apache). PHP 8.2 deja de recibir soporte el 31/12/2026. PHP 8.1 y versiones anteriores ya no reciben actualizaciones del proyecto PHP: pregunta al proveedor Linux/LTS si tiene el parche o migra"
        ],
        [
          "**Node.js**",
          "22.23.4 · 24.22.1 · 26.12.1",
          "actualiza, reinstala las dependencias desde el lockfile, redistribuye. Las versiones en fin de vida (20, 25 y anteriores) están siempre expuestas"
        ],
        [
          "**Python**",
          "pip 26.2.2 · certifi 2026.10.19 · uv 0.13.4 · sigstore 4.5.1 · conda 26.9.4 · pixi 0.82.1",
          "actualiza en cada entorno virtual y recompila los contenedores **sin caché**. Un pip antiguo sigue confiando en certificados comprometidos aunque el sistema esté actualizado"
        ],
        [
          "**Go**",
          "1.27.3 · 1.26.10",
          "recompila y redistribuye los programas: la biblioteca que controla los certificados está dentro del binario"
        ],
        [
          "**Rust**",
          "rustup 1.29.2 · rustls-webpki 0.103.16 · webpki-roots / webpki-root-certs 1.0.10",
          "actualiza las dependencias (cargo update), recompila y redistribuye"
        ],
        [
          "**PHP Composer**",
          "ca-bundle 1.4.16 o 1.6.0",
          "actualiza las dependencias si el proyecto usa composer/ca-bundle (fuente: lista del sitio del incidente)"
        ],
        [
          "**Server y contenedores**",
          "ca-certificates / NSS actualizados (p. ej. Red Hat RHSB-2026-012, Ubuntu USN-8947-1, NSS 3.131.1)",
          "actualiza los paquetes del sistema y reconstruye las imágenes"
        ],
        [
          "**Browser**",
          "Firefox 158.0.1, ESR 115.43.1 y 153.5.1; Chrome, Edge y Safari actualizados",
          "actualiza como siempre: la protección ya se ha aplicado automáticamente"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Si no puedes actualizar PHP de inmediato:** php.net indica algunas medidas que **reducen** el riesgo pero \"no hacen segura\" la instalación: **session.upload_progress.enabled=0** en php.ini o en el pool FPM (luego reinicio de todos los workers), un **post_max_size** bajo (8M si el sitio no recibe archivos, 32M si los recibe) y, en PHP 8.5, **fatal_error_backtraces=0**. En AWS existe una regla WAF dedicada. El 23/10 php.net informó un caso raro adicional (CVE-2026-115560, ficha pública aún no disponible: **por verificar**) y recomienda mantener **session.upload_progress.enabled=0** hasta el próximo release. Son soluciones temporales: la única solución completa es la actualización."
    },
    {
      "type": "h2",
      "heading": "4. Cómo comprobar tu sitio y el hosting (sin ser técnico)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/05-slide-05.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Solo necesitas unos minutos. **Sitio WordPress:** desde el escritorio ve a **Herramientas → Salud del sitio → Información → Servidor**: allí ves la versión completa de PHP (p.ej. 8.3.36). **Panel del hosting** (cPanel, Plesk o el panel de tu proveedor): busca la sección de versión PHP; a menudo solo muestra \"8.3\" sin el número final, y en ese caso debes preguntar al hosting el número exacto."
    },
    {
      "type": "list",
      "items": [
        "**Versión PHP:** compárala con la tabla de la sección 3. Si es más antigua o es 8.1 o anterior, escribe al hosting (sección 6).",
        "**Cloudflare (si lo usas):** en SSL/TLS verifica que estés en modo **Full (strict)**. Cloudflare aconseja a quienes usan Full (strict) volver a comprobar los certificados de origen personalizados y los certificados cargados para mutual TLS, y está actualizando Automatic SSL/TLS para avisarte si usas certificados ya no confiables.",
        "**Navegador:** abre la prueba en [emudhra.we-have-a-problem.com](https://emudhra.we-have-a-problem.com/). Si las conexiones de prueba dan **error de certificado**, tu navegador ya no confía en los intermedios comprometidos: ese es el resultado esperado. Vale solo para el navegador, no para apps y servicios en el servidor.",
        "**Errores de certificado tras las actualizaciones:** si un servicio externo o una integración deja de conectar, **no desactives la verificación de certificados** (lo recomienda Cloudflare): haz que el desarrollador revise la cadena del certificado. Algunos sistemas han eliminado, además de la raíz emSign ECC Root CA - G3, también la raíz \"Comodo AAA Services root\" (Ubuntu USN-8947-1).",
        "**Log del servidor (para quien tiene acceso):** Amazon sugiere buscar peticiones POST con la cadena **PHP_SESSION_UPLOAD_PROGRESS**, procesos o archivos modificados inesperadamente, y comenzar **al menos desde el 17 de octubre**, no desde la fecha de la corrección."
      ]
    },
    {
      "type": "h2",
      "heading": "5. Los prompts para Claude Code y Codex (proyecto por proyecto)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/06-slide-06.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Son los prompts prometidos en el video. Funcionan con **Claude Code** (Anthropic) y **Codex** (OpenAI): abre la terminal en la carpeta del proyecto y ejecuta **claude** o **codex --sandbox read-only** (Codex solo lectura). En Claude Code puedes usar el modo de permisos **Manual**, que inicia en solo lectura y te pide confirmación antes de modificar archivos o ejecutar comandos. Repite para **cada proyecto**: sitio, ERP, automatizaciones, scripts."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Inventario",
      "content": "Analiza este proyecto en modo solo lectura: no modifiques archivos ni instales nada. Enumera en una tabla las tecnologías y versiones que realmente usa: PHP, Node.js, Python, Go, Rust, CMS y frameworks (p.ej. WordPress, Laravel, Next.js). Busca en composer.json y composer.lock, package.json y lockfiles (package-lock.json, pnpm-lock.yaml, yarn.lock), .nvmrc y .tool-versions, requirements.txt, poetry.lock y uv.lock, go.mod, Cargo.toml y Cargo.lock, Dockerfile y docker‑compose, archivos de CI (.github/workflows) y configuraciones de despliegue. Para cada fila indica el archivo del que lo leíste. Si una versión no está escrita en el proyecto (por ejemplo la de PHP en el servidor), escribe \"por verificar en el servidor\"."
    },
    {
      "type": "paragraph",
      "content": "parte de datos seguros: sabes qué se ejecuta realmente y dónde, sin arriesgarte a romper nada."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Comparación con las actualizaciones de octubre de 2026",
      "content": "Compara las versiones encontradas con estos mínimos de seguridad publicados en octubre de 2026 y para cada una escribe OK, POR ACTUALIZAR o POR VERIFICAR: PHP 8.5.12, 8.4.27, 8.3.36 o 8.2.35 (PHP 8.1 o anteriores = fuera de soporte); Node.js 22.23.4, 24.22.1 o 26.12.1 (Node.js 20, 25 y anteriores = fin de vida); pip 26.2.2, certifi 2026.10.19, uv 0.13.4, sigstore 4.5.1, conda 26.9.4, pixi 0.82.1; Go 1.27.3 o 1.26.10; rustls-webpki 0.103.16, webpki-roots y webpki-root-certs 1.0.10, rustup 1.29.2; composer/ca-bundle 1.4.16 o 1.6.0. Revisa también las dependencias indirectas en los lockfiles. No inventes versiones: si falta un dato, indica de dónde debería leerse."
    },
    {
      "type": "paragraph",
      "content": "obtén una lista clara de qué actualizar, con prioridad, en lugar de actualizar todo a ciegas."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Certificados (caso eMudhra)",
      "content": "Revisa cómo este proyecto verifica los certificados HTTPS al conectarse a servicios externos (API, pagos, email, webhook). Busca bundles de certificados incluidos en el proyecto o en las dependencias (certifi, composer/ca-bundle, webpki-roots, archivos .pem o .crt), opciones que desactivan la verificación (verify=False, rejectUnauthorized: false, CURLOPT_SSL_VERIFYPEER false, InsecureSkipVerify) e imágenes Docker que instalan ca-certificates. Dime qué necesita actualizarse para que el proyecto deje de confiar en intermediarios eMudhra comprometidos y señala cada punto donde la verificación está desactivada. No modifiques nada."
    },
    {
      "type": "paragraph",
      "content": "el caso eMudhra no se ve en el código: está oculto en las dependencias y en las imágenes. Y una verificación desactivada es un riesgo independientemente."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Plan de actualización",
      "content": "Prepárame un plan de actualización paso a paso para este proyecto, sin ejecutarlo: qué archivos cambiar (versiones en Dockerfile, lockfiles, .nvmrc, go.mod, CI), qué comandos lanzar, cómo reconstruir las imágenes sin caché (p.ej. docker build --no-cache --pull), qué pruebas ejecutar y qué comprobar después del release. Indica los riesgos de compatibilidad (por ejemplo pasar de PHP 8.1 a 8.3 o de Node.js 20 a 22) y qué conviene probar primero en un entorno de pruebas."
    },
    {
      "type": "paragraph",
      "content": "tienes un plan para aprobar o pasar a tu desarrollador, con tiempos y riesgos claros."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Ejecutar en una rama separada",
      "content": "Ok, ejecuta el plan en una nueva rama git llamada actualizaciones-seguridad-octubre-2026: actualiza las versiones, regenera los lockfiles, reconstruye sin caché y ejecuta las pruebas. Detente y pídeme confirmación antes de hacer push, publicar o tocar el servidor de producción. Al final resume qué cambiaste, el resultado de las pruebas y qué queda por hacer manualmente en el servidor o en el hosting."
    },
    {
      "type": "paragraph",
      "content": "la IA hace el trabajo repetitivo, pero el despliegue sigue siendo una decisión tuya."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Más proyectos juntos",
      "content": "En la carpeta en la que estás hay varios proyectos, uno por subcarpeta. Para cada uno ejecuta el inventario y la comparación de los prompts 1 y 2, solo lectura, y al final dame una tabla única: proyecto, tecnología, versión actual, versión mínima, estado (OK / POR ACTUALIZAR / POR VERIFICAR) y quién debe intervenir (yo, desarrollador, hosting)."
    },
    {
      "type": "paragraph",
      "content": "de un solo golpe ve qué proyectos están correctos y cuáles no, y a quién escribir."
    },
    {
      "type": "callout",
      "content": "**Nota:** la IA lee los archivos del proyecto, no tu servidor: la versión que realmente está online debe confirmarse con el hosting o con el panel (secciones 4 y 6). Las versiones mínimas están actualizadas al 23 de octubre de 2026."
    },
    {
      "type": "h2",
      "heading": "6. Qué preguntar a tu desarrollador o a tu hosting",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/07-slide-07.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre de 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "No necesitas saber cómo actualizar un servidor: debes saber **qué preguntar** y obtener una **respuesta escrita**. Las preguntas siguientes sirven para el hosting, la agencia o el desarrollador que gestiona tu sitio. Si te responden \"todo bien\" sin números de versión, pide los números."
    },
    {
      "type": "list",
      "items": [
        "**¿Qué versión exacta de PHP está ejecutándose en mi sitio?** ¿Es al menos 8.2.35, 8.3.36, 8.4.27 o 8.5.12? ¿Se han reiniciado los workers PHP‑FPM o Apache tras la actualización?",
        "**Si uso PHP 8.1 o anterior:** ¿el servidor tiene parches del proveedor Linux o LTS? ¿Cuándo migramos a una versión soportada?",
        "**Node.js:** ¿qué versión ejecutan las apps, APIs y automatizaciones? ¿Se redistribuyeron después del 21 de octubre?",
        "**Certificados:** ¿el paquete ca‑certificates del servidor y las imágenes Docker se actualizaron después del 20 de octubre? ¿Hay servicios con la verificación de certificados desactivada?",
        "**Logs:** ¿habéis revisado los logs desde el 17 de octubre por intentos contra PHP (peticiones con PHP_SESSION_UPLOAD_PROGRESS)?",
        "**Backup:** ¿existe una copia de seguridad reciente y funcional antes de las actualizaciones?"
      ]
    },
    {
      "type": "code",
      "label": "MENSAJE LISTO",
      "content": "Ciao, a ottobre 2026 PHP ha pubblicato correzioni critiche (CVE-2026-109618 e CVE-2026-109619, versioni 8.2.35, 8.3.36, 8.4.27 e 8.5.12), Node.js ha rilasciato 22.23.4, 24.22.1 e 26.12.1 e sono stati aggiornati i certificati di sistema per il caso eMudhra. Mi confermi per iscritto, per il mio sito/progetto [nome]: 1) la versione esatta di PHP e Node.js in uso; 2) se è stato aggiornato il pacchetto ca-certificates; 3) se i servizi sono stati riavviati o ridistribuiti; 4) se avete controllato i log dal 17 ottobre? Grazie."
    },
    {
      "type": "paragraph",
      "content": "una solicitud precisa, con los códigos oficiales, obtiene una respuesta precisa. Y queda escrita."
    },
    {
      "type": "h2",
      "heading": "7. Después de la actualización: reconstruir, probar, redistribuir",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/08-slide-08.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Es el paso que se omite con más frecuencia. Una imagen Docker construida con caché puede reutilizar la capa antigua con certificados viejos; un programa Go compilado antes del 19 de octubre sigue usando la biblioteca antigua; un worker PHP no reiniciado continúa usando la versión anterior. Por eso el aviso en Discussions on Python.org recomienda **reconstruir las imágenes con la caché desactivada** y Cloudflare de actualizar las dependencias, reconstruir y luego reiniciar o redistribuir."
    },
    {
      "type": "list",
      "items": [
        "**Actualiza** versiones y dependencias, también las indirectas en los lockfile.",
        "**Reconstruye sin caché** imágenes y binarios (por ejemplo **docker build --no-cache --pull**).",
        "**Prueba** en un entorno de prueba: login, pagos, módulos de contacto, integraciones externas.",
        "**Redistribuye** y reinicia los servicios; luego verifica online la versión que realmente está en ejecución.",
        "**Anota** fecha, versiones y quién hizo qué: para la próxima corrección ya estarás listo."
      ]
    },
    {
      "type": "h2",
      "heading": "8. Buenas prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/aggiornamenti-sicurezza-ottobre-2026/09-slide-09.webp",
      "alt": "Guía práctica: actualizaciones de seguridad de octubre 2026 (PHP, Node.js, Python, Go, Rust y el caso eMudhra)"
    },
    {
      "type": "paragraph",
      "content": "Las correcciones de seguridad llegarán cada vez más a menudo y más rápido: Amazon señala que con la IA el tiempo entre la corrección y el primer ataque se mide ahora en horas. La mejor defensa para una empresa no es el pánico, sino un hábito: saber qué usas, quién lo actualiza y revisarlo ante cada aviso importante. Con los prompts de esta guía el control de un proyecto lleva minutos, no días."
    },
    {
      "type": "h3",
      "heading": "Cuando puede serte útil un soporte profesional",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "tienes varios sitios, e‑commerce o automatizaciones y no sabes en qué versión están;",
        "tu sitio sigue en PHP 8.1 o anterior, o en Node.js sin soporte;",
        "tu desarrollador o agencia no responden o no dan números de versión;",
        "quieres usar Claude Code o Codex de forma segura en tus proyectos;",
        "quieres un control periódico, no solo cuando sale una noticia.;"
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
        "Control de tus proyectos con un informe claro: qué actualizar y quién debe hacerlo",
        "Actualizaciones seguras con pruebas y despliegue guiado",
        "Automatizaciones con IA que avisan cuando una tecnología que usas recibe un parche",
        "Migración de sitios y apps de versiones sin soporte",
        "Formación para ti y tu equipo en Claude Code y Codex"
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una valoración de tu caso?",
      "content": "Escríbeme por WhatsApp y dime qué sitio o proyectos tienes (WordPress, e‑commerce, automatizaciones, apps): te diré qué revisar primero y si puedes hacerlo tú mismo con los prompts de esta guía."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/aggiornamenti-sicurezza-ottobre-2026.pdf)"
    }
  ]
}

export default post
