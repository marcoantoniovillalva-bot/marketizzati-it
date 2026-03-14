"""Update message files with SEO improvements and landing namespace."""
import json
import os

BASE = r'C:\Users\Villalva\Desktop\Marketizzati definitifo\marketizzati\src\i18n\messages'

LANDING_IT = {
  "hero": {
    "badge": "Digital Factory Marketizzati",
    "line1": "Mentre Tu Ci Pensi,",
    "line2": "i Tuoi Competitor",
    "line3": "Stanno Costruendo.",
    "accent": "Con l\u2019IA.",
    "subtitle": "Il Metodo Z\u00b7START in 6 fasi trasforma la tua visione in un business digitale che genera clienti \u2014 con precisione industriale e l\u2019AI che fa il lavoro pesante.",
    "cta1": "Prenota la Mia Consulenza Gratuita",
    "cta2": "Risparmia Mesi. Porta Clienti.",
    "microcopy": "30 minuti \u00b7 Senza impegno \u00b7 + Risorse digitali incluse gratis"
  },
  "risultati": {
    "title": "Risultati",
    "stat1Label": "Views YouTube organiche",
    "stat2Label": "Views Facebook organiche",
    "stat3Label": "Per lanciare lurumi.it",
    "stat4Label": "Fasi Metodo Z\u00b7START",
    "stat5Label": "Traffic Master Certified",
    "stat5Sub": "Florida Global University",
    "stat5Cta": "Clicca per vedere"
  },
  "services": {
    "title": "Servizi",
    "subtitle": "Nella Digital Factory ogni elemento \u00e8 progettato per lavorare in sinergia.",
    "expandBtn": "Scopri di pi\u00f9",
    "collapseBtn": "Mostra meno",
    "waBtn": "Chiedi informazioni su WhatsApp",
    "card1Title": "Strategia & Posizionamento",
    "card1Desc": "Definiamo chi sei, a chi parli e come ti distingui nel mercato.",
    "card1Sub1Label": "Analisi di Mercato",
    "card1Sub1Desc": "Mappiamo concorrenti, opportunit\u00e0 e il tuo posizionamento ideale.",
    "card1Sub2Label": "Identit\u00e0 di Brand",
    "card1Sub2Desc": "Voce, visual e messaggio: un brand che attira il cliente giusto.",
    "card1Sub3Label": "Roadmap Strategica",
    "card1Sub3Desc": "Obiettivi misurabili e tappe concrete, senza attivit\u00e0 inutili.",
    "card2Title": "AI & Automazione",
    "card2Desc": "L\u2019intelligenza artificiale che lavora per te mentre tu lavori sul tuo business.",
    "card2Sub1Label": "Chatbot & Assistenti AI",
    "card2Sub1Desc": "Rispondi ai clienti h24 e qualifica i lead automaticamente.",
    "card2Sub2Label": "Automazioni di Processo",
    "card2Sub2Desc": "Email, CRM, follow-up: tutto automatico, zero tempo sprecato.",
    "card2Sub3Label": "AI per i Contenuti",
    "card2Sub3Desc": "Testo, immagini e video: produci 10x pi\u00f9 contenuto nello stesso tempo.",
    "card3Title": "Web & Funnel",
    "card3Desc": "Infrastrutture digitali che portano traffico e convertono.",
    "card3Sub1Label": "Sito Web ad Alta Conversione",
    "card3Sub1Desc": "Design premium ottimizzato per trasformare visitatori in clienti.",
    "card3Sub2Label": "Funnel di Vendita",
    "card3Sub2Desc": "Percorsi che portano da zero contatto a cliente fidelizzato.",
    "card3Sub3Label": "Email Marketing",
    "card3Sub3Desc": "Sequenze che nutrono il lead automaticamente fino alla vendita."
  },
  "metodo": {
    "badge": "Metodo Z\u00b7START",
    "title1": "Il Sistema Operativo",
    "title2": "del Tuo Business Digitale",
    "subtitle": "Non consulenza generica. Un framework in 6 fasi che costruisce il tuo ecosistema digitale come una macchina industriale \u2014 e ti porta clienti risparmiando mesi di tentativi.",
    "cta": "Scopri il Metodo Completo",
    "step1Title": "Punto Zero", "step1Desc": "Dove sei davvero. Senza illusioni.",
    "step2Title": "Strategia", "step2Desc": "Il piano. Ogni decisione guidata dai dati.",
    "step3Title": "Tecnologia", "step3Desc": "L\u2019infrastruttura concreta che fa girare tutto.",
    "step4Title": "Attivazione", "step4Desc": "Sul mercato. Campagne, funnel, contenuti.",
    "step5Title": "Risultati", "step5Desc": "Analizziamo. Ottimizziamo. Massimizziamo il ROI.",
    "step6Title": "Trasformazione", "step6Desc": "Il business che scala. Non quello che sopravvive.",
    "lurumiLabel": "lurumi.it \u2014 Il Metodo in Azione",
    "lurumiSub": "Primo progetto Marketizzati \u00b7 Live in <1 mese"
  },
  "chiSono": {
    "title": "Chi c\u2019\u00e8 Dietro Marketizzati",
    "subtitle": "Non un\u2019agenzia. Una Digital Factory fondata su risultati reali.",
    "missionTitle": "La Mission",
    "missionP1": "Ho costruito sistemi digitali prima di venderli. lurumi.it \u00e8 il primo prodotto lanciato da Marketizzati: una PWA full-stack con AI, pagamenti Stripe e pi\u00f9 di 200 funzionalit\u00e0 \u2014 costruita in {bold} usando la stessa Digital Factory che offro ai miei clienti.",
    "missionP1Bold": "meno di un mese",
    "missionP2": "La mission \u00e8 semplice: {bold} \u2014 non singoli servizi, ma un sistema integrato potenziato dall\u2019intelligenza artificiale attraverso il Metodo Z\u00b7START.",
    "missionP2Bold": "aiutare PMI e professionisti a costruire il proprio ecosistema digitale completo",
    "valoriTitle": "I Valori",
    "val1Title": "Risultati Prima di Tutto", "val1Desc": "Non contiamo le ore lavorate. Contiamo i risultati generati.",
    "val2Title": "Potenziati dall\u2019AI", "val2Desc": "Integriamo l\u2019intelligenza artificiale come motore reale \u2014 non come parola di moda \u2014 per costruire pi\u00f9 velocemente e meglio.",
    "val3Title": "Ecosistema, Non Servizi", "val3Desc": "Non siamo un fornitore. Siamo un partner nel tuo percorso di crescita.",
    "check1": "Traffic Master Certified \u00b7 Florida Global University 2025",
    "check2": "lurumi.it \u2014 Digital Product live in meno di 1 mese",
    "check3": "Intelligenza artificiale applicata a contenuto, automazione e prodotto",
    "certLabel": "Traffic Master Certified",
    "certSub": "Florida Global University \u00b7 2025"
  },
  "casiStudio": {
    "title": "Casi Studio",
    "subtitle": "Risultati reali. Sistemi reali. Costruiti con il Metodo Z\u00b7START.",
    "expandBtn": "Scopri di pi\u00f9", "collapseBtn": "Mostra meno",
    "study1Tag": "Contenuto Virale AI", "study1Title": "Chistes Malisimos",
    "study1Brief": "Canale creato da zero con contenuto AI-ottimizzato: 140.000+ views su YouTube e 100.000+ su Facebook in meno di 30 giorni. Senza ads.",
    "study1Headline": "140.000+ Views. Zero Clienti.",
    "study1Body1": "Ho creato un canale con contenuto AI-ottimizzato. In meno di 30 giorni: 140.000+ views su YouTube (32.000+ su un solo video) e 100.000+ su Facebook. Traffico organico puro, zero ads.",
    "study1Body2": "Risultato? Zero clienti. Perch\u00e9 senza un sistema che converte il traffico, hai solo numeri su uno schermo.",
    "study1Body3": "Quella lezione \u2014 imparata sulla mia pelle \u2014 \u00e8 il motivo per cui esiste il Metodo Z\u00b7START.",
    "study1GifCaption": "32.000+ views su un solo video \u00b7 Clicca per guardare",
    "study1Quote": "Il contenuto porta le persone. Il sistema le converte. Io costruisco entrambi.",
    "study2Tag": "Infrastruttura Digitale", "study2Title": "lurumi.it",
    "study2Brief": "Prima infrastruttura digitale completa lanciata da Marketizzati: PWA full-stack con AI, pagamenti Stripe e 200+ funzionalit\u00e0 \u2014 live in meno di 1 mese.",
    "study2Headline": "Da zero a produzione in meno di 1 mese.",
    "study2Body1": "lurumi.it \u00e8 una PWA full-stack per il mondo del crochet: AI integrata per generare pattern e immagini, pagamenti Stripe, oltre 200 funzionalit\u00e0 tra cui contatori, progetti, tutorial e chat AI.",
    "study2Body2": "Costruita interamente con la Digital Factory Marketizzati \u2014 lo stesso sistema che offro ai miei clienti. Non una demo, un prodotto reale con utenti reali.",
    "study2Body3": "\u00c8 la prova concreta che il Metodo Z\u00b7START funziona: dall\u2019idea alla messa in produzione, senza mesi di tentativi.",
    "study2GifCaption": "lurumi.it \u2014 live in produzione",
    "study2Quote": "Costruisco sistemi digitali prima di venderli."
  },
  "ctaFinale": {
    "title1": "30 Minuti.", "title2": "Una Conversazione.", "title3": "Tutto Cambia.",
    "subtitle": "Scopri esattamente cosa blocca la tua crescita e i 3 passi concreti da fare subito.",
    "cta": "Scrivimi su WhatsApp",
    "micro1": "Zero spam \u00b7 Zero impegno \u00b7 Rispondo entro poche ore",
    "micro2": "Tutti i partecipanti ricevono accesso gratuito alle risorse digitali Marketizzati \u2014 indipendentemente dall\u2019esito.",
    "micro3": "Accettiamo un numero limitato di consulenze a settimana per garantire qualit\u00e0"
  },
  "modal": {
    "badge": "Metodo Z\u00b7START", "title": "Il Sistema Operativo del Business",
    "step1Title": "Punto Zero", "step1Desc": "Analisi e diagnosi completa: dove sei ora, dove vuoi arrivare e cosa ti sta bloccando. Niente intuizioni \u2014 dati, numeri e verit\u00e0.", "step1Benefit": "Sai esattamente dove sei e cosa fare per crescere",
    "step2Title": "Strategia", "step2Desc": "Trasformiamo i dati in un piano d\u2019azione chiaro. Definiamo CHI vuoi raggiungere, COSA ti rende unico e COME ti posizioni nel mercato.", "step2Benefit": "Un piano concreto, non ipotesi o opinioni",
    "step3Title": "Tecnologia", "step3Desc": "La strategia diventa infrastruttura: sito web, automazioni, CRM, funnel. Tutto ci\u00f2 che serve per far girare il tuo business come una macchina.", "step3Benefit": "Il tuo business lavora per te, anche quando non ci sei",
    "step4Title": "Attivazione", "step4Desc": "Lanciamo tutto sul mercato con campagne mirate, contenuti strategici e funnel ottimizzati. Monitoriamo le performance dal primo giorno.", "step4Benefit": "Clienti reali, contatti reali \u2014 dal primo giorno",
    "step5Title": "Risultati", "step5Desc": "Il business diventa scientifico. Analizziamo i dati, identifichiamo cosa funziona e ottimizziamo ogni elemento per massimizzare il ROI.", "step5Benefit": "Ogni euro investito ha un ritorno misurabile",
    "step6Title": "Trasformazione", "step6Desc": "La fase che distingue chi sopravvive da chi prospera. Pianifichiamo l\u2019evoluzione strategica, nuove opportunit\u00e0 e la scalabilit\u00e0 del sistema.", "step6Benefit": "Un sistema che scala con te, non contro di te",
    "timelineTitle": "Quanto tempo ci vuole?",
    "timeline1Name": "Base di Lancio", "timeline1Phases": "Z + S + T",
    "timeline2Name": "Scala", "timeline2Phases": "Z + S + T + A",
    "timeline3Name": "Domina", "timeline3Phases": "Tutte le 6 fasi",
    "timelineWeeks": "settimane",
    "timelineDisclaimer": "Le tempistiche si riferiscono alla costruzione del tuo ecosistema digitale. I risultati crescono progressivamente nei mesi successivi.",
    "modalCta": "Prenota la Consulenza Gratuita"
  }
}

