/*
QUESTÃO 8
Crie a função de alta ordem aplicarOperacao(a, b, operacao),
que recebe dois números e uma função, e retorna o resultado
de operacao(a, b). Teste passando uma função de soma, uma
de multiplicação e uma arrow function de subtração escrita
diretamente na chamada.
*/

function aplicarOperacao(a, b, operacao){
   return operacao(a, b);
}

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

console.log(aplicarOperacao(5, 3, somar));
console.log(aplicarOperacao(5, 3, multiplicar));
console.log(aplicarOperacao(5, 3, (a, b) => a - b));