let saldo = 3000;
const elementoSaldo = document.querySelector('.valor')
const elementoForm = document.querySelector('.block-nova-transacao form')
const inputTipoTransacao = document.querySelector('#tipoTransacao');
const inputValor = document.querySelector("#valor");
const inputData = document.querySelector("#data");
const elementoTransacao = document.querySelector(".registro-transacoes")

elementoSaldo.textContent = saldo.toFixed(2).replace('.', ',')

elementoForm.addEventListener('submit', function(e) {
 e.preventDefault();

 if(!elementoForm.checkValidity()) {
    alert('Por favor, preencha todos os dados obrigatórios');
    return;
} 

const transacaoValor = inputTipoTransacao.value
const valor = inputValor.value;
const data = inputData.value;

if(transacaoValor == "Depósito") {
    saldo += valor;

} else if (transacaoValor == "Transferência") {
    saldo -= valor;
}

elementoSaldo.textContent = saldo.toFixed(2).replace('.', ',')

if(valor < 0) {
    alert("Insira um valor válido!")
}

const newTransaction = {
    transacaoValor: transacaoValor,
    valor: valor,
    data: data
}
    console.log(newTransaction)
    elementoForm.reset();

 createTransaction(transacaoValor, valor, data)   
});


function createTransaction(transacaoValor, valor, data) {
    elementoTransacao.innerHTML += `    
    <div class="transacoes-group">
        <strong class="mes-group">Setembro</strong>
        <div class="transacao-item">
            <div class="transacao-info">
                <span class="tipo">${transacaoValor}</span>
                <strong class="valor">R$${valor}</strong>
            </div>
            <time class="data">${data}</time>
        </div>
        <div class="transacao-item">
            <div class="transacao-info">
                <span class="tipo">Transferência</span>
                <strong class="valor">-R$ 58,00</strong>
            </div>
            <time class="data">02/09</time>
        </div>
    </div>
    `
}
