import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

const courseContent: Record<number, { title: string; content: string[] }> = {
  1: {
    title: 'Dove Sei Oggi?',
    content: [
      'In questa prima lezione, faremo un check-up completo della tua situazione attuale. Non serve essere esperti — serve essere onesti.',
      'Rispondi alle domande guida per identificare dove ti trovi nel percorso del tuo business digitale.',
      '1. Hai un sito web? Se sì, genera contatti o vendite?',
      '2. Hai una strategia di marketing attiva? Quali canali usi?',
      '3. Qual è il tuo obiettivo principale nei prossimi 90 giorni?',
      '4. Qual è il blocco più grande che senti in questo momento?',
      'Scrivi le tue risposte — ti serviranno come base per i giorni successivi.',
    ],
  },
  2: {
    title: 'Il Tuo Cliente Ideale',
    content: [
      'Oggi definirai chi è davvero il tuo cliente ideale. Non "tutti" — ma la persona specifica che ha bisogno di te.',
      'Il tuo cliente ideale è quella persona per cui il tuo prodotto o servizio è la soluzione perfetta.',
      '1. Che problema risolvi? Sii specifico.',
      '2. Chi ha questo problema e lo sente come urgente?',
      '3. Dove si trova questa persona online?',
      '4. Che linguaggio usa per descrivere il suo problema?',
      'Più sei preciso, più sarà facile raggiungerlo con il messaggio giusto.',
    ],
  },
  3: {
    title: 'La Tua Proposta Unica',
    content: [
      'Oggi costruirai la tua USP (Unique Selling Proposition) — ciò che ti rende diverso da tutti gli altri.',
      'La tua USP risponde a una domanda semplice: "Perché dovrei scegliere te?"',
      '1. Cosa fai meglio dei tuoi concorrenti?',
      '2. Quale risultato garantisci (o quasi)?',
      '3. Qual è il tuo "superpotere" — la cosa che fai in modo naturale?',
      'Scrivi la tua USP in una frase: "Aiuto [chi] a [risultato] attraverso [come], senza [obiezione]."',
    ],
  },
  4: {
    title: 'Il Tuo Piano d\'Azione',
    content: [
      'Oggi passiamo dalla teoria alla pratica. Costruiremo il tuo piano d\'azione per i prossimi 30 giorni.',
      'Un piano efficace ha 3 caratteristiche: è specifico, è misurabile, è realistico.',
      '1. Scegli UN obiettivo principale per i prossimi 30 giorni.',
      '2. Identifica le 3 azioni più importanti per raggiungerlo.',
      '3. Per ogni azione, definisci: cosa, quando, come.',
      '4. Identifica i possibili ostacoli e come li supererai.',
      'Ricorda: meglio fare 3 cose bene che 10 cose male.',
    ],
  },
  5: {
    title: 'I Prossimi Passi',
    content: [
      'Congratulazioni! Hai completato il Mini-Corso. Ora hai chiarezza su dove sei, chi servi, cosa ti rende unico e cosa fare.',
      'Ma questo è solo l\'inizio. I prossimi passi dipendono da dove vuoi arrivare.',
      'Opzione 1: Metti in pratica il tuo piano d\'azione da solo. Hai tutti gli strumenti.',
      'Opzione 2: Prenota una consulenza strategica gratuita con noi. In 30 minuti, analizzeremo insieme il tuo piano e ti diremo esattamente come accelerare.',
      'Opzione 3: Scopri l\'ecosistema Marketizzati — i servizi e gli strumenti che possono portare il tuo business al livello successivo.',
      'Qualunque strada scegli, ricorda: l\'azione batte la perfezione. Sempre.',
    ],
  },
}

export default async function CourseDayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day: dayStr } = await params
  const day = parseInt(dayStr)
  const content = courseContent[day]

  if (!content) {
    return (
      <div className="text-center py-20">
        <p className="text-foreground-secondary">Giorno non trovato.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link
          href="/corso"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-foreground transition-colors mb-4"
        >
          <ArrowLeft size={16} />
          Torna al corso
        </Link>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-sm font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
            Giorno {day}/5
          </span>
        </div>
        <h1 className="font-heading text-display-sm">{content.title}</h1>
      </div>

      {/* Content */}
      <div className="space-y-4 text-body-md text-foreground-secondary leading-relaxed">
        {content.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-6 border-t border-surface-border">
        {day > 1 ? (
          <Link
            href={`/corso/${day - 1}`}
            className="inline-flex items-center gap-2 text-sm text-foreground-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft size={16} />
            Giorno {day - 1}
          </Link>
        ) : (
          <div />
        )}

        <div className="flex items-center gap-3">
          <Button variant="secondary" leftIcon={<CheckCircle size={18} />}>
            Segna come completato
          </Button>
          {day < 5 && (
            <Link href={`/corso/${day + 1}`}>
              <Button rightIcon={<ArrowRight size={18} />}>
                Giorno {day + 1}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
