
export function gerarNomeConta(sufixo = '') {
    const numero = Date.now().toString().slice(-5);
    return `Conta - ${numero}${sufixo}`;
}

export function gerarContas(quantidade = 5) {
    return Array.from({ length: quantidade }, (_, i) => gerarNomeConta(i + 1));
}



