const searchBar = document.querySelector('.pesquisar__input');

searchBar.addEventListener('input', filterVideo)

async function filterVideo() {
    const listVideos = document.querySelectorAll('.videos__item')
    let valorFiltro = searchBar.value.toLowerCase();
        if(searchBar) {
        listVideos.forEach(video => {
            let titulo = video.querySelector('[data-titulo]').textContent.toLowerCase();
                if(!titulo.includes(valorFiltro)) {
                    video.style.display = "none";
            } else {
                video.style.display = "block";
            }
        })       
        } else {
            video.style.display = "block";
        }   
}
    
