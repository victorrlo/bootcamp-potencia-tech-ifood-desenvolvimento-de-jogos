// crie um programa que seja capaz de percorrer uma lista de números e imprima os pares 


function numerosParesDaLista(listaDeNumeros){
    for(let i=0; i<listaDeNumeros.length;i++){
        if(listaDeNumeros[i]%2 === 0){
            console.log(listaDeNumeros[i]);
        }
    }
}

const listaDeNumeros = [1,2,3,4,5,6];
numerosParesDaLista(listaDeNumeros);