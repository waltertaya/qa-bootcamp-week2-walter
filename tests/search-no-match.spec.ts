import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("searching for a term with no matches shows no products", async ({ page }) => {
  const home = new HomePage(page);

  await home.open();
  await home.searchFor("zzzz-no-match");

  await home.expectNoResults();
  expect(await home.productNames()).toHaveLength(0);
});
