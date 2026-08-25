import { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/about", "/services", "/portfolio", "/testimonials", "/faq", "/contact"]; return [...routes.map(r => ({ url: `${site.url}${r}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: r==="" ? 1 : 0.8 })), ...services.map(s => ({ url: `${site.url}/services/${s.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 }))]; }
