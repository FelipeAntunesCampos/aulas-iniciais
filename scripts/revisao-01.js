/* Revisão if else 
*/
//5 - Calculadora de pontos em jogo Desenvolva um programa que calcule os pontos ganhos em uma fase de um jogo considerando: pontos base (100), nível de dificuldade (1 a 5, multiplicador dos pontos), se completou em tempo recorde (completouEmTempoRecorde = true - dobra os pontos) e se coletou todos os itens (coletouTodosItens = true - adiciona 150 pontos).

const pontosBase = 100;
const nivelDificuldade = 5;
const completouEmTempoRecorde = true;
const coletouTodosItens = true; 

//calculando os pontos totais inicialmente
let pontosTotais = pontosBase * nivelDificuldade

//verificar bônus de recorde 

if (completouEmTempoRecorde) {
    pontosTotais = pontosTotais * 2
    console.log(`Parabéns, aleatório! Você bateu o recorde e dobrou seus pontos! Pontuação ${pontosTotais}`);
    
}

//verificar coleta de todos os itens

if (coletouTodosItens) {
    pontosTotais = pontosTotais + 150
    console.log(
        `Parabéns, aleatório! Você coletou todos os itens da fase! Pontuação ${pontosTotais}`);
}

//imprimir valor 

console.log(`Pontos totais: ${pontosTotais}`);

if (pontosTotais > 1000) {
    console.log(`Parabéns Aleatório! Platinou o jogo!`);
    
}