import {
    gerarMovimentacaoValida,
    gerarMovimentacaoComDataInvalida,
    gerarMovimentacaoSemValor
} from '../support/fakeMovimentacao';

describe('Gestão de Movimentações', () => {
    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta(`Bem vindo, ${Cypress.env('NOME')}!`, 'success');
    });

    it('Deve criar uma movimentação de Receita e uma de Despesa', () => {
        const conta = 'Conta - 99999';

        ['Receita', 'Despesa'].forEach(tipo => {
            const movimentacao = gerarMovimentacaoValida(tipo, conta);
            cy.criarMovimentacao(movimentacao);
            cy.validarAlerta('Movimentação adicionada com sucesso!', 'success');
        });
    });

    it('Não deve permitir criar movimentação com data inválida', () => {
        const conta = 'Conta - 99999';
        const movimentacao = gerarMovimentacaoComDataInvalida(conta);
        cy.criarMovimentacao(movimentacao);
        cy.get('.alert-danger')
            .should('contain', 'Data da Movimentação inválida')
            .and('contain', 'Data do pagamento inválida');
    });

    it('Não deve permitir criar movimentação sem valor', () => {
        const conta = 'Conta - 99999';
        const movimentacao = gerarMovimentacaoSemValor(conta);
        cy.criarMovimentacao(movimentacao);
        cy.get('.alert-danger')
            .should('contain', 'Valor é obrigatório')
            .and('contain', 'Valor deve ser um número');
    });
});
