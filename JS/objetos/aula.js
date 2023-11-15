const pessoa ={
    nome: 'victor leta',
    idade: 27,
    descrever: function(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descrever();

pessoa.altura = 1.75;

pessoa.descrever = function(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade} e minha altura é ${this.altura}`)
}

pessoa.descrever();

const atributo = 'idade';

console.log(pessoa[atributo])
console.log(pessoa['altura'])