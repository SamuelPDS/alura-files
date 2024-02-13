async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoEmJSON = await conexao.json();
    
    return conexaoEmJSON;
}



async function criaVideo(titulo, descricao, url, imagem) {
    try {
        const res = await fetch('http://localhost:3000/videos', {
            method: "POST",
            headers: {
                "Content-type" : "aplication/json"
            },
            body: JSON.stringify({
                titulo : titulo,
                descricao: `${descricao} mil visualizações`,
                url: url,
                imagem: imagem
            }),
        },
        );

        const resData = await res.json();
        return resData;

    } catch (err) {
        console.log(err.message)
    }
}    

/**
 * função para pesquisar o video via o parametro q na url
 * 
 * async function buscaVideo(){
 * const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
 * const conexaoConvertida = conexao.json();
 * 
 * return conexaoConvertida;
 * }
 * 
 * 
 */

export const conectarApi = {
    listaVideos,
    criaVideo
    //buscaVideo
}