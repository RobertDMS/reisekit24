import { images } from './images.js';

export const posts = [
  {
    slug: 'beste-ausfluege-mallorca',
    title: 'Die besten Ausflüge auf Mallorca',
    description: 'Kurzer Überblick über beliebte Ausflüge auf Mallorca: Bootstouren, Altstadt, Berge und Familienaktivitäten.',
    date: '2026-05-01',
    category: 'Ausflüge',
    // Thumbnail path is managed in src/data/images.js.
    image: images.blog.mallorca,
    alt: 'Küste und klares Wasser auf Mallorca',
    intro: 'Auf Mallorca lohnen sich vor allem Bootstouren, Ausflüge ins Tramuntana-Gebirge und entspannte Touren durch Palma.',
    sections: [
      {
        heading: 'Was lohnt sich besonders?',
        text: 'Für den ersten Urlaub sind eine Bootstour, ein Besuch in Palma und ein Tagesausflug nach Sóller eine gute Mischung aus Meer, Kultur und Landschaft.'
      },
      {
        heading: 'Für wen passt es?',
        text: 'Bootstouren passen gut für Paare und Familien. Aktivere Reisende sollten eine Tour in die Berge oder eine geführte Radtour prüfen.'
      },
      {
        heading: 'Unser Tipp',
        text: 'Buche beliebte Ausflüge frühzeitig, besonders in den Sommermonaten. So bekommst du bessere Zeiten und mehr Auswahl.'
      }
    ],
    faq: [
      { question: 'Wann sollte man Ausflüge auf Mallorca buchen?', answer: 'In der Hauptsaison am besten einige Tage im Voraus, bei beliebten Touren auch früher.' },
      { question: 'Sind Bootstouren familienfreundlich?', answer: 'Viele Bootstouren sind familienfreundlich. Prüfe vor der Buchung Dauer, Treffpunkt und Hinweise des Anbieters.' }
    ]
  },
  {
    slug: 'esim-deutschland-lohnt-sich',
    title: 'eSIM für Deutschland: Lohnt sich das?',
    description: 'Eine eSIM für Deutschland kann praktisch sein, wenn du mobile Daten schnell und ohne SIM-Karte nutzen möchtest.',
    date: '2026-05-03',
    category: 'eSIM',
    // Thumbnail path is managed in src/data/images.js.
    image: images.blog.esim,
    alt: 'Smartphone in der Hand mit Stadt im Hintergrund',
    intro: 'Eine eSIM für Deutschland lohnt sich vor allem für Reisende, die sofort mobile Daten brauchen und keine lokale SIM-Karte kaufen möchten.',
    sections: [
      {
        heading: 'Wann ist eine eSIM sinnvoll?',
        text: 'Eine eSIM ist praktisch für Navigation, Messenger, Bahn-Apps und Online-Tickets. Du kannst sie meist schon vor der Anreise vorbereiten.'
      },
      {
        heading: 'Worauf achten?',
        text: 'Wichtig sind Datenvolumen, Laufzeit, Netzabdeckung und ob dein Smartphone eSIM unterstützt.'
      },
      {
        heading: 'Kurzfazit',
        text: 'Für kurze Reisen ist eine eSIM oft die einfachste Lösung. Für längere Aufenthalte kann ein lokaler Tarif günstiger sein.'
      }
    ],
    faq: [
      { question: 'Brauche ich WLAN zur Aktivierung?', answer: 'Ja, meistens brauchst du für die Aktivierung kurz WLAN oder eine bestehende Internetverbindung.' },
      { question: 'Funktioniert eSIM auf jedem Smartphone?', answer: 'Nein. Prüfe vor dem Kauf, ob dein Gerät eSIM unterstützt.' }
    ]
  },
  {
    slug: 'pauschalreise-oder-hotel-separat',
    title: 'Pauschalreise oder Hotel separat buchen?',
    description: 'Pauschalreise oder einzelne Buchung? Der kurze Vergleich für normale Urlaubsreisen.',
    date: '2026-05-05',
    category: 'Pauschalreisen',
    // Thumbnail path is managed in src/data/images.js.
    image: images.blog.pauschalreise,
    alt: 'Reisepass, Sonnenbrille und Urlaubsplanung auf einem Tisch',
    intro: 'Eine Pauschalreise ist oft bequemer, eine separate Buchung kann flexibler sein. Die bessere Wahl hängt von Reiseziel, Budget und Komfortwunsch ab.',
    sections: [
      {
        heading: 'Wann passt eine Pauschalreise?',
        text: 'Sie passt gut, wenn du Flug, Hotel und Transfer möglichst einfach zusammen buchen möchtest.'
      },
      {
        heading: 'Wann separat buchen?',
        text: 'Separat buchen lohnt sich, wenn du mehrere Orte kombinieren, besondere Hotels wählen oder sehr flexibel reisen willst.'
      },
      {
        heading: 'Kurzvergleich',
        text: 'Pauschalreisen sind bequem und übersichtlich. Einzelbuchungen geben mehr Freiheit, brauchen aber mehr Planung.'
      }
    ],
    faq: [
      { question: 'Ist eine Pauschalreise immer günstiger?', answer: 'Nein. Sie kann günstiger sein, muss es aber nicht. Vergleiche immer Gesamtpreis und Leistungen.' },
      { question: 'Für Familien sinnvoll?', answer: 'Oft ja, weil Flug, Hotel und Transfer klar gebündelt sind.' }
    ]
  }
];
