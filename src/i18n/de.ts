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
    heading: 'Sechs Einsatzbereiche, ein Lieferprogramm.',
    aside: 'Die Aufstellung nennt die Rohstoffe, Zusatzstoffe und Hilfsmittel, die wir für den jeweiligen Einsatzbereich liefern; natürliche Baustoffe wie Kies, Splitt und Trass ergänzen das Programm.',
    items: [
      { title: 'Zementwerke', body: 'Klinker, Flugasche, Gips und Kalksteinmehl gehen als Ausgangs- und Zumahlstoffe in die Zementproduktion. Geliefert wird lose im Silozug, im Big Bag oder im Container, bei Exportmengen mit Verladung im Seehafen.', rocks: 'Klinker · Flugasche · Gips · Kalksteinmehl · Trass' },
      { title: 'Transportbeton', body: 'Grauzement, Weißzement, Flugasche und Steinmehle bilden den Bindemittel- und Mehlkornanteil im Transportbeton. Kalksteinmehl und Basalt-Füller verbessern Zusammenhalt und Verarbeitbarkeit der Mischung.', rocks: 'Grauzement · Weißzement · Flugasche · Kalksteinmehl · Basalt-Füller' },
      { title: 'Betonfertigteile', body: 'Für die Betonproduktion im Fertigteilwerk liefern wir Zement, Flugasche und Steinmehle. Dazu kommt die Technik am Stahltisch: Magnetboxen, Magnetleisten, Abschaler, Kipptische und Betonabstandhalter.', rocks: 'Zement · Magnetboxen · Abschaler · Magnetleisten · Betonabstandhalter' },
      { title: 'Betonwaren und Betonstein', body: 'Pflastersteine, Betonplatten und Blockstufen entstehen aus Zement, Gesteinskörnung und Steinmehl, Weißzement kommt bei hellen und eingefärbten Oberflächen zum Einsatz. Für die Fertigung liefern wir Kunststoffbretter und Formen zur Steinfertigung, für die Gartengestaltung Dekorkies, Splitt und Naturstein.', rocks: 'Weißzement · Steinmehl · Kunststoffbretter · Formen · Dekorkies' },
      { title: 'Mörtel und Putz', body: 'In der Mörtelproduktion werden Zement, Kalksteinmehl und eng abgestufte Sande zu Werkmörtel, Putz und Estrich verarbeitet. Trass ist ein Naturbaustoff aus vulkanischem Tuff und wird in Mauer- und Verlegemörtel eingesetzt.', rocks: 'Zement · Kalksteinmehl · Trass · Brechsand · Gips' },
      { title: 'Metalle und Sourcing', body: 'Eisen und Eisenerz, Nickel, Aluminium, Kupfer und Altmetalle beschaffen wir über internationale Lieferanten und Handelspartner. Spezifikation, Menge und Lieferweg legen wir je Anfrage fest, die Abwicklung läuft über den Handel und nicht über eigene Produktion.', rocks: 'Eisen und Eisenerz · Nickel · Aluminium · Kupfer · Altmetalle' },
    ],
  },
  technik: {
    heading: 'Lose, im Big Bag, im Container.',
    aside: 'Steinmehle, Zement und Flugasche gehen lose oder im Big Bag, Fertigteiltechnik palettiert. Das Liefergebiet umfasst Deutschland, Benelux und Frankreich, dazu Export und internationale Beschaffung.',
    columns: [
      { head: 'Lieferformen', rows: [
        { k: 'Lose', v: 'Silozug' }, { k: 'Big Bag', v: '' }, { k: 'Sackware', v: '' },
        { k: 'Palettiert', v: '' }, { k: 'Container', v: '' }, { k: 'Selbstabholung', v: '' },
      ] },
      { head: 'Rohstoffe', rows: [
        { k: 'Steinmehle', v: 'Füller' }, { k: 'Zement', v: 'grau · weiß' }, { k: 'Klinker und Flugasche', v: '' },
        { k: 'Bims und Lava', v: '' }, { k: 'Gips', v: '' }, { k: 'Metalle und Erze', v: 'Sourcing' },
      ] },
      { head: 'Steinmehle', rows: [
        { k: 'Basalt', v: 'Füller' }, { k: 'Diabas', v: 'Füller' }, { k: 'Grauwacke', v: 'Füller' },
        { k: 'Mikrodiorit', v: 'Füller' }, { k: 'Kalkstein', v: 'Kalksteinmehl' }, { k: 'Sonderqualitäten', v: '' },
      ] },
      { head: 'Liefergebiet', rows: [
        { k: 'Deutschland', v: '' }, { k: 'Benelux', v: '' }, { k: 'Frankreich', v: '' },
        { k: 'Export', v: 'international' }, { k: 'Seehafen', v: 'Verladung' }, { k: 'Termine', v: 'nach Absprache' },
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
    aside: 'Wir arbeiten mit Zementwerken, Mahlwerken und internationalen Lieferanten zusammen und beschaffen darüber Weißzement, Grauzement, Klinker, Steinmehle und Metalle.',
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
      lead: 'Baustoff-Großhandel Breitbach e.K. ist ein inhabergeführtes Handelshaus für mineralische Rohstoffe und Baustoffe mit Sitz in Kruft im Landkreis Mayen-Koblenz. Das Familienunternehmen ist seit mehr als 40 Jahren am Markt und beliefert Zementwerke, Betonwerke, Transportbetonwerke und Betonfertigteilwerke in Deutschland, Benelux und Frankreich.',
      blocks: [
        { heading: 'Über die Firma', body: 'Breitbach ist ein Familienunternehmen, besteht seit mehr als 40 Jahren und wird von Daniel Breitbach als Inhaber geführt. Gehandelt wird mit mineralischen Rohstoffen und Baustoffen für die weiterverarbeitende Industrie. Der Schwerpunkt liegt auf Rohstoffen für die Beton- und Zementindustrie: Steinmehle aus Basalt, Diabas, Grauwacke, Mikrodiorit und Kalkstein, dazu Weißzement, Grauzement, Klinker, Flugasche, Bims, Lava und Gips. Der zweite Schwerpunkt sind technische Anwendungen für die Betonfertigteilindustrie, von Magnetboxen und Abschalern bis zu Kipptischen und Formen zur Steinfertigung. Hinzu kommt das internationale Sourcing von Eisen und Eisenerz, Nickel, Aluminium, Kupfer und Altmetallen. Das mineralische Sortiment aus Kies, Splitt, Schotter, Brechsand, Trass und Dekorkies wird weiterhin geführt.' },
        { heading: 'Kundschaft und Liefergebiet', body: 'Beliefert werden Zementwerke, Betonwerke, Transportbetonwerke, Betonfertigteilwerke und Mörtelwerke. Für die Betonproduktion und die Mörtelproduktion liefern wir Steinmehle, Füller und Zemente, für Betonfertigteile zusätzlich die technische Ausrüstung. Das Liefergebiet umfasst Deutschland, die Benelux-Länder und Frankreich. Geliefert wird lose im Silozug, in Big Bags oder als Sackware, je nach Menge und Werkslogistik. Beschaffung und Export laufen über internationale Lieferanten und Handelspartner, unter anderem Zementlieferungen, die im Seehafen verladen werden. Spezifikation, Menge und Lieferweg werden je Anfrage festgelegt.' },
        { heading: 'Unser Anspruch', body: 'Vor der ersten Lieferung klären wir Anwendung und Rezeptur. Basalt-Füller, Diabas-Füller und Mikrodiorit-Füller unterscheiden sich in Kornverteilung, Dichte und Farbe; in der Betonproduktion wirkt sich das auf Wasseranspruch, Verarbeitbarkeit und Optik aus. Ihr Ansprechpartner bleibt derselbe, vom Angebot über den Abruf bis zur Rechnung: Daniel Breitbach. Liefertermine werden verbindlich bestätigt und auf Ihren Produktionsplan abgestimmt. Bei laufenden Lieferungen bleibt die vereinbarte Spezifikation die Grundlage, Abweichungen werden vor der Verladung besprochen. In einem inhabergeführten Betrieb fallen Entscheidungen schnell, ohne lange interne Wege, auch bei Sonderkörnungen, Teilmengen und kurzfristigen Terminen.' },
      ],
      inhaber: {
        heading: 'Der Inhaber',
        name: 'Daniel Breitbach',
        role: 'Inhaber',
        imageLabel: ['Bildfläche · Foto folgt', 'Porträt Daniel Breitbach'],
        body: 'Daniel Breitbach führt das Unternehmen als Inhaber. Anfragen, Angebote und Fragen zur Rezeptur laufen über ihn persönlich. Termine, Spezifikationen und Preise werden direkt mit ihm abgestimmt. Erreichbar ist er unter 02652 6326 und info@baustoffe-breitbach.com.',
      },
    },
    // Restructured 2026-07-28 to the three groups the client specified on 2026-07-23.
    // The previous eight stone-centric categories are in git history if they are needed back.
    // catImages in components/pages/Produkte.astro is matched to this list BY INDEX.
    produkte: {
      slug: 'produkte',
      title: 'Produkte',
      lead: 'Das Lieferprogramm gliedert sich in drei Bereiche: Rohstoffe für die Beton- und Zementindustrie, technische Anwendungen für die Betonfertigteilindustrie und internationales Rohstoff-Sourcing. Ergänzend bleiben weitere mineralische Baustoffe wie Kies, Splitt, Schotter und Trass lieferbar.',
      categories: [
        {
          name: 'Rohstoffe für die Beton- und Zementindustrie',
          imageLabel: ['Bildfläche · Foto folgt', 'Steinmehl, Zement, Rohstoffe'],
          body: 'Mineralische Ausgangs- und Zusatzstoffe für Zementwerke, Transportbetonwerke und Betonfertigteilwerke. Die Steinmehle werden aus Basalt, Diabas, Grauwacke, Mikrodiorit und Kalkstein gemahlen und in der Betonproduktion wie in der Mörtelproduktion als Füller eingesetzt: Sie schließen den Kornaufbau im Feinbereich, verbessern die Verarbeitbarkeit und beeinflussen die Farbe des fertigen Betons. Für die Betonfüllung stehen Basalt-Füller, Diabas-Füller, Mikrodiorit-Füller und Kalksteinmehl zur Wahl. Weißzement und Grauzement gehen als Bindemittel in die Rezeptur ein, Klinker an Mahl- und Zementwerke. Flugasche wird als puzzolanischer Zusatzstoff zugegeben, Bims und Lava dienen als leichte Gesteinskörnung, Gips als Erstarrungsregler im Zement. Geliefert wird lose im Silofahrzeug, in Big Bags oder in Säcken.',
          items: ['Steinmehle', 'Weißzement', 'Grauzement', 'Klinker', 'Flugasche', 'Bims', 'Lava', 'Gips'],
        },
        {
          name: 'Technische Anwendungen für die Betonfertigteilindustrie',
          imageLabel: ['Bildfläche · Foto folgt', 'Magnetsysteme und Schalung auf dem Stahltisch'],
          body: 'Ausrüstung und Verbrauchsmaterial für die Herstellung von Betonfertigteilen und Betonwaren. Magnetboxen und Magnetleisten fixieren die Abschalprofile auf dem Stahltisch, ohne dass gebohrt oder geschweißt wird, und lassen sich für den nächsten Grundriss versetzen. Die Abschaler geben die Kante des Fertigteils vor und begrenzen den Betonquerschnitt. Kipptische richten fertige Wandtafeln nach dem Erhärten auf. Betonabstandhalter sichern die vorgeschriebene Betondeckung und schützen die Bewehrung damit vor Korrosion. Für die Betonstein-Herstellung kommen Kunststoffbretter als Unterlage sowie Formen zur Steinfertigung hinzu, etwa für Pflastersteine und Betonplatten.',
          items: ['Magnetboxen', 'Abschaler', 'Magnetleisten', 'Betonabstandhalter / Spacer', 'Kipptische', 'Kunststoffbretter für die Betonstein-Herstellung', 'Formen zur Steinfertigung'],
        },
        {
          name: 'Internationales Rohstoff Sourcing',
          imageLabel: ['Bildfläche · Foto folgt', 'Verladung im Hafen'],
          body: 'Beschaffung von Metallen und Erzen über ein internationales Lieferanten- und Handelsnetz. Beschafft und geliefert werden Eisen und Eisenerz, Nickel, Aluminium und Kupfer sowie Altmetalle zur Wiederverwertung. Spezifikation, Menge und Lieferweg werden je Anfrage abgestimmt, für Einzelpartien ebenso wie für laufende Kontrakte. Das Rohstoff-Sourcing schließt den Export ein, darunter Zementlieferungen, die im Seehafen verladen werden. Liefergebiet ist Deutschland, Benelux und Frankreich; darüber hinaus wird international beschafft und verschifft.',
          items: ['Eisen und Eisenerz', 'Nickel', 'Aluminium', 'Kupfer', 'Altmetalle'],
        },
        {
          name: 'Weitere mineralische Baustoffe',
          imageLabel: ['Bildfläche · Foto folgt', 'Splitt, Kies und Schotter am Lager'],
          body: 'Neben den drei Hauptbereichen bleiben die klassischen mineralischen Baustoffe lieferbar. Kies, Splitt, Schotter und Brechsand gehen in Beton und Mörtel, in die Pflasterbettung und in Tragschichten. Trass wird dem Mörtel für Naturstein- und Pflasterarbeiten zugegeben, Kalksteinmehl dient als Füller und zur Bodenverbesserung. In der Gartengestaltung wird Dekorkies als offene Schüttung eingesetzt, Splitt als Bettung für Pflastersteine und Betonplatten. Grundlage ist in allen Fällen Naturstein, ein Naturbaustoff, der sich sortenrein zurückgewinnen und wiederverwenden lässt. Körnung, Farbe und Gesteinsart dieser natürlichen Baustoffe werden nach Verwendungszweck gewählt.',
          items: ['Kies', 'Splitt', 'Schotter', 'Brechsand', 'Trass', 'Kalksteinmehl', 'Dekorkies'],
        },
      ],
    },
    leistungen: {
      slug: 'leistungen',
      title: 'Leistungen und Beratung',
      lead: 'Steinmehl ist in der Betonproduktion mehr als ein billiger Füllstoff: Es steuert Kornaufbau, Verarbeitbarkeit, Farbe und den Bindemittelbedarf einer Rezeptur. Wir beraten Transportbeton- und Betonfertigteilwerke sowie Hersteller in der Mörtelproduktion bei der Auswahl des passenden Füllers und liefern das Material anschließend fortlaufend.',
      blocks: [
        { heading: 'Steinmehl als Alternative zu Füllern', body: 'Im Feinkornbereich sind Füller austauschbar, sobald eine Erstprüfung bestätigt, dass Kornband, Dichte und Farbe zur Rezeptur passen. Steinmehle aus Basalt, Diabas, Grauwacke, Mikrodiorit und Kalkstein übernehmen im Beton dieselbe Aufgabe wie herkömmliche Füller und lassen sich gezielt nach Gesteinsart auswählen. Basalt-Füller und Diabas-Füller bringen ein dichtes, dunkles Korn ein, Mikrodiorit-Füller ein ausgeglichenes Kornband, Kalksteinmehl eine helle Mehlkornfraktion. Vor einer Umstellung prüfen wir mit Ihnen, welches Steinmehl den vorhandenen Füller ersetzen kann und welche Feinheit die Rezeptur verträgt. Geliefert wird lose im Silozug, in Big Bags oder als Sackware, für die Betonproduktion ebenso wie für die Mörtelproduktion.' },
        { heading: 'Kostenoptimierung', body: 'Der Bindemittelanteil bestimmt den Preis einer Betonrezeptur. Steinmehl als Füller besetzt den Mehlkornbereich, den sonst Zement ausfüllen müsste, und kann den Bindemittelbedarf je Kubikmeter senken, soweit der Mindestzementgehalt der Expositionsklasse eingehalten bleibt. Im Transportbeton wirkt das über die Menge, in der Mörtelproduktion über die Konstanz der Mischung. Wir rechnen die Einsparung an Ihrer Rezeptur durch, nicht an einem Modellwert. Grundlage sind der aktuelle Zementpreis, die Frachtkosten bis zu Ihrem Silo und die Menge, die Sie regelmäßig abnehmen.' },
        { heading: 'Qualitätsoptimierung', body: 'Steinmehl schließt Lücken im Kornaufbau. Die Mischung wird geschmeidiger, der Frischbeton besser verarbeitbar, und im Mehlkornbereich bleiben weniger Hohlräume, sodass ein dichteres Gefüge entsteht. Bei Betonfertigteilen zeigt sich das an der Sichtfläche: weniger Poren, gleichmäßigere Textur. Die Farbe steuert die Gesteinsart. Kalksteinmehl hält Rezepturen mit Weißzement hell, Basalt und Diabas führen zu dunklen, matten Oberflächen. Welche Kombination aus Zement und Steinmehl Ihr Werk braucht, klären wir vor der ersten Lieferung.' },
        { heading: 'Ökologisches Naturprodukt', body: 'Steinmehl ist gemahlener Naturstein. Basalt, Diabas, Grauwacke, Mikrodiorit und Kalkstein werden gebrochen, der Feinanteil wird auf die geforderte Feinheit gemahlen, chemische Zusätze kommen dabei nicht zum Einsatz. Damit gehört Steinmehl zu den natürlichen Baustoffen: Der Naturbaustoff bleibt vom Mahlwerk bis in das fertige Bauteil mineralisch und bringt keine organischen Bestandteile in die Rezeptur ein. Wo Steinmehl einen Teil des Mehlkornbereichs übernimmt, sinkt der Anteil des energieintensivsten Bestandteils der Rezeptur, des Zements. Bei der Auswahl der Lieferquelle zählt neben Gesteinsart und Feinheit die Entfernung zu Ihrem Werk, weil sie Frachtkosten und Transportaufwand bestimmt.' },
        { heading: 'Optimierungsprojekte', body: 'Eine Umstellung der Rezeptur beginnt mit einem Muster. Wir liefern die in Frage kommenden Steinmehle in Labormengen, Ihr Werk fährt damit Versuchsmischungen und misst Frischbetoneigenschaften und Festigkeitsentwicklung. Anhand der Ergebnisse wählen wir bei Bedarf eine andere Gesteinsart oder eine andere Feinheit und wiederholen den Durchgang, bis die Rezeptur steht. Danach geht es um die Logistik: Silobelegung, Abrufmengen, Lieferrhythmus. Solche Projekte laufen über Wochen, mitunter über eine ganze Saison. Am Ende stehen eine festgelegte Rezeptur und eine fortlaufende Belieferung mit gleichbleibendem Material.' },
      ],
    },
    kontakt: {
      slug: 'kontakt',
      title: 'Kontakt',
      lead: 'Anfragen zu Steinmehlen, Zement, technischen Anwendungen für die Betonfertigteilindustrie und internationalem Rohstoff Sourcing nehmen wir über das Formular, per E-Mail an info@baustoffe-breitbach.com oder telefonisch unter 02652 6326 entgegen. Sie erhalten ein Angebot mit Preis und Liefertermin, auf Wunsch mit Alternativen zu Körnung, Lieferform und Anlieferzeitraum.',
      checklistHeading: 'Was in die Anfrage gehört',
      checklist: [
        'Material und Güte, etwa Basalt-Füller',
        'Menge je Abruf oder Jahresmenge',
        'Lieferort mit Postleitzahl und Zufahrt',
        'Lieferform und gewünschter Liefertermin',
      ],
      deliveryHeading: 'Lieferformen und Liefergebiet',
      deliveryBody: 'Geliefert wird lose im Silozug, in Big Bags und als Sackware · welche Lieferform passt, richtet sich nach Material, Menge und Abladestelle. Das Liefergebiet umfasst Deutschland, Benelux und Frankreich, dazu Export und internationale Beschaffung einschließlich Zementverladung im Seehafen.',
      form: {
        intro: 'Nennen Sie Material, Menge und Lieferort. Alles Weitere klären wir mit Ihnen.',
        fields: [
          { name: 'name', label: 'Name', type: 'text', required: true },
          { name: 'firma', label: 'Firma', type: 'text', required: false },
          { name: 'email', label: 'E-Mail', type: 'email', required: true },
          { name: 'telefon', label: 'Telefon', type: 'tel', required: false },
          // full: true spans both columns of the form grid; the rest pair up two per row.
          { name: 'material', label: 'Material und Qualität', type: 'text', required: false, full: true },
          { name: 'menge', label: 'Menge', type: 'text', required: false },
          { name: 'lieferort', label: 'Lieferort', type: 'text', required: false },
          { name: 'nachricht', label: 'Nachricht', type: 'textarea', required: false, full: true },
        ],
        submit: 'Anfrage senden',
        // TODO(intern): Formularversand ist noch nicht angebunden, das Formular verwirft
        // die Eingaben derzeit stillschweigend. Bis ein Backend steht, nennt dieser Hinweis
        // den funktionierenden Weg. Nicht entfernen, ohne den Versand zu implementieren.
        note: 'Am schnellsten erreichen Sie uns per E-Mail an info@baustoffe-breitbach.com oder telefonisch unter 02652 6326.',
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
