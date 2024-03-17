const formTag = document.querySelector('.formulario')
const btnAdd = document.querySelector('.botao-adicionar')
const productElementt = document.querySelector('#produto')
const quantelement = document.querySelector('#quantidade')


formTag.addEventListener('submit', e => {
    e.preventDefault();
    const formValues = {
        "produto" : e.target.elements["produto"].value,
        "quantidade" : e.target.elements["quantidade"].value
    }

    console.log(formValues)

    // console.log(btnElement[0])
    // if (btnElement[0]) {
    //     console.log("adiciona")
        
    // } else {
    //     console.log("limpa")
    // }
    
} )