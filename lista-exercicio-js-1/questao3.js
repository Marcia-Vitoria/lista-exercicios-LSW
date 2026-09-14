/*
QUESTÃO 3
Solicite o nome, idade e altura de uma pessoa. Armazene
cada informação em uma variável e utilize typeof para
identificar o tipo de cada dado. Apresente os resultados ao
usuário.
*/

let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let altura = prompt('Qual a sua altura?');

alert(`Nome: ${nome}\nTipo: ${typeof(nome)}`);
alert(`Idade: ${idade}\nTipo: ${typeof(idade)}`);
alert(`Altura: ${altura}\nTipo: ${typeof(altura)}`);