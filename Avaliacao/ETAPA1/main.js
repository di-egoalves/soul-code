let nomedoproduto = "Camiseta";
let precodoproduto = 100;
let descontodoproduto = 10;
let descontovalido = true;

if (descontovalido){
    precofinal = precodoproduto - (precodoproduto * (descontodoproduto / 100));
} else {
    precofinal = precodoproduto;
}

if (precofinal > 1000) {
    precofinal = precofinal - 50;
} else {
    console.log ("O valor do preço final é " + precofinal.toFixed(2));
}

let demandas = [10, 2, 1, 30, 5];
let valortotalcliente = [];

for (let i = 0; i < demandas.length; i++){
    let valorapagar = demandas[i] * precofinal;
    valortotalcliente.push(valorapagar);
    console.log("O cliente " + (i+1) + " deverá pagar: R$ " + valorapagar.toFixed(2))
}

let lucrototal = valortotalcliente.reduce((total, preco) => total + preco, 0);
console.log ("O total de lucro é de R$ " + lucrototal.toFixed(2));
