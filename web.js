// Autor: Matheus Latancio Polidoro | data: 16/09/2021 | Senai Front-end

// sistema de cadastro de peças

// definição de variáveis
var ListaDePeca = [], // Array para armazenar todas as pecas e seus respectivos pesos
PecaAtual = {
// propriedades da peça    
nome: '', 
peso: 0
},
Sair = false, // variável do tipo lógico sair do loop 
Escolha = 'S', // recebe a escolha do usuário, conforme a escolha segue um caminho da estrutura condicional
Mensagem, // mensagem para apresentar na saída ao usuário
MaxListaPeca, // definição do tamanho maxímo da lista, corresponde ao tamanho da caixa 
MinCaracter, // definição do tamanho mínimo de caracteres da peça
MinPeso,  // definição do peso mínimo de cada peça
MensagemLista, // mensagem para apresentar na saída final ao usuário
i = 1 // indice para percorrer os itens da Lista de peças
; 

// atribuição inicial de valores pré definidos pelo enunciado, caso queira trocar os valores fica mais simples dessa forma

MaxListaPeca = 10;
MinCaracter = 3;
MinPeso = 100;

// armazenar as peças

window.alert('-- Cadastro de Peças --')
do {
    if (Escolha === "S") {
        PecaAtual.nome = window.prompt('Qual o nome da peça que deseja cadastrar? ');
        if (PecaAtual.nome.length >= MinCaracter) {
            PecaAtual.peso = window.prompt('Qual o peso em gramas desse objeto? ');
            if (PecaAtual.peso >= MinPeso) {
                ListaDePeca.push(PecaAtual.nome);
                ListaDePeca.push(PecaAtual.peso);
                Mensagem = 'Cadastro da peça "' + PecaAtual.nome + '" realizadado com sucesso.\n';
            } else {
                Mensagem = 'Devido ao peso abaixo de 100 gramas, peça não cadastrada.\n';
            }
        } else {
            Mensagem = 'Devido a quantidade de caracteres "inferior" a ' + MinCaracter +', peça não cadastrada.\n';
        }
        if (ListaDePeca.length / 2 < MaxListaPeca) {
            window.alert(Mensagem);
            Escolha = window.prompt('Deseja cadastrar mais uma?\n ["S" para SIM e "N" para NAO]: ').trim().toUpperCase();
        } else {
            window.alert('Capacidade máxima de '+ MaxListaPeca + ' atingida!');
            Sair = true;
        }
    } else {
        Sair = true;
    }
} while (Sair === false);

// mostrar a lista de peças
MensagemLista = '';
window.alert('-- Lista de Peças Cadastradas --')
for (let index = 0; i <= ListaDePeca.length / 2; index += 2) {
    MensagemLista = MensagemLista + (i + '° Peça: ' + ListaDePeca[index] + ' |  Peso: ' + ListaDePeca[index + 1] + ' Gramas\n');
    i ++;
}
window.alert(MensagemLista);