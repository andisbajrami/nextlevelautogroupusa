import type { Plugin } from "vite";
import fs from "node:fs/promises";
import path from "node:path";
import { applyPageSeoToHtml, buildRobotsTxt, buildSitemapXml, getPrerenderPages, HOME_SEO } from "./src/lib/seo";

export function seoPrerenderPlugin(): Plugin {
  return {
    name: "nextlevel-seo-prerender",
    apply: "build",
    async writeBundle(options) {
      const distDir = options.dir || path.resolve(process.cwd(), "dist");
      const indexPath = path.join(distDir, "index.html");
      const html = await fs.readFile(indexPath, "utf8");
      const pages = getPrerenderPages();

      for (const page of pages) {
        const pageHtml = applyPageSeoToHtml(html, page);
        if (page.path === "/") {
          await fs.writeFile(indexPath, pageHtml);
          continue;
        }
        const outDir = path.join(distDir, page.path.replace(/^\//, ""));
        await fs.mkdir(outDir, { recursive: true });
        await fs.writeFile(path.join(outDir, "index.html"), pageHtml);
      }

      await fs.writeFile(path.join(distDir, "sitemap.xml"), buildSitemapXml());
      await fs.writeFile(path.join(distDir, "robots.txt"), buildRobotsTxt());

      // Ensure the SPA shell still has homepage SEO if a later copy overwrote it.
      const homepage = pages.find(page => page.path === HOME_SEO.path);
      if (homepage) {
        await fs.writeFile(indexPath, applyPageSeoToHtml(html, homepage));
      }
    },
  };
}
