import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Negociacao[] = [];
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    // lista(): Negociacao<ReadonlyArray>
    public listar(): readonly Negociacao[] {
        return this.negociacoes
    }
}

const negociacoes = new Negociacoes();
