import { conectarApi } from "./conectar.js";


async function buscarVideo(e) {
    e.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectarApi.buscaVideo(dadosDePesquisa)
}

const botaoPesquisa = document.querySelector('[data-pesquisa]')

botaoPesquisa.addEventListener('click', e => buscarVideo(e))