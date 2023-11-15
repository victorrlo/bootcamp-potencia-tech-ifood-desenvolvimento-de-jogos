// calcule o imc e classifique

// imc = peso/(altura*altura)

// classificações:
// 1-abaixo de 18.5 = abaixo do peso
// 2-entre 18.5 e 25 = peso normal
// 3-entre 25 e 30 = acima do peso
// 4-entre 30 e 40 = obeso
// 5- acima de 40 = obesidade grave

const peso = Math.floor(Math.random() * 120);
const altura = (Math.floor(Math.random() * 150) + 100)/100;

console.log('peso:' + peso);
console.log('altura:' + altura.toFixed(2));

const imc = peso/(Math.pow(altura,2));

console.log('imc:' + imc.toFixed(2));

isAbaixoDoPeso = imc < 18.5;
isPesoNormal = (imc >= 18.5) && (imc <= 25);
isAcimaDoPeso = (imc > 25) && (imc < 30);
isObeso = (imc > 30) && (imc < 40);
isObesoGrave = imc > 40;

if(isAbaixoDoPeso) {
    console.log('abaixo do peso');
} else if(isPesoNormal) {
    console.log('peso normal');
} else if(isAcimaDoPeso) {
    console.log('acima do peso');
} else if(isObeso) {
    console.log('obeso');
} else if(isObesoGrave){
    console.log('obesidade grave');
}