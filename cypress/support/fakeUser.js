import {faker} from '@faker-js/faker';

export function gerarUsuarioFake(overrides = {}) {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: faker.internet.password(),
        ...overrides,
    };
}

