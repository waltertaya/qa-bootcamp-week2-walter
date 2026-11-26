Feature: Shopping cart
  As a guest shopper
  I want to add and remove products in my cart
  So that I can check what I intend to buy and what it will cost

  Background:
    Given the shopper is on the Toolshop home page
    And the shopper's cart is empty

  Scenario: A shopper adds a product to the cart
    When the shopper adds "Combination Pliers" to the cart
    Then the cart shows "Combination Pliers"
    And the cart total is $14.15
    And the cart shows one item

  Scenario: A shopper's cart total reflects every product added
    When the shopper adds "Combination Pliers" to the cart
    And the shopper adds "Slip Joint Pliers" to the cart
    Then the cart shows both products
    And the cart total is $23.32

  Scenario: A shopper removes the only product from the cart
    Given the shopper has added "Combination Pliers" to the cart
    When the shopper removes "Combination Pliers" from the cart
    Then the cart shows no products

  Scenario: Removing one product leaves the other product in the cart
    Given the shopper has added "Combination Pliers" to the cart
    And the shopper has added "Slip Joint Pliers" to the cart
    When the shopper removes "Combination Pliers" from the cart
    Then the cart shows "Slip Joint Pliers"
    And the cart total is $9.17
