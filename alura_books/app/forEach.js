function showBooksInScreen(bookList) {
    elementToInsertElements.innerHTML = ''
    bookList.forEach(book => {
      // let availability = checkBookAvailiability(book)
      let availability = book.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementToInsertElements.innerHTML += `
        <div class="livro">
        <img class="${availability}" src=${book.imagem} alt=${book.alt} />
        <h2 class="livro__titulo">
            ${book.titulo}
        </h2>
        <p class="livro__descricao">${book.autor}</p>
        <p class="livro__preco" id="preco">R$ ${book.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${book.categoria}</span>
        </div>
      </div>
        `
    });

    // function checkBookAvailiability(book) {
    //    if (book.quantidade > 0) {
    //      return 'livro__imagens"'
    //    } else {
    //      return 'livro__imagens indisponivel'
    //    }
    //  }
      
}