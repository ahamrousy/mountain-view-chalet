/**
 * PHOTO MANIFEST
 * To add a photo: put the .jpg in src/assets/photos/ and add an entry below.
 * To replace a photo: overwrite the file with the same name (keep the alt text accurate).
 * `order` controls the gallery order. `home: true` shows it in the homepage highlights.
 * Alt text must describe what the photo actually shows.
 */
import type { ImageMetadata } from 'astro';

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png,webp}', {
  eager: true,
});

export type PhotoCategory = 'living' | 'kitchen' | 'bedrooms' | 'bathroom' | 'balcony' | 'pools' | 'beach' | 'kids';

export interface PhotoEntry {
  file: string;
  category: PhotoCategory;
  altEn: string;
  altAr: string;
  home?: boolean;
}

export const categoryLabels: Record<PhotoCategory, { en: string; ar: string; sharedEn?: string; sharedAr?: string }> = {
  balcony: { en: 'Balcony & views', ar: 'البلكونة والإطلالة' },
  living: { en: 'Living room', ar: 'غرفة المعيشة' },
  kitchen: { en: 'Kitchen', ar: 'المطبخ' },
  bedrooms: { en: 'Bedrooms', ar: 'غرف النوم' },
  bathroom: { en: 'Bathroom', ar: 'الحمام' },
  pools: { en: 'Resort pools', ar: 'حمامات السباحة بالقرية', sharedEn: 'Shared resort facility', sharedAr: 'مرفق مشترك بالقرية' },
  beach: { en: 'Beach', ar: 'الشاطئ', sharedEn: 'Shared resort facility', sharedAr: 'مرفق مشترك بالقرية' },
  kids: { en: "Children's play area", ar: 'منطقة ألعاب الأطفال', sharedEn: 'Shared resort facility', sharedAr: 'مرفق مشترك بالقرية' },
};

export const heroPhoto = 'pool-and-garden-view-from-balcony.jpg';

