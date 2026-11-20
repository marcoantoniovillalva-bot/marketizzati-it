import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "android-agente-su-windows",
  "title": "ANDROID: configurar el agente en Windows + 10 pruebas seguras",
  "description": "ARTEMIS en Windows, Claude Code, Codex y Cursor. Configuración, restauración, diez pruebas y tres prompts para desarrolladores. Control: 13 de…",
  "date": "2026-11-13",
  "readTime": 11,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "ANDROID",
    "configurar el agente en Windows + 10 pruebas seguras",
    "ARTEMIS en Windows",
    "Claude Code",
    "Codex y Cursor",
    "Configuración"
  ],
  "image": "/images/blog/covers/android-agente-su-windows-wide.webp",
  "imageTall": "/images/blog/covers/android-agente-su-windows-tall.webp",
  "videoPreview": "/videos/preview/android-agente-su-windows.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7707718630523407649",
  "imageAlt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/01-slide-01.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "h2",
      "heading": "1. ¿Qué es ARTEMIS y para qué sirve",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/02-slide-02.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "intro",
      "content": "**ARTEMIS controla Android mediante instrucciones escritas.** Abre apps, toca elementos y observa el resultado. Usa ADB, capturas de pantalla y la estructura de la pantalla. Está en el repositorio **google/artemis**. También sirve para explorar apps, reproducir bugs y recopilar evidencias. Control de fuentes: **13 de noviembre de 2026**."
    },
    {
      "type": "cta",
      "heading": "¿Preparamos tu primera prueba?",
      "content": "Escríbenos por WhatsApp con **ANDROID**. Te ayudamos a elegir el dispositivo de prueba y a leer la configuración."
    },
    {
      "type": "callout",
      "content": "**Código gratuito. Revisa los costos.** El proyecto es open source, **Apache-2.0**. Requiere un proveedor de modelos configurado. API y asistente de desarrollo pueden tener costos propios. No implica uso ilimitado gratuito."
    },
    {
      "type": "list",
      "items": [
        "**Dispositivo:** teléfono Android de prueba con cable de datos y depuración USB, o emulador. Android Studio sirve para la ruta del emulador descrita aquí.",
        "**PC Windows:** PowerShell, ADB, Git, uv y Python 3.12 o superior. El bootstrap puede instalar dependencias faltantes, scrcpy, FFmpeg y Node.js para la consola.",
        "**Modelos:** credenciales de un proveedor compatible. Insértalas localmente en el asistente o en .env. No las pegues en el chat."
      ]
    },
    {
      "type": "paragraph",
      "content": "**Precauciones Marketizzati:** usa un entorno dedicado. Quita cuentas personales y SIM. Desactiva notificaciones privadas. Usa datos ficticios. No abras banca, email, galería o gestor de contraseñas. Capturas y logs pueden contener datos visibles. La pipeline puede usar modelos remotos: destinatarios y conservación son **por verificar** para el proveedor elegido."
    },
    {
      "type": "list",
      "items": [
        "[Google: proyecto y requisitos](https://github.com/google/artemis)",
        "[Proveedor y opciones del teléfono](https://github.com/google/artemis/blob/main/.env.example)"
      ]
    },
    {
      "type": "h2",
      "heading": "2. Conecta Android a Windows",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/03-slide-03.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "paragraph",
      "content": "**Elige una ruta.** Para el teléfono usa un cable de datos. Para el emulador no necesitas cable. Conecta un solo dispositivo durante las primeras pruebas."
    },
    {
      "type": "list",
      "items": [
        "**Prepara ADB.** En Android Studio abre SDK Manager → SDK Tools e instala Android SDK Platform-Tools. Alternativamente descarga el paquete Windows desde la página oficial abajo y extráelo, por ejemplo en C:/Android/platform-tools.",
        "**Haz disponible adb.** Añade la carpeta platform-tools al Path de usuario de Windows y reinicia PowerShell. Si trabajas dentro de esa carpeta, puedes usar .\\adb.exe en lugar de adb: el prefijo .\\ es la sintaxis PowerShell para un ejecutable local.",
        "**Teléfono:** en Ajustes busca Número de compilación y tócala siete veces. La ruta varía según el fabricante. Abre Opciones de desarrollador y activa Depuración USB. No desbloquees el bootloader.",
        "**Conecta y autoriza.** Desbloquea la pantalla. Conecta el cable y acepta en el teléfono la solicitud de depuración RSA solo para tu PC. Windows puede requerir el controlador USB del fabricante.",
        "**Alternativa emulador:** en Android Studio abre Device Manager → Create Virtual Device. Elige hardware e imagen del sistema. Completa con Finish y lanza el AVD. No añadas cuentas personales."
      ]
    },
    {
      "type": "paragraph",
      "content": "En PowerShell verifica la conexión con el comando documentado por Android:"
    },
    {
      "type": "code",
      "content": "adb devices"
    },
    {
      "type": "paragraph",
      "content": "Debe aparecer un número de serie con estado **device**. Con **unauthorized**, revisa la autorización en el teléfono. Con **offline**, el dispositivo no está listo. Si la lista está vacía, verifica el cable, el controlador o el inicio del AVD. Guarda el número de serie: sustituirá **SERIAL** en los prompts."
    },
    {
      "type": "list",
      "items": [
        "[Android: Platform-Tools para Windows](https://developer.android.com/tools/releases/platform-tools)",
        "[Android: depuración y autorización ADB](https://developer.android.com/tools/adb)",
        "[Android: opciones de desarrollador](https://developer.android.com/studio/debug/dev-options)",
        "[Android: controlador y teléfono físico](https://developer.android.com/studio/run/device)",
        "[Android Studio: crear un emulador](https://developer.android.com/studio/run/managing-avds)"
      ]
    },
    {
      "type": "h2",
      "heading": "3. Instala y conecta tu asistente",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/04-slide-04.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "callout",
      "content": "**Primero lee. Luego inicia.** Haz primero copias de los archivos de la sección 4. El comando de inicio descarga e instala componentes. start.bat llama a PowerShell con ExecutionPolicy Bypass para ese proceso. Lee start.bat y scripts/start.ps1. No eludas las normas de tu organización."
    },
    {
      "type": "paragraph",
      "content": "Con Git disponible, abre PowerShell en la carpeta donde quieras guardar ARTEMIS. Aquí el quick start oficial para Windows:"
    },
    {
      "type": "code",
      "content": "git clone https://github.com/google/artemis.git\ncd artemis\n.\\start.bat"
    },
    {
      "type": "paragraph",
      "content": "Al preguntar si instalar MCP y reglas en los IDE responde **n** si deseas elegir solo un editor. El sí del bootstrap configura todos los targets previstos. La consola se abre normalmente en **http://localhost:8000**. Deja que finalice la configuración."
    },
    {
      "type": "paragraph",
      "content": "En la carpeta ARTEMIS abre otra PowerShell. El asistente configura claves y dispositivo, pero **sobrescribe .env**: guárdalo antes si ya tiene ajustes. En el paso IDE elige **8 — Skip for now** para usar después el comando dirigido. Revisa el diagnóstico:"
    },
    {
      "type": "code",
      "content": "uv run artemis init\nuv run artemis doctor"
    },
    {
      "type": "paragraph",
      "content": "**Claude Code:** añade servidor MCP y reglas globales con el comando soportado por el proyecto. No es un plugin:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install claude"
    },
    {
      "type": "paragraph",
      "content": "**Variantes oficiales:** elige Codex o Cursor en lugar de Claude. No hace falta ejecutarlas ambas:"
    },
    {
      "type": "code",
      "content": "uv run artemis mcp --install codex\nuv run artemis mcp --install cursor"
    },
    {
      "type": "paragraph",
      "content": "Reinicia el editor o recarga el servidor MCP. En Claude Code verifica **/mcp** y comprueba que ARTEMIS esté disponible. Si falta o falla, lee el error y usa doctor. No apruebes ciegamente nuevos permisos."
    },
    {
      "type": "paragraph",
      "content": "**POR VERIFICAR en tu PC:** la configuración no se ha ejecutado para esta guía. Los nombres de los menús y la compatibilidad dependen de las versiones. Para ver la configuración propuesta usa el generador oficial (uv puede sincronizar el entorno): **uv run artemis mcp --generate-config claude**."
    },
    {
      "type": "h2",
      "heading": "4. Revisa los cambios y vuelve atrás",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/05-slide-05.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "paragraph",
      "content": "El instalador modifica archivos **globales**. Primero guarda una copia de los archivos existentes. Anota los que faltan. Después compara las diferencias. El objetivo claude también actúa en Claude Desktop."
    },
    {
      "type": "table",
      "headers": [
        "Archivo Windows",
        "Qué cambia"
      ],
      "rows": [
        [
          "%USERPROFILE%/.claude.json",
          "Añade o actualiza mcpServers.artemis."
        ],
        [
          "%APPDATA%/Claude/claude_desktop_config.json",
          "Añade el servidor también a Claude Desktop."
        ],
        [
          "%USERPROFILE%/.claude/rules/artemis.md",
          "Escribe las reglas globales de prueba ARTEMIS."
        ],
        [
          "%USERPROFILE%/.claude/CLAUDE.md",
          "Elimina cualquier bloque ARTEMIS duplicado antiguo. Puede borrar el archivo si solo contenía ese bloque."
        ]
      ]
    },
    {
      "type": "paragraph",
      "content": "En la ruta de instalación examinada **no se detectan cambios en settings.json, hook o reglas permissions.allow** de Claude. Las reglas ARTEMIS solicitan explorar la app antes de escribir pruebas. No son una protección técnica."
    },
    {
      "type": "paragraph",
      "content": "**Codex:** modifica config.toml y AGENTS.md, o AGENTS.override.md si ya está presente y no está vacío, en la carpeta CODEX_HOME (por defecto .codex en el perfil de usuario). **Cursor:** modifica .cursor/mcp.json, .cursorrules y .cursor/rules/artemis.mdc en el perfil de usuario. Guarda también estos archivos si eliges esos objetivos."
    },
    {
      "type": "paragraph",
      "content": "Controla Claude desde PowerShell (comandos Anthropic): **claude mcp list** y **claude mcp get artemis**."
    },
    {
      "type": "h3",
      "heading": "Cómo cancelar",
      "content": "Procedimiento Marketizzati basado en los archivos leídos, **por verificar localmente**. Detén las tareas. Desde la carpeta ARTEMIS detén la consola; luego elimina el registro de Claude a nivel de usuario:"
    },
    {
      "type": "code",
      "content": "uv run artemis stop\nclaude mcp remove artemis --scope user"
    },
    {
      "type": "paragraph",
      "content": "En Claude Desktop elimina solo mcpServers.artemis si fue añadido por la configuración. Restaura selectivamente artemis.md y CLAUDE.md desde las copias. Conserva los demás cambios. Para Codex o Cursor restaura solo los bloques ARTEMIS en los archivos indicados. No elimines carpetas completas de configuración. No hay un comando mcp --uninstall documentado."
    },
    {
      "type": "paragraph",
      "content": "La primera tarea puede instalar en el teléfono **Artemis Accessibility Helper**. Para eliminarlo, deja conectado solo el dispositivo de prueba y ejecuta el siguiente comando oficial. La desinstalación de MCP no elimina el helper ni dependencias del PC. Al terminar, desconecta el cable y desactiva la depuración USB."
    },
    {
      "type": "code",
      "content": "uv run artemis helper uninstall"
    },
    {
      "type": "h2",
      "heading": "5. Cinco pruebas sin cuenta",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/06-slide-06.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "paragraph",
      "content": "Prompt Marketizzati **por verificar**, no son pruebas oficiales de Google. Sustituye **SERIAL** por tu número de serie. Pega un prompt a la vez en el asistente conectado a ARTEMIS. Supervisa la pantalla. Si falta una app, informa del límite sin instalarla. Las instrucciones no garantizan que cada acción sea correcta."
    },
    {
      "type": "code",
      "label": "PRUEBA 1 — VERSIÓN ANDROID",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri Impostazioni e leggi la versione Android. Non riportare IMEI, seriali hardware o dati dell’account. Non cambiare impostazioni. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 2 — CAPTURA DE PANTALLA",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri la pagina principale di Impostazioni. Acquisisci uno screenshot solo se non mostra dati personali. Restituisci l’evidenza disponibile. Non inventare un percorso file. Termina entro 4 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 3 — BATERÍA",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri Impostazioni → Batteria. Leggi la percentuale se disponibile. Non attivare risparmio energetico o altri interruttori. Segnala eventuali dialoghi di errore. Termina entro 6 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 4 — CALCULADORA",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Apri la Calcolatrice di sistema se presente. Calcola 17 + 25. Verifica che il risultato sia 42. Non aprire la cronologia. Se manca, dichiaralo. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 5 — NAVEGACIÓN",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Da Impostazioni apri Display, torna indietro e poi vai alla Home. Verifica ogni passaggio senza toccare interruttori. Riporta il punto in cui ti blocchi. Termina entro 6 azioni."
    },
    {
      "type": "paragraph",
      "content": "**Resultado a buscar:** acciones observadas y evidencias coherentes. Un paso no ejecutado queda sin verificar. No pidas al agente que eluda pantallas protegidas."
    },
    {
      "type": "h2",
      "heading": "6. Otras cinco pruebas controladas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/07-slide-07.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "paragraph",
      "content": "Para las pruebas 8–10 prepara tu propia app demostrativa ya instalada, sin datos reales. Usa backend local o entorno de pruebas. Sustituye **APP_DEMO** por el nombre de la app. Si falta una función, el resultado correcto es «no verificable»."
    },
    {
      "type": "code",
      "label": "PRUEBA 6 — BUSCAR EN AJUSTES",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. In Impostazioni cerca Batteria. Apri il risultato pertinente e verifica il titolo. Non cambiare opzioni. Se la ricerca non esiste, dichiaralo. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 7 — INFO CALCULADORA",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Da Impostazioni apri le informazioni dell’app Calcolatrice di sistema. Leggi la versione se visibile. Non cancellare dati, non disinstallare e non modificare permessi. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 8 — CAMPOS VACÍOS",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. Apri il login di APP_DEMO e invia il modulo vuoto una sola volta. Verifica gli errori sui campi obbligatori. Non usare altri account. Termina entro 6 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 9 — INICIO DE SESIÓN FICTICIO",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. In APP_DEMO inserisci demo@example.test e la password fittizia prova-sbagliata. Invia una sola volta. Verifica il rifiuto atteso, senza riprovare. Non usare recupero password. Termina entro 8 azioni."
    },
    {
      "type": "code",
      "label": "PRUEBA 10 — SIN RESULTADO",
      "content": "Usa ARTEMIS solo sul dispositivo di prova SERIAL. Fermati se compaiono dati personali. Usa il profilo Pro. Nella ricerca locale di APP_DEMO scrivi zzz-nessun-risultato. Verifica lo stato vuoto. Torna alla schermata iniziale. Non creare o eliminare elementi. Termina entro 8 azioni."
    },
    {
      "type": "paragraph",
      "content": "Para cada prueba anota: objetivo, resultado esperado, resultado observado, captura de pantalla disponible y límite encontrado. Los límites de acciones escritos en los prompts son solicitudes al modelo. No son un bloqueo técnico configurado por la guía."
    },
    {
      "type": "list",
      "items": [
        "[Google: modo, diagnóstico y selección de dispositivo](https://github.com/google/artemis/blob/main/mcp_server/rules.md)"
      ]
    },
    {
      "type": "h2",
      "heading": "7. Tres prompts para quien desarrolla apps",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/08-slide-08.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "paragraph",
      "content": "Modelos Marketizzati **por verificar**. Sustituye **SERIAL**, **APP_DEMO** y los esperados con los de tu proyecto. Usa una build de prueba y datos sintéticos. Para planes, verificaciones, diagnóstico e informe solicita **Pro**. Flash está pensado para acciones simples y no incluye la misma verificación ni el informe final."
    },
    {
      "type": "code",
      "label": "DESARROLLADOR 1 — REPRODUCE UN BUG",
      "content": "Con ARTEMIS Pro, solo su SERIAL, esplora APP_DEMO: Home → Cerca → testo zzz. Atteso: stato vuoto, nessun crash. Prepara un piano breve, poi verifica il percorso entro 12 azioni. Raccogli screenshot e log disponibili senza dati personali. Riporta atteso, osservato e passaggi ripetibili. Non modificare codice o dati. Se manca un’evidenza, scrivi NON VERIFICATO."
    },
    {
      "type": "code",
      "label": "DESARROLLADOR 2 — REGRESIÓN UI",
      "content": "Con ARTEMIS Pro, solo su SERIAL, verifica in APP_DEMO tre percorsi: Home → Dettaglio → Indietro; ricerca senza risultati; login vuoto. Usa solo dati sintetici. Massimo 8 azioni per percorso. Per ciascuno riporta atteso, osservato, esito ed evidenza. Non inviare messaggi, non acquistare e non cambiare permessi. Fermati se appare un account reale."
    },
    {
      "type": "code",
      "label": "DESARROLLADOR 3 — DEL TEST AL CÓDIGO",
      "content": "Con ARTEMIS Pro esplora su SERIAL il percorso Home → Cerca di APP_DEMO, entro 8 azioni. Poi proponi un test eseguibile nel framework già presente nel mio progetto. Usa locator osservati e attese esplicite. Non inventare ID o coordinate. Indica prerequisiti e assert. Non installare dipendenze e non modificare file senza una mia richiesta. Marca DA VERIFICARE le parti che non hai eseguito."
    },
    {
      "type": "callout",
      "content": "**Límites a recordar:** El 99%+ es el resultado declarado en el benchmark AndroidWorld. No garantiza el éxito en tu app. El modelo puede equivocarse en toques y lecturas. Tiempo, idioma, diseño y pantallas protegidas pueden cambiar el resultado. El plugin nativo Android Studio e iOS está en la hoja de ruta, no son funciones ya prometidas. El soporte de tu dispositivo y el tratamiento de datos quedan por verificar."
    },
    {
      "type": "list",
      "items": [
        "[Google: Flash y Pro](https://github.com/google/artemis#execution-profiles-flash-vs-pro)",
        "[Google: reglas para pruebas basadas en evidencias](https://github.com/google/artemis/blob/main/mcp_server/rules.md)",
        "[Google: hoja de ruta y benchmark](https://github.com/google/artemis#roadmap)"
      ]
    },
    {
      "type": "h3",
      "heading": "Lleva ANDROID a tu proyecto",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/android-agente-su-windows/09-slide-09.webp",
      "alt": "ANDROID: configurar el agente en Windows + 10 pruebas seguras"
    },
    {
      "type": "cta",
      "heading": "¿Quieres configurarlo con nosotros?",
      "content": "Escríbenos por WhatsApp con **ANDROID**. Te ayudamos a preparar Windows, elegir una prueba y leer capturas, logs y configuración."
    },
    {
      "type": "h3",
      "heading": "Fuentes — control del 13 de noviembre de 2026",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Google: ARTEMIS, README y licencia](https://github.com/google/artemis)",
        "[Google: instalador MCP y archivos modificados](https://github.com/google/artemis/blob/main/artemis/interfaces/cli/commands/mcp.py)",
        "[Google: proveedor y privacidad del dispositivo](https://github.com/google/artemis/blob/main/.env.example)",
        "[Android: ADB y Platform-Tools](https://developer.android.com/tools/adb)",
        "[Anthropic: gestión de los servidores MCP](https://code.claude.com/docs/en/mcp)",
        "[OpenAI: configuración MCP Codex](https://developers.openai.com/codex/mcp)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Las capacidades y los comandos provienen de fuentes oficiales. Las precauciones, las diez pruebas y los tres prompts son propuestas Marketizzati. La configuración, la restauración y los prompts no se han probado en Windows para este recurso. No se instaló ningún programa durante la preparación. La guía no garantiza ausencia de errores ni exposición de datos."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/android-agente-su-windows.pdf) (PDF en italiano)"
    }
  ]
}

export default post
