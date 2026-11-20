import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "rtk-meno-token-claude-code",
  "title": "RTK: menos tokens desperdiciados con Claude Code",
  "description": "Guía TOKEN: instalación Windows, medidas, cinco casos de uso y cuatro prompts. Verificada el 10 de noviembre de 2026.",
  "date": "2026-11-10",
  "readTime": 9,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "RTK",
    "menos tokens desperdiciados con Claude Code",
    "Guía TOKEN",
    "instalación Windows",
    "medidas",
    "cinco casos de uso y cuatro prompts"
  ],
  "image": "/images/blog/covers/rtk-meno-token-claude-code-wide.es.webp",
  "imageTall": "/images/blog/covers/rtk-meno-token-claude-code-tall.es.webp",
  "videoPreview": "/videos/preview/rtk-meno-token-claude-code.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7706859214056017185",
  "imageAlt": "RTK: menos tokens desperdiciados con Claude Code — guía gratuita TOKEN",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/01-slide-01.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code — guía gratuita TOKEN"
    },
    {
      "type": "h2",
      "heading": "1. Qué es RTK y para qué sirve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/02-slide-02.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "intro",
      "content": "**RTK significa Rust Token Killer.** En el reel digo «RTX», pero el nombre correcto es RTK. Reduce el texto de los comandos antes de que Claude Code lo lea. Aquí encuentras la instalación, cinco casos de uso y cuatro prompts listos. Fuentes oficiales verificadas el **10 de noviembre de 2026**."
    },
    {
      "type": "cta",
      "heading": "¿Quieres configurarlo en tu proyecto?",
      "content": "Escríbenos por WhatsApp con la palabra **TOKEN**. Te ayudamos a verificar la configuración y a medir el resultado en tu trabajo."
    },
    {
      "type": "paragraph",
      "content": "Imagina una prueba que imprime 500 líneas de éxitos y pocos errores. Es el ejemplo del quick start oficial: RTK conserva los fallos y resume los tests superados. Claude Code ya limita salidas demasiado largas, pero el texto que lee ocupa contexto y uso. Con la API afecta a los tokens facturados. Con una suscripción consume los límites del plan."
    },
    {
      "type": "list",
      "items": [
        "**Claude Code ya funcional**, con una cuenta habilitada o acceso API. El plan gratuito de Claude no basta.",
        "**Windows y PowerShell**, con winget disponible. Para Claude Code: Windows 10 1809 o posterior y al menos 4 GB de RAM, según Anthropic.",
        "Un proyecto y sus herramientas ya presentes: RTK no instala por ti Git, Python o el programa que debe filtrar.",
        "Para el filtro automático estándar hay que verificar la herramienta **Bash**. Git for Windows provee Git Bash. La herramienta PowerShell distinta está **por verificar**."
      ]
    },
    {
      "type": "callout",
      "content": "**Costo y licencia:** la CLI es gratuita. Hooks y filtros son Apache‑2.0. La edición completa incluye también un motor BUSL‑1.1, con condiciones propias. Existe una edición solo Apache‑2.0. Ambas ediciones usan el mismo nombre rtk: elige una. El costo de Claude Code sigue separado."
    },
    {
      "type": "h2",
      "heading": "2. Instala RTK en Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/03-slide-03.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Abre **PowerShell**. Primero comprueba si RTK ya está presente. Estos dos comandos deben mostrar la versión y el resumen de ahorros, aunque aún sin datos. Si funcionan, pasa a la sección 3."
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "Si falta, usa el comando Windows indicado en la documentación oficial. Necesita winget ya disponible:"
    },
    {
      "type": "code",
      "content": "winget install rtk-ai.rtk"
    },
    {
      "type": "paragraph",
      "content": "Tras la instalación, vuelve a abrir la terminal y repite la comprobación:"
    },
    {
      "type": "code",
      "content": "rtk --version\nrtk gain"
    },
    {
      "type": "callout",
      "content": "**Nombre similar:** también existe Rust Type Kit. No uses el comando genérico cargo install rtk. Si la versión aparece pero gain no se reconoce, revisa el paquete y la ruta antes de continuar."
    },
    {
      "type": "paragraph",
      "content": "**Si winget no está disponible:** descarga rtk‑x86_64‑pc‑windows‑msvc.zip desde las releases oficiales. Extrae rtk.exe y colócalo en una carpeta del PATH, es decir, entre los directorios donde la terminal busca programas. Para otras arquitecturas el paquete Windows adecuado está **por verificar**. No abras el ejecutable con doble clic."
    },
    {
      "type": "paragraph",
      "content": "Algunos filtros requieren **ripgrep**, el comando rg, en el PATH. Si aparece el aviso de que falta, la documentación de Windows indica:"
    },
    {
      "type": "code",
      "content": "winget install BurntSushi.ripgrep.MSVC"
    },
    {
      "type": "paragraph",
      "content": "**Mac/Linux:** el README indica el siguiente comando si Homebrew ya está instalado. La guía oficial también ofrece el script para Linux, Mac y WSL."
    },
    {
      "type": "code",
      "content": "brew install rtk"
    },
    {
      "type": "list",
      "items": [
        "[Instalación oficial y alternativas](https://www.rtk-ai.app/docs/getting-started/installation/)",
        "[Versiones oficiales](https://github.com/rtk-ai/rtk/releases)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Conéctalo a Claude Code y revisa los límites",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/04-slide-04.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "La conexión automática usa un **hook**: una regla que interviene antes del comando. Por ejemplo transforma git status en rtk git status. Primero puedes ver los cambios previstos. Luego aplicas la configuración global:"
    },
    {
      "type": "code",
      "content": "rtk init --global --dry-run\nrtk init --global"
    },
    {
      "type": "paragraph",
      "content": "El primer comando no escribe nada. El segundo registra el hook en **~/.claude/settings.json** y vale para todos los proyectos del usuario. Sigue las indicaciones mostradas por el instalador. Para esta guía basta el filtro de comandos: deja desactivados el proxy y las pipelines opcionales. **Cierra y vuelve a abrir Claude Code.**"
    },
    {
      "type": "callout",
      "content": "**Atención a init:** rtk init sin --global añade instrucciones a CLAUDE.md y un modelo de filtros al proyecto. En las versiones actuales no instala el hook automático. Para eso sirve --global, abreviable a -g."
    },
    {
      "type": "list",
      "items": [
        "En Claude Code abre /hooks y revisa el hook PreToolUse de RTK.",
        "Pide a Claude que ejecute git status. Verifica si usa la herramienta Bash o PowerShell.",
        "En la terminal revisa el historial abajo. Busca una nueva ejecución filtrada. Si falta, la automatización no se ha activado."
      ]
    },
    {
      "type": "code",
      "content": "rtk gain --history"
    },
    {
      "type": "paragraph",
      "content": "**Windows está soportado.** Desde la v0.37.2 RTK usa un hook nativo. Pero el filtro estándar de Claude Code intercepta la herramienta **Bash**: iniciar Claude desde PowerShell no garantiza que use Bash. La intercepción de la herramienta **PowerShell está por comprobar**. Puedes probar explícitamente un comando RTK soportado:"
    },
    {
      "type": "code",
      "content": "rtk git status"
    },
    {
      "type": "paragraph",
      "content": "Read, Grep y Glob integrados no pasan por el filtro Bash. La edición completa tiene opciones extra, pero no son necesarias para comenzar. Un comando sin filtro puede llegar sin cambios. Si pierdes algún detalle útil, solicita la salida completa con rtk bypass seguido del comando."
    },
    {
      "type": "h2",
      "heading": "4. Mide el antes y después con rtk gain",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/05-slide-05.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Empieza con una comparación pequeña. En un repositorio Git, sin cambiar archivos entre las dos pruebas, compara el mismo estado con y sin filtro. Primero anota los contadores. Luego ejecuta los pasos siguientes. bypass muestra la salida completa y registra la prueba con ahorro cero."
    },
    {
      "type": "code",
      "content": "rtk gain\nrtk bypass git status\nrtk git status\nrtk gain --history\nrtk gain"
    },
    {
      "type": "paragraph",
      "content": "En el historial compara las dos ejecuciones. En el resumen observa la diferencia respecto a los contadores iniciales. El porcentaje acumulado incluye también la prueba bypass: no es el porcentaje solo del filtro. Las estadísticas se comparten entre proyectos y sesiones en la máquina. Durante la prueba evita otros comandos RTK."
    },
    {
      "type": "h3",
      "heading": "Cómo leer los números",
      "content": ""
    },
    {
      "type": "table",
      "headers": [
        "Voz",
        "Significado"
      ],
      "rows": [
        [
          "Entrada",
          "Tokens estimados de la salida original."
        ],
        [
          "Salida",
          "Tokens estimados tras el filtro."
        ],
        [
          "Guardado",
          "Diferencia entre Entrada y Salida."
        ],
        [
          "Guardar%",
          "Reducción de bytes de salida, no de la factura."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "Ejemplo ilustrativo del quick start oficial. **No es una medición de tu proyecto:**"
    },
    {
      "type": "code",
      "content": "Total commands : 10\nInput tokens   : 50,000\nOutput tokens  : 5,000\nSaved          : 45,000  (90.0%)"
    },
    {
      "type": "callout",
      "content": "**Tokens estimados:** RTK usa bytes / 4. No cuenta los tokens exactos del modelo. El proyecto anuncia 60–90% en comandos comunes y hasta un 90% menos de salida. Tu porcentaje debe medirse. Una salida 90% más corta no hace la sesión 90% más barata."
    },
    {
      "type": "paragraph",
      "content": "Para continuar: mide un día de trabajo comparable y revisa los errores guardados. Para el efecto en costos revisa también el uso de Claude. No compares dos instalaciones consecutivas: la segunda puede imprimir menos porque los paquetes ya están presentes. No reinicies el historial para esta prueba."
    },
    {
      "type": "h2",
      "heading": "5. Cinco casos de uso concretos",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/06-slide-06.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Elige el caso que exista en tu proyecto. Los comandos abajo son ejemplos separados: no tienes que ejecutarlos todos. Necesitan las herramientas del proyecto correspondiente. Después de cada prueba revisa el resultado y el historial de ahorros."
    },
    {
      "type": "h3",
      "heading": "Test: encuentra el fallo de inmediato",
      "content": "En un proyecto Rust, resume los tests aprobados y concéntrate en los fallos. RTK también soporta tests JavaScript, pytest y Go: verifica el comando de tu proyecto."
    },
    {
      "type": "code",
      "content": "rtk cargo test"
    },
    {
      "type": "h3",
      "heading": "Build: lee errores y avisos",
      "content": "Siempre en un proyecto Rust, reduce el ruido de compilación. Si falta un detalle diagnóstico, repite con bypass."
    },
    {
      "type": "code",
      "content": "rtk cargo build"
    },
    {
      "type": "h3",
      "heading": "Git log y diff: revisa los cambios",
      "content": "Lee un historial compacto y un diff con menos contexto. Antes de aprobar un cambio delicado, vuelve al diff completo si es necesario."
    },
    {
      "type": "code",
      "content": "rtk git log\nrtk git diff"
    },
    {
      "type": "h3",
      "heading": "Paquetes: elimina las barras de progreso",
      "content": "En un proyecto Node.js, instala las dependencias declaradas por el proyecto. El filtro npm reduce el ruido, pero también puede eliminar avisos: para diagnosticar una instalación revisa la salida completa."
    },
    {
      "type": "code",
      "content": "rtk npm install"
    },
    {
      "type": "h3",
      "heading": "Registros largos: agrupa repeticiones",
      "content": "Con Docker ya instalado, **rtk docker logs nombre-contenedor** resume las repeticiones de las últimas 100 líneas del log (sustituye nombre-contenedor por un contenedor existente). Si falta la secuencia exacta del error, usa bypass."
    },
    {
      "type": "h2",
      "heading": "6. Cuatro prompts listos y CLAUDE.md",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/07-slide-07.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Pega un prompt a la vez en Claude Code, desde la carpeta del proyecto. Son modelos para adaptar. **Cuando los uses, Claude puede ejecutar comandos y modificar la configuración.** Aquí solo son textos listos para copiar."
    },
    {
      "type": "code",
      "label": "PROMPT 1 — CONFIGURACIÓN",
      "content": "Instala y configura RTK para este proyecto usando solo la documentación oficial de rtk-ai/rtk. Primero verifica rtk --version y rtk gain. En Windows usa winget install rtk-ai.rtk si falta. Muéstrame rtk init --global --dry-run y explica que el hook vale para todos los proyectos. Configura solo el filtro base. Verifica qué herramienta shell usas y revisa rtk gain --history. Señala PowerShell como por verificar si no es detectado."
    },
    {
      "type": "code",
      "label": "PROMPT 2 — TEST",
      "content": "Encuentra el comando de pruebas de este proyecto. Verifica si RTK lo soporta. Ejecútalo con el filtro y devuélveme fallos, mensajes y resultado final. Si faltan detalles, usa rtk bypass sobre el mismo comando. No modifiques el código en este primer diagnóstico."
    },
    {
      "type": "code",
      "label": "PROMPT 3 — REVISIÓN GIT",
      "content": "Usa rtk git log y rtk git diff para explicarme los cambios locales. Si el contexto del diff no basta, recupera la salida completa con rtk bypass git diff. Indica archivos, problemas y puntos a revisar. No crees commit."
    },
    {
      "type": "code",
      "label": "PROMPT 4 — MEDICIÓN",
      "content": "Anota rtk gain. Compara rtk bypass git status y rtk git status sin modificar archivos entre pruebas. Lee rtk gain --history y el resumen final. Separa contadores acumulados y comandos individuales. Explica tokens estimados, porcentaje de salida y límites de la medida. No prometas un ahorro en euros y no reinicies el historial."
    },
    {
      "type": "h3",
      "heading": "Una línea para CLAUDE.md",
      "content": "Añade esta regla al CLAUDE.md existente sin borrar las demás instrucciones. Es un recordatorio editorial, no sustituye el hook:"
    },
    {
      "type": "code",
      "content": "- Usa RTK per i comandi supportati; se mancano dettagli usa rtk bypass, controlla rtk gain e verifica l'hook quando usi PowerShell."
    },
    {
      "type": "h3",
      "heading": "Empieza con un comando, luego mide",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/rtk-meno-token-claude-code/08-slide-08.webp",
      "alt": "RTK: menos tokens desperdiciados con Claude Code"
    },
    {
      "type": "paragraph",
      "content": "Prueba primero un comando sencillo. Verifica que el filtro conserve lo que necesitas. Luego amplía su uso a pruebas, compilación y registro de tu proyecto. **Debe seguir siendo corto y útil.** Si no lo es, recupera la salida completa. La compatibilidad real en tu PC queda por confirmar."
    },
    {
      "type": "cta",
      "heading": "¿Quieres ayuda con Claude Code?",
      "content": "Escríbenos por WhatsApp con **TOKEN**. Cuéntanos qué proyecto usas y dónde pierdes tiempo. Te ayudamos a configurar RTK, verificar los comandos y leer los resultados."
    },
    {
      "type": "h3",
      "heading": "Fuentes oficiales — control del 10 de noviembre de 2026",
      "content": "Comandos y límites: [instalación RTK](https://www.rtk-ai.app/docs/getting-started/installation/), [quick start](https://www.rtk-ai.app/docs/getting-started/quick-start/), [comandos soportados](https://www.rtk-ai.app/docs/resources/what-rtk-covers/). Medidas: [rtk gain](https://www.rtk-ai.app/docs/analytics/gain/) y [significado de los ahorros](https://www.rtk-ai.app/docs/resources/savings-explained/). Licencias: [ediciones RTK](https://www.rtk-ai.app/docs/resources/editions/)."
    },
    {
      "type": "paragraph",
      "content": "Controles de código: [hook RTK](https://github.com/rtk-ai/rtk/blob/master/src/hooks/constants.rs), [npm](https://github.com/rtk-ai/rtk/blob/master/src/cmds/js/npm_cmd.rs), [log Docker](https://github.com/rtk-ai/rtk/blob/master/src/cmds/cloud/container.rs). Para Claude Code: [hook PowerShell](https://code.claude.com/docs/en/hooks#windows-powershell-tool), [setup](https://code.claude.com/docs/en/setup), [salida de los comandos](https://code.claude.com/docs/en/tools-reference#output-limits) y [costos](https://code.claude.com/docs/en/costs). Repositorio: [rtk-ai/rtk](https://github.com/rtk-ai/rtk)."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/rtk-meno-token-claude-code.pdf)"
    }
  ]
}

export default post
