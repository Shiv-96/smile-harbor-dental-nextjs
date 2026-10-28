/**
 * Generates /sitemap.xml at build time. Only indexable pages are listed.
 */

import { SITE_URL } from "@/data/clinic";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
