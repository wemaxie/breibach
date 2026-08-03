// German (default locale). EN/FR mirror this shape. Proper nouns, addresses,
// DIN codes and grading figures stay identical across locales.
// Placeholder page copy: the first sentence ("Platzhalter · …") is a brief that
// says what real text belongs there; the Latin lorem after it just fills the layout.

export const lang = 'de';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

export const meta = {
  title: 'Baustoff-Großhandel Breitbach e.K. · Rohstoffe für die Beton- und Zementindustrie',
  description:
    'Baustoff-Großhandel Breitbach e.K., Kruft. Rohstoffe für die Beton- und Zementindustrie, technische Anwendungen für die Betonfertigteilindustrie und internationales Rohstoff Sourcing. Lieferung in Deutschland, Benelux und Frankreich.',
};

export const content = {
  nav: [
    { slug: 'unternehmen', label: 'Unternehmen' },
    { slug: 'produkte', label: 'Produkte' },
    { slug: 'leistungen', label: 'Leistungen' },
    { slug: 'kontakt', label: 'Kontakt' },
  ],
  heroMeta: ['Kruft, Rheinland-Pfalz', 'DE · Benelux · FR'],
  hero: {
    // Wording set by the client on 2026-07-23. Both lines sit in the headline size.
    lines: [
      'Seit mehr als 40 Jahren',
      'Innovative Rohstofflösungen und technische Anwendungen für die Beton- und Zementindustrie',
    ],
    slideLabel: 'Foto',
    // One entry per hero slide, matched BY INDEX against heroSlides in Home.astro.
    alts: [
      'Zementverladung im Hafen: Frachtschiff unter Ladung, Big Bags auf Tiefladern',
      'Betonrohre im Werkslager, nach Durchmesser gestapelt',
    ],
    imageLabel: ['Bildfläche · Foto folgt', 'Zementverladung, Rohstofflieferung, Betrieb'],
  },
  slogan: {
    pre: 'Bauen im Einklang mit der ',
    green: 'Natur',
    post: '.',
    body: 'Rohstoffe aus der Region, kurze Transportwege und die Wiederaufbereitung mineralischer Baustoffe. Der Rohstoff bleibt Naturstein, von der Abbaustätte bis zur Baustelle.',
  },
  products: {
    heading: 'Rohstoffe, technische Anwendungen und internationales Sourcing.',
    aside: 'Drei Bereiche, ein Ansprechpartner. Lieferung lose im Silozug, in Big Bags oder als Sackware, im Inland wie im Export.',
    more: 'Alle Produkte',
    groups: [
      {
        name: 'Rohstoffe für die Beton- und Zementindustrie',
        body: 'Mineralische Ausgangs- und Zusatzstoffe für Zementwerke, Transportbeton- und Betonfertigteilwerke. Steinmehle wirken als Füller, Zement und Klinker als Bindemittel, Bims und Lava als Leichtzuschlag.',
        items: ['Steinmehle', 'Weißzement', 'Grauzement', 'Klinker', 'Flugasche', 'Bims', 'Lava', 'Gips'],
      },
      {
        name: 'Technische Anwendungen für die Betonfertigteilindustrie',
        body: 'Schalungs- und Formentechnik für die Fertigteil- und Betonsteinproduktion. Magnetsysteme, Abschalungen und Formen für den Stahltisch und die Umlaufanlage.',
        items: ['Magnetboxen', 'Abschaler', 'Magnetleisten', 'Betonabstandhalter / Spacer', 'Kipptische', 'Kunststoffbretter für die Betonstein-Herstellung', 'Formen zur Steinfertigung'],
      },
      {
        name: 'Internationales Rohstoff Sourcing',
        body: 'Beschaffung und Handel von Metallen und Erzen über internationale Lieferanten und Handelspartner. Spezifikation, Menge und Lieferweg je Anfrage.',
        items: ['Eisen und Eisenerz', 'Nickel', 'Aluminium', 'Kupfer', 'Altmetalle'],
      },
    ],
  },
  band: { label: ['Bildfläche · Foto folgt', 'Basaltsplitt 8/11 an der Halde'], caption: 'Basaltsplitt 8/11, Osteifel' },
  applications: {
    heading: 'Ein Rohstoff, sechs Gewerke.',
    aside: 'Vom Transportbeton bis zur Bodendüngung: dieselben Gesteinskörnungen, jeweils in der passenden Körnung und Güte.',
    items: [
      { title: 'Beton', body: 'Zuschlag nach DIN EN 12620 für Transport-, Ort- und Fertigteilbeton. Rundkorn und gebrochene Körnung.', rocks: 'Kies, Sand, Splitt, Füller' },
      { title: 'Asphalt', body: 'Edelsplitt und Brechsand nach DIN EN 13043 für Deck-, Binder- und Tragschichten.', rocks: 'Basalt, Diabas, Grauwacke' },
      { title: 'Straßen- und Wegebau', body: 'Schotter, Frostschutz und Recycling-Baustoffe nach DIN EN 13242 für den Unterbau.', rocks: 'Schotter, Frostschutz, RC' },
      { title: 'Garten- und Landschaftsbau', body: 'Dekorkies, Ziersplitt, Pflasterbettung und Verfüllsande für den Außenbereich.', rocks: 'Dekorkies, Splitt, Sand' },
      { title: 'Landwirtschaft', body: 'Gesteinsmehl aus Basalt und Diabas zur Bodenverbesserung und als Mineraldünger.', rocks: 'Steinmehl, Kalk' },
      { title: 'Industrie', body: 'Trass, Weißzement, Branntkalk und Spezialkörnungen für Baustoffwerke und Verarbeiter.', rocks: 'Trass, Weißzement, Kalk' },
    ],
  },
  technik: {
    heading: 'Güteüberwacht, geprüft, dokumentiert.',
    aside: 'Jede Lieferung mit Lieferschein und Konformitätsnachweis. Werkseigene Produktionskontrolle nach europäischer Norm.',
    columns: [
      { head: 'Normen', rows: [
        { k: 'Beton', v: 'DIN EN 12620' }, { k: 'Asphalt', v: 'DIN EN 13043' }, { k: 'Mörtel', v: 'DIN EN 13139' },
        { k: 'Ungebunden', v: 'DIN EN 13242' }, { k: 'Trass', v: 'DIN 51043' }, { k: 'Zement', v: 'DIN EN 197-1' },
      ] },
      { head: 'Gesteinsarten', rows: [
        { k: 'Basalt', v: '' }, { k: 'Diabas', v: '' }, { k: 'Grauwacke', v: '' },
        { k: 'Mikrodiorit', v: '' }, { k: 'Kalkstein', v: '' }, { k: 'Trass / Tuff', v: '' },
      ] },
      { head: 'Körnungen', rows: [
        { k: 'Mehl', v: '0/0,09' }, { k: 'Sand', v: '0/2' }, { k: 'Splitt', v: '2/16' },
        { k: 'Kies', v: '8/32' }, { k: 'Schotter', v: '32/45' }, { k: 'Sonder', v: 'n. Absprache' },
      ] },
      { head: 'Lieferung', rows: [
        { k: 'Kipper', v: '' }, { k: 'Silozug', v: '' }, { k: 'Big Bag', v: '' },
        { k: 'Sackware', v: '' }, { k: 'Selbstabholung', v: '' }, { k: 'DE · Benelux · FR', v: '' },
      ] },
    ],
  },
  company: {
    heading: 'Baustoffe Breitbach, Familienbetrieb seit über 40 Jahren.',
    aside: 'Geführt von Daniel Breitbach. Sitz in Kruft, am Rand der Osteifel zwischen Laacher See und Rhein.',
    more: 'Mehr über uns',
    paras: [
      'Aus einem regionalen Handel für Sand und Kies ist ein Großhandel für mineralische Rohstoffe geworden. Der Schwerpunkt liegt heute auf Ausgangs- und Zusatzstoffen für die Beton- und Zementindustrie sowie auf technischen Anwendungen für die Betonfertigteilindustrie.',
      'Wir beraten zur Rezeptur und zum Einsatz, disponieren die Anlieferung und liefern termingerecht an Zementwerke, Betonwerke und Verarbeiter in Deutschland, den Benelux-Ländern und Frankreich. Hinzu kommt die internationale Beschaffung von Metallen und Erzen.',
      'Kurze Wege, feste Ansprechpartner und eine gleichbleibende Qualität. Das ist die Grundlage, auf der Kunden seit Jahrzehnten planen.',
    ],
    facts: [
      { v: '40+', l: 'Jahre im Rohstoffhandel' },
      { v: '3', l: 'Produktbereiche' },
      { v: '3', l: 'Länder im Liefergebiet' },
      { v: 'Export', l: 'Internationale Beschaffung' },
    ],
  },
  partners: {
    heading: 'Partner und Lieferanten.',
    aside: 'Platzhalter · Logos der Partnerunternehmen einsetzen (Zementwerk, Spezialsande, internationale Lieferanten).',
    slots: ['Partnerlogo', 'Partnerlogo', 'Partnerlogo', 'Partnerlogo', 'Partnerlogo', 'Partnerlogo'],
  },
  map: {
    heading: 'Standort Kruft, Rheinland-Pfalz.',
    aside: 'Reuschenlay 32, 56642 Kruft. Anlieferung und Selbstabholung nach Absprache.',
  },
  contact: {
    heading: 'Körnung anfragen, Preis erhalten.',
    lead: 'Nennen Sie uns Gesteinsart, Körnung, Menge und Lieferort. Sie erhalten ein Angebot mit Preis und Liefertermin.',
    cta: 'Zum Kontakt',
    email: 'info@baustoffe-breitbach.com',
    rows: [
      { k: 'Telefon', v: '02652 6326' },
      { k: 'E-Mail', v: 'info@baustoffe-breitbach.com' },
      { k: 'Zeiten', v: 'Mo bis Fr, 7:00 bis 17:00 Uhr' },
    ],
    standortLabel: 'Standort',
    address: ['Baustoffe Breitbach e.K.', 'Reuschenlay 32', '56642 Kruft', 'Deutschland'],
  },
  footer: {
    blurb: 'Rohstoffe für die Beton- und Zementindustrie, technische Anwendungen für die Betonfertigteilindustrie und internationales Rohstoff Sourcing.',
    cols: [
      { head: 'Anschrift', wide: true, items: [
        { label: 'Baustoffe Breitbach e.K.' }, { label: 'Reuschenlay 32' }, { label: '56642 Kruft' }, { label: 'Deutschland' },
      ] },
      { head: 'Kontakt', wide: false, items: [
        { label: '02652 6326', href: 'tel:+4926526326' },
        { label: 'info@baustoffe-breitbach.com', href: 'mailto:info@baustoffe-breitbach.com' },
        { label: 'baustoffe-breitbach.de' },
      ] },
      { head: 'Programm', wide: false, items: [
        { label: 'Unternehmen', slug: 'unternehmen' }, { label: 'Produkte', slug: 'produkte' },
        { label: 'Leistungen', slug: 'leistungen' }, { label: 'Kontakt', slug: 'kontakt' },
      ] },
    ],
    legal: [
      { label: 'Impressum', slug: 'impressum' }, { label: 'Datenschutz', slug: 'datenschutz' }, { label: 'Cookie-Richtlinie', slug: 'cookies' },
    ],
    copyright: '© 2026 Baustoffe Breitbach e.K.',
  },

  // ---------- Sub-pages ----------
  pages: {
    unternehmen: {
      slug: 'unternehmen',
      title: 'Unternehmen',
      lead: 'Platzhalter · Kurzer Einleitungssatz zum Unternehmen (wer wir sind, seit wann, Region). ' + LOREM,
      blocks: [
        { heading: 'Über die Firma', body: 'Platzhalter · Firmengeschichte und Selbstverständnis: Familienbetrieb mit über 40 Jahren Erfahrung im Beton und in der Anwendung von Steinmehl. ' + LOREM },
        { heading: 'Kundschaft und Liefergebiet', body: 'Platzhalter · Kundenstruktur (Mittelstand und Großunternehmen in Betonherstellung, Mörtelherstellung, Landwirtschaft) und Liefergebiet Deutschland, Benelux, Frankreich. ' + LOREM },
        { heading: 'Unser Anspruch', body: 'Platzhalter · Werte und Arbeitsweise: flexibles, beratungsorientiertes Familienunternehmen, verlässliche Lieferkonzepte für Naturprodukte. ' + LOREM },
      ],
      inhaber: {
        heading: 'Der Inhaber',
        name: 'Daniel Breitbach',
        role: 'Inhaber',
        imageLabel: ['Bildfläche · Foto folgt', 'Porträt Daniel Breitbach'],
        body: 'Platzhalter · Kurzvorstellung des Inhabers Daniel Breitbach (Werdegang, Rolle, ggf. weitere Geschäftsleitung). ' + LOREM,
      },
    },
    // Restructured 2026-07-28 to the three groups the client specified on 2026-07-23.
    // The previous eight stone-centric categories are in git history if they are needed back.
    // catImages in components/pages/Produkte.astro is matched to this list BY INDEX.
    produkte: {
      slug: 'produkte',
      title: 'Produkte',
      lead: 'Das Lieferprogramm gliedert sich in drei Bereiche: mineralische Rohstoffe für die Beton- und Zementindustrie, technische Anwendungen für die Betonfertigteilindustrie und internationales Rohstoff Sourcing.',
      categories: [
        {
          name: 'Rohstoffe für die Beton- und Zementindustrie',
          imageLabel: ['Bildfläche · Foto folgt', 'Steinmehl, Zement, Rohstoffe'],
          body: 'Ausgangs- und Zusatzstoffe für Zementwerke, Transportbeton- und Betonfertigteilwerke. Steinmehle werden als Füller eingesetzt und wirken auf Kornaufbau, Verarbeitbarkeit und Farbe des Betons. Weiß- und Grauzement sowie Klinker gehen als Bindemittel in die Rezeptur ein, Flugasche als puzzolanischer Zusatzstoff. Bims und Lava dienen als Leichtzuschlag, Gips als Erstarrungsregler im Zement. Lieferung lose im Silozug, in Big Bags oder als Sackware.',
          items: ['Steinmehle', 'Weißzement', 'Grauzement', 'Klinker', 'Flugasche', 'Bims', 'Lava', 'Gips'],
        },
        {
          name: 'Technische Anwendungen für die Betonfertigteilindustrie',
          imageLabel: ['Bildfläche · Foto folgt', 'Magnetsysteme und Schalung auf dem Stahltisch'],
          body: 'Ausrüstung und Verbrauchsmaterial für die Produktion von Betonfertigteilen und Betonwaren. Magnetboxen, Magnetleisten und Abschaler fixieren und begrenzen die Schalung auf dem Stahltisch und lassen sich ohne Bohren umsetzen. Kipptische dienen dem Aufrichten fertiger Elemente, Betonabstandhalter sichern die Betondeckung der Bewehrung. Für die Betonstein-Herstellung kommen Kunststoffbretter als Unterlage sowie Formen zur Steinfertigung hinzu.',
          items: ['Magnetboxen', 'Abschaler', 'Magnetleisten', 'Betonabstandhalter / Spacer', 'Kipptische', 'Kunststoffbretter für die Betonstein-Herstellung', 'Formen zur Steinfertigung'],
        },
        {
          name: 'Internationales Rohstoff Sourcing',
          imageLabel: ['Bildfläche · Foto folgt', 'Verladung im Hafen'],
          body: 'Beschaffung von Metallen und Erzen über internationale Lieferanten und Handelspartner. Angefragt und geliefert werden Eisen und Eisenerz, Nickel, Aluminium und Kupfer sowie Altmetalle zur Wiederverwertung. Spezifikation, Menge und Lieferweg werden je Anfrage abgestimmt.',
          items: ['Eisen und Eisenerz', 'Nickel', 'Aluminium', 'Kupfer', 'Altmetalle'],
        },
      ],
    },
    leistungen: {
      slug: 'leistungen',
      title: 'Leistungen und Beratung',
      lead: 'Platzhalter · Einleitung zur Beratung rund um die Anwendung von Steinmehl in der Betonherstellung. ' + LOREM,
      blocks: [
        { heading: 'Steinmehl als Alternative zu Füllern', body: 'Platzhalter · Anwendung von Steinmehl als strategische Alternative zu herkömmlichen Füllern. ' + LOREM },
        { heading: 'Kostenoptimierung', body: 'Platzhalter · Einsatz von Steinmehl als Füller zur Optimierung der Kosten. ' + LOREM },
        { heading: 'Qualitätsoptimierung', body: 'Platzhalter · Einsatz von Steinmehl als Füller zur Steigerung der Qualität. ' + LOREM },
        { heading: 'Ökologisches Naturprodukt', body: 'Platzhalter · Steinmehl als ökologisches Naturprodukt. ' + LOREM },
        { heading: 'Optimierungsprojekte', body: 'Platzhalter · Gemeinsame, komplexe Projekte zur Optimierung von Produktion und Betrieb beim Einsatz von Steinmehl. ' + LOREM },
      ],
    },
    kontakt: {
      slug: 'kontakt',
      title: 'Kontakt',
      lead: 'Platzhalter · Kurzer Satz zur Kontaktaufnahme und Angebotsanfrage. ' + LOREM,
      form: {
        intro: 'Anfrage mit Material, Körnung, Menge und Lieferort.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'firma', label: 'Firma', type: 'text', required: false },
          { name: 'email', label: 'E-Mail', type: 'email', required: true },
          { name: 'telefon', label: 'Telefon', type: 'tel', required: false },
          { name: 'material', label: 'Material und Körnung', type: 'text', required: false },
          { name: 'menge', label: 'Menge', type: 'text', required: false },
          { name: 'lieferort', label: 'Lieferort', type: 'text', required: false },
          { name: 'nachricht', label: 'Nachricht', type: 'textarea', required: false },
        ],
        submit: 'Anfrage senden',
        note: 'Platzhalter · Formularversand noch anzubinden (Formspree, Netlify Forms oder serverseitig). Bis dahin per E-Mail.',
      },
      mapHeading: 'Anfahrt',
    },
    legal: {
      impressum: {
        slug: 'impressum',
        title: 'Impressum',
        blocks: [
          { heading: 'Angaben gemäß § 5 TMG', body: 'Baustoffe Breitbach e.K.\nReuschenlay 32\n56642 Kruft\nDeutschland' },
          { heading: 'Vertreten durch', body: 'Inhaber: Daniel Breitbach' },
          { heading: 'Kontakt', body: 'Telefon: 02652 6326\nTelefax: 02652 7897\nE-Mail: info@baustoffe-breitbach.com' },
          { heading: 'Umsatzsteuer-ID', body: 'Platzhalter · Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG vom Kunden ergänzen.' },
          { heading: 'Verantwortlich für den Inhalt', body: 'Daniel Breitbach, Anschrift wie oben.' },
        ],
      },
      datenschutz: {
        slug: 'datenschutz',
        title: 'Datenschutz',
        blocks: [
          { heading: 'Datenschutz auf einen Blick', body: 'Platzhalter · Rechtsverbindlicher Datenschutztext muss vom Kunden bzw. Datenschutzbeauftragten geliefert werden (DSGVO). Verantwortlich: Daniel Breitbach. ' + LOREM },
          { heading: 'Verantwortliche Stelle', body: 'Baustoffe Breitbach e.K., Reuschenlay 32, 56642 Kruft. Datenschutzbeauftragter: Daniel Breitbach.' },
        ],
      },
      cookies: {
        slug: 'cookies',
        title: 'Cookie-Richtlinie',
        blocks: [
          { heading: 'Cookies auf dieser Website', body: 'Platzhalter · Cookie-Richtlinie (EU) muss vom Kunden bzw. rechtlich geprüft geliefert werden. Diese Website nutzt aktuell keine Tracking-Cookies. ' + LOREM },
        ],
      },
    },
  },
};
