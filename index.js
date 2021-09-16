// definição de variáveis e atribução de valores
let listaDeEstudantes = ["Matheus", "Lucas", "Pedro"];
let quantidadeDeEstudantes = listaDeEstudantes.length;

// condicional, estrutura de decisão com saída de mensagem
if (quantidadeDeEstudantes % 2 == 0 && quantidadeDeEstudantes != 0){
    console.log('O número de estudantes é "Par", total de: ' + quantidadeDeEstudantes)
} else if (quantidadeDeEstudantes == 0){
    console.log("O número de estudantes é Zero.")
} else {
    console.log('O número de estudantes é "Ímpar", total de: ' + quantidadeDeEstudantes)
}