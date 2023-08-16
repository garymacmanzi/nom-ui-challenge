class CommonPage {
    public cartButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('a.shopping_cart_link');
    }
}

export default CommonPage;