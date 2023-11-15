class Pessoa{
    nome;
    idade;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;       
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(`${pessoa1.nome} é mais velha que ${pessoa2.nome}`);
    }else if(pessoa1.idade < pessoa2.idade){
        console.log(`${pessoa2.nome} é mais velha que ${pessoa1.nome}`);
    }else{
        console.log(`${pessoa2.nome} tem a mesma idade que ${pessoa1.nome}`);
    }
}

const victor = new Pessoa('victor', 27);
const debora = new Pessoa('debora', 28);

victor.descrever();

console.log(victor);~

compararPessoas(victor,debora);