// Estruturas de seleção

let lang = "pt"; // pt, es, en

// if (lang === "pt") {
//   console.log("Olá, Mundo!");
// } else if (lang === "es") {
//   console.log("Hola, Mundo!");
// } else if (lang === "en") {
//   console.log("Hello, World!");
// } else {
//   console.log("Não há suporte para este idioma: " + lang);
// }

// switch-case = escolha-caso
switch (lang) {
  case "pt":
    console.log("Olá, Mundo!");
    break; // para as verificações abaixo
  case "es":
    console.log("Hola, Mundo!");
    break;
  case "en":
    console.log("Hello, World!");
    break;
  default: // caso não encontre nenhuma
    console.log("Não há suporte para este idioma: " + lang);
}

// Exercício III: Defina uma variavel numero(1 a 7) e diga qual é o dia da semana:
// 1 - domingo, 2 - segunda, 3 - terça, ... (SWITCH)

let numero = 2;

switch (numero) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Este dia não existe!");
}

// Exercício IV: Defina uma variável comida
//  - Mostre a mensagem "Humm, adoro" se for: batata, carne, chocolate
//  - Mostre a mensagem "As vezes" se for: pizza, sanduíche
//  - Mostre a mensagem "Quero não!" se não for nenhuma acima.

let comida = "pizza";

// if (comida === "batata" || comida === "carne" || comida === "chocolate") {
//   console.log("Hum, adoro!");
// } else if (comida === "pizza" || comida === "sanduíche") {
//   console.log("As vezes...");
// } else {
//   console.log("Quero não!");
// }

switch (comida) {
  case "batata":
  case "carne":
  case "chocolate":
    console.log("Hum, adoro!");
    break;
  case "pizza":
  case "sanduíche":
    console.log("As vezes...");
    break;
  default:
    console.log("Quero não!");
}

// Exercício V: Com IF-ELSE, verifique se uma variavel número é par ou não.
// Par é um número que é divisível por 2.

// Regra: Um número é zero, par ou ímpar.
let num = 2;

if (num === 0) {
  console.log("O número é zero");
} else if (num % 2 === 0) {
  console.log("O número é par");
} /*if (num % 2 !== 0)*/ else {
  // neste caso o if é desnecessário
  console.log("O número é ímpar");
}

