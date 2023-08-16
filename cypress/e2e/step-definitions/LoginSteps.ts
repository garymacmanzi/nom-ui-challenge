import { Given } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../page-objects/LoginPage';
import testData from '../../fixtures/testData';

let loginPage: LoginPage;

Given("an authenticated session", () => {
    cy.intercept('/service-worker.js', { body: undefined }).as('service-worker')
    cy.visit('/');
    cy.wait('@service-worker')

    loginPage = new LoginPage();
    loginPage.confirmPageLoad();
    loginPage.setCredentials(testData.email, testData.password);
    loginPage.loginButton().click();
});