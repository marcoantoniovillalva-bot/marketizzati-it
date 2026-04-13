export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': 'https://www.marketizzati.it/#business',
        name: 'Marketizzati',
        alternateName: 'Marketizzati Digital Factory',
        description:
          'Digital Factory italiana per PMI e professionisti. Trasformiamo la tua visione in un business digitale strutturato con il Metodo Z·START in 6 fasi, potenziato dall\'intelligenza artificiale.',
        url: 'https://www.marketizzati.it',
        logo: 'https://www.marketizzati.it/images/icon-light.png',
        image: 'https://www.marketizzati.it/images/icon-light.png',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Via Mentana 21',
          addressLocality: 'Vigevano',
          addressRegion: 'PV',
          postalCode: '27029',
          addressCountry: 'IT',
        },
        taxID: '03028360182',
        vatID: 'IT03028360182',
        areaServed: [
          { '@type': 'Country', name: 'Italy' },
          { '@type': 'Country', name: 'Spain' },
          { '@type': 'Country', name: 'United States' },
        ],
        serviceType: [
          'Digital Marketing',
          'Marketing Digitale per PMI',
          'Strategia Digitale',
          'AI Automation',
          'Automazione AI',
          'Web Design ad Alta Conversione',
          'Funnel Marketing',
          'Brand Identity',
          'Content Marketing',
          'Email Marketing',
          'Consulenza Digitale',
        ],
        priceRange: '€€€',
        currenciesAccepted: 'EUR',
        foundingDate: '2024',
        knowsLanguage: ['it', 'en', 'es'],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servizi Marketizzati',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Consulenza Strategica Gratuita',
                description:
                  'Sessione diagnostica gratuita di 30 minuti per analizzare il tuo business digitale, identificare le opportunità di crescita e ricevere un piano d\'azione personalizzato. Tutti i partecipanti ricevono accesso gratuito alle risorse digitali Marketizzati, indipendentemente dall\'esito.',
                offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Strategia & Posizionamento',
                description:
                  'Analisi di mercato, brand identity e roadmap strategica con obiettivi misurabili per PMI e professionisti.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'AI & Automazione',
                description:
                  'Chatbot AI, automazioni di processo (email, CRM, follow-up) e produzione di contenuti moltiplicata dall\'intelligenza artificiale.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Web & Funnel',
                description:
                  'Siti web ad alta conversione, funnel di vendita e email marketing automatizzato per generare clienti con continuità.',
              },
            },
          ],
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://www.marketizzati.it/#founder',
        name: 'Marco Antonio Villalva',
        jobTitle: 'Founder & Digital Strategist',
        worksFor: { '@id': 'https://www.marketizzati.it/#business' },
        knowsAbout: [
          'Digital Marketing per PMI',
          'Intelligenza Artificiale applicata al Business',
          'Marketing Automation',
          'Funnel Marketing',
          'Growth Hacking',
          'Web Development',
          'Content Strategy',
          'Strategia Digitale',
        ],
        hasCredential: {
          '@type': 'EducationalOccupationalCredential',
          name: 'Traffic Master Certified',
          credentialCategory: 'certification',
          recognizedBy: {
            '@type': 'Organization',
            name: 'Florida Global University',
          },
          dateCreated: '2025',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.marketizzati.it/#website',
        url: 'https://www.marketizzati.it',
        name: 'Marketizzati',
        publisher: { '@id': 'https://www.marketizzati.it/#business' },
        inLanguage: ['it', 'en', 'es'],
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://www.marketizzati.it/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'HowTo',
        '@id': 'https://www.marketizzati.it/#metodo-zstart',
        name: 'Metodo Z·START — Il Sistema Operativo del Business Digitale',
        description:
          'Framework proprietario in 6 fasi per costruire un business digitale strutturato che genera clienti con precisione industriale, potenziato dall\'intelligenza artificiale. Ideale per PMI e professionisti che vogliono smettere di improvvisare e costruire un ecosistema digitale completo.',
        totalTime: 'P12W',
        step: [
          {
            '@type': 'HowToStep',
            position: 1,
            name: 'Z — Punto Zero',
            text: 'Analisi e diagnosi completa: dove sei ora, dove vuoi arrivare e cosa ti sta bloccando. Dati, numeri e verità senza illusioni — il punto di partenza per ogni decisione strategica.',
          },
          {
            '@type': 'HowToStep',
            position: 2,
            name: 'S — Strategia',
            text: 'Trasformiamo i dati del Punto Zero in un piano d\'azione chiaro. Definiamo chi vuoi raggiungere, cosa ti rende unico e come ti posizioni nel mercato.',
          },
          {
            '@type': 'HowToStep',
            position: 3,
            name: 'T — Tecnologia',
            text: 'La strategia diventa infrastruttura concreta: sito web ad alta conversione, automazioni, CRM, funnel. Tutto ciò che serve per far girare il tuo business come una macchina.',
          },
          {
            '@type': 'HowToStep',
            position: 4,
            name: 'A — Attivazione',
            text: 'Lanciamo tutto sul mercato con campagne mirate, contenuti strategici e funnel ottimizzati. Monitoriamo le performance dal primo giorno per ottimizzare in tempo reale.',
          },
          {
            '@type': 'HowToStep',
            position: 5,
            name: 'R — Risultati',
            text: 'Il business diventa scientifico. Analizziamo i dati, identifichiamo cosa funziona e cosa non funziona, e ottimizziamo ogni elemento per massimizzare il ROI.',
          },
          {
            '@type': 'HowToStep',
            position: 6,
            name: 'T — Trasformazione',
            text: 'La fase che distingue chi sopravvive da chi prospera. Pianifichiamo l\'evoluzione strategica, nuove opportunità di mercato e la scalabilità dell\'intero sistema.',
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.marketizzati.it/#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Cos\'è il Metodo Z·START?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Il Metodo Z·START è un framework proprietario in 6 fasi (Punto Zero, Strategia, Tecnologia, Attivazione, Risultati, Trasformazione) ideato da Marketizzati per costruire un business digitale strutturato che genera clienti con precisione industriale. È potenziato dall\'intelligenza artificiale ed è pensato per PMI e professionisti che vogliono un ecosistema digitale completo, non servizi scollegati.',
            },
          },
          {
            '@type': 'Question',
            name: 'Cosa significa Digital Factory?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La Digital Factory Marketizzati è un sistema integrato che combina strategia digitale, tecnologia, AI e automazione per costruire l\'ecosistema digitale completo di un\'azienda. Non vendiamo singoli servizi: costruiamo una macchina digitale coordinata che genera clienti in modo continuativo.',
            },
          },
          {
            '@type': 'Question',
            name: 'La consulenza strategica è davvero gratuita?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sì, la consulenza strategica di 30 minuti è completamente gratuita e senza impegno. È personalizzata al 100% sul tuo business. Indipendentemente dall\'esito, tutti i partecipanti ricevono accesso gratuito alle risorse digitali Marketizzati (guide, framework e strumenti).',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto tempo ci vuole per vedere risultati con il Metodo Z·START?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Con il pacchetto Base di Lancio (fasi Z + S + T) l\'ecosistema digitale è operativo in 4-6 settimane. Con Scala (fasi Z + S + T + A) in 8-12 settimane. Con Domina (tutte le 6 fasi) in 12-16 settimane. I risultati di business crescono progressivamente nei mesi successivi grazie ai cicli di ottimizzazione continua.',
            },
          },
          {
            '@type': 'Question',
            name: 'Marketizzati lavora solo con aziende italiane?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Marketizzati ha sede a Vigevano (PV), Italia (P.IVA 03028360182) e lavora principalmente con PMI e professionisti italiani, ma opera anche con clienti internazionali grazie alla Digital Factory multilingue (italiano, inglese, spagnolo).',
            },
          },
          {
            '@type': 'Question',
            name: 'Cosa rende Marketizzati diverso da un\'agenzia di marketing tradizionale?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Marketizzati non è un\'agenzia: è una Digital Factory. La differenza è che invece di vendere servizi isolati (solo social media, solo un sito, solo ads), costruiamo l\'intero ecosistema digitale del cliente con un metodo proprietario in 6 fasi potenziato dall\'AI. Ogni componente è progettato per lavorare in sinergia con gli altri, producendo risultati misurabili e scalabili.',
            },
          },
          {
            '@type': 'Question',
            name: 'Quanto costa la realizzazione di un sito web professionale?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'I costi di realizzazione di un sito web professionale variano in base alla complessità e agli obiettivi. Marketizzati offre siti web ad alta conversione inclusi nei pacchetti Z·START a partire dal piano Base. Per ricevere un preventivo personalizzato, prenota una consulenza gratuita di 30 minuti e riceverai un piano con costi dettagliati.',
            },
          },
          {
            '@type': 'Question',
            name: 'Offrite servizi di gestione Facebook Ads e social media marketing?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sì. Marketizzati gestisce campagne Facebook Ads e social media marketing strategico per PMI e professionisti. Dalla strategia alla produzione contenuti fino all\'ottimizzazione delle campagne per la generazione di lead qualificati. Il tutto integrato nel Metodo Z·START.',
            },
          },
          {
            '@type': 'Question',
            name: 'Come funziona la consulenza marketing digitale di Marketizzati?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'La consulenza marketing digitale inizia con una sessione diagnostica gratuita di 30 minuti in cui analizziamo il tuo business, identifichiamo i gap digitali e definiamo le priorità. Al termine ricevi un piano d\'azione concreto con obiettivi misurabili e stima dei costi, senza impegno.',
            },
          },
        ],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
