/**
 * All visible copy for both languages. Facts come from src/config/site.ts.
 * Keep English and Arabic consistent: same facts, same order.
 */
import { contact, property } from '../config/site';

/** Wrap Latin/number runs (phone numbers) so they render correctly inside Arabic text. */
const ltr = (x: string) => `⁦${x}⁩`;
const phone = ltr(contact.whatsappDisplay);
const phoneLocal = ltr(contact.whatsappLocal);

export type Lang = 'en' | 'ar';
export const languages: Lang[] = ['en', 'ar'];

export type AmenityIcon =
  | 'AirVent' | 'Waves' | 'CookingPot' | 'SquareParking' | 'ShowerHead' | 'Refrigerator'
  | 'Tv' | 'WashingMachine' | 'Utensils' | 'Sun' | 'ToyBrick' | 'Palmtree';

export interface Amenity {
  icon: AmenityIcon;
  label: string;
  detail?: string;
  schemaName: string; // English name used in structured data (same for both languages)
}

const amenitiesInside = {
  en: [
    { icon: 'AirVent', label: 'Air conditioning', detail: 'Air-conditioned bedrooms', schemaName: 'Air conditioning' },
    { icon: 'Utensils', label: 'Kitchen', detail: 'Refrigerator, oven and stovetop', schemaName: 'Kitchen' },
    { icon: 'CookingPot', label: 'Cooking basics', detail: 'Pots and pans, oil, salt and pepper', schemaName: 'Cooking basics' },
    { icon: 'Refrigerator', label: 'Refrigerator', schemaName: 'Refrigerator' },
    { icon: 'Tv', label: 'Television', schemaName: 'TV' },
    { icon: 'WashingMachine', label: 'Washing machine', schemaName: 'Washing machine' },
    { icon: 'ShowerHead', label: 'Hot water', schemaName: 'Hot water' },
    { icon: 'Sun', label: 'Private balcony', detail: 'Overlooking the pool and gardens', schemaName: 'Private balcony with pool and garden views' },
  ],
  ar: [
    { icon: 'AirVent', label: 'تكييف', detail: 'غرف نوم مكيّفة', schemaName: 'Air conditioning' },
    { icon: 'Utensils', label: 'مطبخ', detail: 'ثلاجة وفرن وموقد', schemaName: 'Kitchen' },
    { icon: 'CookingPot', label: 'أساسيات الطهي', detail: 'حلل وطاسات وزيت وملح وفلفل', schemaName: 'Cooking basics' },
    { icon: 'Refrigerator', label: 'ثلاجة', schemaName: 'Refrigerator' },
    { icon: 'Tv', label: 'تلفزيون', schemaName: 'TV' },
    { icon: 'WashingMachine', label: 'غسالة ملابس', schemaName: 'Washing machine' },
    { icon: 'ShowerHead', label: 'مياه ساخنة', schemaName: 'Hot water' },
    { icon: 'Sun', label: 'بلكونة خاصة', detail: 'تطل على حمام السباحة والحدائق', schemaName: 'Private balcony with pool and garden views' },
  ],
} satisfies Record<Lang, Amenity[]>;

const amenitiesResort = {
  en: [
    { icon: 'Waves', label: 'Swimming pool access', detail: 'Shared resort pools', schemaName: 'Swimming pool access (shared)' },
    { icon: 'Palmtree', label: 'Beach access', detail: 'Shared resort beach', schemaName: 'Beach access (shared)' },
    { icon: 'ToyBrick', label: "Children's play area", detail: 'In the resort — ask us for current details', schemaName: "Children's play area (shared)" },
    { icon: 'SquareParking', label: 'Free parking', detail: 'On the premises', schemaName: 'Free parking on premises' },
  ],
  ar: [
    { icon: 'Waves', label: 'استخدام حمام السباحة', detail: 'حمامات سباحة مشتركة بالقرية', schemaName: 'Swimming pool access (shared)' },
    { icon: 'Palmtree', label: 'الوصول إلى الشاطئ', detail: 'شاطئ مشترك بالقرية', schemaName: 'Beach access (shared)' },
    { icon: 'ToyBrick', label: 'منطقة ألعاب أطفال', detail: 'داخل القرية — اسألنا عن التفاصيل الحالية', schemaName: "Children's play area (shared)" },
    { icon: 'SquareParking', label: 'موقف سيارات مجاني', detail: 'داخل المكان', schemaName: 'Free parking on premises' },
  ],
} satisfies Record<Lang, Amenity[]>;

