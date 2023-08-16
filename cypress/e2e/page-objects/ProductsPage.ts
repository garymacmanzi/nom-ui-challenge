class ProductsPage {
    public backpackId: string = 'sauce-labs-backpack';

    private title() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('span.title');
    }

    public confirmPageLoad(): void {
        this.title().should('contain', 'Products');
    }

    public addItemToCartButton(itemId: string) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(`#add-to-cart-${itemId}`);
    }
}

export default ProductsPage;