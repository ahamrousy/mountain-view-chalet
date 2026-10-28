/** Shared helpers and types for all language files. */
import { contact } from '../config/site';

/** Wrap Latin/number runs (phone numbers) so they render correctly inside right-to-left text. */
export const ltr = (x: string) => `⁦${x}⁩`;
export const phone = ltr(contact.whatsappDisplay);
export const phoneLocal = ltr(contact.whatsappLocal);

export type AmenityIcon =
  | 'AirVent' | 'Waves' | 'CookingPot' | 'SquareParking' | 'ShowerHead' | 'Refrigerator'
  | 'Tv' | 'WashingMachine' | 'Utensils' | 'Sun' | 'ToyBrick' | 'Palmtree';

export interface Amenity {
  icon: AmenityIcon;
  label: string;
  detail?: string;
  schemaName: string; // English name used in structured data (same for every language)
}

export interface FaqItem { id: string; q: string; a: string }

/** The English pre-filled WhatsApp message. Non-English/Arabic messages append it so the host can always read the request. */
export const waMessageEn =
  "Hello, I'm interested in renting Mountain View 2 Chalet in Ain Sokhna. Could you please share the available dates, rental price, and booking details?";
