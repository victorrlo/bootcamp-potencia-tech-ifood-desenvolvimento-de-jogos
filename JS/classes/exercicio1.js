// criar uma classe para representar carros
// -marca
// -cor
// -gasto medio de combustivel por km

// criar um método que dada a quantidade de km e o preço do combustivel, 
// retorne o valor gasto em reais para o percurso

class Carro{
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularGastoDeslocamento(deslocamentoEmKm, precoCombustivel){
        const gastoCombustivel = deslocamentoEmKm*this.gastoMedio;
        const gastoTotal = gastoCombustivel*precoCombustivel;
        return `R$ ${gastoTotal.toFixed(2)}`;
    }

    descrever(){
        return `Seu carro é um ${this.marca} de cor ${this.cor} e seu gasto nessa viagem será de:`;
    }
}

const bmw = new Carro('bmw', 'vinho', 1/13.3);
const ferrari = new Carro('ferrari', 'vermelho', 1/5.5);

const deslocamentoEmKm1 = 100;
const deslocamentoEmKm2 = 200;
const precoGasolina = 5;

console.log(bmw.descrever());
console.log(bmw.calcularGastoDeslocamento(deslocamentoEmKm1, precoGasolina));
console.log(ferrari.descrever());
console.log(ferrari.calcularGastoDeslocamento(deslocamentoEmKm2, precoGasolina));