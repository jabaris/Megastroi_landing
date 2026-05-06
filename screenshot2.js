const { chromium, devices } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const out = "/tmp/megastroy-screenshots";

  // Desktop — targeted sections
  {
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    for (const id of ["services", "projects"]) {
      await page.evaluate((s) => {
        document.getElementById(s)?.scrollIntoView({ behavior: "instant" });
      }, id);
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${out}/desktop-${id}-v2.png` });
    }
    await ctx.close();
  }

  // Mobile
  {
    const ctx = await browser.newContext({ ...devices["iPhone 14"] });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3000", { waitUntil: "networkidle" });
    await page.waitForTimeout(2000);

    for (const id of ["services", "projects"]) {
      await page.evaluate((s) => {
        document.getElementById(s)?.scrollIntoView({ behavior: "instant" });
      }, id);
      await page.waitForTimeout(600);
      await page.screenshot({ path: `${out}/mobile-${id}-v2.png` });
    }
    await ctx.close();
  }

  await browser.close();
  console.log("done");
})();
