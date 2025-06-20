import {gerarUsuarioFake} from "../support/fakeUser";

describe('Fluxo completo de Login e cadastro de usuário', () => {
    it('Deve validar o fluxo completo: cadastro, erro de login e login com sucesso',
        () => {
            const usuario = gerarUsuarioFake();

            // Login com usuário não cadastrado
            cy.realizarLogin(usuario.email, usuario.senha);
            cy.validarAlerta('Problemas com o login do usuário', 'danger');

            // Cadastro de usuário
            cy.cadastrarUsuario(usuario);
            cy.validarAlerta('Usuário inserido com sucesso', 'success');

            // Login com sucesso
            cy.fixture('loginValido').then((usuario) => {
                cy.loginComUsuarioFicticio(); // Usa os dados do arquivo JSON
                cy.validarAlerta(`Bem vindo, ${usuario.nome}!`, 'success');
                cy.realizarLogout();
            });
        });
})