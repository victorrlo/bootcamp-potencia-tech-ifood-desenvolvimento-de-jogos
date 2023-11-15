// criar classe pesssoa
// -nome
// -peso 
// -altura 

// calcular o imc
// josé tem 1.75, 70kg de peso e peça a ele seu imc

class Pessoa{
    nome;
    peso;
    altura;
    
    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(){
        const imc = this.peso/Math.pow(this.altura,2);
        return imc.toFixed(2);
    }

    classificarImc(){
        const imc = this.calcularImc();
        if(imc < 25){
            return `${this.nome} está abaixo do peso`;
        }else if((imc >= 25) && (imc <=30)){
            return `${this.nome} está no peso ideal`;
        }else{
            return `${this.nome} está acima do peso`;
        }
    }
}

const jose = new Pessoa('josé', 70, 1.75);

console.log(jose);
console.log(jose.calcularImc());

const victor = new Pessoa('victor', 85, 1.75);

console.log(victor);
console.log(victor.calcularImc());
console.log(victor.classificarImc());