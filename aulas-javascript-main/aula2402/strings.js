// Strings = cadeia de caracteres

let meuPet = "Fred"; // "", '', ``
// F(0), r(1), e(2), d(3)
// console.log(meuPet);

// console.log(meuPet[0]); // Acessando o caractere "F"
// console.log(meuPet[1]); // Acessando o caractere "r"
// console.log(meuPet[2]); // Acessando o caractere "e"
// console.log(meuPet[3]); // Acessando o caractere "d"
// console.log(meuPet[500]); // Não existe caractere nesse índice

// console.log(meuPet.length); // Retorna o tamanho da string

// Percorrendo string da posição 0 até length - 1
// Posição final da string é length-1
// for (let i = 0; i < meuPet.length; i++) {
//   console.log(meuPet[i]);
// }

// console.log(meuPet[meuPet.length - 1]); // acessa o ultimo caractere

// console.log(meuPet.toLowerCase()); // Retorna tudo minusculo
// console.log(meuPet.toUpperCase()); // Retorna tudo maiusculo

let arquivo = "batata.mp4";
// Verifica se a string termina com a palavra
// console.log(arquivo.endsWith(".mp4"));
// Verifica se a string inicia com palavra
// console.log(arquivo.startsWith("bat"));

let frase = "Eu comi arroz, batata e carne";
// Buscar se uma frase inclui um trecho
// console.log(frase.includes("feijão"));

// console.log(frase.indexOf("c")); // Busca a posição do caractere
// console.log(frase.lastIndexOf("c")); // Busca a posição da direita p/ esquerda
// console.log(frase.indexOf("x")); // -1 = Não encontrou
// console.log(frase.indexOf("arroz")); // Retorna onde inicia a palavra

// console.log(frase.replace("carne", "ovo")); // Troca uma palavra por outra

let palavra2 = "BATATA";
console.log(palavra2.slice(1)); // Cortou do 1 até o final
console.log(palavra2.slice(1, 4)); // Cortar do 1 até o 3
