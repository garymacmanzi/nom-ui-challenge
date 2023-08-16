class CheckoutPage {
    public itemTotalText = 'Item total: $';
    public taxText = 'Tax: $';
    public grandTotalText = 'Total: $';

    private firstName() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#first-name');
    }

    private lastName() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#last-name');
    }

    private postCode() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#postal-code');
    }

    public title() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('span.title');
    }

    public confirmDetailsPageLoad() : void {
        this.firstName().should('be.visible');
        this.lastName().should('be.visible');
        this.postCode().should('be.visible');
    }

    public confirmOverviewPageLoad() : void {
        this.title().should('contain', 'Checkout: Overview');
    }

    public continueButton() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#continue');
    }

    public enterDetails(firstName: string, lastName: string, postCode: string) : void {
        this.firstName().type(firstName);
        this.lastName().type(lastName);
        this.postCode().type(postCode);
    }

    public itemPrice(itemName: string) : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.contains('.inventory_item_name', itemName)
            .parents('.cart_item_label')
            .get('.inventory_item_price');
    }

    public itemTotal() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.summary_subtotal_label');
    }

    public tax() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.summary_tax_label');
    }

    public grandTotal() : Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('.summary_total_label');
    }

    public parseFloatFromElement(textToRemove: string, element: JQuery<HTMLElement>) : number {
        return parseFloat(element.text().replace(textToRemove, ''));
    }
}

export default CheckoutPage;