
function checkIfGuessIsValid(guess) {
    const num = +guess

    if (checkNaN(num)) {
        if (guess === 'game over') {
            document.body.innerHTML = `
                <h2>Jogo Finalizado!</h2>
                <button id="playAgain" class="btn-play">Play Again</button>
            `
        } else {
            guessElemet.innerHTML += `
            <div>Valor Inválido</div>
        `
        }

        return
    }

    if (numberSmallerOrBiggerThanAllowed(num)) {
        guessElemet.innerHTML +=`
        <div>Invalid number: The secret number has to be beetween ${smallerValue} and 
        ${biggerValue}</div>
        `
        return
    }

    if (num === secretNumber) {
        document.body.innerHTML = `
            <h2>Você Won!</h2>
            <h3>The secret number was: ${secretNumber}</h3>

            <button id="playAgain" class="btn-play">Play Again</button>
        `
    } else if (num > secretNumber) {
        guessElemet.innerHTML += `
        <div>The secret number is smaller! <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        guessElemet.innerHTML += `
        <div>The secret number is bigger! <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function checkNaN (num) {
    return Number.isNaN(num)

}

function numberSmallerOrBiggerThanAllowed(num) {
    return num > biggerValue || num < smallerValue
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'playAgain') {
        window.location.reload();
    }
})