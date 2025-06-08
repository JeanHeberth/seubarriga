import {faker} from '@faker-js/faker';

describe('Login - Seu Barriga', () => {


    it('Deve realizar login com sucesso', () => {
        cy.fixture('loginValido').then((usuario) => {
            cy.loginComUsuarioFicticio(); // Usa os dados do arquivo JSON
            cy.validarAlerta(`Bem vindo, ${usuario.nome}!`, 'success');
            cy.realizarLogout();
        });
    });


    it('Não Deve realizar login com sucesso', () => {
        const emailFaker = faker.internet.email();
        const senhaFaker = faker.internet.password();

        cy.realizarLogin(emailFaker, senhaFaker);
        cy.validarAlerta('Problemas com o login do usuário', 'danger');
    });
});
