import { ADS } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const adsPrice = `${ADS.monthly} € al mes para Google y ChatGPT juntos; si la compras con la web, los primeros ${ADS.launchMonths} meses cuestan ${ADS.launchMonthly} € al mes`

export const googleAdsEs: ServiceCopy = {
  meta: { title: `Gestión de Google Ads para profesionales y pequeñas empresas desde ${ADS.monthly} €/mes | Marketizzati`, description: `Gestión de Google Ads y ChatGPT Ads para profesionales en Lombardía: ${adsPrice}. Presupuesto pagado directamente a Google, cuenta a tu nombre.` },
  label: '01 · Publicidad en Google Ads', title: 'Anuncios para quien te busca,', italic: 'con pago por clic.',
  answer: `Con Google Ads, tu anuncio puede aparecer arriba cuando alguien de tu zona busca tu servicio. La gestión cuesta **${adsPrice}**. El presupuesto de anuncios (desde ${ADS.minBudgetMonthly} € al mes) lo pagas directamente a Google, en una cuenta a tu nombre.`,
  cta: 'ads', visual: 'none',
  blocks: [
    { label: '02 · Qué hago', title: 'Campañas pequeñas,', italic: 'centradas en tu zona.', points: ['Elijo búsquedas de servicios: "reparación de persianas Lodi", en vez de "cómo reparar una persiana".', 'Excluyo palabras que gastan presupuesto sin servirte: gratis, bricolaje, curso, empleo.', 'Defino la zona donde trabajas de verdad.', 'Reviso y ajusto cada semana, con un informe a final de mes.'] },
    { label: '03 · Expectativas claras', title: 'Sin prometer', italic: 'un número de llamadas.', text: 'Las llamadas dependen del mercado, la zona y el presupuesto. Mi compromiso es el trabajo: campañas cuidadas, revisadas y explicadas con palabras sencillas cada mes. Puedes cancelar la gestión cuando quieras.' },
  ],
  faq: [
    { q: '¿Cuánto cuesta la gestión de Google Ads?', a: `${ADS.monthly} € al mes para Google Ads y ChatGPT Ads juntos. Con la web, los primeros ${ADS.launchMonths} meses cuestan ${ADS.launchMonthly} € al mes.` },
    { q: '¿Qué presupuesto necesito?', a: `Desde ${ADS.minBudgetMonthly} € al mes, pagados directamente a Google. Lo decidimos juntos según los resultados.` },
    { q: '¿La cuenta sigue siendo mía?', a: 'Sí, está a tu nombre desde el primer día.' },
    { q: '¿Puedo cancelar?', a: 'Sí. Puedes cancelar la gestión continuada cuando quieras. Termina al final del mes que ya has pagado.' },
  ], related: ['chatgptAds', 'prezzi', 'siti'],
}

export const chatgptAdsEs: ServiceCopy = {
  meta: { title: 'ChatGPT Ads en Italia: cómo funcionan y cuánto cuestan | Marketizzati', description: `ChatGPT Ads en Italia: qué son, cómo funcionan los anuncios dentro de ChatGPT, cuánto cuestan y para quién tienen sentido. Gestión junto con Google Ads desde ${ADS.monthly} €/mes.` },
  label: '01 · ChatGPT Ads', title: 'La publicidad dentro de ChatGPT,', italic: 'explicada sin complicaciones.',
  answer: `Los **ChatGPT Ads** son anuncios que aparecen en conversaciones de ChatGPT, relacionados con lo que pregunta la persona. En Lombardía, las búsquedas de "chatgpt ads" crecieron más de un 1.300% en un año, y todavía hay poca competencia. Los gestiono junto con Google Ads: **${adsPrice}**.`,
  cta: 'ads', visual: 'none',
  blocks: [
    { label: '02 · Cómo funcionan', title: 'Una respuesta,', italic: 'con tu anuncio al lado.', points: ['Una persona pregunta a ChatGPT, por ejemplo, quién puede reparar una caldera cerca de casa.', 'Junto a la respuesta puede aparecer un anuncio relacionado, marcado como patrocinado.', 'Pagas a la plataforma según el uso, con un presupuesto que eliges tú.', 'Los formatos y las reglas cambian a menudo. Reviso las páginas oficiales de OpenAI antes de cada campaña.'] },
    { label: '03 · Para quién tiene sentido', title: 'Un canal que probar,', italic: 'mientras hay poca competencia.', text: 'Puede servirte si trabajas en una zona concreta y ofreces un servicio por el que la gente pregunta: reparaciones, instalaciones o presupuestos. Un presupuesto pequeño permite probar si funciona para tu negocio. Lo usamos siempre junto con Google, que sigue siendo el canal principal.' },
    { label: '04 · Sin anuncios', title: 'Ayuda a ChatGPT a encontrar tu negocio,', italic: 'sin pagar anuncios.', text: 'La información clara en la web ayuda a ChatGPT a encontrar tu negocio: precios, servicios, zonas y reseñas. Por eso las webs que hago tienen precios y datos en texto, fichas de Google completas y páginas pensadas también para las respuestas de ChatGPT.' },
  ],
  faq: [
    { q: '¿Están disponibles los ChatGPT Ads en Italia?', a: 'La publicidad en ChatGPT se amplía país por país y las condiciones para anunciantes cambian a menudo. Antes de empezar, reviso en las páginas oficiales de OpenAI qué está disponible para tu negocio.' },
    { q: '¿Cuánto cuestan los ChatGPT Ads?', a: `Tú eliges el presupuesto y lo pagas directamente a OpenAI. Mi gestión, junto con Google Ads, cuesta ${ADS.monthly} € al mes.` },
    { q: '¿Google Ads o ChatGPT Ads?', a: 'Para un profesional de oficios, Google sigue siendo el primer canal. ChatGPT se añade para estar presente donde todavía hay poca competencia.' },
  ], related: ['googleAds', 'prezzi', 'schedaGoogle'],
}

