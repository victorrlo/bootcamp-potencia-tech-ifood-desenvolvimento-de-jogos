var var1 = 10;
var var2 = '20';

console.log(var1 - var2);

// var vaza escopo
// let respeita todo escopo
// const não tem como ser alterado seu valor

var var1; //vazamento do var

if(true){
    var var1=10;// var tá vazando
}

function teste(){
    var var1 = 10; //não vaza dentro de funções
}


let var3;

if (true){
    // let var3 = 10; //não permitido
    var3 = 10;
}

console.log(var3);

// Convenções de nomenclatura de variáveis

var _teste; //restrita ao seu escopo
var TESTE; //constante
var Teste; //função construtora ou classe
var testeVariavel; //camel case para diferenciar duas palavras na mesma variável

