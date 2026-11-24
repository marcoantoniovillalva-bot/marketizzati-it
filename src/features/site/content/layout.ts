import type { Locale, PageKey } from '../lib/routes'

export interface NavItem {
  key: PageKey
  label: string
}

export interface LayoutCopy {
  nav: NavItem[]
  whatsapp: string
  whatsappFloat: string
  menu: string
  close: string
  footer: {
    tagline: string
    columns: { title: string; items: NavItem[] }[]
    rights: string
    vat: string
    legal: NavItem[]
  }
}

const it: LayoutCopy = {
  nav: [
    { key: 'home', label: 'Home' },
    { key: 'prezzi', label: 'Prezzi' },
    { key: 'siti', label: 'Siti web' },
    { key: 'googleAds', label: 'Pubblicità' },
    { key: 'sistemi', label: 'AI e automazioni' },
    { key: 'social', label: 'Social e video' },
    { key: 'progetti', label: 'Progetti' },
    { key: 'blog', label: 'Blog' },
    { key: 'chiSono', label: 'Chi sono' },
  ],
  whatsapp: 'Scrivimi',
  whatsappFloat: 'Scrivimi su WhatsApp',
  menu: 'Menu',
  close: 'Chiudi',
  footer: {
    tagline: 'Siti web, pubblicità e sistemi AI per artigiani e piccole imprese. Fatti da una persona vera, con il prezzo scritto.',
    columns: [
      {
        title: 'Siti web',
        items: [
          { key: 'prezzi', label: 'Quanto costa un sito web' },
          { key: 'siti', label: 'Realizzazione siti web' },
          { key: 'artigiani', label: 'Sito web per artigiani' },
          { key: 'schedaGoogle', label: 'Scheda Google Business' },
        ],
      },
      {
        title: 'Servizi',
        items: [
          { key: 'googleAds', label: 'Pubblicità Google Ads' },
          { key: 'chatgptAds', label: 'ChatGPT Ads' },
          { key: 'agenti', label: 'Agenti AI su WhatsApp' },
          { key: 'sistemi', label: 'Sistemi automatizzati' },
          { key: 'social', label: 'Social media manager' },
          { key: 'videoServizio', label: 'Contenuti video' },
        ],
      },
      {
        title: 'Zone',
        items: [
          { key: 'milano', label: 'Web agency Milano' },
          { key: 'pavia', label: 'Web agency Pavia' },
          { key: 'lodi', label: 'Web agency Lodi' },
          { key: 'crema', label: 'Web agency Crema' },
        ],
      },
      {
        title: 'Marketizzati',
        items: [
          { key: 'progetti', label: 'Progetti' },
          { key: 'chiSono', label: 'Chi sono' },
          { key: 'blog', label: 'Blog e risorse gratuite' },
          { key: 'video', label: 'Video e guide' },
          { key: 'contatti', label: 'Contatti' },
        ],
      },
    ],
    rights: 'Marketizzati di Marco Antonio Villalva. Tutti i diritti riservati.',
    vat: 'P.IVA',
    legal: [
      { key: 'condizioni', label: 'Condizioni di vendita' },
      { key: 'privacy', label: 'Privacy' },
      { key: 'cookie', label: 'Cookie' },
    ],
  },
}

