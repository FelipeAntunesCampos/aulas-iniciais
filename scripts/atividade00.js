/*Durante a última semana, você anotou as temperaturas máximas registradas:

[28, 31, 27, 29, 30, 32, 33] // Domingo a Sábado

Sua mãe está planejando um piquenique e pediu para você analisar como estava o tempo.

Desenvolva um programa que:
1. Calcule a temperatura média da semana
2. Informe a temperatura máxima e em qual dia ela ocorreu
3. Informe a temperatura mínima e em qual dia ela ocorreu
*/

const temperatura = [28, 31, 27, 29, 30, 32, 33];
const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let tempTotal = 0;
let media = 0;
let maiorDia = "";
let menorDia = "";
for (let i = 0; i < temperatura.length; i++) {
    tempTotal += temperatura[i]
}
media = tempTotal / temperatura.length
console.log("A média da temperatura foi de :", media , "Graus");

let maxima = temperatura[0] 
for (let ii = 0; ii < temperatura.length; ii++) {
    if(temperatura[ii] > maxima) {
        maxima = temperatura[ii];
        maiorDia = dias[ii]
      }      
    }
console.log(`A máxima da temperatura foi de: ${maxima} , Ela ocorreu no ${maiorDia}`)

let minima = temperatura[0] 
for (let ii = 0; ii < temperatura.length; ii++) {
    if(temperatura[ii] < minima) {
        minima = temperatura[ii];
        menorDia = dias[ii]
      }      
    }
console.log(`A Minima da temperatura foi de: ${minima} , Ela ocorreu no ${menorDia}`)
