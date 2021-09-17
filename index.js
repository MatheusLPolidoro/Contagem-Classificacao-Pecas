// Autor: Matheus Latancio Polidoro | data: 16/09/2021 | Senai Front-end

// sistema de cadastro de peças

// Observação importante, essa versão funciona apenas rodando com o Node e com a biblioteca readline-sync. Por favor executar o comando : npm install readline-sync no terminal caso não esta com as pastas da biblioteca disponiveis no diretorio atual.Também fiz uma versão desse mesmo programa para rodar pelo navegador, substitutindo a entrada de dados pelo comando: window.prompt(); e a saída de dados por window.alert();

const rl = require('readline-sync'); // responsavel pelo input da leitura (requer biblioteca externa)

// definição de variáveis
var ListaDePeca = [], // Array para armazenar todas as pecas e seus respectivos pesos
PecaAtual = {
// propriedades da peca    
nome: '', 
peso: 0
},
Sair = false, // variável do tipo lógico sair do loop 
Escolha = 'S', // recebe a escolha do usuário, conforme a escolha segue um caminho da estrutura condicional
Mensagem, // mensagem para apresentar na saída do usuário
MaxListaPeca, // definição do tamanho maxímo 
i = 0 // indice para percorrer os itens da Lista de peças
; 

// atribuição inicial de valores pré definidos pelo enunciado, caso queira trocar os valores fica mais simples dessa forma

MaxListaPeca = 10;
MinCaracter = 3;
MinPeso = 100;

// armazenar as peças

console.log('\n\t-- Cadastro de Peças --')
do {
    if (Escolha == "S") {
        PecaAtual.nome = rl.question('\nQual o nome da peca que deseja cadastrar? ');
        if (PecaAtual.nome.length >= MinCaracter) {
            PecaAtual.peso = rl.question('Qual o peso em gramas desse objeto? ');
            if (PecaAtual.peso >= MinPeso) {
                ListaDePeca.push(PecaAtual.nome);
                ListaDePeca.push(PecaAtual.peso);
                Mensagem = '\nCadastro da peça "' + PecaAtual.nome + '" realizadado com sucesso.\n';
                i ++;
            } else {
                Mensagem = 'Devido ao peso abaixo de 100 gramas, peça não cadastrada.\n';
            }
        } else {
            Mensagem = 'Devido a quantidade de caracteres "inferior" a ' + MinCaracter +', peça não cadastrada.\n';
        }
        if (ListaDePeca.length / 2 < MaxListaPeca) {
            console.log(Mensagem);
            Escolha = rl.question('Deseja cadastrar mais uma?\n ["S" para SIM e "N" para NAO]: ').trim().toUpperCase();
        } else {
            console.log('Capacidade máxima de '+ MaxListaPeca + ' atingida!');
        }
    } else {
        Sair = true;
    }
} while (Sair == false || ListaDePeca.length == MaxListaPeca);

i = 1;

// mostrar a lista de peças
console.log('\n\t-- Lista de Peças Cadastradas --')
for (let index = 0; i <= ListaDePeca.length / 2; index += 2) {
    console.log('\t' + i + '° Peça: ' + ListaDePeca[index] + '\t|' + ' Peso: ' + ListaDePeca[index + 1] + ' Gramas');
    i ++;
}

rl.question(''); // caso rodar no terminal do Node ou prompt serve para manter a mensagem final para o usuário.