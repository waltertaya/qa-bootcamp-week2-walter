import { test, expect } from "@playwright/test";

const API_URL = "https://api.practicesoftwaretesting.com";

test("products endpoint returns a paginated list of products", async ({ request }) => {
  const response = await request.get(`${API_URL}/products`);

  expect(response.status()).toBe(200);

  const body = await response.json()
  
  expect(typeof body.total).toBe("number");

  // expect(typeof body.data).toBe("object") => noticed returns object for also null; - subtle bug
  expect(Array.isArray(body.data)).toBe(true);
  expect(body.data.length).toBeGreaterThan(0);
});
