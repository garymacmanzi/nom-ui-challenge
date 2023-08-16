class CartPage {
    private title() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('span.title');
    }

    public checkoutButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#checkout');
    }

    public confirmPageLoad() : void {
        this.title().should('be.visible');
        this.checkoutButton().should('be.visible');
    }
}

export default CartPage;