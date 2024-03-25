import { tipoTransacao } from "./enums/tipoTransacao";

const elementoForm = document.querySelector('.block-nova-transacao form') as HTMLFormElement;
const inputTipoTransacao = document.querySelector('#tipoTransacao') as HTMLSelectElement;
const inputValor = document.querySelector("#valor") as HTMLInputElement;
const inputData = document.querySelector("#data") as HTMLInputElement;
const elementoTransacao = document.querySelector(".registro-transacoes") as HTMLElement;

elementoForm.addEventListener('submit', function(e) {
    e.preventDefault();
   
    if(!elementoForm.checkValidity()) {
       alert('Por favor, preencha todos os dados obrigatórios');
       return;
   } 
   
       const transacaoValor: string = inputTipoTransacao.value
       const valor: number = inputValor.valueAsNumber
       const data: Date = new Date (inputData.value)
  
   
//    const novaTransacao: Transacao = {
//         transacaoValor = inputTipoTransacao.value,
//         valor = inputValor.valueAsNumber,
//         data  = new Date (inputData.value)
//    }
   
   
   if(transacaoValor == "Boleto") {
       saldo += valor;
   
   } else if (transacaoValor == tipoTransacao.DEPOSITO || tipoTransacao.TRANSFERENCIA) {
       saldo -= valor;
   }
   
   elementoSaldo.textContent = saldo.toString()  //.toFixed(2).replace('.', ',')
   
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
   
   
   function createTransaction(transacaoValor: string, valor: number, data: Date) {
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

