function playKeySound(keyId){
    document.querySelector(keyId).play();
}

const keyList = document.querySelectorAll('.tecla');

 for (let cont=0; cont < keyList.length; cont++) {
    const tecla = keyList[cont]
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`    //template string

     tecla.onclick = function () {
        playKeySound(idAudio)
     };

    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    } 

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

 }
