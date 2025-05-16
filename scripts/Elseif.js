let idade = 13;
let carteirinha = false;
let acompanhante = false; 
if (idade >= 18) {
    switch (carteirinha) {
        case true:
            console.log("Você tem carteirinha, então pagará R$ 25,00");
            break;
        
        default:
            console.log("Você não tem carteirinha, o valor é de R$ 50,00");
            break;
    } 
}else if (idade >=15 ) {
    switch (carteirinha) {
        case true:
            console.log("Você tem carteirinha, então pagará R$ 25,00");
            break;
       
        default:
            console.log("Você não tem carteirinha, o valor é de R$ 35,00");
            break;
    }
}else {
    switch (acompanhante) {
        case true:
            console.log("Você poderá entrar, pois está acompanhado, o valor é de R$ 20,00 ");
            break;

        default:
            console.log("Você não poderá entrar, pois esta desacompanhado!");   
            break;
    }
}

