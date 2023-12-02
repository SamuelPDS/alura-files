import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    // private negociacoes: Negociacao[] = [];
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao){
        this.negociacoes.push(negociacao)
    }

    // lista(): Negociacao<ReadonlyArray>
    listar(): readonly Negociacao[] {
        return this.negociacoes
    }
}

const negociacoes = new Negociacoes();
