const camisetaRunaAzul = true;
const camisetaLemaoAzul = false;

const numero = 11;

const isNumeroPar = (numero%2) === 0;
const isNumeroZero = numero === 0;

// 1 igual para atribuição
// 2 iguais para comparação, ignorando o tipo
// 3 iguais levando em conta o tipo

if(isNumeroZero){
    console.log('O número é 0')
}
else if (isNumeroPar) {
    console.log('Par');
} else {
    console.log('Ímpar');
}


