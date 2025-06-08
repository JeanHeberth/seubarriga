import {obterMesEAnoAtual} from '../support/utils/dataUtils';

describe('Resumo Mensal', () => {
    beforeEach(() => {
        cy.realizarLogin(Cypress.env('EMAIL'), Cypress.env('PASSWORD'));
        cy.validarAlerta(`Bem vindo, ${Cypress.env('NOME')}!`, 'success');
    });

    it('Deve acessar o resumo mensal e excluir uma movimentação', () => {
        const {mes, ano} = obterMesEAnoAtual();

        cy.acessarResumoMensal(mes, ano);
        cy.validarSeResumoPossuiMovimentacoes();
        cy.removerPrimeiraMovimentacaoDoResumo();
        cy.validarAlerta('Movimentação removida com sucesso!', 'success');
    });


    it('Deve acessar o resumo mensal com mês/ano dinâmico', () => {
        const {mes, ano} = obterMesEAnoAtual();
        cy.filtrarResumoMensal(mes, ano);
        cy.validarSeResumoPossuiMovimentacoes();
        cy.realizarLogout();
    });

});