LANDING_EN = {
  "hero": {
    "badge": "Digital Factory Marketizzati",
    "line1": "While You're Thinking,",
    "line2": "Your Competitors",
    "line3": "Are Building.",
    "accent": "With AI.",
    "subtitle": "The Z\u00b7START Method in 6 phases transforms your vision into a client-generating digital business \u2014 with industrial precision and AI doing the heavy lifting.",
    "cta1": "Book My Free Consultation",
    "cta2": "Save Months. Bring Clients.",
    "microcopy": "30 minutes \u00b7 No commitment \u00b7 + Free digital resources included"
  },
  "risultati": {
    "title": "Results",
    "stat1Label": "Organic YouTube views",
    "stat2Label": "Organic Facebook views",
    "stat3Label": "To launch lurumi.it",
    "stat4Label": "Z\u00b7START Method phases",
    "stat5Label": "Traffic Master Certified",
    "stat5Sub": "Florida Global University",
    "stat5Cta": "Click to view"
  },
  "services": {
    "title": "Services",
    "subtitle": "In the Digital Factory every element is designed to work in synergy.",
    "expandBtn": "Learn more",
    "collapseBtn": "Show less",
    "waBtn": "Ask us on WhatsApp",
    "card1Title": "Strategy & Positioning",
    "card1Desc": "We define who you are, who you speak to, and how you stand out in the market.",
    "card1Sub1Label": "Market Analysis",
    "card1Sub1Desc": "We map competitors, opportunities and your ideal positioning.",
    "card1Sub2Label": "Brand Identity",
    "card1Sub2Desc": "Voice, visuals and message: a brand that attracts the right client.",
    "card1Sub3Label": "Strategic Roadmap",
    "card1Sub3Desc": "Measurable goals and concrete milestones, without wasted effort.",
    "card2Title": "AI & Automation",
    "card2Desc": "Artificial intelligence working for you while you work on your business.",
    "card2Sub1Label": "Chatbots & AI Assistants",
    "card2Sub1Desc": "Answer clients 24/7 and qualify leads automatically.",
    "card2Sub2Label": "Process Automation",
    "card2Sub2Desc": "Email, CRM, follow-up: fully automated, zero time wasted.",
    "card2Sub3Label": "AI for Content",
    "card2Sub3Desc": "Text, images and video: produce 10x more content in the same time.",
    "card3Title": "Web & Funnel",
    "card3Desc": "Digital infrastructure that drives traffic and converts.",
    "card3Sub1Label": "High-Conversion Website",
    "card3Sub1Desc": "Premium design optimized to turn visitors into clients.",
    "card3Sub2Label": "Sales Funnel",
    "card3Sub2Desc": "Journeys that take a prospect from zero to loyal client.",
    "card3Sub3Label": "Email Marketing",
    "card3Sub3Desc": "Automated sequences that nurture leads all the way to the sale."
  },
  "metodo": {
    "badge": "Z\u00b7START Method",
    "title1": "The Operating System",
    "title2": "of Your Digital Business",
    "subtitle": "Not generic consulting. A 6-phase framework that builds your digital ecosystem like an industrial machine \u2014 and brings you clients while saving months of trial and error.",
    "cta": "Discover the Full Method",
    "step1Title": "Zero Point", "step1Desc": "Where you really are. No illusions.",
    "step2Title": "Strategy", "step2Desc": "The plan. Every decision data-driven.",
    "step3Title": "Technology", "step3Desc": "The concrete infrastructure that makes it all run.",
    "step4Title": "Activation", "step4Desc": "To market. Campaigns, funnels, content.",
    "step5Title": "Results", "step5Desc": "Analyze. Optimize. Maximize ROI.",
    "step6Title": "Transformation", "step6Desc": "The business that scales. Not the one that survives.",
    "lurumiLabel": "lurumi.it \u2014 The Method in Action",
    "lurumiSub": "First Marketizzati project \u00b7 Live in <1 month"
  },
  "chiSono": {
    "title": "Who's Behind Marketizzati",
    "subtitle": "Not an agency. A Digital Factory built on real results.",
    "missionTitle": "The Mission",
    "missionP1": "I built digital systems before selling them. lurumi.it is the first product launched by Marketizzati: a full-stack PWA with AI, Stripe payments and over 200 features \u2014 built in {bold} using the same Digital Factory I offer my clients.",
    "missionP1Bold": "less than one month",
    "missionP2": "The mission is simple: {bold} \u2014 not individual services, but an integrated system powered by artificial intelligence through the Z\u00b7START Method.",
    "missionP2Bold": "help SMBs and professionals build their complete digital ecosystem",
    "valoriTitle": "Our Values",
    "val1Title": "Results First", "val1Desc": "We don't count hours worked. We count results generated.",
    "val2Title": "Powered by AI", "val2Desc": "We integrate artificial intelligence as a real engine \u2014 not a buzzword \u2014 to build faster and better.",
    "val3Title": "Ecosystem, Not Services", "val3Desc": "We're not a vendor. We're a partner on your growth journey.",
    "check1": "Traffic Master Certified \u00b7 Florida Global University 2025",
    "check2": "lurumi.it \u2014 Digital Product live in less than 1 month",
    "check3": "Artificial intelligence applied to content, automation and product",
    "certLabel": "Traffic Master Certified",
    "certSub": "Florida Global University \u00b7 2025"
  },
  "casiStudio": {
    "title": "Case Studies",
    "subtitle": "Real results. Real systems. Built with the Z\u00b7START Method.",
    "expandBtn": "Learn more", "collapseBtn": "Show less",
    "study1Tag": "AI Viral Content", "study1Title": "Chistes Malisimos",
    "study1Brief": "Channel built from zero with AI-optimized content: 140,000+ YouTube views and 100,000+ Facebook views in under 30 days. Zero ads.",
    "study1Headline": "140,000+ Views. Zero Clients.",
    "study1Body1": "I built a channel with AI-optimized content. In under 30 days: 140,000+ YouTube views (32,000+ on a single video) and 100,000+ on Facebook. Pure organic traffic, zero ads.",
    "study1Body2": "Result? Zero clients. Because without a system that converts traffic, you only have numbers on a screen.",
    "study1Body3": "That lesson \u2014 learned the hard way \u2014 is why the Z\u00b7START Method exists.",
    "study1GifCaption": "32,000+ views on a single video \u00b7 Click to watch",
    "study1Quote": "Content brings people. The system converts them. I build both.",
    "study2Tag": "Digital Infrastructure", "study2Title": "lurumi.it",
    "study2Brief": "First complete digital infrastructure launched by Marketizzati: full-stack PWA with AI, Stripe payments and 200+ features \u2014 live in less than 1 month.",
    "study2Headline": "From zero to production in less than 1 month.",
    "study2Body1": "lurumi.it is a full-stack PWA for the crochet world: AI integrated for generating patterns and images, Stripe payments, over 200 features including counters, projects, tutorials and AI chat.",
    "study2Body2": "Built entirely with the Marketizzati Digital Factory \u2014 the same system I offer my clients. Not a demo, a real product with real users.",
    "study2Body3": "It's concrete proof that the Z\u00b7START Method works: from idea to production, without months of attempts.",
    "study2GifCaption": "lurumi.it \u2014 live in production",
    "study2Quote": "I build digital systems before selling them."
  },
  "ctaFinale": {
    "title1": "30 Minutes.",
    "title2": "One Conversation.",
    "title3": "Everything Changes.",
    "subtitle": "Discover exactly what's blocking your growth and the 3 concrete steps to take right now.",
    "cta": "Message Me on WhatsApp",
    "micro1": "Zero spam \u00b7 Zero commitment \u00b7 I reply within hours",
    "micro2": "All participants receive free access to Marketizzati's digital resources \u2014 regardless of the outcome.",
    "micro3": "We accept a limited number of consultations per week to guarantee quality"
  },
  "modal": {
    "badge": "Z\u00b7START Method", "title": "The Business Operating System",
    "step1Title": "Zero Point", "step1Desc": "Complete analysis and diagnosis: where you are now, where you want to go, and what's blocking you. No guessing \u2014 data, numbers and truth.", "step1Benefit": "You know exactly where you are and what to do to grow",
    "step2Title": "Strategy", "step2Desc": "We transform data into a clear action plan. We define WHO you want to reach, WHAT makes you unique and HOW you position yourself in the market.", "step2Benefit": "A concrete plan, not guesses or opinions",
    "step3Title": "Technology", "step3Desc": "Strategy becomes infrastructure: website, automations, CRM, funnels. Everything needed to make your business run like a machine.", "step3Benefit": "Your business works for you, even when you're not there",
    "step4Title": "Activation", "step4Desc": "We launch everything to market with targeted campaigns, strategic content and optimized funnels. We monitor performance from day one.", "step4Benefit": "Real clients, real contacts \u2014 from day one",
    "step5Title": "Results", "step5Desc": "Business becomes scientific. We analyze data, identify what works and optimize every element to maximize ROI.", "step5Benefit": "Every euro invested has a measurable return",
    "step6Title": "Transformation", "step6Desc": "The phase that separates those who survive from those who thrive. We plan strategic evolution, new opportunities and system scalability.", "step6Benefit": "A system that scales with you, not against you",
    "timelineTitle": "How long does it take?",
    "timeline1Name": "Launch Base", "timeline1Phases": "Z + S + T",
    "timeline2Name": "Scale", "timeline2Phases": "Z + S + T + A",
    "timeline3Name": "Dominate", "timeline3Phases": "All 6 phases",
    "timelineWeeks": "weeks",
    "timelineDisclaimer": "Timelines refer to building your digital ecosystem. Business results grow progressively in the following months.",
    "modalCta": "Book My Free Consultation"
  }
}

