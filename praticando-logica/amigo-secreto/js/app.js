const formElement = document.querySelector('.form');
const btnSendData = formElement.getElementsByClassName('button')[0];
const friendsList = document.querySelector('#lista-amigos');
let formInput = document.querySelector('.form__input');
let nameDrawnList = document.querySelector('.prizeDraw__container');
const resetBtn = document.querySelector('.form__link')
let names = []

// console.log(formElement)

formElement.addEventListener('submit', e => {
    // if(friendsList.textContent == '') {
    //     alert('Insira um valor válido!')
    // } else {

    // }
    let data = e.target.elements['nome-amigo'].value
        e.preventDefault()
        if(e.submitter == btnSendData) {
            Post(data)
        } else {
        Draw(names)
        }

})

function Post(data) {
// let dataFriendList = friendsList.textContent //----- variável não está funcionando
    if( friendsList.textContent == ''){
        friendsList.textContent += data
        names.push(formInput.value)
    } else {
        friendsList.textContent += ', ' + data
        names.push(formInput.value)
    }

    formElement.reset()
  
}


function Draw(names){
    let currentValue = names
    // console.log(names.length)
    for(let i = 0; i < names.length; i++){
        console.log(names[i])
        let nameDrawn = currentValue[i]
        let randomNameId = Math.floor(Math.random() * currentValue.length)
        let randomName = currentValue[randomNameId]
        //console.log(randomName)
        // console.log(currentValue)
        nameDrawnList.innerHTML += `
        <p id="lista-sorteio">${nameDrawn} -> ${randomName}</p>  
        `   
        
        console.log('feito')
        // currentValue.splice(randomNameId, 1)
    }

}


resetBtn.addEventListener('click', ResetValues)

function ResetValues() {
    friendsList.textContent = ''
    nameDrawnList.innerHTML = ''
}