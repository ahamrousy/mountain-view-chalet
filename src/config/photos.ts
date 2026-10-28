/**
 * PHOTO MANIFEST
 * To add a photo: put the .jpg in src/assets/photos/ and add an entry below.
 * To replace a photo: overwrite the file with the same name (keep the alt text accurate).
 * `order` controls the gallery order. `home: true` shows it in the homepage highlights.
 * Alt text must describe what the photo actually shows — in every language.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/content';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export type PhotoCategory = 'living' | 'kitchen' | 'bedrooms' | 'bathroom' | 'balcony' | 'pools' | 'beach' | 'kids';
type T = Record<Lang, string>;

export interface PhotoEntry {
  file: string;
  category: PhotoCategory;
  alt: T;
  home?: boolean;
}

const shared: T = {
  en: 'Shared resort facility',
  ar: 'مرفق مشترك بالقرية',
  ru: 'Общее удобство комплекса',
  de: 'Gemeinsame Einrichtung der Anlage',
  fr: 'Équipement commun de la résidence',
  uk: 'Спільна зручність комплексу',
};

export const categoryLabels: Record<PhotoCategory, { label: T; shared?: T }> = {
  balcony: { label: { en: 'Balcony & views', ar: 'البلكونة والإطلالة', ru: 'Балкон и виды', de: 'Balkon & Aussicht', fr: 'Balcon et vue', uk: 'Балкон і краєвиди' } },
  living: { label: { en: 'Living room', ar: 'غرفة المعيشة', ru: 'Гостиная', de: 'Wohnzimmer', fr: 'Salon', uk: 'Вітальня' } },
  kitchen: { label: { en: 'Kitchen', ar: 'المطبخ', ru: 'Кухня', de: 'Küche', fr: 'Cuisine', uk: 'Кухня' } },
  bedrooms: { label: { en: 'Bedrooms', ar: 'غرف النوم', ru: 'Спальни', de: 'Schlafzimmer', fr: 'Chambres', uk: 'Спальні' } },
  bathroom: { label: { en: 'Bathroom', ar: 'الحمام', ru: 'Ванная комната', de: 'Badezimmer', fr: 'Salle de bain', uk: 'Ванна кімната' } },
  pools: { label: { en: 'Resort pools', ar: 'حمامات السباحة بالقرية', ru: 'Бассейны комплекса', de: 'Pools der Anlage', fr: 'Piscines de la résidence', uk: 'Басейни комплексу' }, shared },
  beach: { label: { en: 'Beach', ar: 'الشاطئ', ru: 'Пляж', de: 'Strand', fr: 'Plage', uk: 'Пляж' }, shared },
  kids: { label: { en: "Children's play area", ar: 'منطقة ألعاب الأطفال', ru: 'Детская площадка', de: 'Kinderspielplatz', fr: 'Aire de jeux', uk: 'Дитячий майданчик' }, shared },
};

export const heroPhoto = 'pool-and-garden-view-from-balcony.jpg';

export const photoEntries: PhotoEntry[] = [
  { file: 'pool-and-garden-view-from-balcony.jpg', category: 'balcony', home: true, alt: {
    en: "View from the chalet's balcony over the shared swimming pool, sun loungers, palm trees and gardens",
    ar: 'إطلالة من بلكونة الشاليه على حمام السباحة المشترك وكراسي الاسترخاء وأشجار النخيل والحدائق',
    ru: 'Вид с балкона шале на общий бассейн, шезлонги, пальмы и сады',
    de: 'Blick vom Balkon des Chalets auf den gemeinsamen Pool, Sonnenliegen, Palmen und Gärten',
    fr: 'Vue depuis le balcon du chalet sur la piscine commune, les transats, les palmiers et les jardins',
    uk: 'Вид з балкона шале на спільний басейн, шезлонги, пальми й сади' } },
  { file: 'private-balcony.jpg', category: 'balcony', home: true, alt: {
    en: 'Private balcony with a shaded roof and wooden railing overlooking the pool and gardens',
    ar: 'البلكونة الخاصة بسقف مظلل وسور خشبي تطل على حمام السباحة والحدائق',
    ru: 'Собственный балкон с навесом и деревянными перилами, с видом на бассейн и сады',
    de: 'Privater Balkon mit schattigem Dach und Holzgeländer, mit Blick auf Pool und Gärten',
    fr: 'Balcon privé couvert avec garde-corps en bois, donnant sur la piscine et les jardins',
    uk: 'Власний балкон із навісом і дерев’яними поручнями, з видом на басейн і сади' } },
  { file: 'balcony-seating.jpg', category: 'balcony', alt: {
    en: 'Two chairs on the balcony looking out over the pool and palm trees',
    ar: 'كرسيان في البلكونة بإطلالة على حمام السباحة وأشجار النخيل',
    ru: 'Два стула на балконе с видом на бассейн и пальмы',
    de: 'Zwei Stühle auf dem Balkon mit Blick auf Pool und Palmen',
    fr: 'Deux chaises sur le balcon face à la piscine et aux palmiers',
    uk: 'Два стільці на балконі з видом на басейн і пальми' } },
  { file: 'pool-view-from-balcony.jpg', category: 'balcony', alt: {
    en: 'Pool view from the balcony, with sun loungers and umbrellas below',
    ar: 'إطلالة على حمام السباحة من البلكونة مع الشماسي وكراسي الاسترخاء',
    ru: 'Вид на бассейн с балкона, внизу шезлонги и зонтики',
    de: 'Poolblick vom Balkon, unten Sonnenliegen und Schirme',
    fr: 'Vue sur la piscine depuis le balcon, avec transats et parasols en contrebas',
    uk: 'Вид на басейн із балкона, внизу шезлонги й парасолі' } },
  { file: 'golden-hour-balcony-view.jpg', category: 'balcony', alt: {
    en: 'Balcony view at golden hour over the pool, gardens and neighbouring chalets, with a glass of tea on the railing',
    ar: 'إطلالة البلكونة وقت الغروب على حمام السباحة والحدائق والشاليهات المجاورة مع كوب شاي على السور',
    ru: 'Вид с балкона на закате: бассейн, сады и соседние шале, на перилах стакан чая',
    de: 'Blick vom Balkon zur goldenen Stunde auf Pool, Gärten und benachbarte Chalets, mit einem Glas Tee auf dem Geländer',
    fr: 'Vue du balcon à l’heure dorée sur la piscine, les jardins et les chalets voisins, avec un verre de thé sur la rambarde',
    uk: 'Вид із балкона на заході сонця: басейн, сади й сусідні шале, на поручнях склянка чаю' } },
  { file: 'morning-coffee-on-the-balcony.jpg', category: 'balcony', alt: {
    en: 'Two cups of coffee on the balcony railing with a view of the resort',
    ar: 'فنجانا قهوة على سور البلكونة مع إطلالة على القرية',
    ru: 'Две чашки кофе на перилах балкона с видом на комплекс',
    de: 'Zwei Tassen Kaffee auf dem Balkongeländer mit Blick auf die Anlage',
    fr: 'Deux tasses de café sur la rambarde du balcon avec vue sur la résidence',
    uk: 'Дві чашки кави на поручнях балкона з видом на комплекс' } },
  { file: 'garden-view.jpg', category: 'balcony', alt: {
    en: 'View from the balcony over landscaped gardens and walkways',
    ar: 'إطلالة من البلكونة على الحدائق والممرات',
    ru: 'Вид с балкона на ухоженные сады и дорожки',
    de: 'Blick vom Balkon auf gepflegte Gärten und Wege',
    fr: 'Vue depuis le balcon sur les jardins paysagers et les allées',
    uk: 'Вид із балкона на доглянуті сади й доріжки' } },
  { file: 'living-room-with-balcony-access.jpg', category: 'living', home: true, alt: {
    en: 'Living room seating area with a door opening onto the balcony',
    ar: 'جلسة غرفة المعيشة مع باب يؤدي إلى البلكونة',
    ru: 'Зона отдыха в гостиной с дверью на балкон',
    de: 'Sitzbereich im Wohnzimmer mit Tür zum Balkon',
    fr: 'Coin salon avec une porte donnant sur le balcon',
    uk: 'Зона відпочинку у вітальні з дверима на балкон' } },
  { file: 'living-room.jpg', category: 'living', alt: {
    en: 'Living room with a blue L-shaped sofa, patterned cushions, a wall-mounted TV and an air conditioner',
    ar: 'غرفة المعيشة بكنبة زرقاء على شكل حرف L ووسائد ملونة وتلفزيون معلّق وجهاز تكييف',
    ru: 'Гостиная с синим угловым диваном, подушками с узором, настенным телевизором и кондиционером',
    de: 'Wohnzimmer mit blauem L-förmigem Sofa, gemusterten Kissen, Wandfernseher und Klimaanlage',
    fr: 'Salon avec canapé d’angle bleu, coussins à motifs, télévision murale et climatiseur',
    uk: 'Вітальня із синім кутовим диваном, візерунчастими подушками, настінним телевізором і кондиціонером' } },
  { file: 'living-and-dining-area.jpg', category: 'living', alt: {
    en: 'Living area with a sofa, table and chairs, with the kitchen visible in the background',
    ar: 'منطقة المعيشة بكنبة وطاولة وكراسٍ ويظهر المطبخ في الخلفية',
    ru: 'Гостиная с диваном, столом и стульями, на заднем плане кухня',
    de: 'Wohnbereich mit Sofa, Tisch und Stühlen, im Hintergrund die Küche',
    fr: 'Espace de vie avec canapé, table et chaises, la cuisine visible en arrière-plan',
    uk: 'Вітальня з диваном, столом і стільцями, на задньому плані кухня' } },
  { file: 'kitchen.jpg', category: 'kitchen', home: true, alt: {
    en: 'Kitchen with a refrigerator, stovetop, sink, countertop appliances and a small breakfast counter',
    ar: 'المطبخ بثلاجة وموقد وحوض وأجهزة صغيرة على الرخامة وبار صغير للإفطار',
    ru: 'Кухня с холодильником, варочной панелью, мойкой, небольшой техникой на столешнице и стойкой для завтрака',
    de: 'Küche mit Kühlschrank, Herd, Spüle, Kleingeräten auf der Arbeitsplatte und kleiner Frühstückstheke',
    fr: 'Cuisine avec réfrigérateur, plaques de cuisson, évier, petit électroménager et petit comptoir pour le petit-déjeuner',
    uk: 'Кухня з холодильником, варильною поверхнею, мийкою, невеликою технікою на стільниці та стійкою для сніданку' } },
  { file: 'open-plan-kitchen.jpg', category: 'kitchen', alt: {
    en: 'Open-plan kitchen next to the living room',
    ar: 'مطبخ مفتوح بجوار غرفة المعيشة',
    ru: 'Открытая кухня рядом с гостиной',
    de: 'Offene Küche neben dem Wohnzimmer',
    fr: 'Cuisine ouverte à côté du salon',
    uk: 'Відкрита кухня поруч із вітальнею' } },
  { file: 'bedroom-1.jpg', category: 'bedrooms', home: true, alt: {
    en: 'Bedroom 1 with a wooden bunk bed, a single bed and a wall-mounted air conditioner',
    ar: 'غرفة النوم الأولى بسرير دورين خشبي وسرير فردي وجهاز تكييف',
    ru: 'Спальня 1 с деревянной двухъярусной кроватью, односпальной кроватью и настенным кондиционером',
    de: 'Schlafzimmer 1 mit hölzernem Etagenbett, Einzelbett und Wandklimaanlage',
    fr: 'Chambre 1 avec lit superposé en bois, lit simple et climatiseur mural',
    uk: 'Спальня 1 з дерев’яним двоярусним ліжком, односпальним ліжком і настінним кондиціонером' } },
  { file: 'bedroom-1-wardrobe.jpg', category: 'bedrooms', alt: {
    en: 'Bedroom 1 showing the built-in wooden wardrobe and the bunk bed',
    ar: 'غرفة النوم الأولى ويظهر بها الدولاب الخشبي المدمج والسرير الدورين',
    ru: 'Спальня 1: встроенный деревянный шкаф и двухъярусная кровать',
    de: 'Schlafzimmer 1 mit eingebautem Holzkleiderschrank und Etagenbett',
    fr: 'Chambre 1 avec armoire en bois intégrée et lit superposé',
    uk: 'Спальня 1: вбудована дерев’яна шафа та двоярусне ліжко' } },
  { file: 'bedroom-2-twin-beds.jpg', category: 'bedrooms', home: true, alt: {
    en: 'Bedroom 2 with two single beds and an air conditioner above the window',
    ar: 'غرفة النوم الثانية بسريرين فرديين وجهاز تكييف فوق الشباك',
    ru: 'Спальня 2 с двумя односпальными кроватями и кондиционером над окном',
    de: 'Schlafzimmer 2 mit zwei Einzelbetten und Klimaanlage über dem Fenster',
    fr: 'Chambre 2 avec deux lits simples et un climatiseur au-dessus de la fenêtre',
    uk: 'Спальня 2 з двома односпальними ліжками та кондиціонером над вікном' } },
  { file: 'bedroom-2.jpg', category: 'bedrooms', alt: {
    en: 'Bedroom 2 with twin beds, a striped rug and a wardrobe',
    ar: 'غرفة النوم الثانية بسريرين فرديين وسجادة مخططة ودولاب',
    ru: 'Спальня 2 с двумя кроватями, полосатым ковриком и шкафом',
    de: 'Schlafzimmer 2 mit zwei Einzelbetten, gestreiftem Teppich und Kleiderschrank',
    fr: 'Chambre 2 avec lits jumeaux, tapis rayé et armoire',
    uk: 'Спальня 2 з двома ліжками, смугастим килимком і шафою' } },
  { file: 'bathroom.jpg', category: 'bathroom', alt: {
    en: 'Bathroom with a sink, toilet, shower area and electric water heater',
    ar: 'الحمام بحوض وتواليت ومنطقة للدش وسخان مياه كهربائي',
    ru: 'Ванная комната с раковиной, унитазом, душевой зоной и электрическим водонагревателем',
    de: 'Badezimmer mit Waschbecken, WC, Duschbereich und elektrischem Warmwasserbereiter',
    fr: 'Salle de bain avec lavabo, toilettes, espace douche et chauffe-eau électrique',
    uk: 'Ванна кімната з раковиною, унітазом, душовою зоною та електричним водонагрівачем' } },
  { file: 'compound-pool.jpg', category: 'pools', home: true, alt: {
    en: 'Shared swimming pool in the Mountain View 2 resort, surrounded by chalets',
    ar: 'حمام سباحة مشترك في قرية ماونتن فيو 2 تحيط به الشاليهات',
    ru: 'Общий бассейн комплекса Mountain View 2 в окружении шале',
    de: 'Gemeinsamer Pool der Anlage Mountain View 2, umgeben von Chalets',
    fr: 'Piscine commune de la résidence Mountain View 2, entourée de chalets',
    uk: 'Спільний басейн комплексу Mountain View 2 в оточенні шале' } },
  { file: 'lagoon-pool.jpg', category: 'pools', alt: {
    en: 'Large curved shared pool lined with palm trees in the resort',
    ar: 'حمام سباحة مشترك كبير بتصميم منحنٍ تحيط به أشجار النخيل',
    ru: 'Большой общий бассейн изогнутой формы, окружённый пальмами',
    de: 'Großer geschwungener Gemeinschaftspool mit Palmen in der Anlage',
    fr: 'Grande piscine commune aux formes arrondies, bordée de palmiers',
    uk: 'Великий спільний басейн вигнутої форми, оточений пальмами' } },
  { file: 'palm-walkway-to-beach.jpg', category: 'beach', alt: {
    en: 'Palm-lined walkway leading to the beach and its umbrellas',
    ar: 'ممشى تحيط به أشجار النخيل يؤدي إلى الشاطئ والشماسي',
    ru: 'Дорожка с пальмами, ведущая к пляжу с зонтиками',
    de: 'Von Palmen gesäumter Weg zum Strand mit Sonnenschirmen',
    fr: 'Allée bordée de palmiers menant à la plage et à ses parasols',
    uk: 'Доріжка з пальмами, що веде до пляжу з парасолями' } },
  { file: 'beach-pier.jpg', category: 'beach', home: true, alt: {
    en: 'Wooden pier stretching from the sandy beach into the Red Sea',
    ar: 'مرسى خشبي يمتد من الشاطئ الرملي إلى مياه البحر الأحمر',
    ru: 'Деревянный пирс, уходящий с песчаного пляжа в Красное море',
    de: 'Holzsteg, der vom Sandstrand ins Rote Meer führt',
    fr: 'Ponton en bois s’avançant de la plage de sable dans la mer Rouge',
    uk: 'Дерев’яний пірс, що тягнеться з піщаного пляжу в Червоне море' } },
  { file: 'sandy-beach.jpg', category: 'beach', alt: {
    en: 'Wide sandy beach along the Red Sea coast',
    ar: 'شاطئ رملي واسع على ساحل البحر الأحمر',
    ru: 'Широкий песчаный пляж на побережье Красного моря',
    de: 'Breiter Sandstrand an der Küste des Roten Meeres',
    fr: 'Large plage de sable sur la côte de la mer Rouge',
    uk: 'Широкий піщаний пляж на узбережжі Червоного моря' } },
  { file: 'beachfront-palms.jpg', category: 'beach', alt: {
    en: 'Palm trees and lawn beside the beach promenade',
    ar: 'أشجار نخيل ومسطحات خضراء بجوار ممشى الشاطئ',
    ru: 'Пальмы и газон у пляжной набережной',
    de: 'Palmen und Rasen an der Strandpromenade',
    fr: 'Palmiers et pelouse le long de la promenade de la plage',
    uk: 'Пальми й газон біля пляжної набережної' } },
  { file: 'beach-pedal-boats.jpg', category: 'beach', alt: {
    en: 'Pedal boats and straw umbrellas on the beach',
    ar: 'قوارب بدّال وشماسي من القش على الشاطئ',
    ru: 'Водные велосипеды и соломенные зонтики на пляже',
    de: 'Tretboote und Strohschirme am Strand',
    fr: 'Pédalos et parasols en paille sur la plage',
    uk: 'Водні велосипеди й солом’яні парасолі на пляжі' } },
  { file: 'sunset-on-the-beach.jpg', category: 'beach', alt: {
    en: 'Sunset over the sea with pedal boats resting on the sand',
    ar: 'غروب الشمس على البحر وقوارب البدّال على الرمال',
    ru: 'Закат над морем, на песке водные велосипеды',
    de: 'Sonnenuntergang über dem Meer, Tretboote liegen auf dem Sand',
    fr: 'Coucher de soleil sur la mer, des pédalos posés sur le sable',
    uk: 'Захід сонця над морем, на піску водні велосипеди' } },
  { file: 'pier-at-night.jpg', category: 'beach', alt: {
    en: 'The illuminated wooden pier at night',
    ar: 'المرسى الخشبي مضاءً ليلًا',
    ru: 'Освещённый деревянный пирс ночью',
    de: 'Der beleuchtete Holzsteg bei Nacht',
    fr: 'Le ponton en bois illuminé la nuit',
    uk: 'Освітлений дерев’яний пірс уночі' } },
  { file: 'kids-playground.jpg', category: 'kids', home: true, alt: {
    en: "Children's playground with wooden play frames and slides on the sand",
    ar: 'منطقة ألعاب أطفال بها ألعاب خشبية وزحاليق على الرمال',
    ru: 'Детская площадка с деревянными игровыми конструкциями и горками на песке',
    de: 'Kinderspielplatz mit Klettergerüsten aus Holz und Rutschen im Sand',
    fr: 'Aire de jeux pour enfants avec structures en bois et toboggans sur le sable',
    uk: 'Дитячий майданчик із дерев’яними ігровими конструкціями та гірками на піску' } },
];

export interface Photo extends PhotoEntry {
  src: ImageMetadata;
  id: string;
}

export const photos: Photo[] = photoEntries.map((p) => {
  const mod = files[`../assets/photos/${p.file}`];
  if (!mod) throw new Error(`Photo manifest: file not found in src/assets/photos/: ${p.file}`);
  return { ...p, src: mod.default, id: p.file.replace(/\.[a-z]+$/i, '') };
});

export const categoryOrder: PhotoCategory[] = ['balcony', 'living', 'kitchen', 'bedrooms', 'bathroom', 'pools', 'beach', 'kids'];

export const getPhoto = (file: string): Photo => {
  const p = photos.find((x) => x.file === file);
  if (!p) throw new Error(`Unknown photo: ${file}`);
  return p;
};
