// Calcular o valor de uma viagem:

// terá 5 variáveis:
// 1-preço do etanol
// 2-preço da gasolina
// 3-tipo de combustível que está no carro
// 4-gasto médio de combustível do carro por km
// 5-distância em km da viagem

// imprima no console o valor da viagem

let precoEtanol = 5.79;
let precoGasolina = 6.66;
let tipoCombustivel = 'Gasolina';
let litroPorKm = 0.1;
let deslocamentoViagem = 100;

const isEtanol = (tipoCombustivel === 'Etanol');
const isGasolina = (tipoCombustivel === 'Gasolina');
const gastoLitroViagem = litroPorKm*deslocamentoViagem;

if(isEtanol){
    let gastoCombustivel = precoEtanol*gastoLitroViagem;
    console.log(gastoCombustivel.toFixed(2));
} else if(isGasolina){
    let gastoCombustivel = precoGasolina*gastoLitroViagem;
    console.log(gastoCombustivel.toFixed(2));
} else {
    console.log('Tipo de combustível não suportado.')
}