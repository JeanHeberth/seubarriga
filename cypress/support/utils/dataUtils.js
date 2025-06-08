export function obterMesEAnoAtual() {
    const data = new Date();
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // retorna ex: '06'
    const ano = String(data.getFullYear()); // retorna ex: '2025'
    return { mes, ano };
}
