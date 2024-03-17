const formTag = document.querySelector('.formulario')
const btnAdd = document.querySelector('.botao-adicionar')
const productElementt = document.querySelector('#produto')
const quantelement = document.querySelector('#quantidade')


formTag.addEventListener('submit', e => {
    e.preventDefault();
        const productValue = e.target.elements["produto"].value
        const quantValue = e.target.elements["quantidade"].value

    post(productValue, quantValue)
} )

function post(product, quant) {
    
}