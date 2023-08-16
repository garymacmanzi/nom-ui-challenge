Feature: Checkout

    I want to buy an item and ensure that the item total is correct,
    and that the tax is properly added to the total.

    Background:
        Given an authenticated session
        And the products page is displayed

    Scenario: Add backpack to cart and verify totals
    When the Sauce Labs backpack is added to the cart
    And I go through the checkout process
    Then the item price should be equal to the item total
    And the total should be equal to the item total plus tax