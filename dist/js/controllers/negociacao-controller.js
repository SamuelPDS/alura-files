import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensageView = new MensagemView('#mensagemView');
        this.SABADO = 6;
        this.DOMINGO = 0;
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.CriaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.DiaUtl(negociacao.data)) {
            this.mensageView.update('Apenas negociações em dias úteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.LimparFormulario();
        this.atualizaView();
    }
    // private CriaNegociacao(): Negociacao {
    // const exp = /-/g;
    // const date = new Date(this.inputData.value.replace(exp, ','));
    // const quantidade = parseInt(this.inputQuantidade.value);
    // const valor = parseFloat(this.inputValor.value);
    // return new Negociacao( date, quantidade, valor); 
    // }
    LimparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensageView.update('Negociação adicionada com sucesso');
    }
    DiaUtl(date) {
        return date.getDay() > DiasDaSemana.DOMINGO && date.getDay() < DiasDaSemana.SABADO;
    }
}