export const photoEntries: PhotoEntry[] = [
  { file: 'pool-and-garden-view-from-balcony.jpg', category: 'balcony', home: true,
    altEn: "View from the chalet's balcony over the shared swimming pool, sun loungers, palm trees and gardens",
    altAr: 'إطلالة من بلكونة الشاليه على حمام السباحة المشترك وكراسي الاسترخاء وأشجار النخيل والحدائق' },
  { file: 'private-balcony.jpg', category: 'balcony', home: true,
    altEn: 'Private balcony with a shaded roof and wooden railing overlooking the pool and gardens',
    altAr: 'البلكونة الخاصة بسقف مظلل وسور خشبي تطل على حمام السباحة والحدائق' },
  { file: 'balcony-seating.jpg', category: 'balcony',
    altEn: 'Two chairs on the balcony looking out over the pool and palm trees',
    altAr: 'كرسيان في البلكونة بإطلالة على حمام السباحة وأشجار النخيل' },
  { file: 'pool-view-from-balcony.jpg', category: 'balcony',
    altEn: 'Pool view from the balcony, with sun loungers and umbrellas below',
    altAr: 'إطلالة على حمام السباحة من البلكونة مع الشماسي وكراسي الاسترخاء' },
  { file: 'golden-hour-balcony-view.jpg', category: 'balcony',
    altEn: 'Balcony view at golden hour over the pool, gardens and neighbouring chalets, with a glass of tea on the railing',
    altAr: 'إطلالة البلكونة وقت الغروب على حمام السباحة والحدائق والشاليهات المجاورة مع كوب شاي على السور' },
  { file: 'morning-coffee-on-the-balcony.jpg', category: 'balcony',
    altEn: 'Two cups of coffee on the balcony railing with a view of the resort',
    altAr: 'فنجانا قهوة على سور البلكونة مع إطلالة على القرية' },
  { file: 'garden-view.jpg', category: 'balcony',
    altEn: 'View from the balcony over landscaped gardens and walkways',
    altAr: 'إطلالة من البلكونة على الحدائق والممرات' },
  { file: 'living-room-with-balcony-access.jpg', category: 'living', home: true,
    altEn: 'Living room seating area with a door opening onto the balcony',
    altAr: 'جلسة غرفة المعيشة مع باب يؤدي إلى البلكونة' },
  { file: 'living-room.jpg', category: 'living',
    altEn: 'Living room with a blue L-shaped sofa, patterned cushions, a wall-mounted TV and an air conditioner',
    altAr: 'غرفة المعيشة بكنبة زرقاء على شكل حرف L ووسائد ملونة وتلفزيون معلّق وجهاز تكييف' },
  { file: 'living-and-dining-area.jpg', category: 'living',
    altEn: 'Living area with a sofa, table and chairs, with the kitchen visible in the background',
    altAr: 'منطقة المعيشة بكنبة وطاولة وكراسٍ ويظهر المطبخ في الخلفية' },
  { file: 'kitchen.jpg', category: 'kitchen', home: true,
    altEn: 'Kitchen with a refrigerator, stovetop, sink, countertop appliances and a small breakfast counter',
    altAr: 'المطبخ بثلاجة وموقد وحوض وأجهزة صغيرة على الرخامة وبار صغير للإفطار' },
  { file: 'open-plan-kitchen.jpg', category: 'kitchen',
    altEn: 'Open-plan kitchen next to the living room',
    altAr: 'مطبخ مفتوح بجوار غرفة المعيشة' },
  { file: 'bedroom-1.jpg', category: 'bedrooms', home: true,
    altEn: 'Bedroom 1 with a wooden bunk bed, a single bed and a wall-mounted air conditioner',
    altAr: 'غرفة النوم الأولى بسرير دورين خشبي وسرير فردي وجهاز تكييف' },
  { file: 'bedroom-1-wardrobe.jpg', category: 'bedrooms',
    altEn: 'Bedroom 1 showing the built-in wooden wardrobe and the bunk bed',
    altAr: 'غرفة النوم الأولى ويظهر بها الدولاب الخشبي المدمج والسرير الدورين' },
  { file: 'bedroom-2-twin-beds.jpg', category: 'bedrooms', home: true,
    altEn: 'Bedroom 2 with two single beds and an air conditioner above the window',
    altAr: 'غرفة النوم الثانية بسريرين فرديين وجهاز تكييف فوق الشباك' },
  { file: 'bedroom-2.jpg', category: 'bedrooms',
    altEn: 'Bedroom 2 with twin beds, a striped rug and a wardrobe',
    altAr: 'غرفة النوم الثانية بسريرين فرديين وسجادة مخططة ودولاب' },
  { file: 'bathroom.jpg', category: 'bathroom',
    altEn: 'Bathroom with a sink, toilet, shower area and electric water heater',
    altAr: 'الحمام بحوض وتواليت ومنطقة للدش وسخان مياه كهربائي' },
  { file: 'compound-pool.jpg', category: 'pools', home: true,
    altEn: 'Shared swimming pool in the Mountain View 2 resort, surrounded by chalets',
    altAr: 'حمام سباحة مشترك في قرية ماونتن فيو 2 تحيط به الشاليهات' },
  { file: 'lagoon-pool.jpg', category: 'pools',
    altEn: 'Large curved shared pool lined with palm trees in the resort',
    altAr: 'حمام سباحة مشترك كبير بتصميم منحنٍ تحيط به أشجار النخيل' },
  { file: 'palm-walkway-to-beach.jpg', category: 'beach',
    altEn: 'Palm-lined walkway leading to the beach and its umbrellas',
    altAr: 'ممشى تحيط به أشجار النخيل يؤدي إلى الشاطئ والشماسي' },
  { file: 'beach-pier.jpg', category: 'beach', home: true,
    altEn: 'Wooden pier stretching from the sandy beach into the Red Sea',
    altAr: 'مرسى خشبي يمتد من الشاطئ الرملي إلى مياه البحر الأحمر' },
  { file: 'sandy-beach.jpg', category: 'beach',
    altEn: 'Wide sandy beach along the Red Sea coast',
    altAr: 'شاطئ رملي واسع على ساحل البحر الأحمر' },
  { file: 'beachfront-palms.jpg', category: 'beach',
    altEn: 'Palm trees and lawn beside the beach promenade',
    altAr: 'أشجار نخيل ومسطحات خضراء بجوار ممشى الشاطئ' },
  { file: 'beach-pedal-boats.jpg', category: 'beach',
    altEn: 'Pedal boats and straw umbrellas on the beach',
    altAr: 'قوارب بدّال وشماسي من القش على الشاطئ' },
  { file: 'sunset-on-the-beach.jpg', category: 'beach',
    altEn: 'Sunset over the sea with pedal boats resting on the sand',
    altAr: 'غروب الشمس على البحر وقوارب البدّال على الرمال' },
  { file: 'pier-at-night.jpg', category: 'beach',
    altEn: 'The illuminated wooden pier at night',
    altAr: 'المرسى الخشبي مضاءً ليلًا' },
  { file: 'kids-playground.jpg', category: 'kids', home: true,
    altEn: "Children's playground with wooden play frames and slides on the sand",
    altAr: 'منطقة ألعاب أطفال بها ألعاب خشبية وزحاليق على الرمال' },
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
