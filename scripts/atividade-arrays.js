//Exercício 1 - Média de Notas
/*
Você está desenvolvendo um sistema para uma escola que precisa calcular a média
das notas de uma turma. Crie um array com 5 notas e calcule a média.
*/
let notas = [7.5, 8.0, 6.5, 9.0, 4.0];
let media = 0;
let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas = somaNotas + notas[i];
}
console.log(`Valor da soma das notas: ${somaNotas}`);
somaNotas = somaNotas / notas.length
console.log(`a média das notas da turma: ${somaNotas}`);

//Exercício 2 - Encontrando o Maior Valor
/*
Um influenciador de games quer saber qual de seus vídeos tem mais views.
Crie um array com a quantidade de visualizações de 6 vídeos diferentes
e encontre qual é o maior número de views.
*/

const videos = [10.000, 20.000, 14.000, 7.000, 2.000, 91.000]
let maior = videos[0] 
for (let per = 0; per < videos.length; per++) {
    if(videos[per] > maior) {
        maior = videos[per];
      }
    }
    console.log("O maior número de views é o:", maior); 
    


//Exercício 4 - Verificação de Aprovação
/*
Uma escola considera que um aluno está aprovado se todas as suas notas forem maiores ou iguais a 6.
Crie um array com 4 notas de um aluno e verifique se ele está aprovado ou reprovado.
*/
let notas2 = [7.5, 10, 6.5, 5.0];
let aprovado = false;

for (let ii = 0; ii < notas2.length; ii++) {
    if (notas2[ii] <= 6 ) {      
     console.log("O Aluno está Reprovado!");  
     aprovado = false;
    } else {
        aprovado = true;
    }
}
if (aprovado) {      
    console.log("O Aluno está Aprovado!");
}
