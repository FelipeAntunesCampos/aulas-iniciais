let salario;

let aluguel;
let energia;
let supermercado;
let lazer;
let totalDespesas;
let saldo;

salario = 5000;
aluguel = 1200;
energia = 200;
supermercado = 1500;

totalDespesas = aluguel + energia + supermercado;

saldo = salario - totalDespesas;

if (saldo > 0) {
console.log("Você pode curtir a festa da Uva em Vinhedo" + " " + "R$" + saldo);
}else{
    (saldo < 0)
    console.log("Você não poderá ir a festa da Uva em Vinhedo, Você tem" + " " + "R$"+ saldo);
}
