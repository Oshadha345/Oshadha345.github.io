import { writeFile } from "node:fs/promises";
import { SITE_URL, allProjects, books, writing } from "../src/data/site.js";

const paths = [
  "/", "/publications", "/projects", "/research", "/writing", "/gallery", "/about", "/reading",
  ...allProjects.map((project) => `/projects/${project.slug}`),
  ...writing.map((item) => `/writing/${item.slug}`),
  ...books.map((book) => `/reading/${book.slug}`),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join("\n")}
</urlset>
`;

await writeFile("public/sitemap.xml", xml);
console.log(`generate-sitemap: ${paths.length} URLs`);
