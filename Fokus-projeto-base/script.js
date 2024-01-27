const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btns = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span')
const imgIniciarouPausar = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const musicaIniciar = new Audio('sons/play.wav');
const musicaPausar = new Audio('sons/pause.mp3');
const musicaStop = new Audio('sons/beep.mp3');

let tempoDecorridoemSegundos = 1500;
let intervaloId = null;
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

btnFoco.addEventListener('click', () => {
    tempoDecorridoemSegundos = 1500;
    alterarContexto('foco')
    btnFoco.classList.add('active');

})

btnCurto.addEventListener('click', () => {
    tempoDecorridoemSegundos = 300;
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
})

btnLongo.addEventListener('click', () => {
    tempoDecorridoemSegundos = 900;
    alterarContexto('descanso-longo');
    btnLongo.classList.add('active');
})

function alterarContexto(contexto) {
    Mostrartempo()
    btns.forEach(function(contexto){
        contexto.classList.remove('active');
    })
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `imagens/${contexto}.png`);

    switch (contexto) {
        case "foco":
            titulo.innerHTML = `

            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>

            `
            break;

        case "descanso-curto":
            titulo.innerHTML = ` Que tal dar uma respirada? <br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case "descanso-longo":
            titulo.innerHTML = ` Hora de voltar à superfície. <br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `
            break;
        default:
            break;
    }
}


const contagemRegressiva = () => {
    if(tempoDecorridoemSegundos <= 0) {
        alert('tempo finalizado')
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if (focoAtivo) {
            const evento = new CustomEvent('focoFinalizado');
            document.dispatchEvent(evento)
        }
        Zerar()
        return
    }
    tempoDecorridoemSegundos -= 1;
    Mostrartempo();
    
    if(tempoDecorridoemSegundos=== 0) {
        musicaStop.play()
    }
}

startPauseBtn.addEventListener('click', IniciarouPausar)

function IniciarouPausar(){
    if(intervaloId) {
        musicaPausar.play();
        imgIniciarouPausar.setAttribute('src', 'imagens/play_arrow.png')
        Zerar();
        return
    }
    musicaIniciar.play();
    imgIniciarouPausar.setAttribute('src', 'imagens/pause.png')
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar";
}

function Zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    intervaloId = null;
}


function Mostrartempo() {
    const tempo = new Date(tempoDecorridoemSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second:'2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`
}

Mostrartempo()