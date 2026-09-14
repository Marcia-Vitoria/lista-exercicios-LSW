/*
QUESTÃO 8
Solicite o salário de um funcionário e o percentual de reajuste.
Calcule o valor do aumento e o novo salário. Apresente os
três valores utilizando alert().
*/

let salario = Number(prompt('Informe o seu salário:'));
let percentualReajuste = Number(prompt('Informe o percentual de ajuste:'));

let aumento = salario * percentualReajuste / 100;
let novoSalario = salario + aumento;

alert(`Salário sem reajuste: ${salario}`);
alert(`Valor do aumento: ${aumento}`);
alert(`Salário com reajuste: ${novoSalario}`);