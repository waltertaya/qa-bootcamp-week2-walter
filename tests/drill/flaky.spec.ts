import { test, expect } from "@playwright/test";
import path from "node:path";
import { pathToFileURL } from "node:url";

const drillPage = pathToFileURL(path.join(__dirname, "index.html")).href;

test("drill: clicking Save shows the saved message", async ({ page }) => {
  await page.goto(drillPage);

  await page.getByRole("button", { name: "Save" }).click();

  await expect(page.locator("#status")).toHaveText("Saved");
});
