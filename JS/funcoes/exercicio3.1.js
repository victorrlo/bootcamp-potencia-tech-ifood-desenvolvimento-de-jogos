// calcule o que deve ser pago pelo produto considerando
// -etiqueta
// -condição de pagamento:
// 1-à vista, débito: 10% desconto
// 2-à vista, dinheiro ou pix: 15% desconto
// 3-2x, preço normal da etiqueta
// 4-acima de 2x, preço da etiqueta +10% de juros

function desconto10(precoEtiqueta){
    return precoEtiqueta*0.9;
}

function desconto15(precoEtiqueta){
    return precoEtiqueta*0.85;
}

function juros10(precoEtiqueta){
    return precoEtiqueta*1.1;
}

function precoAPagar(precoEtiqueta, condicaoPagamento){
    isDebito = condicaoPagamento === 'debito';
    isDinheiroPix = condicaoPagamento === 'dinheiroPix';
    is2x = condicaoPagamento === '2x';
    is3xOuMais = condicaoPagamento === 'xx';

    if(isDebito){
        var precoAPagar = desconto10(precoEtiqueta);   
    } else if(isDinheiroPix){
        var precoAPagar = desconto15(precoEtiqueta);
    } else if(is2x){
        var precoAPagar = precoEtiqueta;
    } else if(is3xOuMais){
        var precoAPagar = juros10(precoEtiqueta);
    }
    return precoAPagar.toFixed(2);
}

(function(){
    const precoEtiqueta = 100;
    const condicaoPagamento = 'debito'; 

    console.log(precoAPagar(precoEtiqueta, condicaoPagamento));
})();