/** German copy. Same facts and order as the English text in content.ts. */
import { contact, property as P } from '../config/site';
import { waMessageEn, type Amenity, type FaqItem } from './shared';
import type { Strings } from './content';

const phone = contact.whatsappDisplay;
const name = 'Chalet Mountain View 2';
const entity = 'Chalet Mountain View 2, eine Ferienunterkunft in Mountain View 2, Ain Sokhna, Zafraana, Ägypten.';

const inside: Amenity[] = [
  { icon: 'AirVent', label: 'Klimaanlage', detail: 'Klimatisierte Schlafzimmer', schemaName: 'Air conditioning' },
  { icon: 'Utensils', label: 'Küche', detail: 'Kühlschrank, Backofen und Herd', schemaName: 'Kitchen' },
  { icon: 'CookingPot', label: 'Grundausstattung zum Kochen', detail: 'Töpfe und Pfannen, Öl, Salz und Pfeffer', schemaName: 'Cooking basics' },
  { icon: 'Refrigerator', label: 'Kühlschrank', schemaName: 'Refrigerator' },
  { icon: 'Tv', label: 'Fernseher', schemaName: 'TV' },
  { icon: 'WashingMachine', label: 'Waschmaschine', schemaName: 'Washing machine' },
  { icon: 'ShowerHead', label: 'Warmwasser', schemaName: 'Hot water' },
  { icon: 'Sun', label: 'Privater Balkon', detail: 'Mit Blick auf Pool und Gärten', schemaName: 'Private balcony with pool and garden views' },
];
const resort: Amenity[] = [
  { icon: 'Waves', label: 'Poolzugang', detail: 'Gemeinsame Pools der Anlage', schemaName: 'Swimming pool access (shared)' },
  { icon: 'Palmtree', label: 'Strandzugang', detail: 'Gemeinsamer Strand der Anlage', schemaName: 'Beach access (shared)' },
  { icon: 'ToyBrick', label: 'Kinderspielplatz', detail: 'In der Anlage – fragen Sie uns nach aktuellen Details', schemaName: "Children's play area (shared)" },
  { icon: 'SquareParking', label: 'Kostenlose Parkplätze', detail: 'Auf dem Gelände', schemaName: 'Free parking on premises' },
];

