import {faker} from '@faker-js/faker';

export function gerarUsuarioFake(overrides = {}) {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
        ...overrides,
    };
}

export function gerarNomeConta(sufixo = '') {
    return `Conta - ${Date.now().toString().slice(-5)}${sufixo}`;
}

export function gerarUsuarioFakeSemNome() {
    return {
        email: faker.internet.email(),
        senha: faker.internet.password()
    };
}