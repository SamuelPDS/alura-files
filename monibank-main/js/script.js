const camposForm = document.querySelectorAll("[required]");

camposForm.forEach((campo)=> {
    campo.addEventListener('blur', () => verificaCampo(campo))
})

function verificaCampo(campo){

}