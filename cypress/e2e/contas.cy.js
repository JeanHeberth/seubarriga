import {gerarContas, gerarNomeContaAtualizada, gerarContasFixas} from '../support/fakeConta';

describe('Gestão de Contas', () => {
    const contas = gerarContas(2); // mínimo de 2
    const contaAtualizada = gerarNomeContaAtualizada(contas[0]);
    const contasFixas = gerarContasFixas();

    beforeEach(() => {
        cy.fixture('loginValido').then((usuario) => {
            cy.loginComUsuarioFicticio(); // Usa os dados do arquivo JSON
            cy.validarAlerta(`Bem vindo, ${usuario.nome}!`, 'success');
        });
    });

    it('Deve cadastrar duas contas com sucesso', () => {
        contas.forEach((nomeConta) => {
            cy.acessarMenuConta();
            cy.adicionarConta();
            cy.cadastrarConta(nomeConta);
            cy.validarAlerta('Conta adicionada com sucesso!', 'success');
        });
    });

    it('Deve editar a primeira conta', () => {
        const nomeOriginal = contasFixas.paraEdicao;

        cy.acessarMenuConta();
        cy.adicionarConta();
        cy.cadastrarConta(nomeOriginal);

        cy.acessarMenuConta();
        cy.listarConta();
        cy.editarConta(nomeOriginal);
        cy.cadastrarConta(contaAtualizada);
        cy.validarAlerta('Conta alterada com sucesso!', 'success');
    });

    it('Não deve criar uma conta com nome já existente', () => {
        const nomeDuplicado = contasFixas.original;

        cy.acessarMenuConta();
        cy.adicionarConta();
        cy.cadastrarConta(nomeDuplicado);

        cy.acessarMenuConta();
        cy.adicionarConta();
        cy.cadastrarConta(nomeDuplicado);
        cy.validarAlerta('Já existe uma conta com esse nome!', 'danger');
    });

    it('Não deve remover conta com movimentações vinculadas', () => {
        const nomeConta = gerarContasFixas().comMovimentacao;

        cy.garantirContaExiste(nomeConta);
        cy.garantirMovimentacaoParaConta();

        cy.acessarMenuConta();
        cy.listarConta();
        cy.removerConta(nomeConta);
        cy.validarAlerta('Conta em uso na movimentações', 'danger');
        cy.realizarLogout();
    });

});
