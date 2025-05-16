/* Você está gerenciando sua conta do Instagram e quer analisar o desempenho dos seus
stories nos últimos 5 dias. Você anotou o número de visualizações de cada story:

[1200, 850, 1100, 1350, 950] // Segunda a Sexta

No story de quinta-feira você fez uma enquete sobre um novo corte de cabelo, o que
pode explicar o aumento nas visualizações.

Desenvolva um programa que:
1. Encontre o dia com mais visualizações e qual foi esse dia (2 = quarta, 3 = quinta, etc.)
2. Calcule o total de visualizações no período
3. Conte quantos dias tiveram mais de 1000 visualizações (considerados "stories populares")
4. Calcule a média diária de visualizações
*/

const viewsStory = [1200, 850, 1100, 1350, 950];
const diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];
let maiorViews = viewsStory[0];
let diaComMaisViews;
let totalViews = 0;
let diasAcima = 0;
let media = 0;
for (let i = 0; i < viewsStory.length; i++) {
    if(viewsStory[i] > maiorViews) {
        maiorViews = viewsStory[i];
        diaComMaisViews = diasDaSemana[i]
      }      
    }
console.log(`O dia em que houve o maior número de views foi ${diaComMaisViews}, com ${maiorViews} visualizações`);

for (let i = 0; i < viewsStory.length; i++) {
    totalViews += viewsStory[i]
    if (viewsStory[i] > 1000) {
        diasAcima++;
    }
}
console.log(`O total de visualizações no período foi de: ${totalViews}`);
console.log(`O total de dias que tiveram mais de 1000 visualizações foi de: ${diasAcima} dias`);

media = totalViews / viewsStory.length
console.log(`A média diária de visualizações é de ${media} views`); 