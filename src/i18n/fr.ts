/** French copy. Same facts and order as the English text in content.ts. */
import { contact, property as P } from '../config/site';
import { waMessageEn, type Amenity, type FaqItem } from './shared';
import type { Strings } from './content';

const phone = contact.whatsappDisplay;
const name = 'Chalet Mountain View 2';
const entity = 'Chalet Mountain View 2, une location de vacances à Mountain View 2, Aïn Sokhna, Zafraana, Égypte.';

const inside: Amenity[] = [
  { icon: 'AirVent', label: 'Climatisation', detail: 'Chambres climatisées', schemaName: 'Air conditioning' },
  { icon: 'Utensils', label: 'Cuisine', detail: 'Réfrigérateur, four et plaques de cuisson', schemaName: 'Kitchen' },
  { icon: 'CookingPot', label: 'Équipements de cuisine de base', detail: 'Casseroles et poêles, huile, sel et poivre', schemaName: 'Cooking basics' },
  { icon: 'Refrigerator', label: 'Réfrigérateur', schemaName: 'Refrigerator' },
  { icon: 'Tv', label: 'Télévision', schemaName: 'TV' },
  { icon: 'WashingMachine', label: 'Lave-linge', schemaName: 'Washing machine' },
  { icon: 'ShowerHead', label: 'Eau chaude', schemaName: 'Hot water' },
  { icon: 'Sun', label: 'Balcon privé', detail: 'Avec vue sur la piscine et les jardins', schemaName: 'Private balcony with pool and garden views' },
];
const resort: Amenity[] = [
  { icon: 'Waves', label: 'Accès à la piscine', detail: 'Piscines communes de la résidence', schemaName: 'Swimming pool access (shared)' },
  { icon: 'Palmtree', label: 'Accès à la plage', detail: 'Plage commune de la résidence', schemaName: 'Beach access (shared)' },
  { icon: 'ToyBrick', label: 'Aire de jeux pour enfants', detail: 'Dans la résidence – demandez-nous les détails actuels', schemaName: "Children's play area (shared)" },
  { icon: 'SquareParking', label: 'Parking gratuit', detail: 'Sur place', schemaName: 'Free parking on premises' },
];

const faq: FaqItem[] = [
  { id: 'guests', q: 'Combien de personnes peuvent séjourner au Chalet Mountain View 2 ?', a: `Le chalet accueille jusqu’à ${P.maxAdults} adultes et ${P.maxChildren} enfants.` },
  { id: 'rooms', q: 'Combien y a-t-il de chambres, de lits et de salles de bain ?', a: `Il y a ${P.bedrooms} chambres, ${P.beds} lits et ${P.bathrooms} salle de bain. Les chambres sont climatisées.` },
  { id: 'amenities', q: 'Quels équipements sont inclus ?', a: 'Climatisation, cuisine avec réfrigérateur, four et plaques de cuisson, équipements de cuisine de base (casseroles et poêles, huile, sel et poivre), télévision, lave-linge, eau chaude et balcon privé. Dans la résidence, les voyageurs ont accès à la piscine et à la plage, à une aire de jeux pour enfants et à un parking gratuit sur place.' },
  { id: 'pool', q: 'Y a-t-il une piscine ?', a: 'Oui. Les voyageurs peuvent utiliser les piscines communes de la résidence, et le balcon du chalet donne sur une piscine et des jardins. Les piscines sont partagées avec les autres résidents et ne sont pas privées.' },
  { id: 'beach', q: 'La plage est-elle accessible ?', a: 'Oui, l’accès à la plage est inclus. La plage est un équipement commun de la résidence.' },
  { id: 'parking', q: 'Y a-t-il un parking ?', a: 'Oui, un parking gratuit est disponible sur place.' },
  { id: 'families', q: 'Le chalet convient-il aux familles avec enfants ?', a: 'Oui. Le chalet est pensé pour les familles : de la place pour 2 enfants avec 4 adultes, un lit superposé dans une chambre et une aire de jeux pour enfants dans la résidence. Si vous avez besoin d’équipements particuliers pour de jeunes enfants, demandez sur WhatsApp avant de réserver.' },
  { id: 'pricing', q: 'Comment connaître les disponibilités et les prix ?', a: `Envoyez un message WhatsApp au ${phone} en indiquant vos dates et le nombre de voyageurs. L’hôte vous répondra avec les disponibilités, le prix de la location et les modalités de réservation. Les prix ne sont pas publiés en ligne.` },
  { id: 'checkin', q: 'Quelles sont les heures d’arrivée et de départ ?', a: 'Les heures d’arrivée et de départ sont confirmées par l’hôte lors de la réservation. Demandez sur WhatsApp.' },
  { id: 'where', q: 'Où se trouve le chalet ?', a: `${entity} Vous pouvez le trouver sur Google Maps grâce au lien de la section « Emplacement ».` },
  { id: 'contact', q: 'Comment contacter l’hôte ?', a: `Le plus rapide est WhatsApp : ${phone}. Vous pouvez aussi suivre le chalet sur Instagram et Facebook, ou consulter l’annonce Airbnb.` },
  { id: 'airbnb', q: 'Le chalet est-il aussi sur Airbnb ?', a: 'Oui, le chalet a une annonce sur Airbnb. Vous pouvez aussi contacter l’hôte directement sur WhatsApp pour réserver.' },
  { id: 'language', q: 'Puis-je écrire à l’hôte en français ?', a: 'Oui, vous pouvez écrire en français. Le message WhatsApp prérempli de ce site contient aussi une version anglaise, pour que l’hôte comprenne immédiatement votre demande.' },
];

