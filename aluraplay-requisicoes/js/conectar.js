async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoEmJSON = await conexao.json();
    
    return conexaoEmJSON;
}

export const conectarApi = {
    listaVideos
}