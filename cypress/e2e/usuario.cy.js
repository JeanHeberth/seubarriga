import {gerarUsuarioFake} from "../support/fakeUser";

describe('Cadastro de Usuários', () => {

    it('Deve cadastrar um usuário com sucesso', () => {
        const usuario = gerarUsuarioFake();

        cy.cadastrarUsuario(usuario);
        cy.validarAlerta('Usuário inserido com sucesso', 'success');
    });

    it('Não deve cadastrar um usuário sem o campo nome', () => {
        const usuario = gerarUsuarioFake({nome: ''});

        cy.cadastrarUsuario(usuario);
        cy.validarAlerta('Nome é um campo obrigatório', 'danger');
    })

    it('Nao deve cadastrar um usuário sem o campo email', () => {
        const usuario = gerarUsuarioFake({email: ''});

        cy.cadastrarUsuario(usuario);
        cy.validarAlerta('Email é um campo obrigatório', 'danger');
    });

    it('Nao deve cadastrar um usuário sem o campo senha', () => {
        const usuario = gerarUsuarioFake({senha: ''});

        cy.cadastrarUsuario(usuario);
        cy.validarAlerta('Senha é um campo obrigatório', 'danger');

    });
})