const { chromium, devices } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const outDir = "/tmp/megastroy-screenshots";
  const fs = require("fs");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const sections = [
    { name: "hero", y: 0 },
    { name: "about", y: 900 },
    { name: "services", y: 1800 },
    { name: "advantages", y: 2700 },
    { name: "partners", y: 3500 },
    { name: "projects", y: 4200 },
    { name: "footer", y: 5500 },
  ];

  // Desktop
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, "desktop-full.png"), fullPage: true });
    for (const s of sections) {
      await page.evaluate((y) => window.scrollTo(0, y), s.y);
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(outDir, `desktop-${s.name}.png`) });
    }
    await ctx.close();
  }

  // Mobile iPhone 14
  {
    const iphone = devices["iPhone 14"];
    const ctx = await browser.newContext({ ...iphone });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(outDir, "mobile-full.png"), fullPage: true });
    for (const s of sections) {
      await page.evaluate((y) => window.scrollTo(0, y), s.y);
      await page.waitForTimeout(300);
      await page.screenshot({ path: path.join(outDir, `mobile-${s.name}.png`) });
    }
    await ctx.close();
  }

  await browser.close();
  console.log("Done. Screenshots in", outDir);
})();
