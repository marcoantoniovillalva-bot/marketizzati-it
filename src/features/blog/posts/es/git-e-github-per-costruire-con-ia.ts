import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "git-e-github-per-costruire-con-ia",
  "title": "Git y GitHub para construir con IA de forma profesional, estructurada y delegable",
  "description": "La guía prometida en el video: el flujo completo de Git y GitHub explicado con la metáfora de la cocina (clone, main, pull, branch, add, commit, push,…",
  "date": "2026-10-23",
  "readTime": 15,
  "category": "Siti web",
  "freeGuide": true,
  "keywords": [
    "Guía práctica",
    "Git y GitHub para construir con IA de forma profesional",
    "estructurado y delegable",
    "La guía prometida en el video",
    "el flujo completo de Git y GitHub explicado con la metáfora de la cocina (clone",
    "main"
  ],
  "image": "/images/blog/covers/git-e-github-per-costruire-con-ia-wide.es.webp",
  "imageTall": "/images/blog/covers/git-e-github-per-costruire-con-ia-tall.es.webp",
  "videoPreview": "/videos/preview/git-e-github-per-costruire-con-ia.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7701096249629445408",
  "imageAlt": "El flujo de trabajo con Git y GitHub, los comandos, los prompts para Claude Code y Codex y las reglas para delegar proyectos sin caos",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/01-slide-01.webp",
      "alt": "El flujo de trabajo con Git y GitHub, los comandos, los prompts para Claude Code y Codex y las reglas para delegar proyectos sin caos"
    },
    {
      "type": "h2",
      "heading": "Antes de empezar: qué encontrarás en esta guía",
      "content": ""
    },
    {
      "type": "intro",
      "content": "Con Claude Code y Codex hoy un emprendedor puede crear sitios, automatizaciones y pequeños softwares por sí mismo. El problema surge después: cambios hechos \"un poco al azar\", sin historial de lo que cambió y un proyecto que ningún desarrollador quiere tomar. **Git** (el programa que registra cada versión del proyecto) y **GitHub** (el servicio online donde el proyecto vive y el equipo colabora) resuelven esto. Aquí tienes, con más detalle, el flujo que mostré en el video con la metáfora de la cocina, los comandos y los **prompts listos** para que la IA lo haga."
    },
    {
      "type": "h3",
      "heading": "En esta guía aprendes a:",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "entender repository, main, branch, commit, pull request y merge sin jerga técnica;",
        "preparar una sola vez cuenta, Git y proyecto (con las contraseñas seguras);",
        "seguir el flujo en 8 pasos, desde git pull hasta merge;",
        "hacer todo con Claude Code o Codex usando prompts listos, tú decides;",
        "proteger main con revisiones y pruebas automáticas;",
        "entregar un proyecto ordenado a un desarrollador o colaborador."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** **main no se toca directamente.** Cada cambio, incluso el hecho por IA, nace en una rama separada, se guarda con commits claros, pasa por una pull request con revisión y pruebas, y solo al final entra en main con merge. Así se logra un proyecto profesional y delegable."
    },
    {
      "type": "cta",
      "heading": "¿Quieres configurar Git y GitHub en tus proyectos?",
      "content": "Si construyes con IA y buscas un método ordenado desde el inicio, o ya tienes proyectos que organizar antes de delegarlos, escríbeme por WhatsApp: veamos juntos por dónde empezar."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Git - sitio oficial y descarga](https://git-scm.com/downloads)",
        "[Pro Git en italiano (libro gratuito)](https://git-scm.com/book/it/v2)",
        "[GitHub flow - el flujo oficial de GitHub](https://docs.github.com/en/get-started/using-github/github-flow)",
        "[GitHub - qué son las pull request](https://docs.github.com/en/pull-requests/reference/pull-requests)",
        "[GitHub - ramas protegidas](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)",
        "[GitHub Actions - pruebas automáticas (CI)](https://docs.github.com/en/actions/get-started/continuous-integration)",
        "[GitHub - planes y precios](https://github.com/pricing)",
        "[Claude Code - flujos de trabajo con Git y pull request](https://code.claude.com/docs/en/common-workflows)",
        "[Claude Code - GitHub Actions y @claude](https://code.claude.com/docs/en/github-actions)",
        "[Codex CLI (OpenAI)](https://learn.chatgpt.com/docs/codex/cli)",
        "[Codex - revisión de pull request en GitHub](https://learn.chatgpt.com/docs/third-party/github)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Git y GitHub en dos minutos: la cocina del restaurante",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/02-slide-02.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué es Git?** Es un programa gratuito y de código abierto que registra cada cambio de un proyecto, así puedes ver quién cambió qué y volver atrás cuando quieras. **¿Qué es GitHub?** Es el servicio online (de Microsoft) donde guardas la copia compartida del proyecto y donde el equipo propone, controla y aprueba los cambios. Git funciona en tu ordenador, GitHub es el punto de encuentro. En el vídeo los comparé con la cocina de un restaurante: la misma metáfora, palabra por palabra."
    },
    {
      "type": "table",
      "headers": [
        "Palabra",
        "En la cocina",
        "Qué es realmente"
      ],
      "rows": [
        [
          "**Repositorio**",
          "el restaurante con todas las recetas",
          "la carpeta del proyecto con todo el historial de cambios"
        ],
        [
          "**git clone**",
          "una copia de la cocina en tu casa",
          "descarga en tu ordenador una copia completa del proyecto, con todas las versiones de cada archivo"
        ],
        [
          "**main**",
          "la cocina oficial que sirve a los clientes",
          "la rama principal, la que va online. En GitHub los nuevos repositorios la llaman **main**; en proyectos antiguos puede llamarse **master**"
        ],
        [
          "**git pull**",
          "recibir las últimas recetas",
          "descarga e integra las últimas actualizaciones del repositorio en GitHub"
        ],
        [
          "**branch**",
          "una estación separada",
          "una línea de trabajo paralela: modificas sin tocar main"
        ],
        [
          "**git add**",
          "elegir los platos a presentar",
          "elige qué cambios entran en la próxima zona de preparación (staging)"
        ],
        [
          "**commit**",
          "la etiqueta en el plato",
          "guarda una fotografía de los cambios elegidos **más** un mensaje que explica qué ha cambiado"
        ],
        [
          "**git push**",
          "llevar el plato al paso",
          "envía tus commits a GitHub"
        ],
        [
          "**pull request**",
          "pedir al chef que pruebe",
          "la propuesta de unir tu rama a main, con discusión y revisión"
        ],
        [
          "**merge**",
          "el plato entra en el menú",
          "une los cambios aprobados a main"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**El flujo del video en una línea:** **git pull** en main → **branch** → cambios con Claude Code o Codex → **git add** → **git commit** → **git push** → **pull request** → revisión y pruebas → **merge** en main."
    },
    {
      "type": "h2",
      "heading": "2. ¿Qué necesitas (se prepara una sola vez)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/03-slide-03.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "**Para empezar no gastas nada.** El plan **GitHub Free** cuesta 0 $ e incluye repositorios públicos y privados ilimitados y 2.000 minutos al mes de GitHub Actions para pruebas automáticas (precios consultados en octubre de 2026 en github.com/pricing; el plan Team cuesta 4 $ por usuario al mes). Para tus proyectos empresariales usa siempre un repositorio **privado**. Si no te gusta la terminal, también está **GitHub Desktop**, la app con interfaz gráfica, pero con Claude Code y Codex los comandos los escribe la IA."
    },
    {
      "type": "list",
      "items": [
        "**Cuenta GitHub:** créala en github.com (vale el plan Free). Activa la verificación en dos pasos.",
        "**Git en el ordenador:** descárgalo de [git-scm.com/downloads](https://git-scm.com/downloads) (en Windows es \"Git for Windows\", recomendado también por Claude Code). Luego configura nombre y email: **git config --global user.name \"Tu Nombre\"** y **git config --global user.email \"tu@email.it\"**.",
        "**Claude Code o Codex:** el agente IA que escribe el código y usa Git por ti.",
        "**El archivo .gitignore:** indica a Git qué archivos **no** guardar nunca, por ejemplo **.env** con contraseñas y claves API, la carpeta node_modules, archivos temporales. GitHub ofrece plantillas listas en el repositorio github/gitignore.",
        "**Un README:** dos líneas sobre qué hace el proyecto y cómo iniciarlo. Para la IA añade **CLAUDE.md** (Claude Code lo lee al iniciar la sesión) o **AGENTS.md** (instrucciones para Codex)."
      ]
    },
    {
      "type": "callout",
      "content": "**Importante:** contraseñas, tokens y claves API **nunca** deben ir al repositorio, aunque sea privado. GitHub tiene una protección (push protection) que bloquea pushes con secretos reconocibles: para tu cuenta está activada por defecto en repositorios **públicos**; en privados de organizaciones requiere GitHub Secret Protection. No confíes solo en eso: usa .gitignore y el archivo .env."
    },
    {
      "type": "h2",
      "heading": "3. El flujo completo en 8 pasos (con los comandos)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/04-slide-04.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "Es el **GitHub flow**, el flujo oficial recomendado por GitHub, el mismo del video. Los comandos sirven para entender qué ocurre: en la sección 4 encuentras los prompts para que Claude Code o Codex los ejecuten. En lugar de **nombre-rama** usa un nombre corto y descriptivo, por ejemplo **modulo-contactos** o **fix-checkout**."
    },
    {
      "type": "callout",
      "content": "**Nota:** **git checkout -b** (el del video) y **git switch -c** hacen lo mismo: crean la rama y cambian a ella. switch es el comando más reciente y claro. Si tu proyecto usa **master** en vez de main, sustituye el nombre: Git 2.56 (octubre 2026) sigue llamando \"master\" a la rama principal de repositorios creados desde cero con git init, mientras GitHub usa main."
    },
    {
      "type": "code",
      "content": "# 0. Solo la prima volta: copia il progetto da GitHub sul computer\ngit clone https://github.com/tua-azienda/progetto.git\n# 1. Parti da main aggiornato\ngit switch main\ngit pull\n# 2. Crea la tua postazione separata (branch) e passaci sopra\ngit switch -c nome-branch        # oppure: git checkout -b nome-branch\n# 3. Fai le modifiche (anche con Claude Code o Codex), poi guarda cosa è cambiato\ngit status\n# 4. Scegli cosa salvare e salvalo con un messaggio chiaro\ngit add percorso/del/file        # oppure: git add .  (tutto)\ngit commit -m \"Aggiunge il modulo contatti alla home\"\n# 5. Manda il branch su GitHub (-u solo la prima volta)\ngit push -u origin nome-branch\n# 6. Apri la pull request (dal sito di GitHub oppure con GitHub CLI)\ngh pr create\n# 7. Revisione + test automatici, poi merge su GitHub\n# 8. Torna su main, aggiornalo ed elimina il branch finito\ngit switch main\ngit pull\ngit branch -d nome-branch"
    },
    {
      "type": "paragraph",
      "content": "**¿Qué ocurre en la pull request?** En GitHub la pull request muestra las diferencias línea por línea: quien la revisa puede comentar, sugerir cambios, aprobar o solicitar modificaciones. Si el trabajo no está terminado, ábrela como **borrador** (draft): un borrador no se puede fusionar. Cuando todo está aprobado y los checks son verdes, elige **Merge** (o **Squash and merge**, que combina todos los commits del branch en uno solo y mantiene main más legible). Si después del merge algo falla, el botón **Revert** crea una nueva pull request que revierte el cambio."
    },
    {
      "type": "h2",
      "heading": "4. Los prompts para hacerlo con Claude Code y Codex",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/05-slide-05.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "Según la documentación oficial, Claude Code trabaja directamente con Git: prepara los cambios, escribe los mensajes de commit, crea los branches y abre las pull request. Codex CLI funciona de la misma manera en tu repositorio. Abre la terminal en la carpeta del proyecto y ejecuta **claude** o **codex**. Si quieres aprobar cada acción, en Claude Code usa el modo **Manual** o **plan** (se cambia con Shift+Tab). Los prompts funcionan con ambos."
    },
    {
      "type": "code",
      "label": "PROMPT 1 · Prepara el proyecto",
      "content": "Comprueba si esta carpeta ya es un repositorio Git y si está vinculada a GitHub. Si falta, inicialízala con el branch principal llamado main. Verifica que exista un .gitignore adecuado a la tecnología del proyecto y que archivos como .env, claves, contraseñas y node_modules estén excluidos; si encuentras secretos ya guardados en el historial de Git, detente y avísame. Crea un README breve (qué hace el proyecto, cómo se inicia, cómo se prueba). No hagas push sin mi ok."
    },
    {
      "type": "paragraph",
      "content": "empieza con los cimientos correctos: nada de contraseñas en el repositorio y un proyecto que cualquiera entienda."
    },
    {
      "type": "code",
      "label": "PROMPT 2 · Inicia un cambio de la manera correcta",
      "content": "Antes de tocar el código: cambia a main, descarga las últimas actualizaciones con git pull y crea un nuevo branch llamado [nome-breve] para este cambio: [describe lo que quieres]. Trabaja solo en este branch, nunca en main. Cuando termines, muéstrame en palabras simples qué archivos has modificado y por qué."
    },
    {
      "type": "paragraph",
      "content": "es el paso del video \"una estación separada\": main siempre permanece funcional."
    },
    {
      "type": "code",
      "label": "PROMPT 3 · Commits ordenados",
      "content": "Revisa los cambios con git status y git diff y agrúpalos en commits pequeños y coherentes. Para cada commit propone un mensaje claro en italiano que explique qué cambia y por qué (por ejemplo \"Añade la validación del email en el módulo de contactos\"). Muéstrame la lista antes de ejecutar los commits y no incluyas archivos con datos sensibles."
    },
    {
      "type": "paragraph",
      "content": "en seis meses, tú o quien trabaje en el proyecto entenderá la historia leyendo solo los mensajes."
    },
    {
      "type": "code",
      "label": "PROMPT 4 · Abre la pull request",
      "content": "Haz push del branch a GitHub y abre una pull request hacia main. En la descripción escribe: qué cambia, por qué, cómo probarlo paso a paso, riesgos y lo que no se ha testeado. Si el trabajo no está completo, ábrela como borrador."
    },
    {
      "type": "paragraph",
      "content": "una pull request bien escrita se revisa en pocos minutos, incluso por quien no conoce el proyecto."
    },
    {
      "type": "code",
      "label": "PROMPT 5 · Revisión antes del merge",
      "content": "Revisa esta pull request como lo haría un desarrollador senior: busca bugs, problemas de seguridad, contraseñas o claves en el código, tests faltantes y cambios que no tengan relación con el objetivo de la PR. Dame una lista ordenada por gravedad y no modifiques nada hasta que te lo indique."
    },
    {
      "type": "paragraph",
      "content": "un segundo control antes de \"servir el plato\". En Claude Code también puedes usar el comando /code-review (en cualquier plan), en Codex el comando /review."
    },
    {
      "type": "code",
      "label": "PROMPT 6 · Añade los tests automáticos",
      "content": "Crea un workflow de GitHub Actions que en cada pull request a main instale dependencias, ejecute los tests y el control de estilo del código. Si el proyecto no tiene tests, propone los 3‑5 tests más importantes para funciones críticas (por ejemplo login, pagos, formularios). Haz todo en un branch y abre una pull request."
    },
    {
      "type": "paragraph",
      "content": "los \"tests automáticos\" del video solo se ejecutan si alguien los configura: este prompt lo hace por ti."
    },
    {
      "type": "code",
      "label": "PROMPT 7 · He trabajado en main por error",
      "content": "He hecho cambios directamente en main. Muévelos a un nuevo branch llamado [nombre‑breve] sin perder nada y deja main igual al de GitHub. Explícame qué haces antes de hacerlo y no uses comandos que eliminen cambios sin pedírmelo."
    },
    {
      "type": "paragraph",
      "content": "el error más común se soluciona en un minuto, si sabes qué preguntar."
    },
    {
      "type": "code",
      "label": "PROMPT 8 · Prepara la entrega",
      "content": "Prepara este proyecto para entregarlo a un desarrollador que no lo conoce. Actualiza el README (propósito, requisitos, instalación, cómo ejecutarlo, cómo correr los tests, variables de entorno necesarias con nombres pero sin valores), crea un archivo CONTRIBUTING.md con las reglas de trabajo (branch, commit, pull request, revisión, tests) y una plantilla de pull request en .github/pull_request_template.md. Señálame todo lo que hoy está solo en mi cabeza y debería escribirse. Haz todo en un branch y abre una pull request."
    },
    {
      "type": "paragraph",
      "content": "en una hora la IA escribe la documentación que normalmente nadie escribe nunca."
    },
    {
      "type": "callout",
      "content": "**Nota:** la IA ejecuta comandos Git reales: revisa siempre la pull request antes del merge y no permitas push a main, force push o reset sin tu confirmación."
    },
    {
      "type": "h2",
      "heading": "5. Protege main: revisiones y pruebas automáticas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/06-slide-06.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "En el video dije que main \"no deberías modificarla directamente\". GitHub no lo impide solo: para convertirlo en regla se activan los **branch protegidos** o los **rulesets** (en la configuración del repositorio en GitHub). Con una regla en main puedes exigir una pull request para cada cambio, un número mínimo de aprobaciones, que los tests (status check) estén verdes antes del merge, y bloquear borrado y push forzados."
    },
    {
      "type": "table",
      "headers": [
        "Herramienta",
        "¿Para qué sirve?",
        "Disponibilidad (octubre 2026)"
      ],
      "rows": [
        [
          "**Branch protegidos / rulesets**",
          "obligan a pasar por pull request, revisiones y pruebas antes del merge en main",
          "repositorios públicos con GitHub Free; públicos y privados con Pro, Team y Enterprise"
        ],
        [
          "**CODEOWNERS**",
          "indica quién debe aprobar los cambios en ciertos archivos o carpetas",
          "misma disponibilidad que los branch protegidos"
        ],
        [
          "**GitHub Actions**",
          "ejecuta pruebas y controles automáticos en cada push o pull request",
          "Free: 2.000 minutos al mes en privados, gratis en públicos"
        ],
        [
          "**@claude en la PR**",
          "Claude Code GitHub Action: analiza, corrige y revisa bajo demanda (/install-github-app)",
          "suscripción Claude (Pro, Max, Team, Enterprise) o clave API"
        ],
        [
          "**Claude Code Revisión de Código**",
          "revisión automática de cada pull request con comentarios línea por línea",
          "planes Claude Team y Enterprise"
        ],
        [
          "**@codex revisión**",
          "revisión de Codex en la pull request, también automática",
          "repositorio GitHub conectado a Codex"
        ],
        [
          "**Dependabot**",
          "abre pull request para actualizar dependencias vulnerables",
          "incluido en GitHub Free"
        ]
      ]
    },
    {
      "type": "callout",
      "content": "**Si usas GitHub Free con repositorios privados:** no hay reglas de protección, así que el método impone disciplina: todos en branch, cada cambio vía pull request, el merge lo hace quien revisa. El plan Team (4 $ por usuario/mes) habilita reglas en privados. Nota: el propietario de un repo personal puede mergear sin aprobaciones y la revisión IA no aprueba ni bloquea nada."
    },
    {
      "type": "h2",
      "heading": "6. Listo para delegar: qué debe encontrar quien llega",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/07-slide-07.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "Es el punto final del video: cuando delegues, quien llegue debe encontrar **un proceso ordenado y no código modificado al azar**. Con el flujo de esta guía la historia ya está escrita: cada pull request conserva comentarios, commit y motivaciones. Antes de entregar el proyecto a un desarrollador, a una agencia o a un colaborador, revisa estos puntos (y haz que la IA prepare la documentación con el prompt 8 de la sección 4)."
    },
    {
      "type": "list",
      "items": [
        "**El repositorio es tuyo** (o de tu organización GitHub), no del desarrollador: él entra como **colaborador** y, si lo dejas, quita el acceso con un clic.",
        "**README actualizado:** qué hace el proyecto, cómo se inicia, cómo se prueba, dónde se ejecuta online. Más **CLAUDE.md** o **AGENTS.md** con las reglas para la IA.",
        "**Reglas escritas:** \"se trabaja en branch\", \"cada cambio pasa por pull request\", \"pull request pequeñas, una por tema\", \"merge solo después de revisión y tests verdes\".",
        "**No hay contraseñas en el código:** los secretos están en el archivo .env (excluido con .gitignore) o en los secrets de GitHub Actions; entrégalos por separado, de forma segura.",
        "**Pull request pequeñas:** GitHub mismo recomienda pull request pequeñas y unirlas pronto, porque se revisan mejor y generan menos conflictos.",
        "**Una organización GitHub** cuando trabajan más personas: permisos más granulares que en el repositorio personal."
      ]
    },
    {
      "type": "h2",
      "heading": "7. Los errores más comunes (y cómo solucionarlos)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/08-slide-08.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "Casi todo en Git se puede recuperar, porque cada commit queda en la historia. Por eso el único error realmente grave es guardar contraseñas o claves: aunque las elimines después, permanecen en versiones anteriores."
    },
    {
      "type": "table",
      "headers": [
        "Error",
        "Qué ocurre",
        "Cómo solucionarlo"
      ],
      "rows": [
        [
          "**Trabajar en main**",
          "los cambios no controlados terminan en la cocina oficial",
          "**git switch -c nueva-rama**: los cambios no guardados te siguen en la nueva rama (prompt 7)"
        ],
        [
          "**Contraseña o .env en el repositorio**",
          "el secreto queda en el historial de Git, aunque lo elimines",
          "**cámbialo** de inmediato la contraseña o la clave, luego quita el archivo del seguimiento (git rm --cached .env) y añádelo a .gitignore"
        ],
        [
          "**Olvidar el git pull**",
          "trabajas sobre una versión antigua y aparecen conflictos",
          "empieza siempre desde main actualizado; durante el trabajo lleva a menudo main a tu rama"
        ],
        [
          "**Pull request enormes**",
          "nadie puede revisarlas realmente",
          "una pull request por tema, pequeña, fusiona pronto"
        ],
        [
          "**Commit \"cambios varios\"**",
          "en un mes nadie sabrá qué cambió",
          "mensajes claros: qué cambia y por qué (prompt 3)"
        ],
        [
          "**Merge incorrecto**",
          "un error ha llegado a main",
          "en GitHub usa **Revert** en la pull request: crea una nueva PR que anule la modificación"
        ],
        [
          "**\"Los tests automáticos no se ejecutan\"**",
          "nadie los ha configurado",
          "crea un workflow de GitHub Actions (prompt 6)"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "8. Buenas prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/git-e-github-per-costruire-con-ia/09-slide-09.webp",
      "alt": "Guía práctica: Git y GitHub para construir con IA de forma profesional, estructurada y delegable"
    },
    {
      "type": "paragraph",
      "content": "Construir con IA es rápido; hacerlo **de forma profesional** significa que cada cambio tiene un porqué, un control y una historia. Basta con tres hábitos: una rama por cada cambio, pull request con revisión, merge solo cuando todo está verde."
    },
    {
      "type": "h3",
      "heading": "Cuándo puede servirte un soporte profesional",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "tienes proyectos creados con IA sin Git, o con todo en main;",
        "quieres delegar a un desarrollador o a una agencia y no sabes qué entregar;",
        "¿Quieres pruebas automáticas y revisiones con IA en cada pull request;",
        "Has encontrado contraseñas o claves en el código."
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
        "Configuración de Git y GitHub con reglas y permisos correctos",
        "Revisiones y pruebas automáticas (GitHub Actions, Claude Code, Codex)",
        "Documentación y entrega de proyectos a desarrolladores",
        "Formación para ti y tu equipo sobre Claude Code y Codex"
      ]
    },
    {
      "type": "h3",
      "heading": "Recordatorio: los comandos a tener a mano",
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
          "git clone <indirizzo>",
          "una sola vez",
          "copia el proyecto de GitHub al ordenador"
        ],
        [
          "git switch main + git pull",
          "antes de cualquier trabajo",
          "lleva main a la última versión"
        ],
        [
          "git switch -c nombre-rama",
          "al iniciar cualquier cambio",
          "crea la estación separada (como git checkout -b)"
        ],
        [
          "git status",
          "siempre, cuando tengas dudas",
          "muestra qué ha cambiado y en qué rama estás"
        ],
        [
          "git add <file>",
          "antes del commit",
          "elige los cambios a guardar"
        ],
        [
          "git commit -m \"mensaje\"",
          "en cada paso concluido",
          "guarda los cambios con la explicación"
        ],
        [
          "git push -u origin nome-branch",
          "cuando quieras compartir",
          "envía la rama a GitHub"
        ],
        [
          "gh pr create",
          "listo para trabajar",
          "abre la pull request (también desde el sitio de GitHub)"
        ],
        [
          "Merge / Revert en GitHub",
          "después de revisión y pruebas",
          "une a main, o cancela una modificación ya unida"
        ]
      ]
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparación en tu caso?",
      "content": "Escríbeme por WhatsApp y dime qué estás construyendo con IA (sitio, automatizaciones, gestión, app): te diré cómo configurar Git y GitHub y qué necesitas para delegarlo."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/git-e-github-per-costruire-con-ia.pdf) (PDF en italiano)"
    }
  ]
}

export default post
