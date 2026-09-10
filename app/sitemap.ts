import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://laliguras.com";
  const currentDate = new Date();

  const routes = [
    { url: `${baseUrl}`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/about`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/services`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/projects`, priority: 0.9, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/projects/safestep`, priority: 0.95, changeFrequency: "weekly" as const },
    { url: `${baseUrl}/platform`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/training`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/team`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/contact`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}

