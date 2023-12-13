export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    // get quantidade(): number {
    //      return this._quantidade
    //  }
    // get valor(): number {
    //      return this._valor
    //  }
    get volume() {
        return this.quantidade * this.valor;
    }
    CriaDe(dateString, quantidadeString, valorString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
}
