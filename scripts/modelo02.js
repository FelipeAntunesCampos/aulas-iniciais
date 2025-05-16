/*
Você trabalha como estagiário em uma loja de games e seu chefe pediu para analisar as
vendas da semana. A loja registrou quantos jogos foram vendidos em cada dia:

[15, 12, 8, 10, 25, 30, 18]  // Domingo a Sábado

Essa semana houve lançamento de um jogo muito esperado na sexta-feira, o que
explica o aumento nas vendas.

Desenvolva um programa que:
1. Identifique em qual dia houve o maior número de vendas
2. Calcule o total de jogos vendidos na semana
3. Conte quantos dias tiveram vendas acima de 15 jogos (considerados "dias bons")
4. Calcule quanto a loja faturou, sabendo que cada jogo custa em média R$ 250
*/
const jogosVendidos = [15, 12, 8, 10, 25, 30, 18];
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let totalJogosVendidos = 0;
let maiorVenda = jogosVendidos[0];
let maiorDia
let diasAcima = 0;

for (let i = 0; i < jogosVendidos.length; i++) {
        if(jogosVendidos[i] > maiorVenda) {
            maiorVenda = jogosVendidos[i];
            maiorDia = diasDaSemana[i]
          }      
        }
console.log(`O dia em que houve o maior número de vendas foi ${maiorDia}, com ${maiorVenda} jogos vendidos`);

for (let i = 0; i < jogosVendidos.length; i++) {
    totalJogosVendidos += jogosVendidos[i]
}
console.log(`O total de jogos vendidos na semana foi de: ${totalJogosVendidos}`);

for (let i = 0; i < jogosVendidos.length; i++) {
    if (jogosVendidos[i] > 15) {
        diasAcima++;
    }
}
console.log(`Foram ${diasAcima} dias que tiveram vendas maior que 15 jogos.`);


console.log(`A loja faturou R$ ${(totalJogosVendidos * 250).toFixed(2)}`);
