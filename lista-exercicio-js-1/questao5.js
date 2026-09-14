/*
QUESTÃO 5
Solicite o preço de um produto, a quantidade e o percentual
de desconto. Calcule o subtotal, o desconto e o valor final da
compra. Utilize variáveis, conversão numérica e operadores
aritméticos.
*/

let preco = Number(prompt('Informe o preço de um produto:'));
let qtd = Number(prompt('Informe a quantidade:'));
let percentualDesconto = Number(prompt('Informe o percentual de desconto: '));

let subtotal = preco * qtd;
let desconto = subtotal * percentualDesconto / 100;
let valorFinal = subtotal - desconto;

alert(`Subtotal: ${subtotal.toFixed(2)}`);
alert(`Desconto: ${desconto.toFixed(2)}`);
alert(`Valor final: ${valorFinal.toFixed(2)}`);