import { faker } from '@faker-js/faker';

export function gerarMovimentacaoValida(tipo = 'Receita', conta = 'Conta - 99999') {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return {
        tipo,
        descricao: faker.commerce.productName(),
        interessado: faker.person.fullName(),
        valor: faker.finance.amount(10, 1000, 2),
        conta,
        data: dataFormatada,
        status: true
    };
}

export function gerarMovimentacaoComDataInvalida(conta = 'Conta - 99999') {
    return {
        tipo: 'Despesa',
        descricao: faker.commerce.productName(),
        interessado: faker.person.fullName(),
        valor: faker.finance.amount(10, 1000, 2),
        conta,
        data: '32/13/2025', // data inválida proposital
        status: true
    };
}

export function gerarMovimentacaoSemValor(conta = 'Conta - 99999') {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return {
        tipo: 'Receita',
        descricao: faker.commerce.productName(),
        interessado: faker.person.fullName(),
        valor: '', // campo vazio
        conta,
        data: dataFormatada,
        status: true
    };
}
