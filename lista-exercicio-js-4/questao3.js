/*
QUESTÃO 3
Usando reduce(), calcule o valor total do carrinho: a soma de
preco × quantidade de cada item. Exiba o resultado com
template literal.
*/

carrinho = [
{item: "Teclado", preco: 150, quantidade: 1},
{item: "Mouse", preco: 80, quantidade: 2},
{item: "Cabo USB", preco: 25, quantidade: 3}
];

const total = carrinho.reduce((soma, produto) => {
   return soma + produto.preco * produto.quantidade;
}, 0);

console.log(`Total da compra: R$ ${total}`);