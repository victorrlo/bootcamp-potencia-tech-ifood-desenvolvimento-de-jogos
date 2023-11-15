function escrevaMeuNome(nome){
    return 'Seu nome é '+nome;
}

function verificarIdade(idade, nome){
    if(idade >= 18){
        console.log( escrevaMeuNome(nome) + ' e é de maior');
    }else{
        console.log('você não é de maior');
    }
}

// Main
(function(){
    const nome = 'victor';
    const idade = 27;
    
    verificarIdade(idade, nome);
})();