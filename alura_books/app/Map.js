function applyDiscount(books) {
    const discount = 0.3;
    booksWithDiscounts = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)};
    })
    return booksWithDiscounts
}