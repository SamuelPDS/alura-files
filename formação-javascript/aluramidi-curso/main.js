function playKeySound(seletorAudio) {
    const element = document.querySelector(seletorAudio);
    if (element && element.localName === 'audio') {
            element.play();
    } else {
        alert('elemento ou tag não encontrado, tente novamente');
    }
}

const keyList = document.querySelectorAll('.tecla');

for (let cont = 0; cont < keyList.length; cont++) {
    const tecla = keyList[cont]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`    //template string

    tecla.onclick = function () {
        playKeySound(seletorAudio);
    }

    tecla.onkeydown = function (event) {
        console.log(event.code === 'Space' || event.code === 'Space')

        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');

    }
}
