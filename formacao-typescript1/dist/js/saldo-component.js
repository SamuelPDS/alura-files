let saldo = 3000;
const elementoSaldo = document.querySelector('.valor');
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString(); //.toFixed(2).replace('.', ',')
}
