import type { BlogPost } from '../../types'

const post: BlogPost = {
  "slug": "70-ganci-virali",
  "title": "70 ganchos virales: la skill para Claude que escribe los ganchos de tus videos",
  "description": "Descarga, instala y usa la skill hook-virali en Claude",
  "date": "2026-11-02",
  "readTime": 5,
  "category": "Contenuti e social",
  "freeGuide": true,
  "keywords": [
    "Guía práctica 70 ganchos virales",
    "Descarga",
    "instala y usa la skill hook-virali en Claude",
    "Guía práctica 70",
    "práctica 70 ganchos",
    "70 ganchos virales"
  ],
  "image": "/images/blog/covers/70-ganci-virali-wide.es.webp",
  "imageTall": "/images/blog/covers/70-ganci-virali-tall.es.webp",
  "videoPreview": "/videos/preview/70-ganci-virali.mp4",
  "tiktok": "https://www.tiktok.com/@marco.villalva3/video/7703698401770147105",
  "imageAlt": "70 ganchos virales — descarga la skill, instálala en Claude y escribe los ganchos de tus videos",
  "sections": [
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/01-slide-01.webp",
      "alt": "70 ganchos virales — descarga la skill, instálala en Claude y escribe los ganchos de tus videos"
    },
    {
      "type": "h2",
      "heading": "Antes de empezar: qué encontrarás",
      "content": ""
    },
    {
      "type": "intro",
      "content": "En el video te prometí la **skill con 70 estructuras de ganchos**, tomadas de reels que han funcionado. Una skill es un archivo de instrucciones que Claude lee cuando le pides un gancho: en lugar de partir de cero, usa las estructuras, las adapta a tu tema y te propone 5 versiones para decir en voz alta. **La guía y la skill son gratuitas.** Instrucciones verificadas en las páginas oficiales de Claude el 2 de noviembre de 2026."
    },
    {
      "type": "list",
      "items": [
        "Descarga la skill: un archivo .md para Claude Code, uno .zip para Claude en el sitio o en la app.",
        "Instálala en pocos minutos siguiendo el paso a paso.",
        "Úsala con los prompts listos y elige el gancho que suene como tú."
      ]
    },
    {
      "type": "callout",
      "content": "**Regla clave:** un gancho fuerte detiene el scroll, pero **no garantiza las visualizaciones**. El vídeo debe cumplir lo que el gancho promete, ya desde la frase siguiente."
    },
    {
      "type": "cta",
      "heading": "¿Quieres los guiones listos cada semana?",
      "content": "**Si quieres que lo hagamos por ti, escríbenos.** Preparamos ganchos, guiones y montaje partiendo de tu negocio."
    },
    {
      "type": "h2",
      "heading": "1. Descarga la skill",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/02-slide-02.webp",
      "alt": "Guía práctica 70 ganchos virales"
    },
    {
      "type": "paragraph",
      "content": "Es la misma skill, en dos formatos. Elige el que corresponda a dónde usas Claude:"
    },
    {
      "type": "list",
      "items": [
        "[hook-virali.zip — para Claude en el sitio o en la app](https://drive.google.com/file/d/1_RW-TlK1YFkAYZTfumxJBQ72uTBLAmSd/view?usp=sharing)",
        "[SKILL_Hook_Virali.md — para Claude Code](https://drive.google.com/file/d/1924c5ulcqIHS2V2FSqHhdxJyKRFzwV-C/view?usp=sharing)"
      ]
    },
    {
      "type": "paragraph",
      "content": "Dentro encontrarás 70 fórmulas divididas en 7 familias (resultado y tutorial, listas, problemas, preguntas, experiencia personal, sorpresa, tiempo y herramientas), los reels de referencia y las reglas para no prometer cosas que el vídeo no cumpla."
    },
    {
      "type": "h2",
      "heading": "2. Instala en Claude (sitio o app)",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/03-slide-03.webp",
      "alt": "Guía práctica 70 ganchos virales"
    },
    {
      "type": "paragraph",
      "content": "Es el camino más sencillo. Las skills están disponibles también en el plan gratuito, pero se necesita la ejecución del código activada."
    },
    {
      "type": "list",
      "items": [
        "Descarga **hook-virali.zip** del enlace de arriba. **No lo abras ni lo extraigas**: se carga tal cual.",
        "En claude.ai (o en la app) ve a **Configuración → Funcionalidades** (en inglés Settings → Capabilities) y activa la ejecución de código (**Code execution and file creation**).",
        "Abre **Personaliza → Skill** (Customize → Skills), pulsa **+**, luego **Crea skill → Carga una skill** (Create skill → Upload a skill) y elige el archivo ZIP.",
        "Comprueba que **hook-virali** aparezca en la lista y que el interruptor esté activado.",
        "Abre un nuevo chat y escribe: «Usa la skill hook-virali para escribir 5 ganchos para…»."
      ]
    },
    {
      "type": "callout",
      "content": "**Si no encuentras el menú:** Anthropic actualiza a menudo la interfaz y los nombres pueden cambiar un poco. Busca la opción **Skill** en la configuración o en el menú Personaliza. En Team y Enterprise la skill la habilita primero el administrador."
    },
    {
      "type": "h2",
      "heading": "3. Instala en Claude Code",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/04-slide-04.webp",
      "alt": "Guía práctica 70 ganchos virales"
    },
    {
      "type": "paragraph",
      "content": "Si ya usas Claude Code en el ordenador, la skill es un archivo que debes colocar en la carpeta correcta. No hace falta reiniciar: Claude Code detecta las nuevas skills automáticamente."
    },
    {
      "type": "list",
      "items": [
        "Descarga **SKILL_Hook_Virali.md** y renómbralo a **SKILL.md**.",
        "Para usarla en un solo proyecto, colócala en **.claude/skills/hook-virali/SKILL.md** dentro la carpeta del proyecto. Para tenerla en todos los proyectos, ponla en **~/.claude/skills/hook-virali/SKILL.md** en tu carpeta de usuario.",
        "Escribe **/hook-virali** seguido de la petición, o simplemente pide un gancho: Claude lo usa solo cuando la solicitud coincide.",
        "Si creaste la carpeta skills por primera vez mientras Claude Code ya estaba abierto, escribe **/reload-skills**."
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Instala como skill de proyecto el archivo SKILL_Hook_Virali.md que encuentras en la carpeta Download: crea .claude/skills/hook-virali/SKILL.md, no modifiques el contenido y luego muéstrame que la skill hook-virali está disponible."
    },
    {
      "type": "paragraph",
      "content": "si no quieres mover el archivo manualmente, lo hace Claude Code por ti."
    },
    {
      "type": "h2",
      "heading": "4. Cómo usarla",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/05-slide-05.webp",
      "alt": "Guía práctica 70 ganchos virales"
    },
    {
      "type": "paragraph",
      "content": "Cuantos más detalles concretos des, más el gancho suena propio. Indica siempre **de qué trata el video, a quién va dirigido y qué obtiene quien lo ve**."
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Usa la skill hook-virali. El video habla de [tema] y está dirigido a [público, por ejemplo propietarios de pequeñas empresas]. Quien lo ve aprende a [resultado concreto]. Escríbeme 5 ganchos diferentes, de menos de 3 segundos, con palabras simples. Para cada uno indica el tipo y por qué puede funcionar. No inventes números ni resultados."
    },
    {
      "type": "paragraph",
      "content": "da a Claude público y promesa: son las dos cosas que hacen un gancho específico."
    },
    {
      "type": "table",
      "headers": [
        "Tipo",
        "Cuándo usarlo",
        "Ejemplo del video"
      ],
      "rows": [
        [
          "Tutorial",
          "Promete un resultado claro, con tiempo y método.",
          "«Así es como preparar el contenido de toda la semana en una hora con IA.»"
        ],
        [
          "Lista",
          "Quien mira quiere saber si él también comete esos errores.",
          "«Cinco suscripciones que pagas sin usarlas.»"
        ],
        [
          "Historia",
          "Un problema con el que el público se identifica, luego la solución.",
          "«Quería publicar todos los días, pero perdía una hora solo para encontrar una idea.»"
        ],
        [
          "Pregunta",
          "Quieres hacer pensar o comentar.",
          "«Si pudieras encontrar a tus primeros clientes online sin miles de seguidores, ¿lo intentarías?»"
        ],
        [
          "Experiencia",
          "Una historia real genera confianza.",
          "«Cuando empecé a vender online, pensé que bastaba con publicar. Me equivocaba.»"
        ]
      ]
    },
    {
      "type": "code",
      "label": "PROMPT",
      "content": "Este es el guion de mi próximo video: [incolla il copione]. Con la skill hook-virali dime si el gancho inicial funciona, qué cambiarías y propón 3 alternativas que se mantengan fieles a lo que el video muestra realmente."
    },
    {
      "type": "paragraph",
      "content": "la skill sirve también para revisar un gancho que ya has escrito."
    },
    {
      "type": "callout",
      "content": "**Antes de grabar:** lee el gancho en voz alta. Si te trabas o no se lo dirías a un cliente, reescríbelo con tus palabras. No inventes números: si dices «70», deben ser 70."
    },
    {
      "type": "h2",
      "heading": "Mejores prácticas y soporte Marketizzati",
      "content": ""
    },
    {
      "type": "image",
      "url": "/images/blog/risorse/70-ganci-virali/06-slide-06.webp",
      "alt": "Guía práctica 70 ganchos virales"
    },
    {
      "type": "paragraph",
      "content": "Prueba la skill durante una semana: un gancho al día, cinco tipos diferentes, como en el video. Luego revisa las estadísticas para ver qué video mantuvo a la gente más tiempo y cuál se compartió o guardó más, y parte de ese tipo. Podemos ayudarte a preparar el plan de contenidos, los guiones y la edición."
    },
    {
      "type": "cta",
      "heading": "¿Quieres un plan editorial para tu negocio?",
      "content": "**Si quieres que lo hagamos nosotros, escríbenos.** Cuéntanos qué vendes y a quién: preparamos juntos ganchos y guiones para las próximas semanas."
    },
    {
      "type": "callout",
      "content": "**Guía gratuita en PDF:** [Descarga el PDF](/guide/70-ganci-virali.pdf) (PDF en italiano)"
    }
  ]
}

export default post