export const agentiEs: ServiceCopy = {
  meta: { title: 'Asistentes de IA por WhatsApp y teléfono para empresas | Marketizzati', description: 'Asistentes de IA que responden por WhatsApp y teléfono, incluso de noche: dan información, reservan citas y te pasan los casos importantes. Con presupuesto.' },
  label: '01 · Asistentes de IA en WhatsApp', title: 'Una respuesta para tus clientes,', italic: 'también mientras trabajas.',
  answer: 'Un **asistente de IA** responde a tus clientes por WhatsApp y, si lo necesitas, por teléfono con voz, a cualquier hora. Da precios y horarios, hace las preguntas necesarias, reserva citas y te pasa los casos importantes. Es un trabajo a medida: **preparo el presupuesto después de entender cómo trabajas**.',
  cta: 'quote', visual: 'phone',
  blocks: [
    { label: '02 · Qué hace', title: 'Mientras trabajas,', italic: 'tus clientes reciben respuesta.', points: ['Responde por WhatsApp, también por la noche y en festivos.', 'Usa tu información: servicios, precios orientativos, zonas y horarios.', 'Reserva citas en tu calendario y envía recordatorios.', 'Asistente de voz: contesta al teléfono y devuelve las llamadas que no has podido atender.', 'Te avisa cuando hace falta una persona. Puedes entrar en la conversación cuando quieras.'] },
    { label: '03 · Un ejemplo real', title: 'Ya lo hemos hecho', italic: 'para agencias inmobiliarias.', text: 'AIGENT responde a los clientes de agencias inmobiliarias por WhatsApp y teléfono, las 24 horas. Comprueba qué necesitan, propone una vivienda adecuada y reserva la visita. El mismo enfoque se adapta a talleres, despachos, profesionales de oficios y tiendas.' },
  ],
  faq: [
    { q: '¿Cuánto cuesta un asistente de IA en WhatsApp?', a: 'Depende de lo que deba hacer y del número de mensajes. Escríbeme por WhatsApp y te preparo un presupuesto claro.' },
    { q: '¿Responde en mi nombre?', a: 'Sí, en nombre de tu negocio y con las reglas que tú decidas. Lo probamos juntos antes de activarlo para todos.' },
    { q: '¿Necesito WhatsApp Business?', a: 'Sí. Según el caso, usamos la aplicación WhatsApp Business o las API oficiales de Meta.' },
  ], related: ['sistemi', 'progetti', 'siti'],
}

