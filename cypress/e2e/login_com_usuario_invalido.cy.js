import { faker } from '@faker-js/faker';

describe('Login - Seu Barriga', () => {
    const emailFaker = faker.internet.email();
    const senhaFaker = faker.internet.password();

    it('Não Deve realizar login com sucesso', () => {
        cy.visit('/login');

        cy.get('#email').type(emailFaker);
        cy.get('#senha').type(senhaFaker);
        cy.get('.btn').click();

        cy.get('.alert-danger')
            .should('be.visible')
            .and('contain', 'Problemas com o login do usuário');
    });
});
