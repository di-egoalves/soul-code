// Aula 17.02
// Tópicos: while, for

// Estruturas de repetição = loops = laços
// Condição de parada, valor inicial, atualizacao

// While = Enquanto
/*
    while(condicao) {
        // código a se repetir
    }
*/

/*
// Loop infinito 
let numero = 1;

while(true) { // loop infinito
    console.log(numero);
}
*/

/*
let numero = 1;

while(true) { // condição de parada
    console.log(numero);
    numero++;
}
*/

// Loop com parada e atualização
let numero = 1;
while (numero <= 5) {
  console.log(numero);
  numero++; // atualização
}

console.log("Fora do loop: " + numero);

// 1000 até 1
let numero2 = 10;

while (numero2 >= 1) {
  console.log(numero2);
  numero2--;
}

console.log("Fora do loop: " + numero2);

// Soma 1 + 2 + 3 + 4 + 5 + ... + 99 + 100 = 5050 (PA)

let contador = 1;
let acumuladora = 0;

while (contador <= 100) {
  acumuladora = acumuladora + contador;
  contador++;
}

console.log(acumuladora);
