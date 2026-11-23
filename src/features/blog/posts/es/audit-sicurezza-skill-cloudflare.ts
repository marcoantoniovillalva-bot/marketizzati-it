import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "audit-sicurezza-skill-cloudflare",
  "title": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe",
  "description": "Checklist AUDIT para la skill Cloudflare: preparación, aislamiento Docker a adaptar, instalación oficial, tres pasos e informe inventado con fines…",
  "date": "2026-11-16",
  "readTime": 10,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "AUDIT",
    "la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe",
    "Checklist AUDIT para la skill Cloudflare",
    "preparación",
    "aislamiento Docker a adaptar",
    "instalación oficial"
  ],
  "image": "/images/blog/covers/audit-sicurezza-skill-cloudflare-wide.es.webp",
  "imageTall": "/images/blog/covers/audit-sicurezza-skill-cloudflare-tall.es.webp",
  "videoPreview": "/videos/preview/audit-sicurezza-skill-cloudflare.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7708840763861372193",
  "imageAlt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/01-slide-01.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "h2",
      "heading": "1. Qué es y qué controla",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/02-slide-02.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "intro",
      "content": "**security-audit es la skill open source de Cloudflare.** Guía a un agente en el análisis del código. Busca vulnerabilidades y verifica las evidencias con agentes independientes. No es el recuadro Turnstile que ves en los sitios. Control de fuentes: **16 noviembre 2026**."
    },
    {
      "type": "cta",
      "heading": "¿Preparamos la auditoría de tu app?",
      "content": "Escríbenos por WhatsApp con **AUDIT**. Te ayudamos a definir el perímetro y a preparar el material a revisar."
    },
    {
      "type": "list",
      "items": [
        "**Código y límites de confianza:** entrada, autenticación, autorizaciones, datos y separación entre usuarios.",
        "**Áreas relevantes:** navegador, dependencias, despliegue, cloud, API y componentes de IA. Depende del proyecto y del perímetro elegido.",
        "**Resultado:** informe legible, resultados JSON y registro de cobertura. La parte no examinada debe quedar declarada."
      ]
    },
    {
      "type": "callout",
      "content": "**Gratuita es la skill.** La licencia es **MIT**. El uso del modelo puede tener costes o límites de tu plan. “Auditoría completa” es una solicitud de trabajo. No garantiza encontrar todas las vulnerabilidades."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: proyecto y licencia](https://github.com/cloudflare/security-audit-skill)",
        "[Áreas de investigación](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/ATTACK-CLASSES.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "2. La lista de verificación antes de comenzar",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/03-slide-03.es.webp",
      "alt": "AUDIT: la lista de verificación para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**Prepara primero una copia de prueba.** Estas precauciones son propuestas Marketizzati. La skill requiere herramientas, subagentes paralelos, Node.js para validadores y aislamiento técnico para ejecutar código del proyecto."
    },
    {
      "type": "list",
      "items": [
        "☐ **Backup y Git limpio.** Guarda el trabajo legítimo. Anota el commit. Crea una rama dedicada. No uses comandos que descarten cambios.",
        "☐ **Perímetro.** Enumera carpetas, funciones y partes excluidas. Indica dónde escribir los informes fuera del repo.",
        "☐ **Secretos excluidos.** En la copia no incluyas claves, tokens, bases reales o .env con credenciales reales. Usa valores ficticios también en el .env de prueba. Revisa historial Git, logs y adjuntos. Si un secreto ya está expuesto, revócalo y sustitúyelo.",
        "☐ **Entorno listo.** Usa dependencias locales ya revisadas. No descargues paquetes durante las pruebas. Prepara datos y cuentas sintéticas.",
        "☐ **Presupuesto escrito.** Completa: tiempo ___; gasto máximo ___; invocaciones de agentes ___. Elige quick, standard o deep. La duración y los tokens no tienen una estimación universal oficial.",
        "☐ **Permisos limitados.** En Claude Code controla lecturas, escrituras, shell y red. Autoriza solo las carpetas necesarias. Durante la auditoría el código fuente permanece solo lectura."
      ]
    },
    {
      "type": "code",
      "content": "/permissions\n/usage"
    },
    {
      "type": "paragraph",
      "content": "El primer comando muestra los permisos. El segundo muestra el uso; el coste de la sesión es una estimación, no la factura. La skill mide el presupuesto en invocaciones de agentes. Un importe o un tiempo en el prompt no imponen un techo técnico. **Por verificar:** límites de tu plan. Permisos y sandbox son controles diferentes."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: requisitos y presupuesto](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/SKILL.md)",
        "[Claude Code: permisos](https://code.claude.com/docs/en/permissions)",
        "[Claude Code: costes](https://code.claude.com/docs/en/costs)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Aísla las pruebas con Docker",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/04-slide-04.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**Ejemplo Marketizzati, ADAPTAR.** La skill no prepara Docker por ti. También las compilaciones y pruebas habituales ejecutan código del proyecto. Requieren aislamiento. El agente queda fuera del contenedor; dentro solo corre la prueba local."
    },
    {
      "type": "code",
      "content": "# compose.audit.yaml — POR ADAPTAR, SIN PROBAR\nservices:\n  check:\n    image: audit-runtime:local # Imagen de confianza ya local\n    pull_policy: never       # Runtime y dependencias ya listos\n    network_mode: none       # Sin red externa\n    read_only: true          # Sistema de archivos raíz no escribible\n    user: \"10001:10001\"      # UID/GID por verificar\n    cap_drop: [ALL]\n    security_opt: [\"no-new-privileges:true\"]\n    cpus: 1\n    mem_limit: 512m\n    memswap_limit: 512m\n    pids_limit: 64\n    ulimits: {fsize: 10485760, nofile: 128}\n    volumes:\n      - ./audit-source:/src:ro # Copia SIN secretos\n    tmpfs:\n      - /scratch:rw,nosuid,nodev,size=64m,uid=10001,gid=10001,mode=0700\n    working_dir: /scratch\n    # env -i limpia el entorno; verifica las rutas de las herramientas.\n    entrypoint:\n      [\"/usr/bin/env\", \"-i\", \"PATH=/usr/local/bin:/usr/bin:/bin\",\n       \"HOME=/scratch\", \"TMPDIR=/scratch\", \"XDG_CACHE_HOME=/scratch\",\n       \"/usr/bin/timeout\", \"--kill-after=5s\", \"60s\"]\n    command: [\"node\", \"/src/tests/security-local.cjs\"]"
    },
    {
      "type": "paragraph",
      "content": "Prepara audit-source como copia depurada. El test security-local.cjs es un marcador de posición que debes escribir para tu app. La imagen audit-runtime:local ya debe contener Node, env y timeout en las rutas indicadas. **Por verificar:** ausencia de secretos, VOLUME o servicios inesperados en la imagen; límites reales del runtime; ninguna escritura fuera de /scratch. No montes home, socket Docker o informes guardados. Cada agente necesita un scratch separado."
    },
    {
      "type": "callout",
      "content": "**Si falta un control, detente.** Este ejemplo no se ha ejecutado y no implementa la gestión completa y segura de los artefactos de la skill. Si red, entorno, sistema de archivos o límites no son verificables, mantente en lectura del código fuente. Deja la prueba decisiva como **por verificar**. No uses producción."
    },
    {
      "type": "list",
      "items": [
        "[Docker: opciones Compose](https://docs.docker.com/reference/compose-file/services/)",
        "[Claude Code: sandbox y Windows/WSL2](https://code.claude.com/docs/en/sandboxing)"
      ]
    },
    {
      "type": "h2",
      "heading": "4. Instala la skill oficial",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/05-slide-05.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**Lee primero el repositorio Cloudflare.** Revisa instrucciones, archivos de soporte y scripts. Anota la revisión elegida. Abre la terminal en la carpeta de tu app. Los comandos siguientes están documentados; aquí no se han ejecutado."
    },
    {
      "type": "h3",
      "heading": "En la terminal: elige una sola variante",
      "content": ""
    },
    {
      "type": "code",
      "content": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit"
    },
    {
      "type": "paragraph",
      "content": "Elige **Claude Code** en el instalador. Para una instalación a nivel de usuario, usa en su lugar la variante oficial con --global:"
    },
    {
      "type": "code",
      "content": "npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit --global"
    },
    {
      "type": "paragraph",
      "content": "npx puede descargar y ejecutar Skills CLI. No es un comando para pegar en el chat de Claude. Cloudflare no documenta aquí un par de comandos /plugin marketplace add y /plugin install."
    },
    {
      "type": "h3",
      "heading": "En el chat de Claude Code: solicita la auditoría",
      "content": ""
    },
    {
      "type": "code",
      "content": "security audit this codebase"
    },
    {
      "type": "paragraph",
      "content": "Es un ejemplo oficial de inicio. Para comenzar con perímetro, presupuesto y límites, usa el prompt de la página siguiente. Verifica que Claude haya cargado exactamente **security-audit** de Cloudflare. Si no aparece, revisa la configuración antes de continuar."
    },
    {
      "type": "paragraph",
      "content": "**Alternativa manual:** la documentación de Claude permite .claude/skills/security-audit/SKILL.md. Tras obtener y leer el código fuente, copia la carpeta completa skills/security-audit, con los archivos de soporte. Es una adaptación a las reglas de Claude, no un segundo instalador de Cloudflare."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: instalación oficial](https://github.com/cloudflare/security-audit-skill#installation)",
        "[Claude Code: carpetas de la skill](https://code.claude.com/docs/en/skills)"
      ]
    },
    {
      "type": "h2",
      "heading": "5. Los tres pasos con los prompts listos",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/06-slide-06.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**Flujo práctico de Marco.** Cloudflare sostiene re‑ejecuciones y verificaciones independientes. El segundo chat para corregir es una elección nuestra. Los prompts están Marketizzati, **por verificar en tu proyecto**. Sustituye los campos en MAYÚSCULAS. Los prompts no crean un sandbox."
    },
    {
      "type": "code",
      "label": "1 — AUDITORÍA COMPLETA",
      "content": "Usa security-audit de Cloudflare para una auditoría completa de esta codebase. Perímetro: PERCORSI. Perfil: PROFILO. Máximo BUDGET_AGENTI invocaciones en total. Escribe los informes fuera del repo, en CARTELLA_OUTPUT_NUOVA. Registra commit, cobertura y límites. No modifiques el código fuente. Ejecuta código solo en la sandbox ya verificada: sin red externa, secretos ni descargas; entorno permitido explícitamente, código fuente en solo lectura, scratch separados y límites de recursos/tiempo. Si falta algún requisito, no ejecutes. Distingue confirmed, needs_validation y rejected. Declara cualquier incompletitud."
    },
    {
      "type": "code",
      "label": "2 — CORRECCIÓN EN UN SEGUNDO CHAT",
      "content": "Lee el informe adjunto y el código en el commit COMMIT. Verifica cada confirmed antes del parche. Corrige en la rama dedicada los problemas que aún se puedan demostrar. Por cada corrección explica el motivo y añade una verificación de regresión pertinente. Los needs_validation requieren primero el dato que falta. No corrijas automáticamente los rejected. No cambies los veredictos para que el informe parezca resuelto. Ejecuta pruebas solo en la sandbox verificada, con datos ficticios. No instales nada. Entrega diff, comprobaciones realizadas y límites."
    },
    {
      "type": "paragraph",
      "content": "Pasa al segundo chat REPORT.md, findings.json, NEEDS-VALIDATION.md y los detalles pertinentes. Elimina secretos y datos personales. Haz disponibles también commits, registro de cobertura y pruebas locales seguras."
    },
    {
      "type": "code",
      "label": "3 — NUEVA AUDITORÍA",
      "content": "Repite security-audit sobre el commit corregido COMMIT_NUOVO. Usa los informes anteriores en CARTELLA_PRECEDENTE y una nueva salida externa en CARTELLA_NUOVA. Revalida las correcciones, busca regresiones y actualiza la cobertura. Mantén las restricciones de la primera auditoría y el máximo BUDGET_AGENTI. Distingue resuelto, aún confirmado y por verificar. Declara exclusiones y partes incompletas. No certifiques que la app sea segura."
    },
    {
      "type": "code",
      "label": "VERIFICACIÓN CRUZADA — CODEX",
      "content": "Revisa de forma independiente el diff de la corrección y el código afectado. Primero formula tu valoración a partir del código fuente; después compárala con el informe adjunto. Busca bypasses y regresiones. No modifiques archivos. No ejecutes código fuera de la sandbox verificada. Indica ruta, evidencia y límite. Si no puedes demostrar un punto, escribe POR VERIFICAR."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: modelos diferentes y re‑ejecuciones](https://blog.cloudflare.com/build-your-own-vulnerability-harness)"
      ]
    },
    {
      "type": "h2",
      "heading": "6. Ejemplo de informe que saber leer",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/07-slide-07.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**EJEMPLO INVENTADO CON FINES DIDÁCTICOS.** Aplicación imaginaria: NoteTeam, pequeña app Node con notas separadas por organización. Revisión: DEMO-01, no es un commit real. Perfil rápido. Perímetro: API de notas y login. Excluidos: hosting, email y pagos. Las evidencias abajo forman parte de la simulación. No se ha realizado ninguna auditoría."
    },
    {
      "type": "table",
      "headers": [
        "Estado / problema",
        "Gravedad",
        "Archivo ficticio",
        "Acción propuesta"
      ],
      "rows": [
        [
          "Confirmado · confirmed\nF-01: lectura entre inquilinos",
          "high",
          "src/routes/notes.ts:42",
          "Filtrar por ID de nota y tenant de la sesión. Test: A no puede leer la nota de B."
        ],
        [
          "Confirmado · confirmed\nF-02: consulta SQL concatenada",
          "high",
          "src/db/search.ts:18",
          "Usar parámetros SQL y mantener el filtro tenant. Test en base de datos ficticia."
        ],
        [
          "Por verificar · needs_validation\nN-01: cookie Secure",
          "—",
          "src/auth/session.ts:25",
          "Falta la configuración TLS/proxy real. El propietario debe verificarla. Luego decidir si se necesita un parche."
        ],
        [
          "Rechazado · rejected\nR-01: modificación sin login",
          "—",
          "src/app.ts:12 → src/routes/notes.ts:70",
          "Ningún parcheo: el middleware de autenticación ya cubre la ruta. Conservar la motivación."
        ]
      ]
    },
    {
      "type": "h3",
      "heading": "¿Qué evidencia respalda los confirmados?",
      "content": "**F-01, evidencia simulada:** la ruta usa solo note.id y no verifica el tenant. En la prueba local, un usuario ficticio A recibe la nota ficticia B. Esperado: ningún dato de B. Resultado simulado: respuesta 200 con el texto de B. **F-02:** la entrada de búsqueda entra en la consulta concatenada. Una fixture local altera el filtro y devuelve a A una nota del tenant ficticio B. Esperado: búsqueda literal limitada a A. No hay datos reales involucrados."
    },
    {
      "type": "paragraph",
      "content": "**N-01:** el resultado depende de una configuración ausente del repo. No es una vulnerabilidad confirmada y no tiene gravedad. **R-01:** el rastro en el código refuta el bypass. No es un problema a \"solucionar\"."
    },
    {
      "type": "callout",
      "content": "**Tabla didáctica, no salida oficial.** Esta síntesis no es un findings.json válido. Cloudflare conserva los tres veredictos en el JSON. REPORT.md separa los confirmados de las dudas. Los descartados no deben presentarse como vulnerabilidades. El informe completo incluye también pruebas, condiciones, presupuesto y cobertura."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: formato de los registros](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/report-schema.json)",
        "[Cloudflare: reglas de los informes](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/VALIDATION-AND-REPORTING.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "7. Cuándo detenerse y qué queda por verificar",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/08-slide-08.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "paragraph",
      "content": "**Cero confirmados no significa cero vulnerabilidades.** El modelo puede equivocarse. Un control puede estar fuera del perímetro, bloqueado o pospuesto. Una auditoría automática no sustituye una prueba de penetración profesional ni la revisión de quien conoce la app."
    },
    {
      "type": "list",
      "items": [
        "**Revisa el diff.** Los parches deben corregir la causa y preservar las funciones legítimas. Revisa los tests y los resultados.",
        "**Lee la cobertura.** Anota qué se ha revisado y qué falta. Un quick es parcial. Si el presupuesto se agota, el informe debe indicarlo.",
        "**Aclara las dudas.** Cada needs_validation debe indicar el hecho faltante y un control local o una verificación del propietario. No lances ataques al sistema en producción.",
        "**Conserva el rastro.** Mantén commit, versión de la skill, informe previo, evidencias mínimas sin secretos ni límites de ejecución.",
        "**Detén el ciclo.** Cuando no puedas validar con seguridad o se agote el presupuesto, registra el bloqueo. Solicita una revisión humana para impactos altos o decisiones pendientes."
      ]
    },
    {
      "type": "paragraph",
      "content": "**Por verificar en tu entorno:** compatibilidad, sandbox real, datos enviados al proveedor, políticas de retención, costos y pruebas disponibles. Docker y los prompts de esta guía son ejemplos no ejecutados. El ejemplo de informe no incluye resultados de tu app."
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: evidencias y límites](https://github.com/cloudflare/security-audit-skill/blob/c1c8a8c1471069fb0e188eeaff69b8e8db6564a8/skills/security-audit/VALIDATION-AND-REPORTING.md)",
        "[OpenAI: revisión de código con Codex](https://learn.chatgpt.com/use-cases/review-code-changes-in-codex-desktop)"
      ]
    },
    {
      "type": "h3",
      "heading": "Lleva AUDIT a tu proyecto",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/audit-sicurezza-skill-cloudflare/09-slide-09.es.webp",
      "alt": "AUDIT: la checklist para preparar la auditoría de seguridad con la skill de Cloudflare + un ejemplo de informe"
    },
    {
      "type": "cta",
      "heading": "¿Quieres prepararlo con nosotros?",
      "content": "Escríbenos por WhatsApp con **AUDIT**. Partimos del perímetro, preparamos la checklist y te ayudamos a leer el informe antes de las correcciones."
    },
    {
      "type": "h3",
      "heading": "Fuentes — control del 16 de noviembre de 2026",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Cloudflare: repositorio oficial](https://github.com/cloudflare/security-audit-skill)",
        "[Cloudflare: anuncio y método](https://blog.cloudflare.com/build-your-own-vulnerability-harness)",
        "[Claude Code: permisos](https://code.claude.com/docs/en/permissions)",
        "[Docker: referencia Compose](https://docs.docker.com/reference/compose-file/services/)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Las referencias en las secciones distinguen hechos documentados y propuestas Marketizzati. La revisión de Cloudflare controlada es c1c8a8c. Checklist, configuración Docker, prompt e informe didáctico son propuestas Marketizzati para adaptar y verificar en tu proyecto."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/audit-sicurezza-skill-cloudflare.pdf) (PDF en italiano)"
    }
  ]
}

export default post
