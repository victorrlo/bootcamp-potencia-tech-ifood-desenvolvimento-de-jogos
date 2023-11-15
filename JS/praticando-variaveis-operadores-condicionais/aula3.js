// calcule e imprima a média do aluno e sua classificação:

// média = (nota1 + nota2 + nota3)/3

// classificação:
// 1-média menor que 5, reprovado
// 2-média entre 5 e 7, recuperação
// 3-média acima de 7, passou de semestre

let nota1 = Math.floor(Math.random() * 10);
let nota2 = Math.floor(Math.random() * 10);
let nota3 = Math.floor(Math.random() * 10);

console.log(nota1, nota2, nota3);

const media = (nota1+nota2+nota3)/3;

console.log(media.toFixed(2));

isReprovado = media < 5;
inRecuperacao = media <= 7;

if(isReprovado){
    console.log('aluno reprovado');
} else if(inRecuperacao) {
    console.log('aluno em recuperação');
} else {
    console.log('aluno aprovado')
}