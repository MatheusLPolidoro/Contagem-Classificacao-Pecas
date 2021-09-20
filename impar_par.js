// definição de variáveis e atribução de valores
let listaDePecas = ["Motor", "Difusor ", "Pistão"];
let qtdPecas = listaDePecas.length;

// condicional, estrutura de decisão com saída de mensagem
if (qtdPecas % 2 == 0 && qtdPecas != 0){
    console.log('O número de peças é "Par", total de: ' + qtdPecas);
} else if (qtdPecas == 0){
    console.log("O número de peças é Zero.");
} else {
    console.log('O número de peças é "Ímpar", total de: ' + qtdPecas);
}
