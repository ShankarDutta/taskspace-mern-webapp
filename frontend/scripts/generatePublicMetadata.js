import dotenv from "dotenv";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

dotenv.config({});

const domain = (process.env.VITE_PUBLIC_DOMAIN_NAME || "").replace(/\/$/, "");

if (!domain) {
  console.error("❌ VITE_DOMAIN_NAME is not set.");
  process.exit(1);
}

const publicDir = path.resolve("public");

const robots = `User-agent: *
Allow: *

Sitemap: ${domain}/sitemap.xml
`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

  <url>
    <loc>${domain}/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>

  <url>
    <loc>${domain}/about</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

</urlset>
`;

fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);

console.log("✅ Generated robots.txt and sitemap.xml");
