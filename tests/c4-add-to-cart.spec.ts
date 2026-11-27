import { test, expect } from "@playwright/test";

const API_URL = "https://api.practicesoftwaretesting.com";

type Product = { id: string; in_stock: boolean };
type CartItem = { product_id: string; quantity: number };

test.describe("cart API", () => {
  let cartId: string | undefined;

  test.afterEach(async ({ request }) => {
    if (cartId) {
      await request.delete(`${API_URL}/carts/${cartId}`);
      cartId = undefined;
    }
  });

  test("C4 Add to a cart returns the product in the cart", async ({ request }) => {
    
    const productsResponse = await request.get(`${API_URL}/products`);
    expect(productsResponse.status()).toBe(200);
    const productsBody = await productsResponse.json();

    const product: Product | undefined = productsBody.data.find(
      (entry: Product) => entry.in_stock
    );
    expect(product).toBeDefined();
    if (!product) {
      throw new Error("No in-stock product found in the catalogue");
    }

    
    const cartResponse = await request.post(`${API_URL}/carts`);
    expect(cartResponse.status()).toBe(201);
    const cartBody = await cartResponse.json();
    expect(cartBody.id).toBeTruthy();
    cartId = cartBody.id;

    
    const addResponse = await request.post(`${API_URL}/carts/${cartId}`, {
      data: {
        product_id: product.id,
        quantity: 1,
      },
    });
    expect(addResponse.status()).toBe(200);

    
    const cartReadResponse = await request.get(`${API_URL}/carts/${cartId}`);
    expect(cartReadResponse.status()).toBe(200);
    const cart = await cartReadResponse.json();
    expect(Array.isArray(cart.cart_items)).toBe(true);

    const item: CartItem | undefined = cart.cart_items.find(
      (entry: CartItem) => entry.product_id === product.id
    );
    expect(item).toBeDefined();
    expect(item?.quantity).toBe(1);
  });

  test("C5 requesting a cart that does not exist returns 404", async ({ request }) => {
    const response = await request.get(`${API_URL}/carts/01JZZZZZZZZZZZZZZZZZZZZZZZ`);

    expect(response.status()).toBe(404);
    
    expect(response.headers()["content-type"]).toContain("application/json");

    const body = await response.json();
    expect(body.message).toMatch(/not found/i);
  });
});
