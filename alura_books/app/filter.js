const btns = document.querySelectorAll('.btn')
const btnFront = document.querySelector('.btn-front')
const btnBack  = document.querySelector('.btn-back')
const btnData = document.querySelector('.btn-dados')
const btnAvaliable = document.querySelector('.btn-disponiveis')
const btnOrdenation = document.querySelector('.btn-ordenacao')

const frontTag = btnFront.getAttribute('value')
const backTag = btnBack.getAttribute('value')
const dataTag = btnData.getAttribute('value')


btns.forEach((btn) => 
btn.addEventListener('click', filterBooks))

function filterBooks() {
const btnElement = document.getElementById(this.id)
const category = btnElement.value;
let booksToShow = books.filter(book =>{
    return book.categoria == category //retirar return caso {} não existir
    
})  
if(category == '') {
    console.error('Books do not have category')
}   else {
    console.table(booksToShow)
}


}
