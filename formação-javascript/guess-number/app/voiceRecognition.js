const guessElemet = document.querySelector('#guess');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const guess = e.results[0] [0].transcript
    showGuessOnScreen(guess)
    checkIfGuessIsValid(guess)
}

function showGuessOnScreen(guess) {
    guessElemet.innerHTML = `
        <div> You said </div>
        <span class="box"> ${guess}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())