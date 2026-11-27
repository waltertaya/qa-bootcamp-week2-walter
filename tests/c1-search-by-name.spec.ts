import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("C1 Search by name returns only products whose names contain the term", async ({ page }) => {
  const home = new HomePage(page);

  await home.open();
  await home.searchFor("pliers");

  await home.expectOnlyProductsContaining("pliers");
  expect((await home.productNames()).length).toBeGreaterThan(0);
});
