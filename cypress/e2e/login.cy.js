import { faker } from '@faker-js/faker';

describe('Login - Seu Barriga', () => {


    it('Deve realizar login com sucesso', () => {
        cy.visit('/login');


        cy.get('#email').type(Cypress.env('EMAIL'));
        cy.get('#senha').type(Cypress.env('PASSWORD'));
        cy.get('.btn').click();
        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Bem vindo');
    });


    it('Não Deve realizar login com sucesso', () => {
        const emailFaker = faker.internet.email();
        const senhaFaker = faker.internet.password();

        cy.visit('/login');
        cy.get('#email').type(emailFaker);
        cy.get('#senha').type(senhaFaker);
        cy.get('.btn').click();
        cy.get('.alert')
            .should('be.visible')
            .and('contain', 'Problemas com o login do usuário');
    });
});