const faq: FaqItem[] = [
  { id: 'guests', q: 'Wie viele Gäste können im Chalet Mountain View 2 übernachten?', a: `Das Chalet bietet Platz für bis zu ${P.maxAdults} Erwachsene und ${P.maxChildren} Kinder.` },
  { id: 'rooms', q: 'Wie viele Schlafzimmer, Betten und Badezimmer gibt es?', a: `Es gibt ${P.bedrooms} Schlafzimmer, ${P.beds} Betten und ${P.bathrooms} Badezimmer. Die Schlafzimmer sind klimatisiert.` },
  { id: 'amenities', q: 'Welche Ausstattung ist vorhanden?', a: 'Klimaanlage, Küche mit Kühlschrank, Backofen und Herd, Grundausstattung zum Kochen (Töpfe und Pfannen, Öl, Salz und Pfeffer), Fernseher, Waschmaschine, Warmwasser und ein privater Balkon. In der Anlage haben Gäste Zugang zu Pool und Strand, einen Kinderspielplatz und kostenlose Parkplätze auf dem Gelände.' },
  { id: 'pool', q: 'Gibt es einen Pool?', a: 'Ja. Gäste können die gemeinsamen Pools der Anlage nutzen, und der Balkon des Chalets blickt auf einen Pool und Gärten. Die Pools werden mit anderen Gästen der Anlage geteilt und sind nicht privat.' },
  { id: 'beach', q: 'Gibt es Strandzugang?', a: 'Ja, der Strandzugang ist inklusive. Der Strand ist eine gemeinsame Einrichtung der Anlage.' },
  { id: 'parking', q: 'Gibt es Parkplätze?', a: 'Ja, es gibt kostenlose Parkplätze auf dem Gelände.' },
  { id: 'families', q: 'Ist das Chalet für Familien mit Kindern geeignet?', a: 'Ja. Das Chalet ist auf Familien ausgelegt: Platz für 2 Kinder und 4 Erwachsene, ein Etagenbett in einem Schlafzimmer und ein Kinderspielplatz in der Anlage. Wenn Sie bestimmte Dinge für Kleinkinder benötigen, fragen Sie bitte vor der Buchung per WhatsApp.' },
  { id: 'pricing', q: 'Wie erfahre ich freie Termine und Preise?', a: `Schreiben Sie eine WhatsApp-Nachricht an ${phone} mit Ihren Reisedaten und der Anzahl der Gäste. Der Gastgeber antwortet mit Verfügbarkeit, Mietpreis und Buchungsdetails. Preise werden nicht online veröffentlicht.` },
  { id: 'checkin', q: 'Wann sind Check-in und Check-out?', a: 'Die Check-in- und Check-out-Zeiten bestätigt der Gastgeber bei der Buchung. Bitte fragen Sie per WhatsApp.' },
  { id: 'where', q: 'Wo liegt das Chalet?', a: `${entity} Sie finden es über den Link im Abschnitt „Lage“ in Google Maps.` },
  { id: 'contact', q: 'Wie erreiche ich den Gastgeber?', a: `Am schnellsten per WhatsApp: ${phone}. Sie können dem Chalet auch auf Instagram und Facebook folgen oder das Airbnb-Inserat ansehen.` },
  { id: 'airbnb', q: 'Ist das Chalet auch auf Airbnb?', a: 'Ja, das Chalet hat ein Airbnb-Inserat. Sie können den Gastgeber aber auch direkt per WhatsApp zur Buchung kontaktieren.' },
  { id: 'language', q: 'Kann ich dem Gastgeber auf Deutsch schreiben?', a: 'Ja, Sie können auf Deutsch schreiben. Die vorbereitete WhatsApp-Nachricht auf dieser Website enthält zusätzlich eine englische Fassung, damit der Gastgeber Ihre Anfrage sofort versteht.' },
];

