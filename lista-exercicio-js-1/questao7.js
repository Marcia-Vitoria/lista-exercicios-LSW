/*
QUESTÃO 7
Solicite nome, idade e curso utilizando prompt(). Em seguida,
utilize confirm() para perguntar se os dados devem ser
confirmados. Exiba uma mensagem diferente para cada
resposta.
*/

let nome = prompt('Qual o seu nome?');
let idade = prompt('Qual a sua idade?');
let curso = prompt('Qual o seu curso?');

let confirmacao = confirm(`Seu nome é ${nome}, você tem ${idade} anos e cursa ${curso}?`);

if(confirmacao){
   alert('Dados confirmados com sucesso!');
}
else{
   alert('Dados não confirmados.');
}