export interface FaqItem { id: string; q: string; a: string }

const t = {
  en: {
    dir: 'ltr',
    locale: 'en_US',
    langName: 'English',
    switchTo: 'العربية',
    switchLabel: 'اقرأ هذه الصفحة بالعربية',
    skip: 'Skip to main content',
    propertyName: property.nameEn,
    meta: {
      homeTitle: 'Mountain View 2 Chalet for Rent in Ain Sokhna, Egypt',
      homeDescription:
        'Two-bedroom family chalet in Mountain View 2, Ain Sokhna, for up to 4 adults and 2 children, with pool and garden views. Message us on WhatsApp for dates and rates.',
      galleryTitle: 'Photo Gallery – Mountain View 2 Chalet, Ain Sokhna',
      galleryDescription:
        'Real photos of Mountain View 2 Chalet in Ain Sokhna: the balcony with pool views, living room, kitchen, two bedrooms, bathroom, and the resort pools and beach.',
      notFoundTitle: 'Page not found – Mountain View 2 Chalet',
    },
    nav: {
      label: 'Main navigation',
      home: 'Home',
      chalet: 'The chalet',
      amenities: 'Amenities',
      gallery: 'Photos',
      location: 'Location',
      faq: 'FAQ',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close menu',
    },
    wa: {
      cta: 'Book Direct on WhatsApp',
      short: 'WhatsApp',
      ask: 'Ask on WhatsApp',
      check: 'Check availability on WhatsApp',
      contact: 'Contact us on WhatsApp',
      opens: '(opens WhatsApp)',
      message:
        "Hello, I'm interested in renting Mountain View 2 Chalet in Ain Sokhna. Could you please share the available dates, rental price, and booking details?",
    },
    hero: {
      eyebrow: 'Holiday chalet · Ain Sokhna, Red Sea',
      title: 'Your Red Sea Family Escape at Mountain View, Ain Sokhna',
      lead:
        'Wake up to palm trees and pool views in a bright two-bedroom chalet. Sip your morning coffee on the private balcony, then spend the day at the resort pool or on the beach.',
      galleryCta: 'Explore the photos',
      location: property.locationEn,
    },
    facts: {
      guests: 'Guests',
      guestsValue: `${property.maxAdults} adults + ${property.maxChildren} children`,
      bedrooms: 'Bedrooms',
      beds: 'Beds',
      bathrooms: 'Bathroom',
    },
    summary: {
      heading: 'Mountain View 2 Chalet at a glance',
      text: `${property.entityEn} The chalet sleeps up to ${property.maxAdults} adults and ${property.maxChildren} children, with ${property.bedrooms} bedrooms, ${property.beds} beds and ${property.bathrooms} bathroom. It has air conditioning, a kitchen and a private balcony overlooking the pool and gardens. Guests can use the resort's shared swimming pools, beach access and children's play area. Bookings are arranged directly with the host on WhatsApp (${phone}).`,
    },
    details: {
      heading: 'A bright, family-friendly chalet in Ain Sokhna',
      intro: [
        'Mountain View 2 Chalet is a two-bedroom holiday home in the Mountain View 2 resort on the Red Sea coast of Ain Sokhna. It suits families and small groups looking for a relaxed seaside break within easy reach of Cairo and other Egyptian cities.',
        'The cozy living room opens onto a private balcony with views over the pool, palm trees and gardens — a lovely spot for breakfast or an evening tea. Both bedrooms are air-conditioned, and the kitchen has a refrigerator, oven and stovetop, so you can cook simple meals during your stay.',
      ],
      listHeading: 'Inside the chalet',
      items: [
        { title: 'Living room', text: 'Comfortable sofa seating, a TV and direct access to the balcony.' },
        { title: 'Two air-conditioned bedrooms', text: 'Five beds in total. The photos show a bunk bed and a single bed in one room, and two single beds in the other.' },
        { title: 'Kitchen', text: 'Refrigerator, oven and stovetop, plus cooking basics: pots and pans, oil, salt and pepper.' },
        { title: 'Bathroom', text: 'One bathroom with hot water.' },
        { title: 'Private balcony', text: 'Overlooks the shared swimming pool and gardens.' },
        { title: 'Washing machine', text: 'Handy for longer family stays.' },
      ],
      sharedNote:
        'The swimming pools, beach and children’s play area are shared resort facilities and are not private to the chalet.',
      viewAll: 'See all photos of the chalet',
    },
    amenities: {
      heading: 'Amenities',
      intro: 'Everything listed here is confirmed by the host. If you need something not on the list, please ask before booking.',
      insideHeading: 'In the chalet',
      resortHeading: 'In the resort (shared)',
      inside: amenitiesInside.en,
      resort: amenitiesResort.en,
    },
    gallery: {
      heading: 'Photos of the chalet and resort',
      intro: 'Real photos of the chalet, its balcony views and the resort facilities. Tap any photo to enlarge it.',
      pageHeading: 'Photo gallery',
      pageIntro:
        'Every photo on this page shows Mountain View 2 Chalet or the shared facilities of the Mountain View 2 resort in Ain Sokhna. Photos are grouped by area.',
      viewAll: 'View the full photo gallery',
      backHome: 'Back to the chalet overview',
      open: 'Open photo',
      close: 'Close',
      prev: 'Previous photo',
      next: 'Next photo',
      of: 'of',
      dialogLabel: 'Photo viewer',
      categoriesLabel: 'Jump to',
      ctaText: 'Like what you see? Ask the host about your dates.',
    },
    location: {
      heading: 'Location',
      text: `The chalet is in Mountain View 2, Ain Sokhna (also written Ain El Sokhna or Ein Sokhna), in the Zafraana area on Egypt's Red Sea coast.`,
      addressLabel: 'Address',
      directions: 'Get Directions',
      openMaps: 'Find the chalet on Google Maps',
      loadMap: 'Show interactive map',
      mapNote: 'The map is loaded from Google Maps only when you choose to show it.',
      mapTitle: 'Map showing the location of Mountain View 2 Chalet',
      ask: 'Need directions or arrival details? Ask on WhatsApp.',
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        { id: 'guests', q: 'How many guests can stay at Mountain View 2 Chalet?', a: `The chalet sleeps up to ${property.maxAdults} adults and ${property.maxChildren} children.` },
        { id: 'rooms', q: 'How many bedrooms, beds and bathrooms are there?', a: `There are ${property.bedrooms} bedrooms, ${property.beds} beds and ${property.bathrooms} bathroom. The bedrooms are air-conditioned.` },
        { id: 'amenities', q: 'What amenities are included?', a: 'Air conditioning, a kitchen with refrigerator, oven and stovetop, cooking basics (pots and pans, oil, salt and pepper), a TV, a washing machine, hot water and a private balcony. In the resort, guests have swimming pool access, beach access, a children’s play area and free parking on the premises.' },
        { id: 'pool', q: 'Is there access to a swimming pool?', a: 'Yes. Guests can use the resort’s shared swimming pools, and the chalet’s balcony overlooks a pool and gardens. The pools are shared with other resort guests, not private to the chalet.' },
        { id: 'beach', q: 'Is beach access available?', a: 'Yes, beach access is included. The beach is a shared resort facility.' },
        { id: 'parking', q: 'Is parking available?', a: 'Yes, there is free parking on the premises.' },
        { id: 'families', q: 'Is the chalet suitable for families with children?', a: `Yes. The chalet is set up for families, with room for ${property.maxChildren} children alongside ${property.maxAdults} adults, a bunk bed in one bedroom, and a children’s play area in the resort. If you need specific items for young children, please ask on WhatsApp before booking.` },
        { id: 'pricing', q: 'How can I check availability and prices?', a: `Send a WhatsApp message to ${phone} with your dates and the number of guests. The host will reply with availability, the rental price and booking details. Prices are not published online.` },
        { id: 'checkin', q: 'What are the check-in and check-out times?', a: 'Check-in and check-out times are confirmed by the host when you book. Please ask on WhatsApp.' },
        { id: 'where', q: 'Where is the chalet located?', a: `${property.entityEn} You can find it on Google Maps using the link in the Location section.` },
        { id: 'contact', q: 'How can I contact the host?', a: `The fastest way is WhatsApp: ${phone} (${phoneLocal} in Egypt). You can also follow the chalet on Instagram and Facebook, or view the Airbnb listing.` },
        { id: 'airbnb', q: 'Is the chalet also listed on Airbnb?', a: 'Yes, the chalet has an Airbnb listing. You can also contact the host directly on WhatsApp to ask about booking.' },
      ] as FaqItem[],
      more: 'Have another question?',
    },
    contact: {
      heading: 'Book directly with the host',
      text: 'Message us on WhatsApp to ask about available dates, rates and booking details. Tell us your dates and how many adults and children are travelling, and we will get back to you.',
      numberLabel: 'WhatsApp',
      followHeading: 'Find us online',
    },
    social: {
      instagram: 'Follow on Instagram',
      facebook: 'Visit us on Facebook',
      maps: 'Find the chalet on Google Maps',
      airbnb: 'View the Airbnb listing',
      newTab: '(opens in a new tab)',
    },
    footer: {
      language: 'Language',
      disclaimer:
        'This website promotes an independently operated holiday rental. It is not the official website of Mountain View or its developer.',
      rights: 'All rights reserved.',
      gallery: 'Photo gallery',
    },
    notFound: {
      heading: 'Page not found',
      text: 'The page you are looking for does not exist or has moved.',
      home: 'Go to the English homepage',
    },
  },

  ar: {
    dir: 'rtl',
    locale: 'ar_EG',
    langName: 'العربية',
    switchTo: 'English',
    switchLabel: 'Read this page in English',
    skip: 'تخطَّ إلى المحتوى الرئيسي',
    propertyName: property.nameAr,
    meta: {
      homeTitle: 'شاليه ماونتن فيو 2 للإيجار في العين السخنة',
      homeDescription:
        'شاليه عائلي بغرفتي نوم في ماونتن فيو 2 العين السخنة، يتسع لـ4 بالغين وطفلين، بإطلالة على حمام السباحة والحدائق. تواصل معنا عبر واتساب لمعرفة الأسعار والمواعيد المتاحة.',
      galleryTitle: 'صور شاليه ماونتن فيو 2 في العين السخنة',
      galleryDescription:
        'صور حقيقية لشاليه ماونتن فيو 2 في العين السخنة: البلكونة المطلة على حمام السباحة، وغرفة المعيشة، والمطبخ، وغرفتا النوم، والحمام، وحمامات السباحة والشاطئ بالقرية.',
      notFoundTitle: 'الصفحة غير موجودة – شاليه ماونتن فيو 2',
    },
    nav: {
      label: 'القائمة الرئيسية',
      home: 'الرئيسية',
      chalet: 'الشاليه',
      amenities: 'المميزات',
      gallery: 'الصور',
      location: 'الموقع',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      menu: 'القائمة',
      close: 'إغلاق القائمة',
    },
    wa: {
      cta: 'احجز مباشرة عبر واتساب',
      short: 'واتساب',
      ask: 'اسأل عبر واتساب',
      check: 'اعرف المواعيد المتاحة عبر واتساب',
      contact: 'تواصل معنا عبر واتساب',
      opens: '(يفتح واتساب)',
      message:
        'مرحبًا، أنا مهتم بحجز شاليه ماونتن فيو 2 في العين السخنة. هل يمكن معرفة المواعيد المتاحة والأسعار وتفاصيل الحجز؟',
    },
    hero: {
      eyebrow: 'شاليه للإيجار · العين السخنة، البحر الأحمر',
      title: 'عطلتك العائلية على البحر الأحمر في ماونتن فيو العين السخنة',
      lead:
        'استيقظ على منظر النخيل وحمام السباحة في شاليه مشرق بغرفتي نوم. استمتع بقهوة الصباح في البلكونة الخاصة، وقضِّ يومك بين حمام السباحة والشاطئ.',
      galleryCta: 'تصفّح صور الشاليه',
      location: property.locationAr,
    },
    facts: {
      guests: 'الضيوف',
      guestsValue: `${property.maxAdults} بالغين + طفلان`,
      bedrooms: 'غرف نوم',
      beds: 'أسرّة',
      bathrooms: 'حمام',
    },
    summary: {
      heading: 'شاليه ماونتن فيو 2 باختصار',
      text: `${property.entityAr} يتسع الشاليه لـ${property.maxAdults} بالغين وطفلين، ويضم غرفتي نوم و${property.beds} أسرّة وحمامًا واحدًا. يتوفر فيه التكييف ومطبخ وبلكونة خاصة تطل على حمام السباحة والحدائق، ويمكن للضيوف استخدام حمامات السباحة المشتركة بالقرية والوصول إلى الشاطئ ومنطقة ألعاب الأطفال. يتم الحجز مباشرة مع المالك عبر واتساب على الرقم ${phone}.`,
    },
    details: {
      heading: 'شاليه مشرق ومناسب للعائلات في العين السخنة',
      intro: [
        'شاليه ماونتن فيو 2 بيت عطلات بغرفتي نوم داخل قرية ماونتن فيو 2 على ساحل البحر الأحمر في العين السخنة. خيار مناسب للعائلات والمجموعات الصغيرة التي تبحث عن إجازة هادئة على البحر بالقرب من القاهرة والمدن المصرية الأخرى.',
        'تنفتح غرفة المعيشة المريحة على بلكونة خاصة تطل على حمام السباحة والنخيل والحدائق، وهي مكان مثالي للإفطار أو لشاي المساء. غرفتا النوم مكيّفتان، والمطبخ مجهز بثلاجة وفرن وموقد لتحضير وجباتك بسهولة أثناء الإقامة.',
      ],
      listHeading: 'داخل الشاليه',
      items: [
        { title: 'غرفة المعيشة', text: 'جلسة مريحة وتلفزيون وباب يؤدي مباشرة إلى البلكونة.' },
        { title: 'غرفتا نوم مكيّفتان', text: 'خمسة أسرّة إجمالًا. تُظهر الصور سريرًا دورين وسريرًا فرديًا في غرفة، وسريرين فرديين في الغرفة الأخرى.' },
        { title: 'المطبخ', text: 'ثلاجة وفرن وموقد، مع أساسيات الطهي: حلل وطاسات وزيت وملح وفلفل.' },
        { title: 'الحمام', text: 'حمام واحد بمياه ساخنة.' },
        { title: 'بلكونة خاصة', text: 'تطل على حمام السباحة المشترك والحدائق.' },
        { title: 'غسالة ملابس', text: 'مفيدة للإقامات العائلية الطويلة.' },
      ],
      sharedNote: 'حمامات السباحة والشاطئ ومنطقة ألعاب الأطفال مرافق مشتركة داخل القرية، وليست خاصة بالشاليه.',
      viewAll: 'شاهد جميع صور الشاليه',
    },
    amenities: {
      heading: 'المميزات والمرافق',
      intro: 'كل ما في هذه القائمة مؤكد من المالك. إذا كنت تحتاج شيئًا غير موجود فيها، اسألنا قبل الحجز.',
      insideHeading: 'داخل الشاليه',
      resortHeading: 'داخل القرية (مرافق مشتركة)',
      inside: amenitiesInside.ar,
      resort: amenitiesResort.ar,
    },
    gallery: {
      heading: 'صور الشاليه والقرية',
      intro: 'صور حقيقية للشاليه وإطلالة البلكونة ومرافق القرية. اضغط على أي صورة لتكبيرها.',
      pageHeading: 'معرض الصور',
      pageIntro:
        'كل الصور في هذه الصفحة لشاليه ماونتن فيو 2 أو للمرافق المشتركة في قرية ماونتن فيو 2 بالعين السخنة، ومرتبة حسب المكان.',
      viewAll: 'شاهد معرض الصور كاملًا',
      backHome: 'العودة إلى صفحة الشاليه',
      open: 'فتح الصورة',
      close: 'إغلاق',
      prev: 'الصورة السابقة',
      next: 'الصورة التالية',
      of: 'من',
      dialogLabel: 'عارض الصور',
      categoriesLabel: 'انتقل إلى',
      ctaText: 'أعجبك المكان؟ اسأل المالك عن المواعيد المناسبة لك.',
    },
    location: {
      heading: 'الموقع',
      text: 'يقع الشاليه في ماونتن فيو 2 بالعين السخنة، في منطقة الزعفرانة على ساحل البحر الأحمر في مصر.',
      addressLabel: 'العنوان',
      directions: 'الاتجاهات',
      openMaps: 'اعثر على الشاليه في خرائط جوجل',
      loadMap: 'عرض الخريطة التفاعلية',
      mapNote: 'لا يتم تحميل خريطة جوجل إلا عند اختيارك عرضها.',
      mapTitle: 'خريطة توضح موقع شاليه ماونتن فيو 2',
      ask: 'تحتاج إلى الاتجاهات أو تفاصيل الوصول؟ اسأل عبر واتساب.',
    },
    faq: {
      heading: 'الأسئلة الشائعة',
      items: [
        { id: 'guests', q: 'كام فرد يقدر يقيم في شاليه ماونتن فيو 2؟', a: `يتسع الشاليه لـ${property.maxAdults} بالغين وطفلين.` },
        { id: 'rooms', q: 'كم عدد غرف النوم والأسرّة والحمامات؟', a: `غرفتا نوم مكيّفتان، و${property.beds} أسرّة، وحمام واحد.` },
        { id: 'amenities', q: 'ما هي مميزات شاليه ماونتن فيو 2؟', a: 'تكييف، ومطبخ به ثلاجة وفرن وموقد، وأساسيات الطهي (حلل وطاسات وزيت وملح وفلفل)، وتلفزيون، وغسالة ملابس، ومياه ساخنة، وبلكونة خاصة. وداخل القرية: حمامات سباحة، ووصول إلى الشاطئ، ومنطقة ألعاب أطفال، وموقف سيارات مجاني.' },
        { id: 'pool', q: 'هل يوجد حمام سباحة؟', a: 'نعم، يمكن للضيوف استخدام حمامات السباحة المشتركة في القرية، والبلكونة تطل على حمام سباحة وحدائق. حمامات السباحة مشتركة مع باقي ضيوف القرية وليست خاصة بالشاليه.' },
        { id: 'beach', q: 'هل يمكن الوصول إلى الشاطئ؟', a: 'نعم، الوصول إلى الشاطئ متاح، والشاطئ من المرافق المشتركة في القرية.' },
        { id: 'parking', q: 'هل يوجد موقف للسيارات؟', a: 'نعم، يوجد موقف سيارات مجاني داخل المكان.' },
        { id: 'families', q: 'هل الشاليه مناسب للعائلات والأطفال؟', a: 'نعم، الشاليه مجهز للعائلات ويتسع لطفلين مع 4 بالغين، وبه سرير دورين في إحدى الغرف، وتوجد منطقة ألعاب أطفال داخل القرية. إذا كنت تحتاج مستلزمات معينة للأطفال الصغار، اسألنا عبر واتساب قبل الحجز.' },
        { id: 'pricing', q: 'كيف أحجز شاليه في العين السخنة وأعرف الأسعار والمواعيد؟', a: `أرسل رسالة واتساب إلى الرقم ${phone} تذكر فيها المواعيد وعدد الضيوف، وسيرد عليك المالك بالمواعيد المتاحة والسعر وتفاصيل الحجز. الأسعار غير منشورة على الموقع.` },
        { id: 'checkin', q: 'ما مواعيد تسجيل الوصول والمغادرة؟', a: 'يؤكد المالك مواعيد الوصول والمغادرة عند الحجز. يمكنك السؤال عنها عبر واتساب.' },
        { id: 'where', q: 'أين يقع الشاليه؟', a: `${property.entityAr} ويمكنك العثور عليه في خرائط جوجل من خلال الرابط في قسم الموقع.` },
        { id: 'contact', q: 'ما رقم واتساب حجز الشاليه؟', a: `رقم الواتساب هو ${phoneLocal} (أو ${phone} من خارج مصر). ويمكنك أيضًا متابعة الشاليه على إنستجرام وفيسبوك أو مشاهدة إعلانه على Airbnb.` },
        { id: 'airbnb', q: 'هل الشاليه معروض على Airbnb؟', a: 'نعم، للشاليه إعلان على Airbnb، ويمكنك أيضًا التواصل مع المالك مباشرة عبر واتساب للاستفسار عن الحجز.' },
      ] as FaqItem[],
      more: 'عندك سؤال آخر؟',
    },
    contact: {
      heading: 'احجز مباشرة مع المالك',
      text: 'راسلنا عبر واتساب لمعرفة المواعيد المتاحة والأسعار وتفاصيل الحجز. اذكر لنا المواعيد وعدد البالغين والأطفال، وسنرد عليك.',
      numberLabel: 'واتساب',
      followHeading: 'تابعنا على الإنترنت',
    },
    social: {
      instagram: 'تابعنا على إنستجرام',
      facebook: 'زُر صفحتنا على فيسبوك',
      maps: 'اعثر على الشاليه في خرائط جوجل',
      airbnb: 'شاهد إعلان الشاليه على Airbnb',
      newTab: '(يفتح في نافذة جديدة)',
    },
    footer: {
      language: 'اللغة',
      disclaimer:
        'هذا الموقع للترويج لوحدة إيجار سياحي يديرها مالكها بشكل مستقل، وليس الموقع الرسمي لماونتن فيو أو لشركة التطوير.',
      rights: 'جميع الحقوق محفوظة.',
      gallery: 'معرض الصور',
    },
    notFound: {
      heading: 'الصفحة غير موجودة',
      text: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
      home: 'الذهاب إلى الصفحة الرئيسية بالعربية',
    },
  },
};

export type Strings = (typeof t)['en'];
export const strings: Record<Lang, Strings> = t as Record<Lang, Strings>;
export const getStrings = (lang: Lang): Strings => strings[lang];
