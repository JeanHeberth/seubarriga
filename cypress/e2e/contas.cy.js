describe('Fluxo completo de Contas', () => {
    const conta1 = `Conta - ${Date.now().toString().slice(-5)}`;
    const conta2 = `Conta - ${Date.now().toString().slice(-6)}`;

    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta('Bem vindo');
    })

    it('Deve cadastrar duas contas com sucesso', () => {
        cy.get(':nth-child(2) > .dropdown-toggle').click();
        cy.contains('Adicionar').click();

        cy.get('#nome').type(conta1);
        cy.get('.btn').click();
        cy.validarAlerta('Conta adicionada com sucesso!', 'success');

        cy.get(':nth-child(2) > .dropdown-toggle').click();
        cy.contains('Adicionar').click();

        cy.get('#nome').type(conta2);
        cy.get('.btn').click();
        cy.validarAlerta('Conta adicionada com sucesso!', 'success');

    });
})

