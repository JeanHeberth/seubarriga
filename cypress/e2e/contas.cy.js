import {gerarContas, gerarNomeConta} from "../support/fakeConta";


describe('Fluxo completo de Contas', () => {
    const contas = gerarContas(2)

    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta(`Bem vindo, ${Cypress.env('NOME')}!`, 'success');
    })

    it('Deve cadastrar duas contas com sucesso', () => {
        contas.forEach((nomeConta) => {
            cy.acessarMenuConta();
            cy.adicionarConta();
            cy.cadastrarConta(nomeConta);
            cy.validarAlerta('Conta adicionada com sucesso!', 'success');


            cy.acessarMenuConta();
            cy.listarConta();
            cy.contains(nomeConta).should('be.visible');
        });
    });
})