export const fr: Strings = {
  dir: 'ltr',
  locale: 'fr_FR',
  langName: 'Français',
  switchLabel: 'Choisir la langue',
  skip: 'Aller au contenu principal',
  propertyName: name,
  brandSub: 'Aïn Sokhna, Égypte',
  entity,
  breadcrumb: 'Fil d’Ariane',
  meta: {
    homeTitle: 'Chalet Mountain View 2 à louer à Aïn Sokhna, Égypte',
    homeDescription:
      'Chalet familial de deux chambres à Mountain View 2, Aïn Sokhna, pour 4 adultes et 2 enfants, avec vue sur la piscine et les jardins. Écrivez-nous sur WhatsApp pour les dates et les tarifs.',
    galleryTitle: 'Galerie photos – Chalet Mountain View 2, Aïn Sokhna',
    galleryDescription:
      'Vraies photos du Chalet Mountain View 2 à Aïn Sokhna : le balcon avec vue sur la piscine, le salon, la cuisine, les deux chambres, la salle de bain, ainsi que les piscines et la plage de la résidence.',
    notFoundTitle: 'Page introuvable – Chalet Mountain View 2',
  },
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    chalet: 'Le chalet',
    amenities: 'Équipements',
    gallery: 'Photos',
    location: 'Emplacement',
    faq: 'FAQ',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Fermer le menu',
  },
  wa: {
    cta: 'Réserver en direct sur WhatsApp',
    short: 'WhatsApp',
    ask: 'Demander sur WhatsApp',
    check: 'Vérifier les disponibilités sur WhatsApp',
    contact: 'Nous contacter sur WhatsApp',
    opens: '(ouvre WhatsApp)',
    message: `Bonjour, je souhaite louer le Chalet Mountain View 2 à Aïn Sokhna. Pourriez-vous m’indiquer les dates disponibles, le prix de la location et les modalités de réservation ?\n\n${waMessageEn}`,
  },
  hero: {
    eyebrow: 'Chalet de vacances · Aïn Sokhna, mer Rouge',
    title: 'Vos vacances en famille au bord de la mer Rouge à Mountain View, Aïn Sokhna',
    lead: 'Réveillez-vous face aux palmiers et à la piscine dans un chalet lumineux de deux chambres. Savourez votre café du matin sur le balcon privé, puis passez la journée à la piscine de la résidence ou à la plage.',
    galleryCta: 'Voir les photos',
    location: 'Mountain View 2, Aïn Sokhna, Zafraana, Égypte',
  },
  facts: {
    guests: 'Voyageurs',
    guestsValue: `${P.maxAdults} adultes + ${P.maxChildren} enfants`,
    bedrooms: 'Chambres',
    beds: 'Lits',
    bathrooms: 'Salle de bain',
  },
  summary: {
    heading: 'Le Chalet Mountain View 2 en bref',
    text: `${entity} Le chalet accueille jusqu’à ${P.maxAdults} adultes et ${P.maxChildren} enfants, avec ${P.bedrooms} chambres, ${P.beds} lits et ${P.bathrooms} salle de bain. Il dispose de la climatisation, d’une cuisine et d’un balcon privé donnant sur la piscine et les jardins. Les voyageurs ont accès aux piscines communes de la résidence, à la plage et à l’aire de jeux pour enfants. La réservation se fait directement auprès de l’hôte sur WhatsApp (${phone}).`,
  },
  details: {
    heading: 'Un chalet lumineux et familial à Aïn Sokhna',
    intro: [
      'Le Chalet Mountain View 2 est une maison de vacances de deux chambres située dans la résidence Mountain View 2, sur la côte de la mer Rouge à Aïn Sokhna. Il convient aux familles et aux petits groupes en quête de vacances détendues au bord de la mer, facilement accessibles depuis Le Caire et d’autres villes égyptiennes.',
      'Le salon douillet s’ouvre sur un balcon privé avec vue sur la piscine, les palmiers et les jardins – idéal pour le petit-déjeuner ou un thé en soirée. Les deux chambres sont climatisées et la cuisine est équipée d’un réfrigérateur, d’un four et de plaques de cuisson pour préparer des repas simples pendant votre séjour.',
    ],
    listHeading: 'Dans le chalet',
    items: [
      { title: 'Salon', text: 'Canapé confortable, télévision et accès direct au balcon.' },
      { title: 'Deux chambres climatisées', text: 'Cinq lits au total. Les photos montrent un lit superposé et un lit simple dans une chambre, et deux lits simples dans l’autre.' },
      { title: 'Cuisine', text: 'Réfrigérateur, four et plaques de cuisson, ainsi que les équipements de base : casseroles et poêles, huile, sel et poivre.' },
      { title: 'Salle de bain', text: 'Une salle de bain avec eau chaude.' },
      { title: 'Balcon privé', text: 'Avec vue sur la piscine commune et les jardins.' },
      { title: 'Lave-linge', text: 'Pratique pour les longs séjours en famille.' },
    ],
    sharedNote: 'Les piscines, la plage et l’aire de jeux pour enfants sont des équipements communs de la résidence et ne sont pas réservés au chalet.',
    viewAll: 'Voir toutes les photos du chalet',
  },
  amenities: {
    heading: 'Équipements',
    intro: 'Tout ce qui figure dans cette liste est confirmé par l’hôte. Si vous avez besoin de quelque chose qui n’y figure pas, demandez avant de réserver.',
    insideHeading: 'Dans le chalet',
    resortHeading: 'Dans la résidence (partagé)',
    inside,
    resort,
  },
  gallery: {
    heading: 'Photos du chalet et de la résidence',
    intro: 'Vraies photos du chalet, de la vue depuis le balcon et des équipements de la résidence. Touchez une photo pour l’agrandir.',
    pageHeading: 'Galerie photos',
    pageIntro:
      'Chaque photo de cette page montre le Chalet Mountain View 2 ou les équipements communs de la résidence Mountain View 2 à Aïn Sokhna. Les photos sont classées par espace.',
    viewAll: 'Voir toute la galerie photos',
    backHome: 'Retour à la présentation du chalet',
    open: 'Ouvrir la photo',
    close: 'Fermer',
    prev: 'Photo précédente',
    next: 'Photo suivante',
    of: 'sur',
    dialogLabel: 'Visionneuse de photos',
    categoriesLabel: 'Aller à',
    ctaText: 'Ça vous plaît ? Demandez à l’hôte pour vos dates.',
  },
  location: {
    heading: 'Emplacement',
    text: 'Le chalet se trouve à Mountain View 2, Aïn Sokhna (aussi écrit Ain Sokhna ou Ain El Sokhna), dans la région de Zafraana, sur la côte égyptienne de la mer Rouge.',
    addressLabel: 'Adresse',
    directions: 'Itinéraire',
    openMaps: 'Trouver le chalet sur Google Maps',
    loadMap: 'Afficher la carte interactive',
    mapNote: 'La carte Google Maps ne se charge que si vous choisissez de l’afficher.',
    mapTitle: 'Carte indiquant l’emplacement du Chalet Mountain View 2',
    ask: 'Besoin d’un itinéraire ou d’informations d’arrivée ? Demandez sur WhatsApp.',
  },
  faq: {
    heading: 'Questions fréquentes',
    items: faq,
    more: 'Une autre question ?',
  },
  contact: {
    heading: 'Réservez directement auprès de l’hôte',
    text: 'Écrivez-nous sur WhatsApp pour connaître les dates disponibles, les tarifs et les modalités de réservation. Indiquez vos dates et le nombre d’adultes et d’enfants, et nous vous répondrons.',
    numberLabel: 'WhatsApp',
    followHeading: 'Retrouvez-nous en ligne',
  },
  social: {
    instagram: 'Suivre sur Instagram',
    facebook: 'Nous retrouver sur Facebook',
    maps: 'Trouver le chalet sur Google Maps',
    airbnb: 'Voir l’annonce Airbnb',
    newTab: '(s’ouvre dans un nouvel onglet)',
  },
  footer: {
    language: 'Langue',
    disclaimer:
      'Ce site présente une location de vacances gérée de façon indépendante. Ce n’est pas le site officiel de Mountain View ni de son promoteur.',
    rights: 'Tous droits réservés.',
    gallery: 'Galerie photos',
  },
  notFound: {
    heading: 'Page introuvable',
    text: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    home: 'Aller à la page d’accueil en français',
  },
};
