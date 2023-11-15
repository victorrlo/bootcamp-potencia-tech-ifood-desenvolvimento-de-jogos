// calcule o que deve ser pago pelo produto considerando
// -etiqueta
// -condição de pagamento:
// 1-à vista, débito: 10% desconto
// 2-à vista, dinheiro ou pix: 15% desconto
// 3-2x, preço normal da etiqueta
// 4-acima de 2x, preço da etiqueta +10% de juros

const precoEtiqueta = 100;
const condicaoPagamento = 'xx';

isDebito = condicaoPagamento === 'debito';
isDinheiroPix = condicaoPagamento === 'dinheiropix';
is2x = condicaoPagamento === '2x';
is3xOuMais = condicaoPagamento === 'xx';

if(isDebito){
    var precoAPagar = precoEtiqueta * 0.9;   
} else if(isDinheiroPix){
    var precoAPagar=precoEtiqueta * 0.85;
} else if(is2x){
    var precoAPagar = precoEtiqueta;
} else if(is3xOuMais){
    var precoAPagar=precoEtiqueta*1.1;
}
console.log(precoAPagar.toFixed(2)); 