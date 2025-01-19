let listaDeNumerosSorteados = [];
const VALOR_FINAL = 10;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}


function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exibirMensagemInicial();

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * VALOR_FINAL + 1);
   let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeElementosNaLista == VALOR_FINAL){
        listaDeNumerosSorteados = [];
   }

   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
   }
}


function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function verificarChute(){  
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns! Você Acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        console.log(tentativas);
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
            limparCampo();
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
            limparCampo();
        }
        tentativas++;
    }
    
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

