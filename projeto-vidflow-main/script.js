const containerVideos = document.querySelector('.videos__container')
const searhBar = document.querySelector('.pesquisar__input');
const categoriaBtn = document.querySelectorAll('.superior__item');

async function searchAndShowVideos(){
    try{
    const search = await fetch("http://localhost:3000/videos");
    const videos = await search.json();
        videos.forEach((video) => {
            if(video.categoria == "") {
                throw new Error ("Vídeo sem categoria")
            } else {
                containerVideos.innerHTML += `
                    <li class="videos__item">
                    <iframe src="${video.url}" title="${video.title}" frameborder="0" allowfullscreen></iframe>
                        <div class="descricao-video">
                            <img class="img-canal" src="${video.imagem}" alt="logo canal">
                            <h3 class="titulo-video">${video.titulo}</h3>
                            <p class="titulo-canal">${video.descricao}</p>
                            <p class="categoria" hidden>${video.categoria}</p>
                        </div>
                    </li>
                `;
            }
        })
    } catch(error) {
      containerVideos.innerHTML = `
        <p>Erro detectado, não foi possível carregar os vídeos. </ br> Erro: ${error}</p>
      `  
    } 
    // finally {
    //     alert('arquivos carregados')
    // }
}

searchAndShowVideos();

searhBar.addEventListener('input', filterSearch);

function filterSearch() {
    const videos = document.querySelectorAll('.videos__item');
    let valorFiltro = searhBar.value.toLowerCase();

    if(searhBar) {
        videos.forEach((video) => {
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
                        if(!titulo.includes(valorFiltro)) {
                            video.style.display = "none";
                        } 
        })
        } else {
            videos.style.display = "block";
        }
    }


categoriaBtn.forEach((btn) => {
    let nomeCategoria = btn.getAttribute("name");
    btn.addEventListener('click', () => filtrarPorCategoria(nomeCategoria)
     )
})

function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item')
    for (let video of videos) {
        let categoria = video.querySelector('.categoria').textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != "tudo") {
            video.style.display = 'none'
        } else {
            video.style.display = 'block'
        }
    }
}