//1 - Verificação de desconto em loja de roupas
let ehDiaPromocao = true; //15%
let temCartaoFidelidade = false; //5%
let valor = 200 //10%
let desconto1 = 0
let desconto2 = 0
let desconto3 = 0
if (valor >= 200) {
    desconto1 = valor * 0.10 
    valor = valor - desconto1
    switch (temCartaoFidelidade) {
        case true:
        desconto2 = valor * 0.05
        valor = valor - desconto2
            break;
    
        default:
            break;
    }
    switch (ehDiaPromocao) {
        case true:
            desconto3 = valor * 0.15 
            valor = valor - desconto3
            break;
        default:
            break;
    }
    console.log(`Você pagará R$ ${valor}`);        
}else{
    switch (temCartaoFidelidade) {
        case true:
        desconto2 = valor * 0.05
        valor = valor - desconto2
            break;
    
        default:
            break;
    }
    switch (ehDiaPromocao) {
        case true:
            desconto3 = valor * 0.15 
            valor = valor - desconto3
            break;
        default:
            break;
}
console.log(`Você pagará R$ ${valor}`);

}
//2 - Verificação de elegibilidade para carteira de motorista
let idade = 18;
let passouExameTeorico = true;
let passouExamePratico = true;
let mensagem = "";

if (idade >= 18) {
    mensagem += "Você é maior de idade e é elegivel para tirar carta";
} else {
    mensagem += "Você não é maior de idade e NÃO é elegivel para tirar carta";
}

if (passouExamePratico) {
     mensagem += "Você passou no Exame Prático e é elegivel para tirar carta";
} else {
     mensagem += "Você NÃO passou no Exame Prático e Não é elegivel para tirar carta";
}

if (passouExameTeorico) {
    mensagem += "Você passou no Exame Teórico e é elegivel para tirar carta"
} else {
     mensagem += "Você NÃO passou no Exame Teórico e Não é elegivel para tirar carta";
}

console.log(mensagem);

//3 - Calculadora de preço de ingresso para parque
let idade1 = 10; //crianças pagam 20, adultos pagam 40, idosos pagam 25, 
let criancas1 = 20;
let adultos = 40;
let idosos = 25;
let acrescentarFeriado = 0;
let descontaCartao = 0;
let ehFeriado = true; // se é feriado adicione 20% 
let temCartaoDesconto = true; //se tiver cartao de desconto -15% 
