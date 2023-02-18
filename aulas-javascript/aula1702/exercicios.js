// Exercício I: Faça a tabuada do 5
// 1 x 5 = 5
// 2 X 5 = 10
// ...
// 10 x 5 = 50

let mult = 1;

while (mult <= 10) {
  let resultado = mult * 5;
  console.log(`${mult} x 5 = ${resultado}`);
  mult++;
}

// Exercícios II: Vá do 1 até o 99 e mostre apenas os valores ímpares. (IF dentro do WHILE)
let num = 1;

while (num <= 99) {
  if (num % 2 == 1) {
    console.log("Ímpar: " + num);
  }

  num++;
}
// Exercícios III: Conte de 50 até 75.
console.log("---------------------------------------");

let x = 50; // 50, 51, 52, 53 ... 75

while (x <= 75) {
  console.log(x);
  x++;
}

// Exercícios IV: Transforme os exercícios anteriores para usar o FOR.
console.log("----------------------------------------------");

// Tabuada
for (let fator = 1; fator <= 10; fator++) {
  console.log(`5 x ${fator} = ${fator * 5}`);
}

// Ímpares
for (let numero = 1; numero <= 99; numero++) {
  if (numero % 2 === 1) {
    console.log("Impar: " + numero);
  }
}

// Intervalo 50 a 75
for (let i = 50; i < 76; i++) {
  console.log(`número: ${i}`);
}
