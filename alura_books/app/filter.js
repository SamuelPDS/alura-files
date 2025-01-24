const btns = document.querySelectorAll('.btn')
const btnFront = document.querySelector('.btn-front')
const btnBack  = document.querySelector('.btn-back')
const btnData = document.querySelector('.btn-dados')
const btnAvaliable = document.querySelector('.btn-disponiveis')
const btnOrdenation = document.querySelector('.btn-ordenacao')

btns.forEach((btn) => 
btn.addEventListener('click', filterBooks))

function filterBooks() {
const btnElement = document.getElementById(this.id)
const category = btnElement.value;
let booksToShow = books.filter(book =>{
    return book.categoria == category //retirar return caso {} não existir    
}) 
if(category == '') {
    // console.error('Books do not have category')
} else {
    showBooksInScreen(booksToShow)
}
}

btnAvaliable.addEventListener('click', showAvailableBooks)

function ShowTotalValueBooks(priceBooksTotal) {
    totalBooksPrice.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${priceBooksTotal}</span></p>
  </div>
    `
}


function showAvailableBooks() {
    let availableBooks = books.filter(book => {
        return book.quantidade > 0
    })   
     showBooksInScreen(availableBooks)
     const priceBooksTotal = PriceBooksSum(availableBooks)
     ShowTotalValueBooks(priceBooksTotal)
        
}