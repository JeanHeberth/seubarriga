import {faker} from "@faker-js/faker";

describe('Cadastro de Usuários', () => {

    it('Deve cadastrar um usuário com sucesso', () => {
        const name = faker.person.fullName();
        const email = faker.internet.email();
        const password = faker.internet.password();

        cy.visit('/login');
        cy.contains('Novo usuário?').click();

        cy.get('#nome').type(name);
        cy.get('#email').type(email);
        cy.get('#senha').type(password);
        cy.get('.btn').click();
        cy.validarAlerta('Usuário inserido com sucesso', 'success');

    });

    it('Não deve cadastrar um usuário sem o campo nome', () => {
        const email = faker.internet.email();
        const password = faker.internet.password();

        cy.visit('/login');
        cy.contains('Novo usuário?').click();

        cy.get('#email').type(email);
        cy.get('#senha').type(password);
        cy.get('.btn').click();
        cy.validarAlerta('Nome é um campo obrigatório', 'danger');
    })

    it('Nao deve cadastrar um usuario sem o campo email', () => {
        const name = faker.person.fullName();
        const password = faker.internet.password();

        cy.visit('/login');
        cy.contains('Novo usuário?').click();

        cy.get('#nome').type(name);
        cy.get('#senha').type(password);
        cy.get('.btn').click();
        cy.validarAlerta('Email é um campo obrigatório', 'danger');
    });

    it('Nao deve cadastrar um usuario sem o campo senha', () => {
        const name = faker.person.fullName();
        const email = faker.internet.email();

        cy.visit('/login');
        cy.contains('Novo usuário?').click();

        cy.get('#nome').type(name);
        cy.get('#email').type(email);
        cy.get('.btn').click();
        cy.validarAlerta('Senha é um campo obrigatório', 'danger');

    });
})