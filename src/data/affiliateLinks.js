// Affiliate links for reisekit24.
// Replace only the `url` value when a real partner link is ready.
// Keep the keys unchanged because pages and widgets read these names.

import { airaloLinks } from './airaloLinks.ts';

const getYourGuideMainUrl = 'https://www.getyourguide.com/pl-pl/?partner_id=A65YU5Z&cmp=CL&visitor-id=S3YV8F2KJ34TP7ISL8LFOSR1MUGSEF64';

export const affiliateLinks = {
  getyourguide: {
    label: 'GetYourGuide',
    // Main GetYourGuide affiliate URL. Destination-specific links can be added later.
    url: getYourGuideMainUrl
  },
  booking: {
    label: 'Booking.com',
    // TODO: Replace with the real Booking.com affiliate URL when available.
    url: '#replace-booking-affiliate-url'
  },
  airalo: {
    label: 'Airalo',
    url: airaloLinks.main
  },
  holidaycheck: {
    label: 'HolidayCheck',
    // TODO: Replace with the real HolidayCheck affiliate URL when available.
    url: '#replace-holidaycheck-affiliate-url'
  }
};

// GetYourGuide destination affiliate links.
// Each destination can use its own GetYourGuide affiliate URL.
// Required link attributes in templates: target="_blank" and rel="sponsored noopener noreferrer".
export const getYourGuideDestinations = [
  {
    destinationName: 'Barcelona',
    destinationSlug: 'barcelona',
    type: 'city',
    country: 'Spanien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/I89a6EDw',
    ctaLabel: 'Ausflüge in Barcelona ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Mallorca',
    destinationSlug: 'mallorca',
    type: 'island',
    country: 'Spanien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/W8SDvdZk',
    ctaLabel: 'Ausflüge auf Mallorca ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Teneriffa',
    destinationSlug: 'teneriffa',
    type: 'island',
    country: 'Spanien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/EevDGgB3',
    ctaLabel: 'Ausflüge auf Teneriffa ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Rom',
    destinationSlug: 'rom',
    type: 'city',
    country: 'Italien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/5yqm1V8E',
    ctaLabel: 'Ausflüge in Rom ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Paris',
    destinationSlug: 'paris',
    type: 'city',
    country: 'Frankreich',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/r7KRqrwF',
    ctaLabel: 'Ausflüge in Paris ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'London',
    destinationSlug: 'london',
    type: 'city',
    country: 'Großbritannien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/eZD72nyC',
    ctaLabel: 'Ausflüge in London ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Istanbul',
    destinationSlug: 'istanbul',
    type: 'city',
    country: 'Türkei',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/9EED0r3F',
    ctaLabel: 'Ausflüge in Istanbul ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Dubai',
    destinationSlug: 'dubai',
    type: 'city',
    country: 'Vereinigte Arabische Emirate',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/J92rBkPu',
    ctaLabel: 'Ausflüge in Dubai ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Gran Canaria',
    destinationSlug: 'gran-canaria',
    type: 'island',
    country: 'Spanien',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/SgtLAZ1X',
    ctaLabel: 'Ausflüge auf Gran Canaria ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Kreta',
    destinationSlug: 'kreta',
    type: 'island',
    country: 'Griechenland',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/hK8LAeNa',
    ctaLabel: 'Ausflüge auf Kreta ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Santorini',
    destinationSlug: 'santorini',
    type: 'island',
    country: 'Griechenland',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/WSMEyxCS',
    ctaLabel: 'Ausflüge auf Santorini ansehen',
    linkType: 'destination'
  },
  {
    destinationName: 'Lissabon',
    destinationSlug: 'lissabon',
    type: 'city',
    country: 'Portugal',
    provider: 'GetYourGuide',
    getYourGuideUrl: 'https://gyg.me/HiJtC8KD',
    ctaLabel: 'Ausflüge in Lissabon ansehen',
    linkType: 'destination'
  }
];
