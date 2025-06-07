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
        cy.realizarLogin(usuario.email, usuario.senha);
        cy.validarAlerta('Bem vindo');

    });
})