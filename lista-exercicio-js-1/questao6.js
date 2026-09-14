/*
QUESTÃO 6
Solicite a distância de uma viagem, o consumo médio de um
veículo e o preço do combustível. Calcule a quantidade
estimada de combustível e o custo da viagem.
*/

let distancia = Number(prompt('Informe a distancia da viagem:'));
let consumoCombustivel = Number(prompt('Informe o consumo médio do veículo:'));
let precoCombustivel = Number(prompt('Informe o preço do combustível:'));

let qtdCombustivel = distancia / consumoCombustivel;
let custoViagem = qtdCombustivel * precoCombustivel;

alert(`Quantidade estimada de combustivel: ${qtdCombustivel}`);
alert(`Custo da viagem: ${custoViagem}`);