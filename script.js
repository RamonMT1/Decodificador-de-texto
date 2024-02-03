let textoInput = document.getElementById('input-area');
let mensagem = document.getElementById('msg');

function botaoCripto(){
    let fraseCriptografada = criptografar(textoInput.value);
    mensagem.value = fraseCriptografada;
    document.getElementById('botaoCopiar').removeAttribute('disabled');
}

function criptografar(fraseCripto) {
    let codigoCripto = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    for (let i = 0; i < codigoCripto.length; i++) {
        if (fraseCripto.includes(codigoCripto[i][0])) {
        fraseCripto = fraseCripto.replaceAll(codigoCripto[i][0], codigoCripto[i][1])
        }    
    }   
    editarTags('h2', 'Mensagem criptografada:')
    return fraseCripto;
}

function botaoDescripto() {
    let fraseDescriptografada = descriptografar(textoInput.value);
    mensagem.value = fraseDescriptografada;
    document.getElementById('botaoCopiar').removeAttribute('disabled'); 
}

function descriptografar(fraseDescripto) {
    let codigoCripto = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    for (let i = 0; i < codigoCripto.length; i++) {
        if (fraseDescripto.includes(codigoCripto[i][1])) {
            fraseDescripto = fraseDescripto.replaceAll(codigoCripto[i][1], codigoCripto[i][0])
        }
    }
    editarTags('h2', 'Mensagem descriptografada:')
    return fraseDescripto;
}

function editarTags(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

botaoCopiar.addEventListener('click', ()=> {
    msg.select();
    document.execCommand('copy');
    editarTags('h2', 'Texto copiado!')
});