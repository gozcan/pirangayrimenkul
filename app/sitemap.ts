import type { MetadataRoute } from "next";

/**
 * Sitemap served at /sitemap.xml.
 *
 * Important SEO notes:
 *  - Only canonical pages are listed. URL fragments (#kentsel-donusum) are
 *    intentionally excluded because Google treats them as the same page as
 *    the parent URL.
 *  - `lastModified` uses a stable per-page constant. Don't use `new Date()`
 *    here — it changes on every build and Google then de-weights the signal.
 *    When you meaningfully update a page, bump its date below.
 *  - `alternates.languages` mirrors the per-page hreflang setup in metadata.
 */

const BASE = "https://www.pirangyd.com";

// Bump these when content meaningfully changes.
const HOME_UPDATED = new Date("2026-05-26");
const HIZMETLER_UPDATED = new Date("2026-05-26");
const HAKKIMIZDA_UPDATED = new Date("2026-05-26");
const ILETISIM_UPDATED = new Date("2026-05-26");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE}/`,
      lastModified: HOME_UPDATED,
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          tr: `${BASE}/`,
          en: `${BASE}/?lang=en`,
        },
      },
    },
    {
      url: `${BASE}/hizmetler`,
      lastModified: HIZMETLER_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${BASE}/hizmetler`,
          en: `${BASE}/hizmetler?lang=en`,
        },
      },
    },
    {
      url: `${BASE}/hakkimizda`,
      lastModified: HAKKIMIZDA_UPDATED,
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: {
        languages: {
          tr: `${BASE}/hakkimizda`,
          en: `${BASE}/hakkimizda?lang=en`,
        },
      },
    },
    {
      url: `${BASE}/iletisim`,
      lastModified: ILETISIM_UPDATED,
      changeFrequency: "monthly",
      priority: 0.85,
      alternates: {
        languages: {
          tr: `${BASE}/iletisim`,
          en: `${BASE}/iletisim?lang=en`,
        },
      },
    },
  ];
}
