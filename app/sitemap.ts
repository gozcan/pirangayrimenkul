import type { MetadataRoute } from "next";

const BASE = "https://www.pirangyd.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE}/`,
      lastModified,
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
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/hizmetler#kentsel-donusum`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${BASE}/hizmetler#degerleme`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/hizmetler#insaat`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE}/hizmetler#yatirim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE}/hakkimizda`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE}/iletisim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];
}
