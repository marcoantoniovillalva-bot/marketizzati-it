import { OFFER } from '../lib/offer'
import type { ServiceCopy } from './service-types'

const price = `${OFFER.oneOff} € en un pago o ${OFFER.monthly} € al mes durante ${OFFER.months} meses`

export const sitiEs: ServiceCopy = {
  meta: { title: `Diseño de webs profesionales desde ${OFFER.oneOff} € | Marketizzati`, description: `Webs para profesionales de oficios y pequeñas empresas en Lombardía: hasta ${OFFER.maxPages} páginas, textos basados en búsquedas reales, logo y ficha de Google incluidos. ${price}.` },
  label: '01 · Diseño de webs', title: 'Una web que facilite', italic: 'el contacto contigo.',
  answer: `Creo **webs profesionales de varias páginas** para profesionales de oficios y pequeñas empresas: textos basados en lo que buscan tus clientes en Google, botones para llamarte y escribirte, logo y ficha de Google incluidos. Cuesta **${price}** y se publica en unas ${OFFER.deliveryWeeks} semanas.`,
  cta: 'buy', visual: 'browser',
  blocks: [
    { label: '02 · El método', title: 'Primero las búsquedas,', italic: 'después las páginas.', text: 'Empiezo por lo que la gente escribe en Google cuando te necesita: "fontanero urgente Pavia", "persiana atascada a quién llamar". Cada servicio principal tiene una página que responde a esa búsqueda.', points: ['Estudio de las búsquedas de tu zona, con volúmenes reales.', `Hasta ${OFFER.maxPages} páginas: una por servicio, más contacto, Privacidad y Cookies.`, 'Textos claros que hablan directamente a tus clientes, sin jerga.', 'Títulos y descripciones para cada página, mapa del sitio, Search Console y Bing Webmaster Tools.'] },
    { label: '03 · Pensada para el móvil', title: 'Quien te busca tiene prisa,', italic: 'y el móvil en la mano.', text: 'La mayoría busca un profesional desde el móvil, a menudo con un problema urgente. La web carga rápido y muestra primero lo necesario: llamar, escribir por WhatsApp y ver dónde trabajas.', points: ['Botón "Llamar" siempre visible.', 'WhatsApp con un toque.', 'Formulario de contacto que recibes por correo.', 'Fotos de tus trabajos, zonas y horarios claros.'] },
    { label: '04 · Lo que te quedas', title: 'La web es tuya,', italic: 'sin alquiler.', text: 'Dominio, correo, logo y ficha de Google están a tu nombre desde el primer día. Tras la última cuota, también la web, incluido el código. No hay una cuota por mantenerla publicada: solo pagas dominio y correo, unos 32 € al año.' },
  ],
  faq: [
    { q: '¿Cuánto cuesta crear una web?', a: `Con Marketizzati, ${price}, con logo, ficha de Google y ${OFFER.supportDays} días de asistencia incluidos.` },
    { q: '¿Cuántas páginas tiene la web?', a: `Hasta ${OFFER.maxPages}, más Privacidad y Cookies. Lo habitual: inicio, una página por servicio principal, quiénes somos y contacto.` },
    { q: '¿Escribes tú los textos?', a: 'Sí. Los baso en búsquedas reales de los clientes de tu zona. Tú los revisas y me dices qué cambiar.' },
    { q: '¿Qué plataforma usas?', a: 'Una web a medida, rápida y ligera. Al terminar, el código es tuyo.' },
  ], related: ['prezzi', 'artigiani', 'schedaGoogle'],
}

