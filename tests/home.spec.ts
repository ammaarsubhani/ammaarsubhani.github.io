import { test, expect } from "@playwright/test";

test("homepage has text 'Ammaar Subhani' in title", async ({ page }) => {
  const port = 3000;
  const baseUrl = `http://localhost:${port}`;
  await page.goto(baseUrl, { timeout: 3000000 });
  await expect(page).toHaveTitle(/Ammaar Subhani/);

  const header = page.locator(".header h1");
  await expect(header).toHaveText(/Ammaar Subhani/);
});
