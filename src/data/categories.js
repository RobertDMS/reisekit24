import { affiliateLinks } from './affiliateLinks.js';
import { images } from './images.js';

export const categories = [
  {
    id: 'ausfluege',
    title: 'Ausflüge & Aktivitäten',
    shortTitle: 'Ausflüge',
    href: '/ausfluege/',
    partner: 'GetYourGuide',
    affiliateUrl: affiliateLinks.getyourguide.url,
    description: 'Geführte Touren, Tickets und Erlebnisse für deine nächste Reise.',
    lead: 'Finde beliebte Ausflüge, Tickets und Aktivitäten für deinen Urlaub. Die Buchung erfolgt direkt beim Partner GetYourGuide.',
    // Image path is managed in src/data/images.js.
    image: images.categories.ausfluege,
    alt: 'Reisende auf einer Aussichtsterrasse am Meer',
    bullets: ['Stadttouren und Tagesausflüge', 'Tickets für Sehenswürdigkeiten', 'Aktivitäten für Familien und Paare'],
    offers: ['Mallorca Bootstouren', 'Athen Akropolis Tickets', 'Istanbul Stadtführungen']
  },
  {
    id: 'hotels',
    title: 'Hotels',
    shortTitle: 'Hotels',
    href: '/hotels/',
    partner: 'Hotel-Guide',
    affiliateUrl: affiliateLinks.booking.url,
    description: 'Tipps zur Auswahl von Lage, Bewertungen, Stornierung und Transfer.',
    lead: 'Hotels sind ein wichtiger Reisebaustein. Ein aktiver Hotel-Partner ist noch nicht eingebunden; Empfehlungen werden vorbereitet.',
    // Image path is managed in src/data/images.js.
    image: images.categories.hotels,
    alt: 'Modernes Hotelzimmer mit hellem Bett',
    bullets: ['Lage und Umgebung prüfen', 'Aktuelle Bewertungen lesen', 'Stornierung und Transfer beachten'],
    offers: ['Hotel-Empfehlungen folgen', 'Vergleich wird vorbereitet', 'Anbieterübersicht folgt bald']
  },
  {
    id: 'esim',
    title: 'eSIM',
    shortTitle: 'eSIM',
    href: '/esim/',
    partner: 'eSIM-Guide',
    affiliateUrl: affiliateLinks.airalo.url,
    description: 'Mobile Daten im Ausland verstehen und besser planen.',
    lead: 'Mit einer eSIM kannst du mobile Daten für viele Länder schon vor der Reise vorbereiten. Airalo bietet dafür digitale Datenpakete für beliebte Reiseziele.',
    // Image path is managed in src/data/images.js.
    image: images.categories.esim,
    alt: 'Smartphone mit Reiseplanung auf einem Tisch',
    bullets: ['Digitale SIM-Karte verstehen', 'Roaming und eSIM vergleichen', 'Datenbedarf vor der Reise planen'],
    offers: ['Airalo eSIM-Angebote', 'Beliebte Reiseziele', 'Datenpakete für den Urlaub']
  },
  {
    id: 'pauschalreisen',
    title: 'Pauschalreisen',
    shortTitle: 'Pauschalreisen',
    href: '/pauschalreisen/',
    partner: 'Pauschalreise-Guide',
    affiliateUrl: affiliateLinks.holidaycheck.url,
    description: 'Flug und Hotel als Paket verstehen und besser einordnen.',
    lead: 'Pauschalreisen sind praktisch, wenn Flug und Hotel zusammen geplant werden sollen. Angebote werden später ergänzt.',
    // Image path is managed in src/data/images.js.
    image: images.categories.pauschalreisen,
    alt: 'Heller Sandstrand mit türkisblauem Meer',
    bullets: ['Für Familien und Paare einordnen', 'Leistungen im Paket prüfen', 'Mit Einzelbuchungen vergleichen'],
    offers: ['Pauschalreise-Angebote folgen', 'Vergleich wird vorbereitet', 'Anbieterübersicht folgt bald']
  }
];

// Destination image paths are managed in src/data/images.js.
export const destinations = [
  { name: 'Mallorca', href: '/ausfluege/', image: images.destinations.mallorca, alt: 'Bucht auf Mallorca' },
  { name: 'Griechenland', href: '/hotels/', image: images.destinations.griechenland, alt: 'Weiße Häuser in Griechenland' },
  { name: 'Türkei', href: '/pauschalreisen/', image: images.destinations.tuerkei, alt: 'Historische Moschee in Istanbul' },
  { name: 'Spanien', href: '/ausfluege/', image: images.destinations.spanien, alt: 'Straße in einer spanischen Stadt' }
];
