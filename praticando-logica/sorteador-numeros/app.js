const btnSortear = document.querySelector("#btn-sortear");

function Sortear() {
const quant = document.getElementById('quantidade').value;
const de = document.getElementById('de').value;
const ate = document.getElementById('ate').value;
const btnResetar = document.querySelector("#btn-reiniciar");
const resultado = document.querySelector("#resultado");

let nums = []
    
    for(let i = 0; i <= quant; i++){
        const numSorteado = Math.round(Math.random() * (ate - de) + de )
    
        nums.push(numSorteado)
    }
    console.log(nums)
      resultado.innerHTML = `
     <label class="texto__paragrafo">Números sorteados: ${nums}  </label>
     `
}

btnSortear.addEventListener('click',  Sortear)