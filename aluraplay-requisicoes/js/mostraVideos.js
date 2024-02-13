import { conectarApi } from "./conectar.js";

const lista = document.querySelector('[data-lista]'); //data-atribute

function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
    <iframe width="100%" height="72%" src=${url}
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src=${imagem} alt="logo canal alura">
        <h3 data-titulo>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return video;
}

async function listaVideo() {
    const listaAPI = await conectarApi.listaVideos();

    listaAPI.forEach(video => lista.appendChild(
        constroiCard(video.titulo, video.descricao, video.url, video.imagem)));
}

listaVideo();