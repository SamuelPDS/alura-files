const html = document.querySelector('html');
const btnFoco = document.querySelector('.app__card-button--foco');
const btnCurto = document.querySelector('.app__card-button--curto');
const btnLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const btns = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
let intervaloId = null;

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
const musicaIniciar = new Audio('sons/play.wav');
const musicaPausar = new Audio('sons/pause.mp3');
const musicaStop = new Audio('sons/beep.mp3');

musica.loop = true;

let tempoDecorridoemSegundos = 5;

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

btnFoco.addEventListener('click', () => {
    alterarContexto('foco')
    btnFoco.classList.add('active');
})

btnCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    btnCurto.classList.add('active');
})

btnLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    btnLongo.classList.add('active');
})

function alterarContexto(contexto) {
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
    if(tempoDecorridoemSegundos<= 0) {
        Zerar()
        alert('tempo finalizado')
        return
    }
    tempoDecorridoemSegundos -= 1;
    console.log('temporizador:' + tempoDecorridoemSegundos)

    if(tempoDecorridoemSegundos=== 0) {
        musicaStop.play()
    }
}

startPauseBtn.addEventListener('click', IniciarouPausar)

function IniciarouPausar(){
    if(intervaloId) {
        musicaPausar.play()
        Zerar()
        return
    }
    musicaIniciar.play();    
    intervaloId = setInterval(contagemRegressiva, 1000)
}

function Zerar() {
    clearInterval(intervaloId)
    intervaloId = null;
}