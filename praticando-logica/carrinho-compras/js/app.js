const formTag = document.querySelector('.formulario')
const productElementt = document.querySelector('#produto')
const titleHistoric = document.querySelector('.product-historic')
const totalPrice = document.querySelector('.carrinho__total')
let value = 1400


formTag.addEventListener('submit', e => {
    e.preventDefault();
        let productInfo = e.target.elements["produto"].value
        const quantValue = e.target.elements["quantidade"].value

        productInfo = productInfo.replace('-', '').replace('R$', '')
        productInfo = productInfo.split("  ")
        console.log(productInfo[1])

        const productName = productInfo[0]
        const productPrice = parseInt(productInfo[1])

    if(quantValue === '') {
        alert('Digite uma quantidade!')
    } else {
        post(productName, productPrice, quantValue)
    }

} )

formTag.addEventListener('reset', e => {
    e.preventDefault()
   titleHistoric.innerHTML = '' 
   totalPrice.innerHTML = `
    Total: <span class="texto-azul" id="valor-total"></span> 
    `
   value = 0
})

function post(product, price, quant) {

   titleHistoric.innerHTML += `
   <section class="carrinho__produtos" id="lista-produtos">
   <section class="carrinho__produtos__produto">
     <span class="texto-azul">${quant}x</span> ${product} <span class="texto-azul">R$${price}</span>
   </section>
 </section>
   ` 

   value += (price * quant) 
   totalPrice.innerHTML = `
    Total: <span class="texto-azul" id="valor-total">R$${value}</span> 
    `

}