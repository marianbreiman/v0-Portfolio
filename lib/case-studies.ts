// ─────────────────────────────────────────────────────────────────────────────
// Casos de estudio de Multitravel.
// Fuente: «Casos de portfolio — Marian en Multitravel» (30/10/2026), con datos
// de la base de producción (checkout_prod, searches) y de Linear.
//
// Reglas de este archivo:
// - Los números son reales y llevan su período. No redondear para arriba.
// - Se publican porcentajes y ratios, no cantidades absolutas de ventas.
// - Donde hay un sesgo o una causa compartida, se dice.
// - Una imagen con `pending: true` se muestra como recuadro gris hasta que se
//   reemplace por la captura real (poné el archivo en /public y completá `src`).
// ─────────────────────────────────────────────────────────────────────────────

export type CaseTier = "principal" | "medido" | "adopcion"

export interface CaseImage {
  src?: string
  alt: string
  caption: string
  pending?: boolean
  device: "desktop" | "mobile" | "detail"
  width?: number
  height?: number
}

export interface CaseChart {
  title: string
  subtitle: string
  unit: "%"
  bars: { label: string; value: number; highlight?: boolean }[]
  markers?: { beforeIndex: number; label: string }[]
  source: string
}

export interface CaseTable {
  caption: string
  columns: string[]
  rows: string[][]
  source: string
}

export interface CaseDecision {
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  tier: CaseTier
  title: string
  kicker: string
  summary: string
  // `when`: período exacto de la medición. Se muestra junto a cada número.
  headline: { value: string; label: string; when: string }
  secondary?: { value: string; label: string; when: string }
  result: string
  period: string
  role: string
  scope: string
  tags: string[]
  context: string[]
  objective: string
  changes: { title: string; when?: string }[]
  changesNote?: string
  myPart: string[]
  craftLine: string
  decisions?: CaseDecision[]
  table?: CaseTable
  chart?: CaseChart
  caveats: string[]
  images: CaseImage[]
  nextSteps: string[]
}

const SOURCE_DB = "Base de producción de Multitravel, consultada el 30/10/2026."

