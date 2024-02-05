let books = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBooksFromAPI()

async function getBooksFromAPI() {
    const res = await fetch(endpointApi)
    books = await res.json()
    console.table(books)
}