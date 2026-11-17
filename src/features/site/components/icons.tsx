import {
  BarChart3, Bot, Brush, CalendarCheck, Camera, Captions, Check, Clapperboard, Clock, Code2, FileText, Globe, KeyRound, LayoutGrid,
  LayoutTemplate, LifeBuoy, Lock, Mail, MapPin, Megaphone, MessageCircle, Mic, MousePointerClick, PenLine, Phone, Search, Sparkles,
  Tag, Target, Users, Wallet, Wrench, Zap, type LucideIcon,
} from 'lucide-react'

/**
 * Picks an icon from the words of a list item (it/es/en), so every point gets a picture without
 * touching the copy files. First match wins: keep specific words above generic ones.
 */
const RULES: [RegExp, LucideIcon][] = [
  [/logo|identit/i, Brush],
  [/scheda google|google business|ficha de google|perfil de google|google profile|business profile|maps/i, MapPin],
  [/indicizz|indexa|index|bing|search console|seo/i, Search],
  [/assistenz|asistencia|support|30 giorni|30 días|30 days/i, LifeBuoy],
  [/whatsapp/i, MessageCircle],
  [/chiam|llama|call|telefon|phone|teléfono/i, Phone],
  [/agente vocal|voice|voz|vocale/i, Mic],
  [/sottotitol|subtítul|subtitle|caption/i, Captions],
  [/motion|animaz|animac|animation/i, Sparkles],
  [/reel|tiktok|video|vídeo/i, Clapperboard],
  [/foto|photo/i, Camera],
  [/budget|presupuesto publi|ad budget|pagato direttamente|€/i, Wallet],
  [/campagn|campaña|campaign|annunc|anuncio|\bads\b|pubblicit|publicidad|advert/i, Megaphone],
  [/parole|palabras|keyword|ricerche|búsquedas|searches|clic|click/i, MousePointerClick],
  [/zona|zone|area|città|ciudad|city/i, Target],
  [/report|dati|datos|data|numeri|números|numbers/i, BarChart3],
  [/appuntament|cita|appointment|calendar|agenda|promemoria|recordatorio|reminder/i, CalendarCheck],
  [/dominio|domain|https/i, Globe],
  [/email|correo|mail/i, Mail],
  [/intestat|a tu nombre|in your name|tuo|tuyo|yours|codice|código|code/i, KeyRound],
  [/sicur|segur|secur|privacy|accessi/i, Lock],
  [/veloc|rápid|fast|speed/i, Zap],
  [/prezz|precio|price|preventiv|quote/i, Tag],
  [/testi|textos|texts|scritt|escrit|written|copy/i, PenLine],
  [/pagin|página|page|sito|web/i, LayoutTemplate],
  [/post|contenut|contenido|content|profil|perfil|social|redes|instagram|facebook/i, LayoutGrid],
  [/\bai\b|\bia\b|intelligenz|inteligencia|agent|bot|automat|automazion/i, Bot],
  [/gestional|gestión|system|sistema|crm|integra|api/i, Code2],
  [/client|cliente|customer|persona|people/i, Users],
  [/orari|horario|hours|tempo|tiempo|time|giorn|días|days/i, Clock],
  [/document|contratt|contrato|contract|fattur|factura|invoice/i, FileText],
  [/ripar|repar|repair|manutenz|manten|maintenance/i, Wrench],
]

export function iconFor(text: string): LucideIcon {
  return RULES.find(([re]) => re.test(text))?.[1] ?? Check
}

/** A small orange tile with an icon that pops in as it scrolls into view and then breathes gently. */
export function IconTile({ icon: Icon, size = 'md', dark = false, delay = 0 }: { icon: LucideIcon; size?: 'sm' | 'md' | 'lg'; dark?: boolean; delay?: number }) {
  const box = { sm: 'h-8 w-8 rounded-xl', md: 'h-10 w-10 rounded-2xl', lg: 'h-14 w-14 rounded-2xl' }[size]
  const px = { sm: 15, md: 19, lg: 26 }[size]
  return (
    <span aria-hidden className={`mk-icon flex shrink-0 items-center justify-center ${box} ${dark ? 'bg-white/10 text-brand-soft' : 'bg-gradient-to-br from-brand-soft to-brand-peach text-brand ring-1 ring-brand/15'}`}>
      <Icon size={px} strokeWidth={2.2} className="mk-breathe" style={{ animationDelay: `${delay}s` }} />
    </span>
  )
}