LANDING_ES = {
  "hero": {
    "badge": "Digital Factory Marketizzati",
    "line1": "Mientras T\u00fa Lo Piensas,",
    "line2": "Tu Competencia",
    "line3": "Est\u00e1 Construyendo.",
    "accent": "Con IA.",
    "subtitle": "El M\u00e9todo Z\u00b7START en 6 fases transforma tu visi\u00f3n en un negocio digital que genera clientes \u2014 con precisi\u00f3n industrial y la IA haciendo el trabajo pesado.",
    "cta1": "Reservo Mi Consultor\u00eda Gratuita",
    "cta2": "Ahorra Meses. Trae Clientes.",
    "microcopy": "30 minutos \u00b7 Sin compromiso \u00b7 + Recursos digitales incluidos gratis"
  },
  "risultati": {
    "title": "Resultados",
    "stat1Label": "Views org\u00e1nicos en YouTube",
    "stat2Label": "Views org\u00e1nicos en Facebook",
    "stat3Label": "Para lanzar lurumi.it",
    "stat4Label": "Fases M\u00e9todo Z\u00b7START",
    "stat5Label": "Traffic Master Certified",
    "stat5Sub": "Florida Global University",
    "stat5Cta": "Clic para ver"
  },
  "services": {
    "title": "Servicios",
    "subtitle": "En la Digital Factory cada elemento est\u00e1 dise\u00f1ado para trabajar en sinergia.",
    "expandBtn": "Descubrir m\u00e1s",
    "collapseBtn": "Mostrar menos",
    "waBtn": "Pregunta por WhatsApp",
    "card1Title": "Estrategia & Posicionamiento",
    "card1Desc": "Definimos qui\u00e9n eres, a qui\u00e9n le hablas y c\u00f3mo te distingues en el mercado.",
    "card1Sub1Label": "An\u00e1lisis de Mercado",
    "card1Sub1Desc": "Mapeamos competidores, oportunidades y tu posicionamiento ideal.",
    "card1Sub2Label": "Identidad de Marca",
    "card1Sub2Desc": "Voz, visual y mensaje: una marca que atrae al cliente correcto.",
    "card1Sub3Label": "Hoja de Ruta Estrat\u00e9gica",
    "card1Sub3Desc": "Objetivos medibles y etapas concretas, sin actividades in\u00fatiles.",
    "card2Title": "IA & Automatizaci\u00f3n",
    "card2Desc": "La inteligencia artificial trabajando para ti mientras t\u00fa trabajas en tu negocio.",
    "card2Sub1Label": "Chatbots & Asistentes IA",
    "card2Sub1Desc": "Responde a clientes 24/7 y califica leads autom\u00e1ticamente.",
    "card2Sub2Label": "Automatizaci\u00f3n de Procesos",
    "card2Sub2Desc": "Email, CRM, seguimiento: todo autom\u00e1tico, cero tiempo perdido.",
    "card2Sub3Label": "IA para Contenidos",
    "card2Sub3Desc": "Texto, im\u00e1genes y video: produce 10x m\u00e1s contenido en el mismo tiempo.",
    "card3Title": "Web & Funnel",
    "card3Desc": "Infraestructuras digitales que traen tr\u00e1fico y convierten.",
    "card3Sub1Label": "Sitio Web de Alta Conversi\u00f3n",
    "card3Sub1Desc": "Dise\u00f1o premium optimizado para convertir visitantes en clientes.",
    "card3Sub2Label": "Funnel de Ventas",
    "card3Sub2Desc": "Recorridos que llevan de cero contacto a cliente fidelizado.",
    "card3Sub3Label": "Email Marketing",
    "card3Sub3Desc": "Secuencias autom\u00e1ticas que nutren al lead hasta la venta."
  },
  "metodo": {
    "badge": "M\u00e9todo Z\u00b7START",
    "title1": "El Sistema Operativo",
    "title2": "de Tu Negocio Digital",
    "subtitle": "No consultor\u00eda gen\u00e9rica. Un framework de 6 fases que construye tu ecosistema digital como una m\u00e1quina industrial \u2014 y te trae clientes ahorrando meses de intentos.",
    "cta": "Descubre el M\u00e9todo Completo",
    "step1Title": "Punto Cero", "step1Desc": "D\u00f3nde est\u00e1s realmente. Sin ilusiones.",
    "step2Title": "Estrategia", "step2Desc": "El plan. Cada decisi\u00f3n guiada por datos.",
    "step3Title": "Tecnolog\u00eda", "step3Desc": "La infraestructura concreta que hace girar todo.",
    "step4Title": "Activaci\u00f3n", "step4Desc": "Al mercado. Campa\u00f1as, funnels, contenido.",
    "step5Title": "Resultados", "step5Desc": "Analizamos. Optimizamos. Maximizamos el ROI.",
    "step6Title": "Transformaci\u00f3n", "step6Desc": "El negocio que escala. No el que sobrevive.",
    "lurumiLabel": "lurumi.it \u2014 El M\u00e9todo en Acci\u00f3n",
    "lurumiSub": "Primer proyecto Marketizzati \u00b7 En vivo en <1 mes"
  },
  "chiSono": {
    "title": "Qui\u00e9n Est\u00e1 Detr\u00e1s de Marketizzati",
    "subtitle": "No una agencia. Una Digital Factory fundada en resultados reales.",
    "missionTitle": "La Misi\u00f3n",
    "missionP1": "Construyo sistemas digitales antes de venderlos. lurumi.it es el primer producto lanzado por Marketizzati: una PWA full-stack con IA, pagos Stripe y m\u00e1s de 200 funcionalidades \u2014 construida en {bold} usando la misma Digital Factory que ofrezco a mis clientes.",
    "missionP1Bold": "menos de un mes",
    "missionP2": "La misi\u00f3n es simple: {bold} \u2014 no servicios individuales, sino un sistema integrado potenciado por la inteligencia artificial a trav\u00e9s del M\u00e9todo Z\u00b7START.",
    "missionP2Bold": "ayudar a PYMEs y profesionales a construir su ecosistema digital completo",
    "valoriTitle": "Los Valores",
    "val1Title": "Resultados Ante Todo", "val1Desc": "No contamos horas trabajadas. Contamos resultados generados.",
    "val2Title": "Potenciados por IA", "val2Desc": "Integramos la inteligencia artificial como motor real \u2014 no como palabra de moda \u2014 para construir m\u00e1s r\u00e1pido y mejor.",
    "val3Title": "Ecosistema, No Servicios", "val3Desc": "No somos un proveedor. Somos un socio en tu camino de crecimiento.",
    "check1": "Traffic Master Certified \u00b7 Florida Global University 2025",
    "check2": "lurumi.it \u2014 Producto Digital en vivo en menos de 1 mes",
    "check3": "Inteligencia artificial aplicada a contenido, automatizaci\u00f3n y producto",
    "certLabel": "Traffic Master Certified",
    "certSub": "Florida Global University \u00b7 2025"
  },
  "casiStudio": {
    "title": "Casos de Estudio",
    "subtitle": "Resultados reales. Sistemas reales. Construidos con el M\u00e9todo Z\u00b7START.",
    "expandBtn": "Descubrir m\u00e1s", "collapseBtn": "Mostrar menos",
    "study1Tag": "Contenido Viral IA", "study1Title": "Chistes Malisimos",
    "study1Brief": "Canal creado de cero con contenido optimizado por IA: 140.000+ views en YouTube y 100.000+ en Facebook en menos de 30 d\u00edas. Sin anuncios.",
    "study1Headline": "140.000+ Views. Cero Clientes.",
    "study1Body1": "Cre\u00e9 un canal con contenido optimizado por IA. En menos de 30 d\u00edas: 140.000+ views en YouTube (32.000+ en un solo video) y 100.000+ en Facebook. Tr\u00e1fico org\u00e1nico puro, cero anuncios.",
    "study1Body2": "Resultado? Cero clientes. Porque sin un sistema que convierta el tr\u00e1fico, solo tienes n\u00fameros en una pantalla.",
    "study1Body3": "Esa lecci\u00f3n \u2014 aprendida en carne propia \u2014 es el motivo por el que existe el M\u00e9todo Z\u00b7START.",
    "study1GifCaption": "32.000+ views en un solo video \u00b7 Clic para ver",
    "study1Quote": "El contenido trae a las personas. El sistema las convierte. Yo construyo ambos.",
    "study2Tag": "Infraestructura Digital", "study2Title": "lurumi.it",
    "study2Brief": "Primera infraestructura digital completa lanzada por Marketizzati: PWA full-stack con IA, pagos Stripe y 200+ funcionalidades \u2014 en vivo en menos de 1 mes.",
    "study2Headline": "De cero a producci\u00f3n en menos de 1 mes.",
    "study2Body1": "lurumi.it es una PWA full-stack para el mundo del crochet: IA integrada para generar patrones e im\u00e1genes, pagos Stripe, m\u00e1s de 200 funcionalidades incluyendo contadores, proyectos, tutoriales y chat IA.",
    "study2Body2": "Construida \u00edntegramente con la Digital Factory Marketizzati \u2014 el mismo sistema que ofrezco a mis clientes. No una demo, un producto real con usuarios reales.",
    "study2Body3": "Es la prueba concreta de que el M\u00e9todo Z\u00b7START funciona: de la idea a la producci\u00f3n, sin meses de intentos.",
    "study2GifCaption": "lurumi.it \u2014 en vivo en producci\u00f3n",
    "study2Quote": "Construyo sistemas digitales antes de venderlos."
  },
  "ctaFinale": {
    "title1": "30 Minutos.",
    "title2": "Una Conversaci\u00f3n.",
    "title3": "Todo Cambia.",
    "subtitle": "Descubre exactamente qu\u00e9 bloquea tu crecimiento y los 3 pasos concretos a dar ahora mismo.",
    "cta": "Escr\u00edbeme por WhatsApp",
    "micro1": "Cero spam \u00b7 Cero compromiso \u00b7 Respondo en pocas horas",
    "micro2": "Todos los participantes reciben acceso gratuito a los recursos digitales de Marketizzati \u2014 independientemente del resultado.",
    "micro3": "Aceptamos un n\u00famero limitado de consultor\u00edas por semana para garantizar calidad"
  },
  "modal": {
    "badge": "M\u00e9todo Z\u00b7START", "title": "El Sistema Operativo del Negocio",
    "step1Title": "Punto Cero", "step1Desc": "An\u00e1lisis y diagn\u00f3stico completo: d\u00f3nde est\u00e1s ahora, a d\u00f3nde quieres llegar y qu\u00e9 te bloquea. Sin suposiciones \u2014 datos, n\u00fameros y verdad.", "step1Benefit": "Sabes exactamente d\u00f3nde est\u00e1s y qu\u00e9 hacer para crecer",
    "step2Title": "Estrategia", "step2Desc": "Transformamos los datos en un plan de acci\u00f3n claro. Definimos A QUI\u00c9N quieres llegar, QU\u00c9 te hace \u00fanico y C\u00d3MO te posicionas en el mercado.", "step2Benefit": "Un plan concreto, no hip\u00f3tesis ni opiniones",
    "step3Title": "Tecnolog\u00eda", "step3Desc": "La estrategia se convierte en infraestructura: sitio web, automatizaciones, CRM, funnels. Todo lo necesario para que tu negocio funcione como una m\u00e1quina.", "step3Benefit": "Tu negocio trabaja para ti, incluso cuando no est\u00e1s",
    "step4Title": "Activaci\u00f3n", "step4Desc": "Lanzamos todo al mercado con campa\u00f1as dirigidas, contenido estrat\u00e9gico y funnels optimizados. Monitoreamos el rendimiento desde el primer d\u00eda.", "step4Benefit": "Clientes reales, contactos reales \u2014 desde el primer d\u00eda",
    "step5Title": "Resultados", "step5Desc": "El negocio se vuelve cient\u00edfico. Analizamos datos, identificamos qu\u00e9 funciona y optimizamos cada elemento para maximizar el ROI.", "step5Benefit": "Cada euro invertido tiene un retorno medible",
    "step6Title": "Transformaci\u00f3n", "step6Desc": "La fase que distingue a los que sobreviven de los que prosperan. Planificamos la evoluci\u00f3n estrat\u00e9gica, nuevas oportunidades y la escalabilidad del sistema.", "step6Benefit": "Un sistema que escala contigo, no contra ti",
    "timelineTitle": "\u00bfCu\u00e1nto tiempo toma?",
    "timeline1Name": "Base de Lanzamiento", "timeline1Phases": "Z + S + T",
    "timeline2Name": "Escala", "timeline2Phases": "Z + S + T + A",
    "timeline3Name": "Domina", "timeline3Phases": "Las 6 fases",
    "timelineWeeks": "semanas",
    "timelineDisclaimer": "Los plazos se refieren a la construcci\u00f3n de tu ecosistema digital. Los resultados crecen progresivamente en los meses siguientes.",
    "modalCta": "Reservo Mi Consultor\u00eda Gratuita"
  }
}

