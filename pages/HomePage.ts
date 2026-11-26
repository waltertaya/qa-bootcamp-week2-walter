import { type Page, type Locator, expect } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  private readonly searchBox: Locator;
  private readonly productTitles: Locator;
  private readonly noResultsMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole("textbox", { name: "Search" });
    this.productTitles = page.locator(".card-title");
    this.noResultsMessage = page.getByText("No products found");
  }

  async open(): Promise<void> {
    await this.page.goto("/");
  }

  async searchFor(term: string): Promise<void> {
    await this.searchBox.fill(term);
    await this.searchBox.press("Enter");
  }

  async productNames(): Promise<string[]> {
    const titles = await this.productTitles.allTextContents();
    return titles.map((title) => title.trim());
  }

  async expectNoResults(): Promise<void> {
    await expect(this.noResultsMessage).toBeVisible();
  }
}
