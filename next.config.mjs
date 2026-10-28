/**
 * Next.js configuration.
 *
 * - `output: "export"` turns the app into plain static files in /out,
 *   so Netlify can serve it as a static site (no server functions needed).
 * - `trailingSlash: true` exports /thank-you/index.html instead of thank-you.html,
 *   which gives clean URLs on any static host.
 * - Images are resized by the Unsplash CDN through a custom loader,
 *   so no image optimization runs on Netlify and no build minutes are spent on it.
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./lib/image-loader.js",
  },
};

export default nextConfig;
