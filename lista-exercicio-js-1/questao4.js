/*
QUESTÃO 4
Solicite dois números e utilize operadores de comparação
para informar se são iguais, diferentes, qual é o maior e qual é
o menor. Utilize também === para comparar os valores.
*/

let num1 = Number(prompt('Informe um número:'));
let num2 = Number(prompt('Informe outro número:'));

// diferentes ou iguais
if(num1 !== num2){
   console.log('Os números são diferentes');
}
else{
   console.log('Os números são iguais');
}

// maior ou menor
if(num1 > num2){
   console.log(`O número ${num1} é maior do que o número ${num2}`);
   console.log(`O número ${num2} é menor do que o número ${num1}`);
}
else if(num2 > num1){
   console.log(`O número ${num2} é maior do que o número ${num1}`);
   console.log(`O número ${num1} é menor do que o número ${num2}`);
}
else{
   console.log('Os números são iguais');
}

// comparação com === (valor e tipo)
if(num1 === num2){
   console.log('Os números são iguais em valor e tipo');
}