/**
 * Custom image loader for next/image.
 *
 * Unsplash serves resized, compressed images (WebP/AVIF when supported)
 * from its own CDN. Passing width and quality as URL parameters lets
 * next/image build a responsive srcset without any server-side optimization.
 * Local images (paths starting with "/") are returned unchanged.
 */

export default function imageLoader({ src, width, quality }) {
  if (src.startsWith("/")) {
    return src;
  }

  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality || 70));
  return url.toString();
}
