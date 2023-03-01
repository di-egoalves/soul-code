// Aula 27.02
// Tópicos: Arrays

// Declaração de arrays
let figuras = ["coracao", "estrela", "ok", "nao", "joinha", "sorriso"];
// console.log(figuras); // representação em texto

let numeros = [3, 1, 5, 7, 2];
// console.log(numeros);

// Acessando elementos
// console.log(figuras[5]);
// console.log(figuras[1]);
// console.log(numeros[2]);
// console.log(numeros[0]);
// console.log(numeros[3]);
// console.log(numeros[1000]);

// Alterando valor de um elemento
// console.log(numeros);
// numeros[2] = 700; // Alterar o valor armazenado no índice 2, o 5 original se perde
// console.log(numeros);
// numeros[2]++; // Alterar o valor armazenado, incrementando o que estiver
// console.log(numeros);
// figuras[5] = "batata";
// console.log(figuras);

// Percorrer um array (do inicio ao fim)
// console.log(numeros.length); // Quantos elementos existem no array
// console.log(figuras.length);

// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i]);
// }

// for (let i = 0; i < figuras.length; i++) {
//   console.log(`O valor do index ${i} é ${figuras[i]}`);
// }

// For-of
let nomes = ["josé", "carlos", "andré", "pedro"];
let notas = [7.5, 8.7, 9.0, 10.0];

// for (let nome of nomes) {
//   // A variável "nome" assume um elemento diferente a cada laço
//   console.log(nome);
// }

// Percorre o array até o final dele
// for (let notaAluno of notas) {
//   // Para cada nota no array faça isso
//   console.log(notaAluno);
// }

// for (let i = 0; i < notas.length; i++) {
//   notas[i]++; // Se for preciso alterar o valor, é necessário o index
// }

// Inserir/Remover
let listaProdutos = [];
// console.log(listaProdutos.length);

listaProdutos.push("Smart Band"); // adicionar o elemento no final
listaProdutos.push("Bolo de cenoura");
listaProdutos.push("Batata remasterizada");
listaProdutos.push("Smartphone 2MB", "HD 500kb", "RAM 200B"); // adiciona mais de um por vez

console.log(listaProdutos);
let produto1 = listaProdutos.pop(); // Remove o último elemento
let produto2 = listaProdutos.pop(); // Remove o último elemento
console.log(listaProdutos);

console.log(listaProdutos.includes("Bolo de cenoura")); // Verifica se há um elemento igual
console.log(produto1, produto2);
