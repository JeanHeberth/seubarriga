import { faker } from '@faker-js/faker';

describe('Fluxo completo de Login e cadastro de usuário', () => {

    it('Deve validar o fluxo completo: cadastro, erro de login e login com sucesso', () => {

        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        // Login com usuário não cadastrado
        cy.realizarLogin(email, password);
        cy.validarAlerta('Problemas com o login do usuário', 'danger');

        // Cadastro de usuário
        cy.visit('/login');
        cy.contains('Novo usuário?').click();
        cy.get('#nome').type(name);
        cy.get('#email').type(email);
        cy.get('#senha').type(password);
        cy.get('.btn').click();
        cy.validarAlerta('Usuário inserido com sucesso', 'success');

        // Login com sucesso
        cy.realizarLogin(email, password);
        cy.validarAlerta('Bem vindo');

    });
})