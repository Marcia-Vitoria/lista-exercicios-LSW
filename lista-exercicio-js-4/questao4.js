/*
QUESTÃO 4
Para o array alunos, use: find() para exibir o nome do primeiro
aluno com média menor que 7; some() para verificar se algum
aluno tem média maior ou igual a 9; e every() para verificar se
todos têm média maior ou igual a 7.
*/

const alunos = [
    {nome: "Ana", media: 8.5 },
    {nome: "Bruno", media: 6 },
    {nome: "Carla", media: 9 },
    {nome: "Davi", media: 5.5 }
];

const mediaMenorQueSete = alunos.find(aluno => aluno.media < 7);
const existeMediaNove = alunos.some(aluno => aluno.media >= 9);
const mediaAcimaDeSete = alunos.every(aluno => aluno.media >= 7);

console.log(mediaMenorQueSete.nome);
console.log(existeMediaNove);
console.log(mediaAcimaDeSete);