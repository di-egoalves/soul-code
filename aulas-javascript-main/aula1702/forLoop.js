// Estrutura de Repetição: For

/*
    for(inicializacao; condicao; atualizacao) {
        // o código a se repetir
    }
*/

// 1 até 5
for (let contador = 1; contador <= 5; contador++) {
  console.log(contador);
}

// 5 até 1
for (let contador = 5; contador >= 1; contador--) {
  console.log(contador);
}

// 1 + 2 + 3 + 4 + ... + 99 + 100 = ?
let soma = 0; // variável acumuladora

for (let i = 1; i <= 100; i++) {
  // iteração ou index
  soma = soma + i;
}

console.log(soma);