const es: LayoutCopy = {
  nav: [
    { key: 'home', label: 'Inicio' },
    { key: 'prezzi', label: 'Precios' },
    { key: 'siti', label: 'Páginas web' },
    { key: 'googleAds', label: 'Publicidad' },
    { key: 'sistemi', label: 'IA y automatización' },
    { key: 'social', label: 'Redes y vídeo' },
    { key: 'progetti', label: 'Proyectos' },
    { key: 'blog', label: 'Blog' },
    { key: 'chiSono', label: 'Sobre mí' },
  ],
  whatsapp: 'Escríbeme',
  whatsappFloat: 'Escríbeme por WhatsApp',
  menu: 'Menú',
  close: 'Cerrar',
  footer: {
    tagline: 'Páginas web, publicidad y sistemas de IA para artesanos y pequeñas empresas. Hechos por una persona real, con el precio a la vista.',
    columns: [
      {
        title: 'Páginas web',
        items: [
          { key: 'prezzi', label: 'Cuánto cuesta una página web' },
          { key: 'siti', label: 'Diseño de páginas web' },
          { key: 'artigiani', label: 'Página web para artesanos' },
          { key: 'schedaGoogle', label: 'Ficha de Google Business' },
        ],
      },
      {
        title: 'Servicios',
        items: [
          { key: 'googleAds', label: 'Publicidad en Google Ads' },
          { key: 'chatgptAds', label: 'ChatGPT Ads' },
          { key: 'agenti', label: 'Agentes de IA en WhatsApp' },
          { key: 'sistemi', label: 'Sistemas automatizados' },
          { key: 'social', label: 'Gestión de redes sociales' },
          { key: 'videoServizio', label: 'Contenido en vídeo' },
        ],
      },
      {
        title: 'Zonas',
        items: [
          { key: 'milano', label: 'Agencia web Milán' },
          { key: 'pavia', label: 'Agencia web Pavía' },
          { key: 'lodi', label: 'Agencia web Lodi' },
          { key: 'crema', label: 'Agencia web Crema' },
        ],
      },
      {
        title: 'Marketizzati',
        items: [
          { key: 'progetti', label: 'Proyectos' },
          { key: 'chiSono', label: 'Sobre mí' },
          { key: 'blog', label: 'Blog y recursos gratis' },
          { key: 'video', label: 'Vídeos y guías' },
          { key: 'contatti', label: 'Contacto' },
        ],
      },
    ],
    rights: 'Marketizzati de Marco Antonio Villalva. Todos los derechos reservados.',
    vat: 'NIF IVA',
    legal: [
      { key: 'condizioni', label: 'Condiciones de venta' },
      { key: 'privacy', label: 'Privacidad' },
      { key: 'cookie', label: 'Cookies' },
    ],
  },
}

const en: LayoutCopy = {
  nav: [
    { key: 'home', label: 'Home' },
    { key: 'prezzi', label: 'Pricing' },
    { key: 'siti', label: 'Websites' },
    { key: 'googleAds', label: 'Advertising' },
    { key: 'sistemi', label: 'AI & automation' },
    { key: 'social', label: 'Social & video' },
    { key: 'progetti', label: 'Projects' },
    { key: 'blog', label: 'Blog' },
    { key: 'chiSono', label: 'About' },
  ],
  whatsapp: 'Message me',
  whatsappFloat: 'Message me on WhatsApp',
  menu: 'Menu',
  close: 'Close',
  footer: {
    tagline: 'Websites, advertising and AI systems for tradespeople and small businesses. Built by a real person, with the price in plain sight.',
    columns: [
      {
        title: 'Websites',
        items: [
          { key: 'prezzi', label: 'How much a website costs' },
          { key: 'siti', label: 'Website design' },
          { key: 'artigiani', label: 'Websites for tradespeople' },
          { key: 'schedaGoogle', label: 'Google Business Profile' },
        ],
      },
      {
        title: 'Services',
        items: [
          { key: 'googleAds', label: 'Google Ads management' },
          { key: 'chatgptAds', label: 'ChatGPT Ads' },
          { key: 'agenti', label: 'AI agents on WhatsApp' },
          { key: 'sistemi', label: 'Custom automation' },
          { key: 'social', label: 'Social media management' },
          { key: 'videoServizio', label: 'Video content' },
        ],
      },
      {
        title: 'Areas',
        items: [
          { key: 'milano', label: 'Web agency Milan' },
          { key: 'pavia', label: 'Web agency Pavia' },
          { key: 'lodi', label: 'Web agency Lodi' },
          { key: 'crema', label: 'Web agency Crema' },
        ],
      },
      {
        title: 'Marketizzati',
        items: [
          { key: 'progetti', label: 'Projects' },
          { key: 'chiSono', label: 'About' },
          { key: 'blog', label: 'Blog & free resources' },
          { key: 'video', label: 'Videos and guides' },
          { key: 'contatti', label: 'Contact' },
        ],
      },
    ],
    rights: 'Marketizzati by Marco Antonio Villalva. All rights reserved.',
    vat: 'VAT',
    legal: [
      { key: 'condizioni', label: 'Terms of sale' },
      { key: 'privacy', label: 'Privacy' },
      { key: 'cookie', label: 'Cookies' },
    ],
  },
}

export const LAYOUT: Record<Locale, LayoutCopy> = { it, es, en }
