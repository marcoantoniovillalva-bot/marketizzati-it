export interface ResourceItem {
  id: string
  title: string
  description: string
  type: string
  embedUrl: string
}

export const resources: ResourceItem[] = [
  {
    id: 'zstart-framework',
    title: 'Framework Z·START',
    description: 'Il framework completo in 5 fasi per costruire il tuo business digitale con precisione industriale.',
    type: 'Presentazione',
    embedUrl: 'https://gamma.app/embed/ch58toblx6t6bqo',
  },
  {
    id: 'checklist-lancio',
    title: 'Checklist Lancio Digitale',
    description: 'Le 50 cose da verificare prima di lanciare il tuo progetto online.',
    type: 'Checklist',
    embedUrl: 'https://gamma.app/embed/9uarrvw0o9iwuqu',
  },
  {
    id: 'template-usp',
    title: 'Template Proposta Unica di Valore',
    description: 'Un template pratico per definire la tua USP in modo chiaro e convincente.',
    type: 'Template',
    embedUrl: 'https://gamma.app/embed/022r2j0hif4ibw6',
  },
  {
    id: 'guida-seo',
    title: 'Guida SEO Base',
    description: 'I fondamentali della SEO spiegati semplice. Per chi parte da zero.',
    type: 'Guida',
    embedUrl: 'https://gamma.app/embed/63v04hmedgg3xwn',
  },
  {
    id: 'guida-instagram',
    title: 'Il Profilo Instagram Perfetto',
    description: 'Biografia, Set Up & Mappa Strategica per un profilo che converte.',
    type: 'Guida',
    embedUrl: 'https://gamma.app/embed/8j381x9j4rlmtdx',
  },
]
