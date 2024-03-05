let saldo = 3000;
const elementoSaldo = document.querySelector('.valor')
const elementoForm = document.querySelector('.block-nova-transacao form')
const inputTipoTransacao = document.querySelector('#tipoTransacao');
const inputValor = document.querySelector("#valor");
const inputData = document.querySelector("#data");

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

if(valor < 0) {
    alert("Insira um valor válido!")
}

const newTransaction = {
    tipoTransacaoValor: transacaoValor,
    valor: valor,
    data: data
}
    console.log(newTransaction)
    elementoForm.reset();

 createTransaction(newTransaction)   
});

