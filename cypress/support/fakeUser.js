import {faker} from '@faker-js/faker';

export function gerarUsuarioFake() {
    return {
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha: faker.internet.password()
    };
}

export function gerarNomeConta(sufixo = '') {
    return `Conta - ${Date.now().toString().slice(-5)}${sufixo}`;
}