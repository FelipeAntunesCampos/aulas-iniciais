/*7) Um professor precisa calcular as médias finais dos alunos. Considere:

- Nomes: `["João", "Maria", "Pedro", "Ana", "Carlos"]`
- Notas da Prova 1: `[7.5, 8.0, 6.5, 9.0, 7.0]` (peso 2)
- Notas da Prova 2: `[8.0, 7.5, 8.5, 8.0, 8.5]` (peso 3)
- Notas do Trabalho: `[6.0, 9.0, 7.0, 9.5, 6.5]` (peso 1)

Crie um programa que:

- Calcule a média ponderada de cada aluno (use a fórmula: (P1*2 + P2*3 + T*1) / 6)
- Identifique quais alunos foram aprovados (média >= 7.0)
- Identifique qual aluno teve a maior média final
- Crie e exiba uma tabela com Nome, Média e Situação (Aprovado/Reprovado)
*/

//declaração de variaveis
let nomes = ["João", "Maria", "Pedro", "Ana", "Carlos"];
let notas1 = [7.5, 8.0, 6.5, 9.0, 7.0];
let notas2 = [8.0, 7.5, 8.5, 8.0, 8.5];
let notasTrabalho = [6.0, 9.0, 7.0, 9.5, 6.5];
let notasFinais = [];
let alunosAprovados = [];
let contadorNotasFinais = 0;
let mediaPonderada = 0;

//For para percorrer o array, e fazer as contas da media ponderada.
for (let i = 0; i < nomes.length; i++) {
  notasFinais[i] =
    (notas1[i] * 2 + notas2[i] * 3 + notasTrabalho[i] * 1) / 6;
  if (notasFinais[i] >= 7) {
    alunosAprovados[contadorNotasFinais] = nomes[contadorNotasFinais];
    contadorNotasFinais++;
  }
}

let notaAlunoMaiorMedia = notasFinais[0]
let alunoMaiorMedia = "";

//For para descobrir qual aluno teve a maior nota e quem foi.
for (let i = 0; i < notasFinais.length; i++) {
 if(notasFinais[i] > notaAlunoMaiorMedia)
    notaAlunoMaiorMedia = notasFinais[i];
    alunoMaiorMedia = nomes[i];    
}

//Imprimir o resultado na tela.
console.log(`A média ponderada de cada aluno é de ${notasFinais}, os alunos aprovados foram ${alunosAprovados}, e o aluno que teve a maior média que foi de ${notaAlunoMaiorMedia}, e foi o ${alunoMaiorMedia}`);