for locale, landing in [('it', LANDING_IT), ('en', LANDING_EN), ('es', LANDING_ES)]:
    path = os.path.join(BASE, f'{locale}.json')
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    data['landing'] = landing
    if locale == 'it':
        data['seo']['home']['title'] = 'Marketizzati \u2014 Digital Factory per PMI | Metodo Z\u00b7START | Vigevano'
        data['seo']['home']['description'] = 'Trasforma la tua visione in un business digitale che genera clienti. Il Metodo Z\u00b7START in 6 fasi + AI = ecosistema digitale completo per PMI e professionisti. Consulenza gratuita 30 min.'
        data['seo']['services']['title'] = 'Servizi \u2014 Strategia, AI & Automazione, Web & Funnel | Marketizzati'
        data['seo']['services']['description'] = 'Strategia digitale, brand identity, AI e automazione, siti web ad alta conversione e funnel di vendita. Ogni servizio lavora in sinergia per portarti clienti.'
        data['seo']['method']['title'] = 'Metodo Z\u00b7START \u2014 Framework in 6 Fasi per il Business Digitale | Marketizzati'
        data['seo']['method']['description'] = 'Il framework proprietario in 6 fasi (Punto Zero, Strategia, Tecnologia, Attivazione, Risultati, Trasformazione) per costruire un ecosistema digitale completo con precisione industriale e AI.'
    elif locale == 'en':
        data['seo']['home']['title'] = 'Marketizzati \u2014 Digital Factory for SMBs | Z\u00b7START Method | Italy'
        data['seo']['home']['description'] = 'Transform your vision into a client-generating digital business. The Z\u00b7START Method in 6 phases + AI = complete digital ecosystem for SMBs and professionals. Free 30-min consultation.'
        data['seo']['services']['title'] = 'Services \u2014 Strategy, AI & Automation, Web & Funnel | Marketizzati'
        data['seo']['services']['description'] = 'Digital strategy, brand identity, AI automation, high-conversion websites and sales funnels. Every service in the Marketizzati Digital Factory works in synergy to bring you clients.'
        data['seo']['method']['title'] = 'Z\u00b7START Method \u2014 6-Phase Framework for Digital Business | Marketizzati'
        data['seo']['method']['description'] = 'The proprietary 6-phase framework (Zero Point, Strategy, Technology, Activation, Results, Transformation) to build a complete digital ecosystem with industrial precision and AI.'
    elif locale == 'es':
        data['seo']['home']['title'] = 'Marketizzati \u2014 Digital Factory para PYMEs | M\u00e9todo Z\u00b7START | Italia'
        data['seo']['home']['description'] = 'Transforma tu visi\u00f3n en un negocio digital que genera clientes. El M\u00e9todo Z\u00b7START en 6 fases + IA = ecosistema digital completo para PYMEs y profesionales. Consultor\u00eda gratuita 30 min.'
        data['seo']['services']['title'] = 'Servicios \u2014 Estrategia, IA & Automatizaci\u00f3n, Web & Funnel | Marketizzati'
        data['seo']['services']['description'] = 'Estrategia digital, identidad de marca, automatizaci\u00f3n con IA, sitios web de alta conversi\u00f3n y funnels de ventas. Cada servicio de la Digital Factory Marketizzati trabaja en sinergia.'
        data['seo']['method']['title'] = 'M\u00e9todo Z\u00b7START \u2014 Framework de 6 Fases para el Negocio Digital | Marketizzati'
        data['seo']['method']['description'] = 'El framework propietario de 6 fases (Punto Cero, Estrategia, Tecnolog\u00eda, Activaci\u00f3n, Resultados, Transformaci\u00f3n) para construir un ecosistema digital completo con precisi\u00f3n industrial e IA.'
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'{locale}.json updated')
