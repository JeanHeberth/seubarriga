import {faker} from '@faker-js/faker';

export function gerarMovimentacaoValida(overrides = {}) {
    return {
        tipo: 'Receita',
        descricao: `Movimentacao ${faker.word.noun()}`,
        interessado: faker.person.fullName(),
        valor: faker.finance.amount(100, 1000, 2),
        conta: 'Conta - 99999',
        data: faker.date.recent({ days: 10 }).toLocaleDateString('pt-BR'),
        status: true,
        ...overrides
    };
}

export function gerarMovimentacaoComDataInvalida(overrides = {}) {
    return gerarMovimentacaoValida({
        data: '32/13/2025',
        ...overrides
    });
}

export function gerarMovimentacaoSemValor(overrides = {}) {
    return gerarMovimentacaoValida({
        valor: '',
        ...overrides
    });
}

