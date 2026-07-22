// French content. Mirrors de.ts exactly. DIN codes, grading figures, proper
// nouns, address, phone and email stay identical to the German source.
// Placeholder page copy: the first sentence ("Texte à venir · …") is a brief that
// says what real text belongs there; the Latin lorem after it just fills the layout.
// NB: technical terms are a first pass; have a native reviewer confirm before production.

export const lang = 'fr';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.';

export const meta = {
  title: 'Baustoffe Breitbach e.K. · Granulats, farine de roche et trass de la Vulkaneifel',
  description:
    'Baustoffe Breitbach e.K., Kruft. Grossiste en granulats à béton selon DIN EN 12620, gravillons, pierres concassées, trass et farine de roche de basalte, diabase et grauwacke. Livraison en Allemagne, au Benelux et en France.',
};

export const content = {
  nav: [
    { slug: 'unternehmen', label: 'Entreprise' },
    { slug: 'produkte', label: 'Produits' },
    { slug: 'leistungen', label: 'Services' },
    { slug: 'kontakt', label: 'Contact' },
  ],
  heroMeta: ['Kruft, Vulkaneifel', 'DE · Benelux · FR'],
  hero: {
    title: 'Granulats à béton, gravillons et farine de roche de la Vulkaneifel.',
    sub: "Baustoffe Breitbach e.K. livre des granulats sous surveillance qualité selon DIN EN 12620, du trass, des pierres concassées et de la farine de roche de basalte, diabase et grauwacke. En gros pour le béton, l'enrobé et le bâtiment.",
    imageLabel: ['Zone image · photo à venir', 'Carrière, gravier brut et gravillons de basalte de la Vulkaneifel'],
  },
  slogan: {
    pre: 'Construire en harmonie avec la ',
    green: 'nature',
    post: '.',
    body: 'Des matières premières régionales, des trajets courts et la valorisation des matériaux minéraux. La matière reste pierre naturelle, de la carrière au chantier.',
  },
  products: {
    heading: 'Gamme: granulométries de 0/2 à 32/45 mm.',
    aside: 'Granulats à béton, gravillons, pierres concassées, sable, trass et farine de roche. En vrac par benne et camion-citerne ou en big bags. Type de roche et granulométrie selon besoin.',
    more: 'Tous les produits',
    cols: ['Produit', 'Granulométrie', 'Norme', 'Application'],
    rows: [
      { name: 'Gravier à béton', note: 'grain rond', kor: '0/2 · 2/8 · 8/16 · 16/32 mm', norm: 'DIN EN 12620', use: "Béton prêt à l'emploi et coulé en place, chape" },
      { name: 'Sable à béton', note: '', kor: '0/2 mm', norm: 'DIN EN 12620', use: 'Béton, mortier, sable de jointoiement' },
      { name: 'Gravillons', note: 'basalte / diabase', kor: '2/5 · 5/8 · 8/11 · 11/16 mm', norm: 'DIN EN 13043', use: 'Enrobé, béton, drainage' },
      { name: 'Gravillons nobles', note: '', kor: '2/5 · 5/8 mm', norm: 'DIN EN 13043', use: 'Couches de roulement et de liaison en enrobé' },
      { name: 'Pierres concassées', note: '', kor: '0/32 · 0/45 · 32/45 mm', norm: 'DIN EN 13242', use: 'Couches de base et antigel' },
      { name: 'Sable concassé', note: '', kor: '0/2 · 0/5 mm', norm: 'DIN EN 13242', use: 'Couches non liées, lit de pose' },
      { name: 'Farine de roche', note: 'basalte, diabase, grauwacke, microdiorite, calcaire', kor: '0/0,09 mm', norm: 'DIN EN 12620', use: 'Fines pour béton et enrobé, agriculture, industrie' },
      { name: 'Trass', note: 'tuf volcanique', kor: 'moulu', norm: 'DIN 51043', use: 'Ciment au trass, chaux au trass, pose de pierre naturelle' },
      { name: 'Gravier antigel', note: '', kor: '0/32 · 0/45 mm', norm: 'DIN EN 13242', use: 'Couches antigel en construction routière' },
      { name: 'Granulat recyclé', note: 'sous surveillance qualité', kor: '0/45 mm', norm: 'DIN EN 13242', use: 'Terrassement et voirie, remblai' },
      { name: 'Ciment blanc', note: '', kor: 'CEM I 42,5 · 52,5', norm: 'DIN EN 197-1', use: 'Béton apparent, terrazzo, préfabrication' },
      { name: 'Chaux vive', note: '', kor: '0/3 mm', norm: 'DIN EN 459', use: 'Amélioration des sols, mortier' },
      { name: 'Gravier décoratif', note: 'ornemental', kor: '8/16 · 16/32 mm', norm: 'non normé', use: 'Aménagement paysager' },
    ],
  },
  band: { label: ['Zone image · photo à venir', 'Gravillons de basalte 8/11 sur le stock'], caption: 'Gravillons de basalte 8/11, Osteifel' },
  applications: {
    heading: 'Une matière première, six métiers.',
    aside: "Du béton prêt à l'emploi à l'amendement des sols: les mêmes granulats, chacun dans la bonne granulométrie et la bonne qualité.",
    items: [
      { title: 'Béton', body: "Granulats selon DIN EN 12620 pour béton prêt à l'emploi, coulé en place et préfabriqué. Grain rond et concassé.", rocks: 'Gravier, sable, gravillons, fines' },
      { title: 'Enrobé', body: 'Gravillons nobles et sable concassé selon DIN EN 13043 pour couches de roulement, de liaison et de base.', rocks: 'Basalte, diabase, grauwacke' },
      { title: 'Construction routière', body: "Pierres concassées, antigel et granulats recyclés selon DIN EN 13242 pour l'assise.", rocks: 'Pierres concassées, antigel, recyclé' },
      { title: 'Aménagement paysager', body: "Gravier décoratif, gravillons ornementaux, lit de pose et sables de remblai pour l'extérieur.", rocks: 'Gravier décoratif, gravillons, sable' },
      { title: 'Agriculture', body: "Farine de roche de basalte et diabase pour l'amélioration des sols et comme engrais minéral.", rocks: 'Farine de roche, chaux' },
      { title: 'Industrie', body: 'Trass, ciment blanc, chaux vive et granulométries spéciales pour usines de matériaux et transformateurs.', rocks: 'Trass, ciment blanc, chaux' },
    ],
  },
  technik: {
    heading: 'Sous surveillance qualité, contrôlé, documenté.',
    aside: 'Chaque livraison avec bon de livraison et attestation de conformité. Contrôle de production en usine selon la norme européenne.',
    columns: [
      { head: 'Normes', rows: [
        { k: 'Béton', v: 'DIN EN 12620' }, { k: 'Enrobé', v: 'DIN EN 13043' }, { k: 'Mortier', v: 'DIN EN 13139' },
        { k: 'Non lié', v: 'DIN EN 13242' }, { k: 'Trass', v: 'DIN 51043' }, { k: 'Ciment', v: 'DIN EN 197-1' },
      ] },
      { head: 'Types de roche', rows: [
        { k: 'Basalte', v: '' }, { k: 'Diabase', v: '' }, { k: 'Grauwacke', v: '' },
        { k: 'Microdiorite', v: '' }, { k: 'Calcaire', v: '' }, { k: 'Trass / tuf', v: '' },
      ] },
      { head: 'Granulométries', rows: [
        { k: 'Fines', v: '0/0,09' }, { k: 'Sable', v: '0/2' }, { k: 'Gravillons', v: '2/16' },
        { k: 'Gravier', v: '8/32' }, { k: 'Concassé', v: '32/45' }, { k: 'Spécial', v: 'sur demande' },
      ] },
      { head: 'Livraison', rows: [
        { k: 'Benne', v: '' }, { k: 'Camion-citerne', v: '' }, { k: 'Big bag', v: '' },
        { k: 'En sacs', v: '' }, { k: 'Enlèvement', v: '' }, { k: 'DE · Benelux · FR', v: '' },
      ] },
    ],
  },
  company: {
    heading: 'Baustoffe Breitbach, entreprise familiale depuis plus de 40 ans.',
    aside: "Dirigée par Daniel Breitbach. Établie à Kruft, en bordure de l'Eifel oriental entre le Laacher See et le Rhin.",
    more: 'En savoir plus',
    paras: [
      "D'un commerce régional de sable et de gravier est né un grossiste en matériaux minéraux. L'accent est mis sur les granulats pour béton et enrobé ainsi que sur la farine de roche issue de la roche volcanique de l'Eifel.",
      "Nous conseillons sur la granulométrie, le type de roche et la norme, organisons la livraison et livrons dans les délais aux centrales à béton, aux postes d'enrobage et aux entreprises de construction en Allemagne, au Benelux et en France.",
      "Des trajets courts, des interlocuteurs fixes et une qualité constante. C'est la base sur laquelle les clients planifient depuis des décennies.",
    ],
    facts: [
      { v: '40+', l: 'Années dans le négoce de matériaux' },
      { v: '3', l: 'Pays desservis' },
      { v: '5', l: 'Types de roche pour la farine' },
      { v: 'DIN EN', l: 'Granulats sous surveillance' },
    ],
  },
  partners: {
    heading: 'Partenaires et fournisseurs.',
    aside: 'Texte à venir · insérer les logos des entreprises partenaires (cimenterie, sables spéciaux, fournisseurs internationaux).',
    slots: ['Logo partenaire', 'Logo partenaire', 'Logo partenaire', 'Logo partenaire', 'Logo partenaire', 'Logo partenaire'],
  },
  map: {
    heading: 'Site: Kruft, Vulkaneifel.',
    aside: 'Reuschenlay 32, 56642 Kruft. Livraison et enlèvement sur rendez-vous.',
  },
  contact: {
    heading: 'Demandez une granulométrie, recevez un prix.',
    lead: 'Indiquez le type de roche, la granulométrie, la quantité et le lieu de livraison. Vous recevez une offre avec prix et délai.',
    cta: 'Vers le contact',
    email: 'info@baustoffe-breitbach.com',
    rows: [
      { k: 'Téléphone', v: '02652 6326' },
      { k: 'E-mail', v: 'info@baustoffe-breitbach.com' },
      { k: 'Horaires', v: 'Lun au ven, 7:00 à 17:00' },
    ],
    standortLabel: 'Adresse',
    address: ['Baustoffe Breitbach e.K.', 'Reuschenlay 32', '56642 Kruft', 'Allemagne'],
  },
  footer: {
    blurb: 'Grossiste en granulats, trass et farine de roche de la Vulkaneifel.',
    cols: [
      { head: 'Adresse', wide: true, items: [
        { label: 'Baustoffe Breitbach e.K.' }, { label: 'Reuschenlay 32' }, { label: '56642 Kruft' }, { label: 'Allemagne' },
      ] },
      { head: 'Contact', wide: false, items: [
        { label: '02652 6326', href: 'tel:+4926526326' },
        { label: 'info@baustoffe-breitbach.com', href: 'mailto:info@baustoffe-breitbach.com' },
        { label: 'baustoffe-breitbach.de' },
      ] },
      { head: 'Gamme', wide: false, items: [
        { label: 'Entreprise', slug: 'unternehmen' }, { label: 'Produits', slug: 'produkte' },
        { label: 'Services', slug: 'leistungen' }, { label: 'Contact', slug: 'kontakt' },
      ] },
    ],
    legal: [
      { label: 'Mentions légales', slug: 'impressum' }, { label: 'Confidentialité', slug: 'datenschutz' }, { label: 'Politique cookies', slug: 'cookies' },
    ],
    copyright: '© 2026 Baustoffe Breitbach e.K.',
  },

  pages: {
    unternehmen: {
      slug: 'unternehmen',
      title: 'Entreprise',
      lead: "Texte à venir · Court paragraphe d'introduction sur l'entreprise (qui nous sommes, depuis quand, région). " + LOREM,
      blocks: [
        { heading: "À propos de l'entreprise", body: "Texte à venir · Histoire et identité de l'entreprise: entreprise familiale forte de plus de 40 ans d'expérience dans le béton et l'application de la farine de roche. " + LOREM },
        { heading: 'Clientèle et zone de livraison', body: 'Texte à venir · Structure de la clientèle (PME et grandes entreprises en production de béton, de mortier, agriculture) et zone de livraison Allemagne, Benelux, France. ' + LOREM },
        { heading: 'Notre exigence', body: 'Texte à venir · Valeurs et méthode: entreprise familiale flexible et orientée conseil, concepts de livraison fiables pour des produits naturels. ' + LOREM },
      ],
      inhaber: {
        heading: 'Le dirigeant',
        name: 'Daniel Breitbach',
        role: 'Propriétaire',
        imageLabel: ['Zone image · photo à venir', 'Portrait de Daniel Breitbach'],
        body: 'Texte à venir · Courte présentation du propriétaire Daniel Breitbach (parcours, rôle, direction éventuelle). ' + LOREM,
      },
    },
    produkte: {
      slug: 'produkte',
      title: 'Produits et farine de roche',
      lead: 'Texte à venir · Introduction à la gamme: uniquement des produits certifiés DIN 12620 pour la production de béton, plus une ligne complète de farine de roche. ' + LOREM,
      categories: [
        { name: 'Farine de roche', imageLabel: ['Zone image · photo à venir', 'Farine de roche'], body: "Texte à venir · Description de la ligne de farine de roche et mention de dizaines de produits aux teintes et propriétés variées, conseil personnalisé. " + LOREM, items: ['Farine de basalte', 'Farine de diabase', 'Farine de grauwacke', 'Farine de microdiorite', 'Farine de calcaire'] },
        { name: 'Farine spéciale pour ciment blanc', imageLabel: ['Zone image · photo à venir', 'Farine spéciale'], body: "Texte à venir · Farine de roche spéciale pour l'emploi avec les ciments blancs, offrant un potentiel d'économie important. " + LOREM, items: [] },
        { name: 'Autres produits via partenaires', imageLabel: ['Zone image · photo à venir', 'Trass, basalte, gravier, concassé'], body: 'Texte à venir · Produits complémentaires proposés avec nos partenaires. ' + LOREM, items: ['Trass', 'Basalte', 'Gravier', 'Pierres concassées', 'Ciment blanc'] },
        { name: 'Produits spéciaux', imageLabel: ['Zone image · photo à venir', 'Produits spéciaux'], body: "Texte à venir · Produits spéciaux au-delà de la gamme standard pour l'industrie du béton, la production industrielle et l'agriculture. " + LOREM, items: ['Oxyde de calcium (chaux vive)', 'cendres diverses', 'Bauxite', 'Gravier décoratif (noir et blanc)'] },
        { name: 'Sables industriels et spéciaux', imageLabel: ['Zone image · photo à venir', 'Sables spéciaux'], body: 'Texte à venir · Sables spéciaux pour la production de béton et les procédés industriels, par exemple les sables de quartzite. ' + LOREM, items: ['Sable de quartzite', 'autres sables spéciaux'] },
        { name: 'Ciment blanc', imageLabel: ['Zone image · photo à venir', 'Ciment blanc'], body: 'Texte à venir · Ciment blanc de haute qualité des classes 42,5 et 52,5, livré en sacs ou par camion-citerne, via un partenaire international. ' + LOREM, items: ['CEM I 42,5', 'CEM I 52,5'] },
        { name: 'Farine de calcaire', imageLabel: ['Zone image · photo à venir', 'Farine de calcaire'], body: 'Texte à venir · Farine de calcaire, composant clé en production de béton et en agriculture, aussi comme fine de dépoussiérage. ' + LOREM, items: [] },
        { name: 'Pierres concassées et gravier', imageLabel: ['Zone image · photo à venir', 'Pierres concassées et gravier'], body: 'Texte à venir · Pierres concassées et gravier de roches, granulométries et quantités variées, du décoratif aux gros volumes, national et importé. ' + LOREM, items: ['Pierres concassées', 'Gravier', 'Gravillons', 'Pierre décorative'] },
      ],
    },
    leistungen: {
      slug: 'leistungen',
      title: 'Services et conseil',
      lead: "Texte à venir · Introduction au conseil sur l'application de la farine de roche dans la production de béton. " + LOREM,
      blocks: [
        { heading: 'La farine de roche comme alternative aux fines', body: 'Texte à venir · Emploi de la farine de roche comme alternative stratégique aux fines classiques. ' + LOREM },
        { heading: 'Optimisation des coûts', body: 'Texte à venir · Emploi de la farine de roche comme fine pour optimiser les coûts. ' + LOREM },
        { heading: 'Optimisation de la qualité', body: 'Texte à venir · Emploi de la farine de roche comme fine pour améliorer la qualité. ' + LOREM },
        { heading: 'Un produit naturel écologique', body: 'Texte à venir · La farine de roche comme produit naturel écologique. ' + LOREM },
        { heading: "Projets d'optimisation", body: "Texte à venir · Projets communs et complexes d'optimisation de la production et de l'exploitation avec la farine de roche. " + LOREM },
      ],
    },
    kontakt: {
      slug: 'kontakt',
      title: 'Contact',
      lead: 'Texte à venir · Courte phrase sur la prise de contact et la demande de devis. ' + LOREM,
      form: {
        intro: 'Demande avec matériau, granulométrie, quantité et lieu de livraison.',
        fields: [
          { name: 'name', label: 'Nom', type: 'text', required: true },
          { name: 'firma', label: 'Société', type: 'text', required: false },
          { name: 'email', label: 'E-mail', type: 'email', required: true },
          { name: 'telefon', label: 'Téléphone', type: 'tel', required: false },
          { name: 'material', label: 'Matériau et granulométrie', type: 'text', required: false },
          { name: 'menge', label: 'Quantité', type: 'text', required: false },
          { name: 'lieferort', label: 'Lieu de livraison', type: 'text', required: false },
          { name: 'nachricht', label: 'Message', type: 'textarea', required: false },
        ],
        submit: 'Envoyer la demande',
        note: 'Texte à venir · Envoi du formulaire encore à connecter (Formspree, Netlify Forms ou côté serveur). En attendant, par e-mail.',
      },
      mapHeading: 'Accès',
    },
    legal: {
      impressum: {
        slug: 'impressum',
        title: 'Mentions légales',
        blocks: [
          { heading: 'Informations selon § 5 TMG', body: 'Baustoffe Breitbach e.K.\nReuschenlay 32\n56642 Kruft\nAllemagne' },
          { heading: 'Représentée par', body: 'Propriétaire: Daniel Breitbach' },
          { heading: 'Contact', body: 'Téléphone: 02652 6326\nFax: 02652 7897\nE-mail: info@baustoffe-breitbach.com' },
          { heading: 'Numéro de TVA', body: 'Texte à venir · Numéro de TVA intracommunautaire selon § 27a UStG à fournir par le client.' },
          { heading: 'Responsable du contenu', body: 'Daniel Breitbach, adresse ci-dessus.' },
        ],
      },
      datenschutz: {
        slug: 'datenschutz',
        title: 'Confidentialité',
        blocks: [
          { heading: 'La protection des données en bref', body: 'Texte à venir · Le texte de confidentialité juridiquement contraignant doit être fourni par le client ou son délégué à la protection des données (RGPD). Responsable: Daniel Breitbach. ' + LOREM },
          { heading: 'Responsable du traitement', body: 'Baustoffe Breitbach e.K., Reuschenlay 32, 56642 Kruft. Délégué à la protection des données: Daniel Breitbach.' },
        ],
      },
      cookies: {
        slug: 'cookies',
        title: 'Politique cookies',
        blocks: [
          { heading: 'Cookies sur ce site', body: "Texte à venir · La politique cookies (UE) doit être fournie par le client ou vérifiée juridiquement. Ce site n'utilise actuellement aucun cookie de suivi. " + LOREM },
        ],
      },
    },
  },
};
