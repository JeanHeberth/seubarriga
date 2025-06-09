import {faker} from '@faker-js/faker';

export function gerarNomeConta(sufixo = '') {
    return `Conta - ${faker.number.int({min: 100000, max: 999999})}`;
}

export function gerarContas(quantidade = 5) {
    return Array.from({length: quantidade}, (_, i) => gerarNomeConta(i + 1));
}

export function gerarNomeContaAtualizada(nomeOriginal) {
    return `${nomeOriginal} - Atualizada`;
}

export function gerarContasFixas() {
    return {
        original: "Conta - 99999",
        comMovimentacao: "Conta - 985623 - MOVIMENTACAO",
        paraEdicao: "Conta - PADRAO_EDICAO"
    };
}



