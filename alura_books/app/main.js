let books = []
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
const elementToInsertElements = document.querySelector('#livros')

getBooksFromAPI()

async function getBooksFromAPI() {
    const res = await fetch(endpointApi)
    books = await res.json()
    console.table(books)
    showBooksInScreen(books)
}

function showBooksInScreen(bookList) {
    bookList.forEach(book => {
        elementToInsertElements.innerHTML += `
        <div class="livro">
        <img class="livro__imagens" src=${book.imagem} alt=${book.alt} />
        <h2 class="livro__titulo">
            ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$ ${book.preco}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        `
    });
}