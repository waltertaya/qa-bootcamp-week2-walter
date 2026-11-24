import { test, expect } from "@playwright/test";

test("searching for pliers returns only matching products", async ({ page }) => {
  await page.goto("/");

  const search = page.getByRole("textbox", { name: "Search" });

  await search.fill("pliers");
  await search.press("Enter");

  await expect
    .poll(
      async () => {
        const names = await page.locator(".card-title").allTextContents();

        return (
          names.length > 0 &&
          names.every((name) => /pliers/i.test(name.trim()))
        );
      },
      { timeout: 10_000 }
    )
    .toBe(true);
});
