import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "open-webui-guida",
  "title": "Open WebUI: un chat como ChatGPT para instalar en tu ordenador",
  "description": "Instala Open WebUI en media hora: modelos, equipo y funcionalidades",
  "date": "2026-11-03",
  "readTime": 6,
  "category": "AI e automazioni",
  "freeGuide": true,
  "keywords": [
    "Guía práctica Open WebUI",
    "Instala Open WebUI en media hora",
    "modelos",
    "equipo y funcionalidades",
    "Guía práctica Open",
    "práctica Open WebUI"
  ],
  "image": "/images/blog/covers/open-webui-guida-wide.es.webp",
  "imageTall": "/images/blog/covers/open-webui-guida-tall.es.webp",
  "videoPreview": "/videos/preview/open-webui-guida.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7703989747957402912",
  "imageAlt": "Open WebUI en media hora — el chat IA de tu empresa, en tu ordenador o en tu servidor",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/01-slide-01.webp",
      "alt": "Open WebUI en media hora — el chat IA de tu empresa, en tu ordenador o en tu servidor"
    },
    {
      "type": "h2",
      "heading": "Antes de empezar: qué encontrarás",
      "content": ""
    },
    {
      "type": "intro",
      "content": "En el video prometí la guía para instalar **Open WebUI** en media hora y ver sus funciones. **¿Qué es Open WebUI?** Es una interfaz de chat IA, similar a ChatGPT, que instalas en tu ordenador o servidor. Conecta los modelos que quieras (incluidos locales y gratuitos) y cada miembro del equipo accede con su cuenta. Instrucciones basadas en la doc oficial y una instalación real el 3‑nov‑2026."
    },
    {
      "type": "list",
      "items": [
        "Instalar Open WebUI con Docker (recomendado) o con Python.",
        "Conectar un modelo local y gratuito con Ollama, o los modelos de pago con la clave API.",
        "Crear las cuentas del equipo, los roles y los grupos.",
        "Usar documentos, búsqueda web, voz, imágenes y asistentes personalizados.",
        "Entender costos y límites antes de sustituir suscripciones."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** los datos siguen siendo realmente tuyos **solo si el modelo se ejecuta en un ordenador o servidor que controles** (por ejemplo con Ollama). Si conectas un modelo de pago vía API, los mensajes pasan por el proveedor del modelo y pagas según el consumo."
    },
    {
      "type": "cta",
      "heading": "¿Quieres que lo instalemos nosotros para tu equipo?",
      "content": "**Si quieres ahorrar tiempo, escríbenos.** Instalamos Open WebUI en tu servidor, conectamos los modelos y creamos las cuentas del equipo."
    },
    {
      "type": "h3",
      "heading": "Enlaces oficiales",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "[Open WebUI en GitHub (código, instrucciones, licencia)](https://github.com/open-webui/open-webui)",
        "[Documentación — Quick Start](https://docs.openwebui.com/getting-started/quick-start/)",
        "[Lista de funcionalidades](https://docs.openwebui.com/features/)",
        "[Docker Desktop](https://www.docker.com/products/docker-desktop/)",
        "[Ollama (modelos locales)](https://ollama.com)"
      ]
    },
    {
      "type": "h2",
      "heading": "1. Qué es y por qué conviene",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/02-slide-02.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Open WebUI es uno de los proyectos más seguidos en GitHub: **157.600 estrellas** en noviembre de 2026. El código es público y gratuito para instalar; desde 2025 usa una licencia propia (la **Open WebUI License**, basada en BSD-3) que prohíbe quitar la marca Open WebUI si más de 50 personas lo usan en 30 días, salvo licencia enterprise. Para una empresa la ventaja es tener **un solo chat para todos**, con los modelos que elijas y las cuentas gestionadas por un administrador."
    },
    {
      "type": "h2",
      "heading": "2. Instala en 30 minutos",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/03-slide-03.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Funciona en Windows, macOS y Linux. La ruta recomendada por la documentación es **Docker**: un solo comando descarga y arranca todo."
    },
    {
      "type": "h3",
      "heading": "Opción A — Docker (recomendada)",
      "content": ""
    },
    {
      "type": "list",
      "items": [
        "Instala **Docker Desktop** desde el sitio oficial y ejecútalo (en Windows elige el motor WSL 2).",
        "Genera una clave secreta y guárdala: sirve para que no se desconecte todo en cada actualización. En Mac/Linux el comando es **openssl rand -hex 32**; también vale una frase larga y aleatoria.",
        "Abre la terminal y ejecuta el comando siguiente, sustituyendo tu clave por **la-tua-chiave**.",
        "Abre el navegador en **http://localhost:3000**.",
        "Crea la primera cuenta: **el primer usuario registrado se convierte en administrador**."
      ]
    },
    {
      "type": "code",
      "content": "docker run -d -p 3000:8080 --add-host=host.docker.internal:host-gateway -v open-webui:/app/backend/data -e WEBUI_SECRET_KEY=la-tua-chiave --name open-webui --restart always ghcr.io/open-webui/open-webui:main"
    },
    {
      "type": "callout",
      "content": "**Importante:** la parte **-v open-webui:/app/backend/data** guarda chats, usuarios y configuraciones en un volumen que sobrevive a las actualizaciones. No la elimines. Si solo usas modelos vía API puedes elegir la imagen **:slim** (aprox. 197 MB en vez de 1,6 GB)."
    },
    {
      "type": "h3",
      "heading": "Opción B — Python",
      "content": "Requiere **Python 3.11 o 3.12** (la 3.13 aún no está soportada). Luego basta con dos comandos; la interfaz se abre en **http://localhost:8080**."
    },
    {
      "type": "code",
      "content": "pip install open-webui\nopen-webui serve"
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Estoy en [Windows 11 / Mac / server Linux] y quiero instalar Open WebUI con Docker siguiendo la documentación oficial. Guíame paso a paso: espera a que te diga cómo ha ido cada paso antes de darme el siguiente, y si aparece un error explícamelo."
    },
    {
      "type": "paragraph",
      "content": "si nunca has usado la terminal, Claude o ChatGPT te acompañan en la instalación sin saltarse pasos."
    },
    {
      "type": "h2",
      "heading": "3. Conecta los modelos",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/04-slide-04.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Open WebUI no incluye un modelo: lo conectas tú. Puedes usar varios y cambiarlos incluso a mitad de la conversación."
    },
    {
      "type": "list",
      "items": [
        "**Local y gratuito:** instala **Ollama** desde ollama.com y descarga un modelo, por ejemplo con **ollama pull gemma3**. Open WebUI intentará conectarse a Ollama automáticamente; con Docker la dirección es **http://host.docker.internal:11434**.",
        "**De pago vía API:** ve a **Panel de administración → Configuración → Conexiones**, pulsa **+** junto a las conexiones OpenAI e introduce la URL (para OpenAI **https://api.openai.com/v1**) y tu clave API. También funcionan Claude de Anthropic y otros proveedores compatibles (Mistral, Groq, DeepSeek…).",
        "Vuelve al chat, abre **Selecciona modelo** en la parte superior y elige el que quieras usar."
      ]
    },
    {
      "type": "table",
      "headers": [
        "",
        "Modelo local (Ollama)",
        "Modelo de pago (API)"
      ],
      "rows": [
        [
          "Coste",
          "Gratis, pero necesitas un ordenador adecuado",
          "Pagas el consumo al proveedor"
        ],
        [
          "Datos",
          "Quedan en tu ordenador o servidor",
          "Pasan por el proveedor del modelo"
        ],
        [
          "Calidad",
          "Buena para textos y resúmenes; depende del modelo y del hardware",
          "Los modelos más potentes"
        ]
      ]
    },
    {
      "type": "h2",
      "heading": "4. Tu equipo con sus propias cuentas",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/05-slide-05.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Cada persona entra con su propia cuenta y solo ve sus chats. El administrador decide quién puede usar qué modelos."
    },
    {
      "type": "list",
      "items": [
        "Abre el menú de tu perfil y elige **Panel de administración → Usuarios → Añadir usuario**: nombre, email, contraseña y rol (**Usuario** o **Administrador**).",
        "Alternativamente activa el registro: las nuevas cuentas quedan **en espera** hasta que el administrador las apruebe.",
        "En la pestaña **Grupos** crea los departamentos (por ejemplo Ventas, Administración) y asigna a cada grupo los modelos y permisos.",
        "Para las empresas más estructuradas Open WebUI admite el acceso con cuentas corporativas mediante **SSO / OIDC / LDAP** (por ejemplo Microsoft o Google)."
      ]
    },
    {
      "type": "callout",
      "content": "**Nota:** con muchos usuarios simultáneos conviene instalarlo en un servidor (también en la nube) en lugar de en el ordenador de una persona, y hacer un **backup del volumen de datos** a intervalos regulares."
    },
    {
      "type": "h2",
      "heading": "5. Las funcionalidades para probar",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/06-slide-06.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Después del chat, estas son las funciones que ahorran más tiempo en la empresa:"
    },
    {
      "type": "table",
      "headers": [
        "Funcionalidad",
        "Qué hace",
        "Dónde la encuentras"
      ],
      "rows": [
        [
          "Conocimiento (documentos)",
          "Cargas PDF, listas de precios, procedimientos: la IA responde citando tus archivos.",
          "Espacio de trabajo → Conocimiento"
        ],
        [
          "Asistentes personalizados",
          "Un modelo con instrucciones, documentos y herramientas fijas (p.ej. «Respuestas a clientes»).",
          "Espacio de trabajo → Modelos"
        ],
        [
          "Búsqueda web",
          "La IA busca en línea y cita las fuentes.",
          "Configuración de administrador"
        ],
        [
          "Voz e imágenes",
          "Dictado, lectura en voz alta, generación de imágenes.",
          "Configuración de administrador"
        ],
        [
          "Dos modelos en comparación",
          "Misma pregunta a dos modelos, respuestas lado a lado.",
          "Selecciona modelo → +"
        ],
        [
          "Herramientas y MCP",
          "Conecto servicios externos y automatizaciones.",
          "Espacio de trabajo → Herramientas"
        ]
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Eres el asistente del servicio de atención al cliente de [nombre empresa]. Responde solo usando los documentos del conocimiento «Listino e procedure». Si la información no está, dilo y sugiere contactar a [referente]. Tono cordial, frases breves, sin precios inventados."
    },
    {
      "type": "paragraph",
      "content": "Pégalo como instrucciones del sistema cuando crees un asistente en Espacio de trabajo → Modelos."
    },
    {
      "type": "h2",
      "heading": "6. Costes y límites, antes de cancelar las suscripciones",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/07-slide-07.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "list",
      "items": [
        "**Modelos de pago:** ya no pagas una suscripción por persona, sino el consumo vía API. Establece un límite de gasto en el sitio del proveedor.",
        "**Datos:** con un modelo vía API los mensajes pasan por el proveedor. Para documentos confidenciales usa un modelo local.",
        "**Instalación y mantenimiento:** alguien debe instalarlo, actualizarlo y hacer copias de seguridad.",
        "**Hardware:** los modelos locales grandes requieren mucha memoria y una buena tarjeta gráfica; los pequeños pueden funcionar en un portátil reciente, pero son menos precisos."
      ]
    },
    {
      "type": "h2",
      "heading": "Mejores prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/open-webui-guida/08-slide-08.webp",
      "alt": "Guía práctica Open WebUI"
    },
    {
      "type": "paragraph",
      "content": "Empieza a pequeña escala: instálalo en tu ordenador, conecta un modelo local y pruébalo con 2‑3 compañeros durante una semana. Después decide si moverlo a un servidor y qué modelos de pago son realmente necesarios. Podemos ayudarte con la instalación, las cuentas del equipo y los asistentes personalizados sobre tus documentos."
    },
    {
      "type": "cta",
      "heading": "¿Quieres una comparativa para tu caso?",
      "content": "**Si quieres que lo instalemos nosotros, escríbenos.** Cuéntanos cuántas personas sois y qué usáis hoy: te diremos si conviene y cuánto cuesta."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/open-webui-guida.pdf) (PDF en italiano)"
    }
  ]
}

export default post
