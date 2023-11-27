const pessoa =  {
    genero: 'masculino'
}


const victor = Object.create(pessoa);

victor.nome = 'victor'

console.log(victor.genero);


String.prototype.toPLang = function() {
    return `P ${this}`
}

console.log('teste'.toPLang());