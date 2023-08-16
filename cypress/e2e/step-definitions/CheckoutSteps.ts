import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../page-objects/ProductsPage";
import CommonPage from "../page-objects/CommonPage";
import CartPage from "../page-objects/CartPage";
import CheckoutPage from "../page-objects/CheckoutPage";

let productsPage: ProductsPage;
let commonPage: CommonPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

Given("the products page is displayed", () => {
    productsPage = new ProductsPage();
    productsPage.confirmPageLoad();
});

When("the Sauce Labs backpack is added to the cart", () => {
    productsPage = new ProductsPage();
    productsPage.addItemToCartButton(productsPage.backpackId).click();
});

When("I go through the checkout process", () => {
    commonPage = new CommonPage();
    commonPage.cartButton().click();

    cartPage = new CartPage();
    cartPage.confirmPageLoad();
    cartPage.checkoutButton().click();

    checkoutPage = new CheckoutPage();
    checkoutPage.confirmDetailsPageLoad();
    checkoutPage.enterDetails("Automation", "Testing", "AB1 23C");
    checkoutPage.continueButton().click();
});

Then("the item price should be equal to the item total", () => {
    checkoutPage = new CheckoutPage();
    const backpack = 'Sauce Labs Backpack';
    checkoutPage.itemPrice(backpack).then((itemPrice) => {
        checkoutPage.itemTotal().then((itemTotal) => {
            const priceValue = checkoutPage.parseFloatFromElement('$', itemPrice);
            const totalValue = checkoutPage.parseFloatFromElement(checkoutPage.itemTotalText, itemTotal);

            expect(priceValue).to.equal(totalValue);
        })
    });
});

Then("the total should be equal to the item total plus tax", () => {
    checkoutPage = new CheckoutPage();
    checkoutPage.grandTotal().then((grandTotal) => {
            checkoutPage.itemTotal().then((itemTotal) => {
                checkoutPage.tax().then((tax) => {
                    const grandTotalValue = checkoutPage.parseFloatFromElement(checkoutPage.grandTotalText, grandTotal);
                    const itemTotalValue = checkoutPage.parseFloatFromElement(checkoutPage.itemTotalText, itemTotal);
                    const taxValue = checkoutPage.parseFloatFromElement(checkoutPage.taxText, tax);

                    expect(grandTotalValue).to.equal(itemTotalValue + taxValue);
                })
            })
        });

})