import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";

const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', event =>{
        event.preventDefault(); 
        controller.adiciona();
    })    
} else {
    throw Error('Não foi possível iniciar a aplicação. Verifiqie se o form existe')
}



// const negociacoesView = new NegociacoesView
// const template = negociacoesView.template()
// console.log(template)

// import { Negociacao } from "./models/negociacao.js";    

// const negociacao = new Negociacao(new Date(), 10, 100);
// // negociacao.quantidade = 10;
// console.log(negociacao.volume)