export const de: Strings = {
  dir: 'ltr',
  locale: 'de_DE',
  langName: 'Deutsch',
  switchLabel: 'Sprache wählen',
  skip: 'Zum Hauptinhalt springen',
  propertyName: name,
  brandSub: 'Ain Sokhna, Ägypten',
  entity,
  breadcrumb: 'Brotkrümelnavigation',
  meta: {
    homeTitle: 'Chalet Mountain View 2 – Ferienwohnung in Ain Sokhna, Ägypten',
    homeDescription:
      'Familien-Chalet mit zwei Schlafzimmern in Mountain View 2, Ain Sokhna, für bis zu 4 Erwachsene und 2 Kinder, mit Blick auf Pool und Garten. Schreiben Sie uns auf WhatsApp für Termine und Preise.',
    galleryTitle: 'Fotogalerie – Chalet Mountain View 2, Ain Sokhna',
    galleryDescription:
      'Echte Fotos vom Chalet Mountain View 2 in Ain Sokhna: Balkon mit Poolblick, Wohnzimmer, Küche, zwei Schlafzimmer, Bad sowie die Pools und der Strand der Anlage.',
    notFoundTitle: 'Seite nicht gefunden – Chalet Mountain View 2',
  },
  nav: {
    label: 'Hauptnavigation',
    home: 'Start',
    chalet: 'Das Chalet',
    amenities: 'Ausstattung',
    gallery: 'Fotos',
    location: 'Lage',
    faq: 'FAQ',
    contact: 'Kontakt',
    menu: 'Menü',
    close: 'Menü schließen',
  },
  wa: {
    cta: 'Direkt per WhatsApp buchen',
    short: 'WhatsApp',
    ask: 'Per WhatsApp fragen',
    check: 'Verfügbarkeit per WhatsApp prüfen',
    contact: 'Kontakt per WhatsApp',
    opens: '(öffnet WhatsApp)',
    message: `Hallo, ich interessiere mich für die Miete des Chalets Mountain View 2 in Ain Sokhna. Könnten Sie mir bitte die freien Termine, den Mietpreis und die Buchungsdetails mitteilen?\n\n${waMessageEn}`,
  },
  hero: {
    eyebrow: 'Ferien-Chalet · Ain Sokhna, Rotes Meer',
    title: 'Ihr Familienurlaub am Roten Meer in Mountain View, Ain Sokhna',
    lead: 'Wachen Sie mit Blick auf Palmen und Pool in einem hellen Chalet mit zwei Schlafzimmern auf. Genießen Sie den Morgenkaffee auf dem privaten Balkon und verbringen Sie den Tag am Pool der Anlage oder am Strand.',
    galleryCta: 'Fotos ansehen',
    location: 'Mountain View 2, Ain Sokhna, Zafraana, Ägypten',
  },
  facts: {
    guests: 'Gäste',
    guestsValue: `${P.maxAdults} Erwachsene + ${P.maxChildren} Kinder`,
    bedrooms: 'Schlafzimmer',
    beds: 'Betten',
    bathrooms: 'Badezimmer',
  },
  summary: {
    heading: 'Chalet Mountain View 2 auf einen Blick',
    text: `${entity} Das Chalet bietet Platz für bis zu ${P.maxAdults} Erwachsene und ${P.maxChildren} Kinder, mit ${P.bedrooms} Schlafzimmern, ${P.beds} Betten und ${P.bathrooms} Badezimmer. Es verfügt über Klimaanlage, eine Küche und einen privaten Balkon mit Blick auf Pool und Gärten. Gäste können die gemeinsamen Pools der Anlage, den Strandzugang und den Kinderspielplatz nutzen. Gebucht wird direkt beim Gastgeber per WhatsApp (${phone}).`,
  },
  details: {
    heading: 'Ein helles, familienfreundliches Chalet in Ain Sokhna',
    intro: [
      'Das Chalet Mountain View 2 ist ein Ferienhaus mit zwei Schlafzimmern in der Anlage Mountain View 2 an der Rotmeerküste von Ain Sokhna. Es eignet sich für Familien und kleine Gruppen, die einen entspannten Urlaub am Meer in gut erreichbarer Nähe zu Kairo und anderen ägyptischen Städten suchen.',
      'Das gemütliche Wohnzimmer öffnet sich zu einem privaten Balkon mit Blick auf Pool, Palmen und Gärten – ideal fürs Frühstück oder einen Tee am Abend. Beide Schlafzimmer sind klimatisiert, und die Küche hat Kühlschrank, Backofen und Herd, sodass Sie während Ihres Aufenthalts einfache Mahlzeiten zubereiten können.',
    ],
    listHeading: 'Im Chalet',
    items: [
      { title: 'Wohnzimmer', text: 'Bequeme Sofaecke, Fernseher und direkter Zugang zum Balkon.' },
      { title: 'Zwei klimatisierte Schlafzimmer', text: 'Insgesamt fünf Betten. Die Fotos zeigen ein Etagenbett und ein Einzelbett in einem Zimmer und zwei Einzelbetten im anderen.' },
      { title: 'Küche', text: 'Kühlschrank, Backofen und Herd sowie Grundausstattung zum Kochen: Töpfe und Pfannen, Öl, Salz und Pfeffer.' },
      { title: 'Badezimmer', text: 'Ein Badezimmer mit Warmwasser.' },
      { title: 'Privater Balkon', text: 'Mit Blick auf den gemeinsamen Pool und die Gärten.' },
      { title: 'Waschmaschine', text: 'Praktisch bei längeren Familienaufenthalten.' },
    ],
    sharedNote: 'Die Pools, der Strand und der Kinderspielplatz sind gemeinsame Einrichtungen der Anlage und gehören nicht exklusiv zum Chalet.',
    viewAll: 'Alle Fotos des Chalets ansehen',
  },
  amenities: {
    heading: 'Ausstattung',
    intro: 'Alles auf dieser Liste ist vom Gastgeber bestätigt. Wenn Sie etwas brauchen, das nicht aufgeführt ist, fragen Sie bitte vor der Buchung.',
    insideHeading: 'Im Chalet',
    resortHeading: 'In der Anlage (gemeinsam genutzt)',
    inside,
    resort,
  },
  gallery: {
    heading: 'Fotos vom Chalet und der Anlage',
    intro: 'Echte Fotos vom Chalet, der Aussicht vom Balkon und den Einrichtungen der Anlage. Tippen Sie auf ein Foto, um es zu vergrößern.',
    pageHeading: 'Fotogalerie',
    pageIntro:
      'Alle Fotos auf dieser Seite zeigen das Chalet Mountain View 2 oder die gemeinsamen Einrichtungen der Anlage Mountain View 2 in Ain Sokhna, sortiert nach Bereichen.',
    viewAll: 'Zur vollständigen Fotogalerie',
    backHome: 'Zurück zur Chalet-Übersicht',
    open: 'Foto öffnen',
    close: 'Schließen',
    prev: 'Vorheriges Foto',
    next: 'Nächstes Foto',
    of: 'von',
    dialogLabel: 'Fotoansicht',
    categoriesLabel: 'Springen zu',
    ctaText: 'Gefällt es Ihnen? Fragen Sie den Gastgeber nach Ihren Wunschterminen.',
  },
  location: {
    heading: 'Lage',
    text: 'Das Chalet liegt in Mountain View 2, Ain Sokhna (auch Ain El Sokhna geschrieben), im Gebiet Zafraana an der ägyptischen Rotmeerküste.',
    addressLabel: 'Adresse',
    directions: 'Route planen',
    openMaps: 'Chalet in Google Maps finden',
    loadMap: 'Interaktive Karte anzeigen',
    mapNote: 'Die Karte wird erst von Google Maps geladen, wenn Sie sie anzeigen möchten.',
    mapTitle: 'Karte mit der Lage des Chalets Mountain View 2',
    ask: 'Brauchen Sie eine Wegbeschreibung oder Anreisedetails? Fragen Sie per WhatsApp.',
  },
  faq: {
    heading: 'Häufig gestellte Fragen',
    items: faq,
    more: 'Noch eine Frage?',
  },
  contact: {
    heading: 'Direkt beim Gastgeber buchen',
    text: 'Schreiben Sie uns auf WhatsApp, um freie Termine, Preise und Buchungsdetails zu erfragen. Nennen Sie uns Ihre Reisedaten und die Anzahl der Erwachsenen und Kinder – wir melden uns bei Ihnen.',
    numberLabel: 'WhatsApp',
    followHeading: 'Finden Sie uns online',
  },
  social: {
    instagram: 'Auf Instagram folgen',
    facebook: 'Besuchen Sie uns auf Facebook',
    maps: 'Chalet in Google Maps finden',
    airbnb: 'Airbnb-Inserat ansehen',
    newTab: '(öffnet in neuem Tab)',
  },
  footer: {
    language: 'Sprache',
    disclaimer:
      'Diese Website bewirbt eine unabhängig betriebene Ferienunterkunft. Sie ist nicht die offizielle Website von Mountain View oder dessen Bauträger.',
    rights: 'Alle Rechte vorbehalten.',
    gallery: 'Fotogalerie',
  },
  notFound: {
    heading: 'Seite nicht gefunden',
    text: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    home: 'Zur deutschen Startseite',
  },
};