export const sistemiEs: ServiceCopy = {
  meta: { title: 'Sistemas automáticos y herramientas de gestión a medida con IA | Marketizzati', description: 'Sistemas a medida para automatizar presupuestos, recordatorios, facturas y llamadas de seguimiento, también con asistentes de voz. Con presupuesto.' },
  label: '01 · Sistemas automáticos', title: 'El trabajo repetitivo', italic: 'lo hace el sistema.',
  answer: 'Construyo **sistemas a medida** para hacer las tareas repetitivas: recoger solicitudes, preparar presupuestos, enviar recordatorios y facturas y devolver llamadas, también con un **asistente de voz**. Una web de varias páginas entra en la oferta de precio fijo. Un sistema como este **necesita un presupuesto propio**.',
  cta: 'quote', visual: 'none',
  blocks: [
    { label: '02 · Ejemplos', title: 'Qué puedes', italic: 'automatizar.', cards: [
      { title: 'Solicitudes y presupuestos', text: 'El cliente escribe, el sistema recoge los datos y prepara un borrador de presupuesto para que lo apruebes.' },
      { title: 'Recordatorios y llamadas', text: 'Citas, vencimientos y mantenimientos anuales: los mensajes y las llamadas salen automáticamente.' },
      { title: 'Gestión a medida', text: 'Clientes, trabajos, fotos y documentos en un solo sitio, también desde el móvil en la obra.' },
      { title: 'Asistentes de voz', text: 'Un asistente que llama, escucha y reserva citas. Después te deja un resumen.' },
    ] },
    { label: '03 · Trabajos realizados', title: 'ProspectBot y Zernflow,', italic: 'dos sistemas privados.', text: 'ProspectBot encuentra negocios sin web, recoge sus datos, prepara una propuesta y hace que un asistente de voz llame para reservar una cita. Zernflow recibe solicitudes, las distribuye, responde y registra todo. Son sistemas privados de los clientes, pero puedes ver cómo funcionan en la página de proyectos.' },
  ],
  faq: [
    { q: '¿Cuánto cuesta un sistema a medida?', a: 'Depende de lo que deba hacer. Cuéntame tu trabajo por WhatsApp y te preparo un presupuesto.' },
    { q: '¿Tengo que cambiar los programas que uso?', a: 'No necesariamente. Cuando es posible, el sistema se conecta con las herramientas que ya usas.' },
  ], related: ['agenti', 'progetti', 'contatti'],
}

export const socialEs: ServiceCopy = {
  meta: { title: 'Gestión de redes sociales y publicidad en Meta para pequeñas empresas | Marketizzati', description: 'Creación de contenidos, publicación, gestión de perfiles y publicidad en Facebook e Instagram (Meta Ads) para profesionales y pequeñas empresas. Con presupuesto.' },
  label: '01 · Gestión de redes sociales', title: 'Muestra tu trabajo,', italic: 'con constancia.',
  answer: 'Me encargo de **crear contenidos, publicarlos y gestionar tus perfiles**, además de la **publicidad en Facebook e Instagram** (Meta Ads). Es un servicio a medida: **preparo un presupuesto** según cuántos contenidos necesitas y en qué canales.',
  cta: 'quote', visual: 'none',
  blocks: [{ label: '02 · Qué incluye', title: 'Desde la idea', italic: 'hasta la publicación.', points: ['Un plan de contenidos sobre temas que interesan a tus clientes.', 'Vídeos cortos y publicaciones con tus trabajos reales.', 'Publicación y gestión de perfiles.', 'Publicidad de contenidos con Meta Ads. Pagas el presupuesto directamente a Meta.'] }],
  faq: [
    { q: '¿Cuánto cuesta la gestión de redes sociales?', a: 'Depende del número de contenidos y de los canales. Escríbeme por WhatsApp y te preparo un presupuesto.' },
    { q: '¿Tengo que salir en cámara?', a: 'No necesariamente. Podemos usar fotos y vídeos de tus trabajos, también hechos con el móvil.' },
  ], related: ['video', 'blog', 'contatti'],
}

export const videoEs: ServiceCopy = {
  meta: { title: 'Vídeos para redes y web: reels y animaciones | Marketizzati', description: 'Vídeos verticales, reels y gráficos animados para presentar tu negocio en Instagram, TikTok y tu web. Con presupuesto.' },
  label: '01 · Contenidos de vídeo', title: 'Vídeos que explican', italic: 'en treinta segundos.',
  answer: 'Creo **vídeos verticales, reels y gráficos animados**: desde editar vídeos grabados con el móvil hasta animaciones que explican un servicio. Es un servicio **con presupuesto**, por separado o junto con la gestión de redes sociales.',
  cta: 'quote', visual: 'none',
  blocks: [{ label: '02 · Formatos', title: 'Cortos, claros,', italic: 'pensados para el móvil.', points: ['Reels y TikToks a partir de tus vídeos, con subtítulos y ritmo.', 'Gráficos animados para explicar un servicio o producto.', 'Vídeos para tu web y tus campañas publicitarias.'] }],
  faq: [{ q: '¿Cuánto cuesta un vídeo?', a: 'Depende de la duración y del trabajo de producción. Escríbeme por WhatsApp con un ejemplo de lo que te gusta.' }],
  related: ['social', 'blog', 'contatti'],
}
