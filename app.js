listaNumerosSorteeados = [];
let maiorEscolha = 50;
let numeroSecreto = grarNumeroAleatorio();
let tentativas = 0;
exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Joho do número secreto');
    let mensagem = `Escolha um número entre 1 e ${maiorEscolha} `;
    exibirTextoNaTela('p', mensagem);
}

function verificarChute() {
    tentativas++;
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let plural = tentativas > 1 ? 's' : '';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} tentativa${plural}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor!!');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior!!');
        }
    }
    limparCampo();
}

function grarNumeroAleatorio() {
     if (listaNumerosSorteeados.length == maiorEscolha) {
        listaNumerosSorteeados = []; 
     }

    let numeroEscolhido = parseInt(Math.random() * maiorEscolha + 1);
    if (listaNumerosSorteeados.includes(numeroEscolhido)) {
        return grarNumeroAleatorio();
    } else {
        listaNumerosSorteeados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = grarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}