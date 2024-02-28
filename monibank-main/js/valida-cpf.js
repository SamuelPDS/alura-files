export default function ehUmCpf(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(ValidaPrimeiroDigito(cpf) || ValidaRepetidos(cpf) ||  ValidaSegundoDigito(cpf)) {
        console.log('Esse cpf não existe')
    } else {
        console.log('Esse cpf existe')
    }


    console.log(ValidaRepetidos(cpf))
}

function ValidaRepetidos(cpf) {
 const numRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
 ]

    return numRepetidos.includes(cpf)
}


function ValidaPrimeiroDigito(cpf) {
    let soma = 0;
    let multiplicador = 10;

    for(let tamanho = 0; tamanho < 9; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma==11) {
        soma = 0;
    }

    return soma != cpf[9]
}


function ValidaSegundoDigito(cpf) {
    let soma = 0;
    let multiplicador = 11;

    for(let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11

    if (soma == 10 || soma==11) {
        soma = 0;
    }

    console.log( soma != cpf[10])
}