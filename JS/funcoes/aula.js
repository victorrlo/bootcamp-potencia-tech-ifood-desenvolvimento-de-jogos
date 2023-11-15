function sayMyName(name) {
    console.log('seu nome é ' + name);
}

function quadrado(valor) {
    return valor*valor;
}

function calculoImc(peso, altura) {
    return (peso/quadrado(altura)).toFixed(2);
}

(function main() {
    console.log('Programa Principal');
    console.log('------------------');
    sayMyName('victor');

    const peso = 85;
    const altura = 1.75;

    console.log(calculoImc(peso, altura));
})();