const pessoa = {
    genero: 'masculino'
};

const victor = {
    nome: 'victor',
    idade: 27,

    // herança
    __proto__: pessoa
}

console.log(victor.genero);

// função construtora
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`meu nome é ${this.nome}`)
}

const victor2 = new Pessoa('victor', 27);

console.log(victor2);

victor2.falar();

// açúcar sintático para facilitar a visualização sem uso de prototype
class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    falar(){
        console.log(`meu nome é ${this.nome}`);
    }
}