import {gerarNomeConta} from "../support/fakeUser";

describe('Fluxo completo de Contas', () => {
    const conta1 = gerarNomeConta('A');
    const conta2 = gerarNomeConta('B');

    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta(`Bem vindo, ${Cypress.env('NOME')}!`, 'success');
    })

    it('Deve cadastrar duas contas com sucesso', () => {
       cy.acessarMenuConta();
       cy.cadastrarConta(conta1);
       cy.validarAlerta('Conta adicionada com sucesso!', 'success');

       cy.acessarMenuConta();
       cy.cadastrarConta(conta2);
       cy.validarAlerta('Conta adicionada com sucesso!', 'success');
       cy.realizarLogout();
    });
})

