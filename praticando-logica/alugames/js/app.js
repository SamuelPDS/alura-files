const monopolyTags = document.querySelectorAll('.dashboard__items__item');
const btns = document.querySelectorAll('.dashboard__item__button')
const btnText = btns.textContent
// const monopolyImg = document.querySelector("#monopoly-img")
// const ticketRideTag = document.querySelector('')


monopolyTags.forEach((item => {
    item.addEventListener('click', e => {
        e.preventDefault()
        // console.log(itemImg) 
         Rent(item)
    }
)}))

function Rent(item) {
const itemImg = item.getElementsByClassName('dashboard__item__img')[0]
const itemBtn = item.getElementsByTagName('a')[0]

  if(itemBtn.getAttribute('class') === "dashboard__item__button dashboard__item__button--return") {
    itemBtn.classList.remove("dashboard__item__button--return");
    itemImg.classList.remove("dashboard__item__img--rented");
    itemBtn.textContent = 'Alugar'
  }  else {
    itemBtn.classList.add("dashboard__item__button--return");
    itemImg.classList.add("dashboard__item__img--rented");
    itemBtn.textContent = 'Devolver'
  }

  
}

// console.log(monopolyTags)
