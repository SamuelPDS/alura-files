let books = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementToInsertElements = document.querySelector('#livros')

getBooksFromAPI()

async function getBooksFromAPI() {
    const res = await fetch(endpointApi)
    books = await res.json()
    let booksWithDiscounts = applyDiscount(books)
    showBooksInScreen(booksWithDiscounts)
}
