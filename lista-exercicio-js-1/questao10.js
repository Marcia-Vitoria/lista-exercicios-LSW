/*
QUESTÃO 10
Crie um programa que utilize, no mesmo exercício: let, const,
tipos de dados primitivos, operadores, prompt(), confirm()
e alert(). O programa deverá solicitar informações do usuário,
realizar cálculos e apresentar os resultados de forma
organizada.
*/

const desconto = 10; 

let nome = prompt('Informe seu nome:'); 
let preco = Number(prompt('Informe o preço do produto:')); 
let quantidade = Number(prompt('Informe a quantidade:')); 

let subtotal = preco * quantidade; 
let valorDesconto = subtotal * desconto / 100; 
let valorFinal = subtotal - valorDesconto; 

let confirmacao = confirm(`Olá, ${nome}! Deseja confirmar a compra?`); 

if (confirmacao) { 
   alert(`Cliente: ${nome}`); 
   alert(`Subtotal: R$ ${subtotal.toFixed(2)}`); 
   alert(`Desconto: R$ ${valorDesconto.toFixed(2)}`); 
   alert(`Valor final: R$ ${valorFinal.toFixed(2)}`); 
} 
else { 
   alert('Compra não confirmada.'); 
}