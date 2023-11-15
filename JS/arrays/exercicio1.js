// crie um programa que dado um número, calcule a tabuada



function calcularTabuada(numero){
    const baseTabuada = [1,2,3,4,5,6,7,8,9,10];
    for(let i=0; i < baseTabuada.length; i++){
        console.log(numero*baseTabuada[i]); 
    }
}

calcularTabuada(7);