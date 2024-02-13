import { conectarApi } from "./conectar.js";

const form = document.querySelector('[data-formulario]');

async function criarVideo(e){
    try{
        e.preventDefault();
        const imagem = document.querySelector('[data-imagem').value;
        const url = document.querySelector('[data-url]').value;
        const titulo = document.querySelector('[data-titulo]').value;
        const descricao = Math.floor(Math.random()*10).toString();
        
        await conectarApi.criaVideo(titulo, descricao, url, imagem)
        
        window.location.href = "../pages/envio-concluido.html";
    } catch(err) {
        console.error(err);
    }   
    }

form.addEventListener('submit', e => criarVideo(e) 
)