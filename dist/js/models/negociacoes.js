export class Negociacoes {
    constructor() {
        // private negociacoes: Negociacao[] = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): Negociacao<ReadonlyArray>
    listar() {
        return this.negociacoes;
    }
}
const negociacoes = new Negociacoes();
