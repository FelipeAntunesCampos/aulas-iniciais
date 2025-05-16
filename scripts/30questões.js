//1)  Declarar as variaveis 
console.log("Questão 1");
let compra = 250;
let pagamento = 300;
let troco = pagamento - compra;
//Verificar quanto tera que voltar de troco
if (troco > 0) {
    console.log(`Você tem ${troco} reais de troco!`); 
} else {
    console.log(`Você não tem troco!`);
}

//2) Declarar as variaveis 
console.log("Questão 2");
let temperatura = 32;
let conversao;
//converter celsius em fahrenheit
conversao = 1.8 * temperatura + 32;

//informar o valor em fahrenheit 
console.log(`a temperatura será de ${conversao} Fahrenheit.`)

//3)Declarar variaveis
console.log("Questão 3");
let ano = 2016;
let conta = ano % 4;
//processamento verificar se é bissexto 
if (conta <= 0) {
    console.log(`Você esta em ${ano}, este ano é um ano bissexto.`);
} else {
    console.log(`Você está em ${ano}, este não é um ano bissexto`);
}

//4) declarar variaveis 
console.log("Questão 4");
let nota;
nota = 7 + 8 + 3;
let media = nota/3;

//verificar se a média é suficiente para passar de ano
if (media >= 7) {
    console.log(`Parabéns Você passou de ano! sua média é de ${media}.`);
} else {
    console.log(`Infelizmente Você não passou de ano! sua média é de ${media}`);
    
}

//5) declarar variaveis 
console.log("Questão 5");
let minutos = 1290;
let horas; 
// Processamento 
horas = minutos/60;
// Retornar o valor
console.log(`Esse são os minutos convertido para horas e minutos, ${horas} horas `);

//6) declarar as variaveis
console.log("Questão 6");
let compra2 = 300;
let desconto = 15;
let valor;
let valordesconto;
//Aplicar o desconto na compra
valordesconto = compra2 * desconto / 100;
valor = compra2 - valordesconto

//Informar resultado
console.log(`O Valor da sua comprar com desconto deu: ${valor} reais`)

//7)Declarar as variaveis
console.log("Questão 7");
let numero = 13
let verificar2 = numero/2
//Condição 
if (numero % 2 > 0 ) {
    console.log(`Este é um numero primo ${numero}`);
}else {
    console.log(`Este não é um numero primo ${numero}`)
}

//8)

//9) Declarar variaveis 
console.log("Questão 9");
let peso = 90;
let altura = 1.85;
let cont =   peso / (altura * altura)
console.log(`Seu imc é de ${cont}`);

//10) declarar variaveis 
console.log("Questão 10");
let senha = 9890880;
if (senha >= 100) {
    console.log(`Sua senha é forte`);
} else {
    console.log("sua senha é fraca");
    
}

//11 declarar variveis 
console.log("Questão 11");
let km = 600;
// Quantos km o carro faz com 1 litro
let kml = 12;
let vlr = km / kml;
console.log(`O Consumo será de ${vlr} litros`);

//12 declarar variaveis
console.log("Questão 12");
let idade = 18;
let diasVividos = idade * 365 
console.log(`Você ja viveu ${diasVividos} dias`);

//13 declarar variaveis 
console.log("Questão 13");
let capital = 1000;
let taxaJuros = 2/100;
let tempoDias = 6;
let somaTotal1 = capital * taxaJuros * tempoDias;
console.log(`O Valor com juros será de ${somaTotal1}`);

//14 declara variaveis 
console.log("Questão 14");
let numero1 = 5;
let numero2 = 8;
let numero3 = 9;
console.log(`O maior número é ${Math.max(numero1, numero2, numero3)}`);

//15 Contagem de Números Ímpares
console.log("Questão 15");
let numberA = 1;
if (numberA % 2 === 0) {
    console.log(`O ${numberA} é par`);
} else {
    console.log(`O ${numberA} é impar`);
    
}


//16 Comparação de Preços por Unidade
console.log("Questão 16");
let produto1 = 150;
let produto2 = 250 ;
if (produto1 < produto2) {
    console.log(`O produto com melhor custo beneficio é este ${produto1}`);
} else {
    console.log(`O produto com melhor custo beneficio é este ${produto2}`);
}
//17 Cálculo do Perímetro de um Retângulo
console.log("Questão 17");
let lado1 = 23;
let lado2 = 15;
let perimetro = 15*2 + 23*2;
console.log(`O Perímetro é de ${perimetro} cm`);

//18 Cálculo do Tempo Estimado de Viagem
console.log("Questão 18");
let distanciav = 300;
let velMedia = 75;
let tempoViagem = 300/75;
console.log(`O tempo estimado de viagem é de ${tempoViagem} horas`);

//19 Simulação de Sorteio Aleatório
console.log("Questão 19");
let numeroA = 0;
let numeroB = 100;
let Random2 = numeroA + numeroB;
let random3 = Math.random(numeroA) * (numeroA - numeroB) + numeroB;
console.log(`O Número é ${random3}`);

//20 Conversão de Notas para Conceitos
console.log("Questão 20");
let A = 10;
let B = 9;
let C = 8;
console.log(`A nota A é igual a ${A}, a nota B é igual a ${B}, a nota C é igual a ${C}`);

//21 Cálculo de Fatorial
console.log("Questão 21");
let nume = 5;
let fatorial = 1;
fatorial *= numero;

fatorial *= numero - 1;
fatorial *= numero - 2;
fatorial *= numero - 3;
fatorial *= numero - 4;
console.log(`O fatorial de ${numero} é ${fatorial}`);

//22 Separação de Pares e Ímpares

//23 Soma de Dígitos de um Número
let num = 8850;
num.toString()

//24 Verificação de Palíndromo

//25 Cálculo da Média Ponderada
console.log("Questão 25");
let nm1 = 10;
let nm2 = 7;
let nm3 = 6;
let nm4 = 9;
let p1 = nm1 *1;
let p2 = nm2 *3;
let p3 = nm4 *2;
let p4 = nm3 *4;
let media1 = (p1 + p2 + p3 + p4)/10 ;
console.log(`A média ponderada é ${media1}`);

//26 Cálculo de Horas Trabalhadas 
console.log("Questão 26");
let entrada = 8;
let saida = 18;
let intervalo = 1
let horasTra = saida - entrada - intervalo;
console.log(`O total de horas trabalhadas é de ${horasTra} horas`);
 
//27 Divisão de Conta de Restaurante
console.log("Questão 27");
let valorConta = 2300;
let pessoa1 = 1;
let pessoa2 = 1;
let pessoa3 = 1;
let pessoa4 = 1;
let divisaoConta = valorConta/(pessoa1 + pessoa2 + pessoa3 + pessoa4);
console.log(`Cada pessoa terá que pagar ${divisaoConta} reais`);

//28 Conversão de Moeda
console.log("Questão 28");
let dol = 1
let cotacaoDol = dol * 5.85 
let brl = 100
let conversaoMoeda = brl/cotacaoDol 
console.log(`o Valor convertido para dolar será de ${conversaoMoeda} Dol `);

//29 Ordenação de Números

//30 Conversão de Texto para Caixa Alta
console.log("Questão 30");
let texto = "alfabeto";
let maiuscula = texto.toUpperCase ();
console.log(maiuscula);