class LoginPage {
    private username(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#user-name');
    };

    private password(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#password');
    };

    public loginButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('#login-button');
    };

    public confirmPageLoad(): void {
        this.username().should('be.visible')
        this.password().should('be.visible')
        this.loginButton().should('be.visible')
    }

    public setCredentials(username: string, password: string) : void {
        this.username().type(username);
        this.password().type(password);
    }
}

export default LoginPage;