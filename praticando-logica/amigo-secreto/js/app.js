const formElement = document.querySelector('.form')
const btnSendData = formElement.getElementsByClassName('button')[0]
const friendsList = document.querySelector('#lista-amigos')

// console.log(formElement)

formElement.addEventListener('submit', e => {
    const data = e.target.elements['nome-amigo'].value
    e.preventDefault()
    if(e.submitter == btnSendData) {
        Post(data)
    } else {
       console.log('não é igual!') 
    }
    // console.log(e.submitter)
    // console.log(formElement.getElementsByClassName('button')[0])
})

function Post(data) {
    if(friendsList.textContent == ''){
        friendsList.textContent += data
    } else {
        friendsList.textContent += ', ' + data 
    }

    console.log(friendsList.textContent)
}