// const alunos = ['victor', 'mariana','joao'];

// console.log(alunos[0]);
// console.log(alunos);

// alunos.push('renan');
// alunos[4] = 'geraldo';

// alunos.pop();

// console.log(alunos)

// const nome = `victor r l o`;
// 
// for(let i=0; i < nome.length; i++){
//     console.log(nome[i]);
// }

const notas = [];

notas.push(2);
notas.push(3);
notas.push(4);
notas.push(5);
notas.push(6);
notas.push(7);

let soma = 0;

for(let i=0; i<notas.length;i++){
    const nota = notas[i];
    soma += nota;
}

const media = soma/notas.length;

console.log(media);