let produtos = ["Smartphone", "Fone de Ouvido", "carregador", "Capa Protetora"];
let procurar = "Fone de Ouvido";
let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
   if (procurar === produtos[i]) {
    console.log(`Produto encontrado na posição ${i}`);
    encontrado = true;
   } 
}  
if (!encontrado) {
    console.log("Produto não encontrado");
    
}
