// Faça o programa para calcular o valor de uma viagem

// Você terá 3 variáveis. Sendo elas:
// 1- preço de combustível
// 2- gasto médio do carro por km
// 3- distância km da viagem

const precoCombustivel= 5.79;
let kmPorLitro = 12;
let deslocamento = 100;

let consumoLitro = deslocamento/kmPorLitro;

let gastoViagemCarro = consumoLitro*precoCombustivel;

console.log(gastoViagemCarro.toFixed(2));

