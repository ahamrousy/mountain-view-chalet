import { getImage } from 'astro:assets';
import type { Photo } from '../config/photos';
import { absUrl } from './urls';

/** Large WebP used by the lightbox (and as the no-JS link target). */
export async function lightboxSrc(p: Photo) {
  const img = await getImage({ src: p.src, width: Math.min(1600, p.src.width), format: 'webp', quality: 74 });
  return img.src;
}

/** 1200px JPEG for Open Graph / structured data (absolute URL). */
export async function shareImage(p: Photo) {
  const img = await getImage({ src: p.src, width: 1200, format: 'jpg', quality: 80 });
  const width = 1200;
  const height = Math.round((p.src.height / p.src.width) * width);
  return { url: new URL(img.src, absUrl('')).href, width, height };
}
