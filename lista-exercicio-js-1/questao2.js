/*
QUESTÃO 2
Solicite dois números e apresente os resultados de soma,
subtração, multiplicação, divisão, resto e potência. Utilize
operadores aritméticos e organize os resultados em uma
única mensagem.
*/

let num1 = Number(prompt('Informe um número: '));
let num2 = Number(prompt('Informe outro número: '));

let soma = num1 + num2;
let subtracao = num1 - num2;
let multiplicacao = num1 * num2;
let divisao = num1 / num2;
let resto = num1 % num2;
let potencia = num1 ** num2;

alert(`
Resultados:

Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
Resto: ${resto}
Potência: ${potencia}
`);