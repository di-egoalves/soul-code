// Arrow = flecha
// Arrow function = Sintaxe +curta

// function ola() {
//   console.log("Hello!");
// }

// First-class citizen = funções são tratadas como valor
// Posso passar função como parâmetro de outra função
// Posso retornar uma função dentro de outra função
let ola = () => {
  console.log("Hello!");
};

ola(); // invocação

// function soma(a, b) {
//   console.log(`A soma é ${a + b}`);
//   return a + b;
// }

const soma = (a, b) => {
  console.log(`A soma é ${a + b}`);
  return a + b;
};

console.log(soma);
let resultadoSoma = soma(1, 2);

/**
 * (a, b) => {
 *    console.log("oi")
 *    return a + b;
 * }
 */

// Exercício: Transforme as funções abaixo em arrow
// Retorno imediato = quando temos apenas 1 LINHA NO CORPO DA FUNÇÃO
const criarNomeCompleto = (nome, sobrenome) => nome + " " + sobrenome;

const contar = (maximo) => {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
};

const imc = (peso, altura) => {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);

  return calculo;
};
