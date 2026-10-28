/**
 * Generates /robots.txt at build time and points crawlers to the sitemap.
 * The static Netlify form definition file is not meant to be indexed.
 */

import { SITE_URL } from "@/data/clinic";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/__forms.html"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
