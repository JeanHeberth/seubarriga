import { faker } from '@faker-js/faker';

describe('Login - Seu Barriga', () => {


    it('Deve realizar login com sucesso', () => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta(`Bem vindo, ${Cypress.env('NOME')}!`, 'success');
        cy.realizarLogout();
    });


    it('Não Deve realizar login com sucesso', () => {
        const emailFaker = faker.internet.email();
        const senhaFaker = faker.internet.password();

        cy.realizarLogin(emailFaker, senhaFaker);
        cy.validarAlerta('Problemas com o login do usuário', 'danger');
    });
});
