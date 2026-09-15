import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/data/siteData";
import {
  DEFAULT_SITE_ORIGIN,
  INVENTORY_PATH,
  absoluteUrl,
  buildSitemapXml,
  getSitemapEntries,
  inventoryPath,
  parseVehicleTitle,
  vehicleDocumentTitle,
  vehicleMetaDescription,
} from "./seo";

describe("seo helpers", () => {
  it("builds inventory paths", () => {
    expect(inventoryPath()).toBe(INVENTORY_PATH);
    expect(inventoryPath("volkswagen-atlas-v6-se")).toBe("/inventory/volkswagen-atlas-v6-se");
  });

  it("parses vehicle titles from actual inventory names", () => {
    expect(parseVehicleTitle("2021 Volkswagen Atlas V6 SE", "2021")).toEqual({
      year: "2021",
      make: "Volkswagen",
      model: "Atlas V6 SE",
    });
    expect(parseVehicleTitle("2018 Mercedes-Benz GLA 250", "2018")).toEqual({
      year: "2018",
      make: "Mercedes-Benz",
      model: "GLA 250",
    });
  });

  it("creates unique vehicle titles and descriptions from live inventory data", () => {
    const titles = PROJECTS.map(vehicleDocumentTitle);
    const descriptions = PROJECTS.map(vehicleMetaDescription);
    expect(new Set(titles).size).toBe(PROJECTS.length);
    expect(new Set(descriptions).size).toBe(PROJECTS.length);
    expect(titles[0]).toContain("for Sale in Orlando, FL");
    expect(descriptions[0]).toContain("Orlando");
  });

  it("includes homepage, inventory, and every vehicle in the sitemap", () => {
    const paths = getSitemapEntries().map(entry => entry.path);
    expect(paths).toContain("/");
    expect(paths).toContain(INVENTORY_PATH);
    expect(paths).toContain("/financing/apply");
    expect(paths).toContain("/contact");
    for (const vehicle of PROJECTS) {
      expect(paths).toContain(inventoryPath(vehicle.id));
    }
    expect(paths).not.toContain("/projects");
    const xml = buildSitemapXml("2026-09-15");
    expect(xml).toContain(`${DEFAULT_SITE_ORIGIN}/inventory/volkswagen-atlas-v6-se`);
    expect(xml).toContain("<loc>");
  });

  it("builds absolute production URLs", () => {
    expect(absoluteUrl("/inventory")).toBe(`${DEFAULT_SITE_ORIGIN}/inventory`);
  });
});
