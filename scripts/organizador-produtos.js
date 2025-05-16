/*6. Organizador de Produtos (20 pontos)**

Uma loja precisa organizar seu estoque. Considere os seguintes arrays:

- Produtos: `["Teclado", "Mouse", "Monitor", "Gabinete", "Headset", "Mousepad"]`
- Preços: `[120, 80, 450, 350, 200, 35]`
- Quantidades: `[15, 25, 8, 5, 10, 30]`

Cada posição dos arrays corresponde a um produto (ex: Teclado custa 120 e tem 15 unidades).

Crie um programa que:

- Identifique qual é o produto mais caro e o mais barato
- Calcule o valor total do estoque (quantidade * preço de cada produto)
- Crie uma promoção onde os produtos com menos de 10 unidades em estoque têm 15% de desconto
- Exiba uma tabela com Nome, Preço Original, Preço com Desconto (se aplicável) e Quantidade
*/

//declaração de variaveis
let nomesProdutos = ["Teclado", "Mouse", "Monitor", "Gabinete", "Headset", "Mousepad"];
let precosProdutos = [120, 80, 450, 350, 200, 35];
let quantidades = [15, 25, 8, 5, 10, 30];
let produtosComDesconto = [];

let produtoMaisCaro = precosProdutos[0];
let produtoMaisBarato = precosProdutos[0];
let nomeProdutoMaisCaro = nomesProdutos[0];
let nomeProdutoMaisBarato = nomesProdutos[0];
let valorTotalQuantidadesDeProduto = quantidades[0]; //quantidade * preço de cada produto
let valorTotalEstoque = 0; 
let precoTotalCadaProduto = 0;
let descontoProdutosMenosUnidades = 0;
let contadorDescontos = 0;
let nomeProdutoDesconto = [];


//usamos o for para percorrer o array nomesProdutos, logo após usamos a condição if para verificar qual o produto mais caro, e o nome do produto, usamos um else para verificar o produto mais barato e o nome deste produto.
for (let i = 0; i < nomesProdutos.length; i++) {
    if (precosProdutos[i] > produtoMaisCaro) {
        produtoMaisCaro = precosProdutos[i];
        nomeProdutoMaisCaro = nomesProdutos[i];
    } else {
        produtoMaisBarato = precosProdutos[i]
        nomeProdutoMaisBarato =nomesProdutos[i]
    }
    
}
//usamos outro for para calcular o valor total dos produtos com preço original, e adiciomnamos o preço a uma nova variavel.
for (let i = 0; i < precosProdutos.length; i++) {
    precoTotalCadaProduto += precosProdutos[i]
    valorTotalQuantidadesDeProduto += quantidades[i]
}
//calculamos o valor total do estoque, com a variavel valor total quantidades de produtos vezes o preco total de cada produto, o resultado armazenamos na variavel valoTotalEstoque
valorTotalEstoque = valorTotalQuantidadesDeProduto * precoTotalCadaProduto

//usamos o for para criar uma promoção em produtos que tem abaixo de 10 unidades, chamamos o array quantidade e os itens que forem abaixo de 10, ganha desconto de 15%, criamos um novo array com os produtos que teve desconto de 15%
for (let i = 0; i < quantidades.length; i++) {
    if (quantidades[i] < 10) {
        descontoProdutosMenosUnidades = precosProdutos[i] * 0.15 
        produtosComDesconto[contadorDescontos] = precosProdutos[i] - descontoProdutosMenosUnidades
        nomeProdutoDesconto[contadorDescontos] = nomesProdutos[i]
        contadorDescontos ++;

    }    
}
//Mostramos os resultados finais de cada etapa
console.log(`O produto mais caro foi o ${nomeProdutoMaisCaro}, e teve um preço de R$ ${produtoMaisCaro}, e O produto mais barato foi o ${nomeProdutoMaisBarato}, e teve um preço de R$ ${produtoMaisBarato}`);

console.log(`O Valor total do estoque é de R$ ${valorTotalEstoque.toFixed(2)} `);

console.log(`O preço dos produtos com unidades abaixo de 10 que se aplicam na promoção são R$ ${produtosComDesconto} reais, e os produtos são ${nomeProdutoDesconto}`);

console.table(nomesProdutos);
console.table(precosProdutos);
console.table(quantidades);
console.table(produtosComDesconto);
