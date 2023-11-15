// const funcoes = require('./funcoes-auxiliares');
const {gets, print} = require('./funcoes-auxiliares');

// print(gets());

// faça um programa que recebe 5 numeros sorteados de 1-100 e mostre o maior número

let maiorValorEncontrado = 0;

for(let i = 0; i<5; i++){
    const numeroSorteado = gets();
    if(numeroSorteado>maiorValorEncontrado){
        maiorValorEncontrado=numeroSorteado;
    }
}

print(maiorValorEncontrado);