/*
QUESTÃO 11
Crie um programa executável no Node.js que apresente um
pequeno relatório acadêmico no terminal. Utilize const e let,
diferentes tipos primitivos, operadores e console.log(). O
programa deverá realizar pelo menos três cálculos ou
transformações com os dados.
*/

let destino = "João Pessoa";
let distancia = 480;
let consumo = 12;
let precoCombustivel = 6.51;

const idaEVolta = 2;
const viagemConfirmada = true;

// primeiro cálculo: distância total
let distanciaTotal = distancia * idaEVolta;

// segundo cálculo: quantidade de combustível
let combustivel = distanciaTotal / consumo;

// terceiro cálculo: custo da viagem
let custo = combustivel * precoCombustivel;

console.log("RELATÓRIO DE VIAGEM");

console.log(`Destino: ${destino}`);
console.log(`Distância total: ${distanciaTotal} km`);
console.log(`Combustível necessário: ${combustivel.toFixed(2)} litros`);
console.log(`Custo estimado: R$ ${custo.toFixed(2)}`);
console.log(`Viagem confirmada: ${viagemConfirmada}`);