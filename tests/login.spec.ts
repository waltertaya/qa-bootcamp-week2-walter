import { test, expect } from "@playwright/test";

test("invalid login is rejected with a clear message", async ({ page }) => {
  await page.goto("/auth/login");

  await page.getByLabel(/^email/i).fill("wrong@example.com");
  await page.getByLabel(/^password/i).fill("wrongpassword");

  await page.getByRole("button", { name: "Login", exact: true }).click();

  await expect(
    page.getByText(/invalid email or password/i)
  ).toBeVisible();
});
