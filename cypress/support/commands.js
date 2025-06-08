/***
 * @param {string} email
 * @param {string} senha
 * Comando personalizado para realizar o login
 */
Cypress.Commands.add('realizarLogin', (email, senha) => {
    cy.visit('/login');
    cy.get('#email').type(email);
    cy.get('#senha').type(senha);
    cy.get('.btn').click();
});

/**
 * @param {string} mensagemEsperada
 * @param {string} tipo
 * Comando personalizado para validar a mensagem
 */
Cypress.Commands.add('validarAlerta', (mensagemEsperada, tipo = 'success') => {
    const classe = `.alert-${tipo}`;
    cy.get(classe)
        .should('be.visible')
        .invoke('text')
        .then((texto) => {
            expect(texto.trim()).to.include(mensagemEsperada);
            cy.log('🔎 Mensagem recebida:', texto.trim());
        });
});

/**
 * @param {string} email
 * @param {string} senha
 * Comando personalizado para cadastro de usuário
 */
Cypress.Commands.add('cadastrarUsuario', (usuario) => {
    cy.visit('/login');
    cy.contains('Novo usuário?').click();

    if (usuario.nome) {
        cy.get('#nome').clear().type(usuario.nome);
    }
    if (usuario.email) {
        cy.get('#email').clear().type(usuario.email);
    }
    if (usuario.senha) {
        cy.get('#senha').clear().type(usuario.senha);
    }
    cy.get('.btn').click();
});

/**
 *
 * Comando personalizado para acessar menu de conta
 */
Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(':nth-child(2) > .dropdown-toggle').click();
});

/**
 * Comando personalizado para adicionar conta
 */
Cypress.Commands.add('adicionarConta', () => {
    cy.contains('Adicionar').click();
});

/**
 * Comando personalizado para listar contas
 */
Cypress.Commands.add('listarConta', () => {
    cy.contains('Listar').click();
});

/**
 * @param {string} email
 * @param {string} senha
 * Comando personalizado para cadastro de conta
 */
Cypress.Commands.add('cadastrarConta', (nomeConta) => {
    cy.get('#nome').clear().type(nomeConta);
    cy.get('.btn').click();
});

/**
 * Comando personalizado para clicar no ícone editar de conta
 */
Cypress.Commands.add('editarConta', (nomeConta) => {
    cy.get('table#tabelaContas').should('be.visible');
    cy.contains('td', nomeConta)
        .should('exist')
        .parent('tr')
        .find('a[href*="/editarConta"]')
        .click();
});

/**
 * Remove uma conta pelo nome
 * @param {string} nomeConta
 */
Cypress.Commands.add('removerConta', (nomeConta) => {
    cy.get('table#tabelaContas').should('be.visible');
    cy.contains('td', nomeConta)
        .should('exist')
        .parent('tr')
        .find('a[href*="/removerConta"]')
        .click();
});

/**
 * Comando personalizado para realizar logout
 */
Cypress.Commands.add('realizarLogout', () => {
    cy.contains('Sair').click();
});

/**
 * Comando personalizado para movimentação
 */

Cypress.Commands.add('criarMovimentacao', ({
                                               tipo = 'Receita',
                                               descricao = 'Teste',
                                               interessado = 'Fulano',
                                               valor = '100',
                                               conta,
                                               data = '10/06/2025',
                                               status = true
                                           }) => {
    cy.visit('/movimentacao');
    cy.get('#tipo').select(tipo);
    cy.get('#data_transacao').type(data);
    cy.get('#data_pagamento').type(data);
    cy.get('#descricao').type(descricao);
    cy.get('#interessado').type(interessado);
    if (valor) cy.get('#valor').type(valor);

    cy.get('#conta').select(conta);
    if (status) cy.get('#status_pago').click();
    cy.get('.btn-primary').click();
});

Cypress.Commands.add('validarAlertaMultiplosErros', (...mensagensEsperadas) => {
    cy.get('.alert-danger li').then((lista) => {
        const erros = [...lista].map(el => el.innerText.trim());
        mensagensEsperadas.forEach(msg => {
            expect(erros).to.include(msg);
        });
        cy.log('Mensagens recebidas:', erros);
    });
});
