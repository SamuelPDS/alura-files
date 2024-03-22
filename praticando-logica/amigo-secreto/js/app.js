const formElement = document.querySelector('.form')
const btnSendData = formElement.getElementsByClassName('button')[0]
const friendsList = document.querySelector('#lista-amigos')
let formInput = document.querySelector('.form__input');
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
    console.log(names)
}


function Draw(names){
    
    let randomName = names[Math.floor(Math.random() * names.length)]
    console.log(randomName)
}