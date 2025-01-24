const orderByPrice = document.querySelector('#btnOrdenarPorPreco');


orderByPrice.addEventListener('click', booksShorted)

function booksShorted() {
let btnSorted = books.sort((a, b) => {
    return a.preco - b.preco
})

showBooksInScreen(btnSorted)
}