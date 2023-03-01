// Exercício I: Defina uma variável idade e dinheiro.
// Caso a pessoa seja maior de 18 anos E possua mais de 20 reais
// ela pode comprar a bebida e subtraia 20 reais do dinheiro dela.
// Caso contrário ela não pode.
// OBS: Use console.log.

let idade = 19;
let dinheiro = 20;

if (idade >= 18 && dinheiro >= 20) {
  console.log("Você pode comprar a bebida");
  dinheiro = dinheiro - 20; // dinheiro -= 20;
  console.log(`Você ficou com ${dinheiro} reais`);
} else {
  console.log("Você não pode comprar!");
}

// Exercício II: Defina uma variável salário, caso o salário
// Seja menor que 500 = acrescentar 50 reais ao salario atual
// Esteja entre 500 e 1000 = acrescentar 25 reais ao salario atual
// Caso não se encaixe em nenhuma das acima: mostrar que não houve aumento
// Mostre ao fim o salário ajustado.
console.log("------------------------------");
let salario = 100000;

if (salario < 500) {
  salario = salario + 50; // salario += 50
} else if (salario >= 500 && salario <= 1000) {
  salario = salario + 25;
} else {
  console.log("Não houve aumento salarial.");
}

console.log(salario);