export const CASE_STUDIES: CaseStudy[] = [
  // ── 1 ───────────────────────────────────────────────────────────────────────
  {
    slug: "checkout-vuelos",
    tier: "principal",
    title: "Rediseño del checkout de vuelos",
    kicker: "Caso principal · Conversión",
    summary:
      "El checkout era un formulario en acordeones con un checkbox obligatorio frenando el pago. Lo pasé a una sola página clara, con el precio final y el botón siempre a mano.",
    headline: { value: "1,21% → 1,70%", label: "Checkout → venta", when: "6 jul–9 sep vs. 10 sep–25 oct 2026" },
    secondary: { value: "26% → 44%", label: "Reservas que terminan pagadas", when: "6 jul–9 sep vs. 10 sep–25 oct 2026" },
    result:
      "La conversión de checkout a venta pasó de 1,21% a 1,70%, un salto estadísticamente significativo. La proporción de reservas que terminan pagadas subió de 26% a 44%.",
    period: "Jul – Oct 2026 · en producción desde el 10/9",
    role: "Único diseñador de producto",
    scope: "Auditoría, estructura, prototipo funcionando, 17 tickets, medición",
    tags: ["Checkout", "Conversión", "Auditoría", "Mobile", "Accesibilidad"],
    context: [
      "El checkout era un formulario en acordeones. El usuario abría y cerraba secciones sin ver el todo.",
      "La barra lateral mezclaba resumen, promos bancarias, medios de pago y avisos.",
      "Los términos y condiciones eran un checkbox obligatorio que frenaba el pago. En mobile quedaba justo arriba del botón.",
    ],
    objective:
      "Que comprar un vuelo se sienta corto y claro: ver todo de un vistazo, saber cuánto se paga y tener el botón de pago siempre a mano.",
    changes: [
      { title: "Acordeones a cajas abiertas en una sola página (desktop) y resumen bien ubicado en mobile" },
      { title: "Barra lateral con un solo propósito: resumen de compra y acciones" },
      { title: "Medios de pago y promociones bancarias dentro de la sección de pago, fuera de la barra lateral" },
      { title: "Checkbox de términos reemplazado por un texto de consentimiento pasivo" },
      { title: "Timer de vigencia de la reserva y barra fija con «Confirmar y pagar»" },
      { title: "Rediseño del modal de detalle del vuelo" },
      { title: "Íconos de sección incompleta en gris, no en azul" },
      { title: "Ajustes posteriores: sección completada, transiciones mobile, botón de avance" },
    ],
    changesNote: "17 tickets en Linear, partidos para que desarrollo pudiera salir por partes.",
    myPart: [
      "Hice la auditoría del checkout con heurísticas de Nielsen, leyes de UX, WCAG 2.2 y la Ley 24.240 de defensa del consumidor.",
      "Definí la nueva estructura y prototipé el checkout entero, desktop y mobile.",
      "Lo partí en tickets chicos para que desarrollo pudiera salir por partes, sin un big bang.",
      "Después medí el antes y el después directamente en la base.",
    ],
    craftLine: "Prototipé el checkout entero funcionando en Lorien, nuestro sistema de diseño, antes de escribir un solo ticket.",
    decisions: [
      {
        title: "Consentimiento pasivo en lugar del checkbox",
        body:
          "El checkbox obligatorio sumaba un clic justo antes de pagar y en mobile quedaba encima del botón. Lo reemplacé por un texto debajo del botón que dice qué se acepta al confirmar.",
      },
      {
        title: "Una barra lateral, un propósito",
        body:
          "Saqué de la barra las promos y los medios de pago y los llevé a la sección de pago, donde se usan. La barra quedó con precio final, cupón y el botón.",
      },
      {
        title: "Salir por partes",
        body:
          "En vez de un rediseño de una sola vez, lo dividí en tickets chicos para que desarrollo pudiera salir por partes.",
      },
    ],
    table: {
      caption: "Checkouts de vuelos, antes y después del rediseño",
      columns: ["Indicador", "Antes (6/7 al 9/9)", "Después (10/9 al 25/10)", "Cambio"],
      rows: [
        ["Checkout → venta", "1,21%", "1,70%", "+0,49 pp"],
        ["Reserva → pago", "26%", "44%", "+18 pp"],
      ],
      source:
        SOURCE_DB +
        " Se excluyó la semana del Multisale (24 al 30/8), que infla el tráfico, y los checkouts que llegan desde metabuscadores.",
    },
    caveats: [
      "En el mismo período salieron otros cambios, como la tarjeta en dólares y los cupones. Por eso hablo de «el checkout nuevo y lo que salió con él», no de causa única.",
    ],
    images: [
      {
        src: "/casos/multitravel/checkout-desktop.png",
        alt: "Checkout de vuelos de Multitravel en desktop, con las secciones abiertas y la barra lateral de precio final",
        caption: "Después, desktop: cajas abiertas, barra lateral con precio final y botón de pago, consentimiento pasivo.",
        device: "desktop",
        width: 1800,
        height: 1308,
      },
      {
        src: "/casos/multitravel/checkout-mobile.png",
        alt: "Checkout de vuelos de Multitravel en mobile con la barra fija de pago",
        caption: "Después, mobile: sin checkbox, el botón queda fijo con el precio final y el cupón.",
        device: "mobile",
        width: 720,
        height: 1520,
      },
      {
        src: "/casos/multitravel/checkout-resumen.png",
        alt: "Detalle de la barra lateral del checkout con precio final y botón Confirmar y pagar",
        caption: "La barra lateral, con un solo propósito.",
        device: "detail",
        width: 692,
        height: 840,
      },
      {
        src: "/casos/multitravel/medios-de-pago.png",
        alt: "Sección de medios de pago del checkout con Tarjeta de crédito y Cuotas Multitravel marcados como nuevos",
        caption: "Medios de pago dentro de la sección de pago, no en la barra lateral.",
        device: "detail",
        width: 1000,
        height: 795,
      },
      {
        pending: true,
        alt: "Checkout desktop antes",
        caption: "Antes, desktop: acordeones cerrados, barra lateral con promociones y checkbox de términos (julio 2026).",
        device: "desktop",
      },
      {
        pending: true,
        alt: "Checkout mobile antes",
        caption: "Antes, mobile: el checkbox de términos sobre el botón de pago.",
        device: "mobile",
      },
    ],
    nextSteps: [],
  },

  // ── 2 ───────────────────────────────────────────────────────────────────────
  {
    slug: "tarjeta-en-dolares",
    tier: "medido",
    title: "Pago con tarjeta de crédito en dólares",
    kicker: "Medios de pago · Adopción",
    summary:
      "Casi todos los vuelos internacionales se cotizan en dólares, pero la tarjeta solo funcionaba en pesos. Diseñé el flujo de pago en USD con Transbank, sin que el usuario se pierda en la redirección.",
    headline: { value: "0% → 53%", label: "Ventas de vuelos con tarjeta en USD", when: "Mayo vs. octubre 2026" },
    result:
      "En octubre, 53% de las ventas de vuelos se pagó con tarjeta de crédito en dólares, un medio que en mayo no existía. Octubre fue además el mes con más ventas de vuelos del año.",
    period: "Jun – Oct 2026",
    role: "Único diseñador de producto",
    scope: "Flujo de redirección y regreso, copy, mail de recuperación",
    tags: ["Pagos", "Copy", "Flujos", "Email"],
    context: [
      "Casi todos los vuelos internacionales se cotizan en dólares: 93% de las ventas de vuelos de octubre.",
      "Hasta junio, quien quería pagar en dólares solo tenía transferencia, depósito, efectivo o Cuotas Multitravel. La tarjeta de crédito existía solo en pesos.",
    ],
    objective:
      "Habilitar el pago con tarjeta en dólares a través de Transbank Webpay Plus sin que el usuario se pierda en la redirección ni confunda «en dólares» con «en cuotas».",
    changes: [
      { title: "Pago con tarjeta en vuelos en dólares vía Transbank, con la UX de la salida y del regreso", when: "3/6" },
      { title: "Validación del tipo de tarjeta (crédito o débito) al cargar el número", when: "7/7" },
      { title: "Leyenda «1 pago» para no confundir con cuotas", when: "11/8" },
      { title: "Destacado «¡Nuevo!» del medio en el modal de medios de pago", when: "11/8" },
      { title: "Mail de recuperación cuando el usuario abandona el pago en Transbank", when: "28/8" },
    ],
    myPart: [
      "Definí la UX del flujo completo: qué ve el usuario antes de salir a Transbank, qué copy acompaña el regreso según el resultado y qué pasa si abandona.",
      "Diseñé el mail de recuperación para quien deja el pago a mitad de camino.",
    ],
    craftLine: "Medí la adopción mes a mes en la base, no solo el total.",
    decisions: [
      {
        title: "«1 pago» al lado de «en USD»",
        body:
          "En pruebas detecté que «tarjeta en USD» se leía como «en cuotas». Propuse sumar «1 pago» al nombre del medio. Dos palabras que sacan una duda justo antes de pagar.",
      },
    ],
    chart: {
      title: "Tarjeta en dólares: de 0% a 53% de las ventas de vuelos",
      subtitle: "% de ventas de vuelos pagadas con tarjeta de crédito en USD, 2026",
      unit: "%",
      bars: [
        { label: "May", value: 0 },
        { label: "Jun", value: 5 },
        { label: "Jul", value: 28 },
        { label: "Ago", value: 28 },
        { label: "Sep", value: 33 },
        { label: "Oct", value: 53, highlight: true },
      ],
      markers: [
        { beforeIndex: 1, label: "3/6 lanzamiento" },
        { beforeIndex: 3, label: "11/8 «1 pago»" },
      ],
      source: SOURCE_DB + " Ventas de vuelos confirmadas, mayo a octubre de 2026.",
    },
    caveats: [
      "El número muestra adopción, no causa única. Octubre también trae el checkout nuevo y más tráfico.",
      "La adopción saltó en julio, el primer mes completo con el medio. El salto grande de octubre coincide con el checkout nuevo, no con el «1 pago»: no lo atribuyo a la leyenda.",
    ],
    images: [
      {
        pending: true,
        alt: "Modal de medios de pago con Tarjeta de crédito en USD, 1 pago, Nuevo",
        caption: "Modal de medios de pago con «Tarjeta de crédito en USD · 1 pago · ¡Nuevo!».",
        device: "mobile",
      },
      {
        pending: true,
        alt: "Pantalla de regreso de Transbank",
        caption: "Regreso de Transbank: pago aprobado y rechazado.",
        device: "desktop",
      },
      {
        pending: true,
        alt: "Mail de recuperación de pago",
        caption: "Mail de recuperación cuando el pago queda a mitad de camino.",
        device: "detail",
      },
    ],
    nextSteps: [
      "Medir cuántas ventas recupera el mail de abandono. La medición ya está en el backlog.",
    ],
  },

  // ── 3 ───────────────────────────────────────────────────────────────────────
  {
    slug: "cards-de-destino",
    tier: "medido",
    title: "Cards de destino que no terminan en un callejón",
    kicker: "Búsqueda · Confianza en el precio",
    summary:
      "Las cards de las páginas de destino mandaban directo al checkout con un precio que muchas veces ya no existía. Ahora llevan a resultados y explican qué pasó con la tarifa.",
    headline: { value: "0,1%", label: "Conversión del camino anterior", when: "13 sep–13 oct 2026" },
    secondary: { value: "2 de cada 3", label: "Encontraban otro precio o sin lugar", when: "13–30 oct 2026" },
    result:
      "Las cards de vuelo de las páginas de destino convertían al 0,1%: casi mil checkouts en un mes, una sola venta. Ahora llevan a resultados, y ahí se ve por qué: 2 de cada 3 personas que tocan una card encuentran otro precio o el vuelo ya no está.",
    period: "Oct 2026 · en producción desde el 13/10",
    role: "Único diseñador de producto",
    scope: "Casos y textos de cada aviso, diseño en resultados, medición",
    tags: ["Búsqueda", "UX writing", "Estados de error", "Medición"],
    context: [
      "Las páginas de destino (por ejemplo, vuelos a Miami) muestran cards con un precio guardado.",
      "Al tocar una, el usuario iba directo al checkout. Si el precio había cambiado o el vuelo ya no tenía lugar, se encontraba con un error o con otro monto, sin explicación.",
      "Pasaba lo mismo con quienes llegaban desde Turismocity.",
    ],
    objective:
      "Que tocar una card nunca termine en un callejón sin salida: llevar siempre a resultados con la búsqueda hecha y contar, en una línea, qué pasó con el precio que vio.",
    changes: [
      { title: "La card lleva a la página de resultados con origen, destino y fechas ya cargados" },
      { title: "Un aviso arriba de los resultados según el caso: mismo precio, subió, bajó o ya no hay lugar" },
      { title: "Cada búsqueda se registra con su caso, para poder medir" },
    ],
    myPart: [
      "Definí los casos y los textos de cada aviso.",
      "Diseñé el aviso en resultados y cómo se comporta cuando no hay disponibilidad.",
    ],
    craftLine: "Medí en la base qué encontró cada persona que tocó una card, caso por caso.",
    table: {
      caption: "Qué encontró quien buscó desde una card de destino (13/10 al 30/10)",
      columns: ["Qué encontró el usuario", "% de las búsquedas"],
      rows: [
        ["El mismo precio", "34%"],
        ["Un precio distinto (subió, bajó o cambió)", "47%"],
        ["El vuelo ya no tenía disponibilidad", "19%"],
      ],
      source: SOURCE_DB + " Conversión anterior: checkouts y ventas desde cards de destino, 13/9 al 13/10.",
    },
    caveats: [
      "Todavía no medí la conversión a venta del camino nuevo. Hay que cruzar búsqueda con checkout y la consulta es pesada para la base de producción.",
    ],
    images: [
      {
        pending: true,
        alt: "Card de vuelo en una página de destino",
        caption: "Card de vuelo en una página de destino (por ejemplo, vuelos a Miami).",
        device: "desktop",
      },
      {
        pending: true,
        alt: "Avisos en resultados según el precio",
        caption: "Avisos en resultados: mismo precio, subió, bajó y sin disponibilidad.",
        device: "desktop",
      },
    ],
    nextSteps: ["Medir la conversión a venta de quien llega a resultados desde una card de destino."],
  },

  // ── 4 ───────────────────────────────────────────────────────────────────────
  {
    slug: "cupones",
    tier: "adopcion",
    title: "Sistema de cupones",
    kicker: "Backoffice · Autonomía comercial",
    summary:
      "Cada descuento dependía de desarrollo o se resolvía a mano por WhatsApp. Diseñé el módulo de cupones del backoffice y cómo se aplica en el checkout.",
    headline: { value: "5,1% vs 1,7%", label: "Conversión con cupón vs. general (Multisale)", when: "24–30 ago 2026" },
    result:
      "En la semana del Multisale, los checkouts con cupón convirtieron al 5,1%, contra 1,7% de todos los checkouts de esa semana. En agosto, casi 15% de las ventas usó cupón.",
    period: "Ago 2026 · Multisale del 24 al 30/8",
    role: "Único diseñador de producto",
    scope: "Módulo en MultiOps, cupón en checkout, footer mobile",
    tags: ["Backoffice", "Checkout", "Reglas de negocio"],
    context: [
      "Antes no había cupones en el sitio. Cada descuento comercial dependía de desarrollo o se resolvía a mano por WhatsApp.",
      "El Multisale, una de las campañas más fuertes del año, necesitaba descuentos con reglas.",
    ],
    objective:
      "Que comercial pueda lanzar una campaña sin pedir un desarrollo, segmentar a quién le llega el descuento y medir cada campaña por separado.",
    changes: [
      { title: "Módulo de administración en MultiOps: reglas por vertical, destino, fechas y compra mínima, cupos e historial de versiones" },
      { title: "Sección de cupones en páginas de campaña y de destino" },
      { title: "Aplicar el cupón en el checkout y verlo en el resumen" },
      { title: "Cupón y precio final en el footer del modal de medios de pago (mobile)" },
      { title: "Después: solo primera compra, lista de emails, regiones y cupos generales" },
    ],
    myPart: [
      "Diseñé el módulo de MultiOps entero: alta de cupón con reglas, ajuste de cupos y la pestaña de historial de versiones.",
      "Definí el patrón del cupón aplicado en la barra lateral del checkout.",
      "Simplifiqué el footer mobile para que el cupón entrara sin tapar el botón de pago.",
    ],
    craftLine: "Diseño los módulos de MultiOps, nuestro backoffice, para que comercial no dependa de desarrollo.",
    caveats: [
      "Quien aplica un cupón ya llega con más intención de compra, así que la diferencia no es toda efecto del cupón.",
      "En septiembre y octubre no hubo ventas con cupón: el sistema se usa por campaña, no está siempre activo.",
    ],
    images: [
      {
        pending: true,
        alt: "Módulo de cupones en MultiOps",
        caption: "Módulo de cupones en MultiOps: listado, alta con reglas e historial de versiones.",
        device: "desktop",
      },
      {
        pending: true,
        alt: "Cupón aplicado en el checkout",
        caption: "Cupón aplicado en la barra lateral del checkout.",
        device: "detail",
      },
    ],
    nextSteps: [
      "Medir el ticket promedio con y sin cupón, para ver si la compra mínima lo sube.",
      "Contar cuántas campañas lanza comercial sin ticket de desarrollo.",
    ],
  },

  // ── 5 ───────────────────────────────────────────────────────────────────────
  {
    slug: "busquedas-recientes",
    tier: "adopcion",
    title: "Búsquedas recientes y Más buscados",
    kicker: "Buscador · Segunda visita",
    summary:
      "Comprar un vuelo lleva varias visitas y en cada una había que tipear todo de nuevo. Diseñé las búsquedas recientes y las sugerencias del buscador.",
    headline: { value: "1,7", label: "Búsquedas por persona que usa las cards", when: "26 ago–30 oct 2026" },
    secondary: { value: "1,6%", label: "Uso sobre búsquedas tipeadas (línea de base)", when: "26 ago–30 oct 2026" },
    result:
      "Quien usa las cards de búsquedas recientes vuelve a usarlas: 1,7 búsquedas por persona en vuelos. Todavía es 1,6% de las búsquedas tipeadas a mano, así que lo presento como línea de base.",
    period: "Jul – Oct 2026 · cards en producción desde el 28/8",
    role: "Único diseñador de producto",
    scope: "Estados del buscador, reglas de las cards, prototipo",
    tags: ["Buscador", "Estados", "Prototipo"],
    context: [
      "Comprar un vuelo lleva varias visitas: la gente busca, compara y vuelve días después.",
      "Cada vez tenía que tipear de nuevo origen, destino, fechas y pasajeros. El buscador tampoco sugería nada al hacer foco en un campo vacío.",
    ],
    objective:
      "Retomar una búsqueda en un toque, para bajar la fricción de la segunda y tercera visita, que es donde se decide la compra.",
    changes: [
      { title: "Recordar la última búsqueda en vuelos y hoteles", when: "25/7" },
      { title: "Sugerencias de origen y destino más buscados en el desplegable", when: "25/7" },
      { title: "Cards de búsquedas recientes debajo del buscador", when: "28/8" },
      { title: "Cambio rápido de destinos en Más buscados, desde MultiOps", when: "28/10" },
    ],
    myPart: [
      "Definí todos los estados del desplegable: vacío con populares, alerta con 1 o 2 letras y autocompletado con aeropuertos agrupados por ciudad.",
      "Definí las reglas de las cards: se guardan solo al buscar, sin duplicados, las de fechas pasadas desaparecen y tocar una ejecuta la búsqueda.",
      "Propuse separar el trabajo en dos tickets para que las cards salieran antes, y dejé marcada la dependencia entre ciudad y aeropuerto en el modelo de datos.",
    ],
    craftLine: "Prototipé el desplegable y las cards funcionando en HTML con Lorien, desktop y mobile, antes de pasarlo a desarrollo.",
    decisions: [
      {
        title: "Medir antes de rediseñar",
        body:
          "Cuando aparecieron cards que se veían iguales (mismo destino, distinto origen), no cambié el diseño a ciegas: pedí primero medir cuántas veces pasa. Sigue en backlog hasta tener el dato.",
      },
    ],
    caveats: ["Es una línea de base, no un resultado. Falta saber si retomar una búsqueda acelera la compra."],
    images: [
      {
        pending: true,
        alt: "Desplegable de Más buscados",
        caption: "Desplegable de Más buscados, vacío y con autocompletado.",
        device: "desktop",
      },
      {
        pending: true,
        alt: "Cards de búsquedas recientes",
        caption: "Fila de cards de búsquedas recientes, desktop y carrusel mobile.",
        device: "mobile",
      },
    ],
    nextSteps: ["Medir la conversión a checkout y a venta de quien busca desde una card reciente."],
  },

  // ── 6 ───────────────────────────────────────────────────────────────────────
  {
    slug: "login-mobile",
    tier: "adopcion",
    title: "Login mobile",
    kicker: "Mobile · Usuarios logueados",
    summary:
      "En mobile, el modal de login quedaba tapado por el teclado. Lo pasé a una página completa y separé la mejora del código de verificación para que lo principal saliera antes.",
    headline: { value: "11–17% → 25%", label: "Checkouts de vuelos con sesión iniciada", when: "Jun–ago vs. sep–oct 2026" },
    result:
      "La proporción de checkouts de vuelos con sesión iniciada pasó de entre 11 y 17% antes del cambio a 25% después. Es un indicador de adopción con otras causas posibles, no un resultado limpio.",
    period: "Ago 2026 · en producción desde el 18/8",
    role: "Único diseñador de producto",
    scope: "Página de login, campo de código, priorización",
    tags: ["Mobile", "Login", "Priorización"],
    context: [
      "En mobile, el modal de login quedaba tapado por el teclado.",
      "El campo del código de verificación era difícil de completar y el código tampoco se veía bien en el mail.",
    ],
    objective:
      "Que iniciar sesión en el teléfono sea un paso corto y sin trabas. Un usuario logueado tiene sus datos precargados y es más fácil de recuperar si abandona.",
    changes: [
      { title: "Del bottom sheet a una página de login completa para el camino con email", when: "18/8" },
      { title: "Campo de código mejorado y código más visible en el mail", when: "12/8" },
    ],
    myPart: [
      "Diseñé el pasaje del modal a página completa.",
      "Separé la mejora del código como ticket aparte, de menor prioridad, para que lo principal saliera antes.",
    ],
    craftLine: "Medí la proporción de checkouts logueados por mes en la base, sin contar metabuscadores, que nunca llegan logueados.",
    chart: {
      title: "Checkouts con usuario logueado: de 11% a 25%",
      subtitle: "% de checkouts de vuelos con sesión iniciada, sin metabuscadores, 2026",
      unit: "%",
      bars: [
        { label: "Jun", value: 10.9 },
        { label: "Jul", value: 16.6 },
        { label: "Ago", value: 14.2 },
        { label: "Sep", value: 25, highlight: true },
        { label: "Oct", value: 25.5, highlight: true },
      ],
      markers: [{ beforeIndex: 3, label: "desde 18/8 login nuevo" }],
      source: SOURCE_DB + " Octubre hasta el 29.",
    },
    caveats: [
      "Agosto queda bajo porque el Multisale casi duplicó los checkouts con mucho tráfico nuevo.",
      "Después del cambio también salieron cupones de primera compra y la verificación de email en la página de gracias, que pueden empujar el mismo número.",
    ],
    images: [
      {
        pending: true,
        alt: "Login mobile antes",
        caption: "Antes: el modal de login tapado por el teclado.",
        device: "mobile",
      },
      {
        pending: true,
        alt: "Login mobile después",
        caption: "Después: página de login completa y campo de código.",
        device: "mobile",
      },
    ],
    nextSteps: ["Medir la tasa de login completado en mobile con los eventos de GA4 que ya existen."],
  },
]

// Proyectos con criterio pero sin resultado medido todavía.
export const PROCESS_PROJECTS: { title: string; solves: string; status: string }[] = [
  {
    title: "Precio por medio de pago en la card de resultados",
    solves: "Que el precio de la card coincida con lo que se paga según el medio. Descarté dos opciones por escalabilidad antes de llegar a la V1.",
    status: "En definición",
  },
  {
    title: "Asistencia al viajero en el checkout",
    solves: "Ofrecer asistencia al comprar un vuelo sin ensuciar el checkout nuevo, con su módulo en MultiOps.",
    status: "En producción",
  },
  {
    title: "Aviso de cambio de aeropuerto en conexiones",
    solves: "Avisar en resultados, checkout y página de gracias cuando una escala o el regreso usan otro aeropuerto.",
    status: "En producción",
  },
  {
    title: "Familias tarifarias en cards internacionales",
    solves: "Que el usuario vea que puede sumar equipaje cambiando de tarifa.",
    status: "Listo para producción",
  },
  {
    title: "Mail de cross-selling de alojamiento",
    solves: "Después de comprar un vuelo, ofrecer hotel con la búsqueda ya cargada.",
    status: "En producción",
  },
]

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((c) => c.slug === slug)
}