export const artigianiEs: ServiceCopy = {
  meta: { title: 'Webs para profesionales: fontaneros, electricistas, instaladores de ventanas | Marketizzati', description: `Webs para profesionales de oficios y pequeñas empresas: fontanería, electricidad, ventanas, construcción, estética y restaurantes. ${price}, logo y ficha de Google incluidos.` },
  label: '01 · Webs para profesionales de oficios', title: 'La web para quien trabaja', italic: 'con las manos.',
  answer: `Una web para tu oficio con Marketizzati cuesta **${price}**, con logo y ficha de Google incluidos. Está pensada para ti si trabajas todo el día y tienes poco tiempo: me mandas fotos e información, yo me encargo del resto y en unas ${OFFER.deliveryWeeks} semanas tu web está publicada.`,
  cta: 'buy', visual: 'browser',
  blocks: [
    { label: '02 · Por oficio', title: 'Cada oficio', italic: 'tiene sus búsquedas.', text: 'La gente busca el problema que necesita resolver. Tu web empieza por ahí.', cards: [
      { title: 'Fontanería', text: 'Urgencias, fugas, calderas y baños nuevos: una página por necesidad, con el botón de llamada arriba.' },
      { title: 'Electricidad', text: 'Instalaciones, averías, cuadros eléctricos, cargadores y certificados: quien te busca quiere saber si haces ese trabajo y en qué zona.' },
      { title: 'Ventanas y persianas', text: 'Reparación de persianas, mosquiteras, toldos y ventanas: muchas búsquedas locales concretas, cada una con su página.' },
      { title: 'Construcción', text: 'Reformas, baños y fachadas: fotos del antes y después, zonas de trabajo y una forma sencilla de pedir una visita.' },
      { title: 'Estética y peluquería', text: 'Servicios, precios orientativos, horarios y reserva por WhatsApp. La ficha de Google importa tanto como la web.' },
      { title: 'Restaurantes y bares', text: 'Carta actualizada, horarios, cómo llegar y reservas. Fácil de leer desde el móvil.' },
    ] },
    { label: '03 · Tu tiempo', title: 'Te pido', italic: 'veinte minutos.', points: ['Subes al área de clientes tu logo (si lo tienes), fotos de trabajos, servicios, zonas y horarios.', 'Hacemos una llamada de 20 minutos.', 'Te mando la web para revisar y me dices qué cambiar.', 'Se publica, con correcciones incluidas durante 30 días.'] },
  ],
  faq: [
    { q: '¿Cuánto cuesta una web para fontanería o electricidad?', a: `Lo mismo para todos los oficios: ${price}, con logo y ficha de Google incluidos.` },
    { q: 'No tengo fotos profesionales. ¿Es un problema?', a: 'No. Sirven las fotos de tus trabajos hechas con el móvil. Las ajusto y, si hace falta, uso también imágenes de archivo.' },
    { q: '¿Puedo pagar a plazos?', a: `Sí: ${OFFER.months} cuotas de ${OFFER.monthly} €. Tras la última, la web es tuya.` },
    { q: 'Trabajo en varios municipios. ¿Los incluyes todos?', a: 'Sí, tus zonas de trabajo aparecen en la web y en la ficha de Google.' },
  ], related: ['prezzi', 'siti', 'schedaGoogle'],
}

export const schedaEs: ServiceCopy = {
  meta: { title: 'Ficha de Google Business Profile: cómo crearla y usarla | Marketizzati', description: 'Google Business Profile (Google My Business) para profesionales de oficios: creación, verificación, categorías, fotos y reseñas. O la creo yo, incluida con tu web.' },
  label: '01 · Ficha de Google', title: 'Tu ficha de Google,', italic: 'lo primero que suelen ver.',
  answer: `La **ficha de Google Business Profile** (antes Google My Business) muestra tu nombre, teléfono, horarios, fotos y reseñas en Google y Maps. Es otra forma de que tus clientes puedan llamarte. Crearla en Google es gratis. Con Marketizzati, **la creo o la arreglo yo**, incluida con tu web desde ${OFFER.oneOff} €.`,
  cta: 'buy', visual: 'none',
  blocks: [
    { label: '02 · Cómo crearla', title: 'Créala por tu cuenta:', italic: 'los pasos.', cards: [
      { title: '1. Entra', text: 'Ve a business.google.com con una cuenta de Google de tu negocio.' },
      { title: '2. Nombre y categoría', text: 'Usa el nombre real del negocio, sin añadir palabras de búsqueda, y la categoría más concreta posible, como "Fontanero".' },
      { title: '3. Zona de servicio', text: 'Si vas a casa de tus clientes, indica los municipios donde trabajas en vez de tu dirección particular.' },
      { title: '4. Verificación', text: 'Google comprueba que el negocio es tuyo mediante un código postal, una llamada o un vídeo corto. Google decide los plazos.' },
      { title: '5. Completa los datos', text: 'Horarios, servicios, teléfono, web y al menos 10 fotos reales de tus trabajos.' },
      { title: '6. Reseñas', text: 'Pide una reseña a cada cliente satisfecho y responde a todas, también a las negativas.' },
    ] },
    { label: '03 · Errores habituales', title: 'Errores que pueden', italic: 'ocultar tu ficha.', points: ['Añadir palabras de búsqueda al nombre ("Rossi Fontanero Urgencias Pavia") puede causar una suspensión.', 'Dos fichas para el mismo negocio.', 'Una dirección que no corresponde a la realidad.', 'Fotos de internet en lugar de tus trabajos.', 'No actualizar los horarios en festivos.'] },
    { label: '04 · Me encargo yo', title: '¿No tienes tiempo?', italic: 'La hago yo.', text: `La ficha de Google está incluida con tu web: la creo y tramito su verificación, o arreglo la que tienes con servicios, zonas, horarios, fotos y enlace a la web. Si solo necesitas la ficha, **escríbeme por WhatsApp**.` },
  ],
  faq: [
    { q: '¿Google My Business y Google Business Profile son lo mismo?', a: 'Sí. Google cambió el nombre en 2021, pero la ficha es la misma.' },
    { q: '¿Cuánto cuesta la ficha de Google?', a: `En Google es gratis. Con Marketizzati está incluida con tu web (${OFFER.oneOff} € o ${OFFER.monthly} €/mes): la creo o la arreglo yo.` },
    { q: 'Mi ficha está suspendida. ¿Qué hago?', a: 'Revisa nombre, dirección y categoría. El problema suele estar ahí. Después se pide una revisión a Google. Si quieres, la miro yo.' },
    { q: '¿Cuánto tarda la verificación?', a: 'De unos días a unas semanas, según el método que elija Google.' },
  ], related: ['prezzi', 'siti', 'artigiani'],
}
