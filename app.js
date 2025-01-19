let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}



exibirTextoNaTela('h1', 'Número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}

function verificarChute(){  
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns! Você Acertou');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
    }else{
        console.log(tentativas);
        if (chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }
    
    
}