describe('Fluxo completo de Contas', () => {
    const conta1 = `Conta - ${Date.now().toString().slice(-5)}`;
    const conta2 = `Conta - ${Date.now().toString().slice(-6)}`;

    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta('Bem vindo');
    })

    it('Deve cadastrar duas contas com sucesso', () => {
       cy.acessarMenuConta();
       cy.cadastrarConta(conta1);
       cy.validarAlerta('Conta adicionada com sucesso!', 'success');

       cy.acessarMenuConta();
       cy.cadastrarConta(conta2);
       cy.validarAlerta('Conta adicionada com sucesso!', 'success');
    });
})

