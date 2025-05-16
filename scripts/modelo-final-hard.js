/*
Você conseguiu um estágio na equipe de marketing de uma loja de aplicativos para celular
e seu primeiro trabalho é analisar os dados dos 10 aplicativos mais baixados do mês.

Os dados são:
Nomes: ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"]
Downloads (em milhões): [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]
Avaliações (de 1 a 5 estrelas): [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1]
Categorias: ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]
Seu gerente quer um relatório detalhado com as seguintes informações:

1. Mostre todos os dados em formato de tabela (nome, downloads, avaliação e categoria)
2. Encontre o aplicativo com maior número de downloads e sua categoria
3. Encontre o aplicativo com a melhor avaliação e sua categoria
4. Calcule a média de downloads dos aplicativos
5. Crie um novo array apenas com os nomes dos aplicativos que têm avaliação maior que 4.5
6. Calcule o total de downloads de todos os aplicativos da categoria "Social"
7. Verifique qual categoria tem mais aplicativos no Top 10

Esta análise será apresentada na reunião de marketing na próxima semana e ajudará
a definir as estratégias de promoção da loja.
*/

const aplicativos = ["TikTok", "Instagram", "WhatsApp", "Snapchat", "Spotify", "Netflix", "YouTube", "VSCO", "BeReal", "Uber"];
const downloads = [2.5, 2.2, 1.8, 1.5, 1.3, 1.2, 1.1, 0.9, 0.8, 0.7]; //milhões
const avaliacoes = [4.7, 4.8, 4.5, 3.9, 4.6, 4.3, 4.9, 4.2, 3.8, 4.1];
const categorias = ["Social", "Social", "Comunicação", "Social", "Música", "Streaming", "Vídeo", "Foto", "Social", "Transporte"]

let maiorNumeroDeDownloads = downloads[0];
let categoriaMaiorDownloads = categorias[0];
let aplicativoMaiorDownloads = aplicativos[0];
let melhorAvaliacao = avaliacoes[0];
let aplicativoMaiorAvaliacao = aplicativos[0];
let categoriaMaiorAvaliacoes = categorias[0];
let numeroTotalDownloads = 0;
let media = 0;
let novoArray = [];
let contadorAplicativosMaiorAvaliacao = 0;
let totalDownloadsSocial = 0;
let categoriaMaisAplicativos = "";
let maiorContagem = 0;
let contadorCategorias = {};


console.table(aplicativos)
console.table(downloads)
console.table(avaliacoes)
console.table(categorias)

for (let i = 0; i < aplicativos.length; i++) {
    if(downloads[i] > maiorNumeroDeDownloads) {
        maiorNumeroDeDownloads = downloads[i];
        categoriaMaiorDownloads = categorias[i] 
        aplicativoMaiorDownloads = aplicativos[i]
      }      
    }
    console.log(`O aplicativo com melhor numero de downloads teve ${maiorNumeroDeDownloads} milhões de downloads, da categoria ${categoriaMaiorDownloads}, e ele foi o ${aplicativoMaiorDownloads}`); 

for (let i = 0; i < aplicativos.length; i++) {
   if (avaliacoes[i] > melhorAvaliacao) {
    melhorAvaliacao = avaliacoes[i]
    categoriaMaiorAvaliacoes = categorias[i]
    aplicativoMaiorAvaliacao = aplicativos[i]
   }
    
}
console.log(`O aplicativo com o melhor número de avaliações teve ${melhorAvaliacao} avaliações, é da categoria ${categoriaMaiorAvaliacoes}, e ele foi o ${aplicativoMaiorAvaliacao}`);

for (let i = 0; i < downloads.length; i++) {
    numeroTotalDownloads += downloads[i]
}

media = numeroTotalDownloads / downloads.length
console.log(`A média de downloads dos aplicativos é de ${media} milhões`);

for (let i = 0; i < avaliacoes.length; i++) {
    if (avaliacoes[i] > 4.5) {
        novoArray[contadorAplicativosMaiorAvaliacao] = aplicativos[i];
        contadorAplicativosMaiorAvaliacao ++;
    }
    if (categorias[i] === "Social") {
        totalDownloadsSocial += downloads[i]
    }
}
for (let categoria in contadorCategorias) {
    if (contadorCategorias[categoria] > maiorContagem) {
        maiorContagem = contadorCategorias[categoria];
        categoriaMaisAplicativos = categoria;
    
    }
}
console.log(`Os aplicativos que tem avaliações maiores que 4,5 são: ${novoArray}`);
console.log(`O Total de downloads da categoria social é de : ${totalDownloadsSocial} milhões`);
