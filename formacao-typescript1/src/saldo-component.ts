
let saldo = 3000 as number;

const elementoSaldo  = document.querySelector('.valor') as HTMLElement;

if(elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString() //.toFixed(2).replace('.', ',')
}


