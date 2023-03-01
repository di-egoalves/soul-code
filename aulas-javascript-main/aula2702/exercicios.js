// Exercício I: Crie um array com 10 números.
// Percorra e calcule a soma de todos os números.
function exercicio1() {
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let soma = 0;

  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  console.log(`A soma é ${soma}`);
}

// Exercício II: Crie um array com 5 notas.
// Percorra e calcule a média das notas.
function exercicio2() {
  let notas = [8.5, 9.0, 10.0, 7.6, 9.8];

  let sum = 0;

  for (let i = 0; i < notas.length; i++) {
    sum = sum + notas[i];
  }

  let media = sum / notas.length;
  console.log(media);
}

// Exercício III: Crie um array com 7 números.
// Percorra e indique qual o maior número deles.
function exercicio3() {
  let numeros1 = [5, 12, 16, 33, 8, 10, 6];
  let maiorNumero = numeros1[0];
  for (let i = 0; i < numeros1.length; i++) {
    if (numeros1[i] > maiorNumero) {
      maiorNumero = numeros1[i];
    }
  }
  console.log(`O maior número do Array é: ${maiorNumero}`);
}

// Exercício IV: Crie um array de frutas.
// Percorra e mostre o tamanho do nome de cada fruta.
function exercicio4() {
  let frutas = ["maçã", "pera", "banana", "abacaxi"];

  for (let fruta of frutas) {
    console.log(`${fruta} tem ${fruta.length}`);
  }
}

// Exercício V: Crie um array de 5 números aleatórios.
// Utilize o esquema Math.floor(Math.random() * 100) para gerar
// números entre 0 e 99.
// Em seguida, crie um novo array. Percorra o anterior e adicione no novo
// apenas os números pares.
// Em seguida, mostre a soma de todos os números pares do array.

function exercicio5() {
  let numeros = [];

  for (let i = 0; i < 5; i++) {
    numeros.push(Math.floor(Math.random() * 100));
  }

  let pares = [];
  for (let num of numeros) {
    if (num % 2 === 0) {
      pares.push(num);
    }
  }

  let somaPares = 0;
  for (let par of pares) {
    somaPares += par;
  }

  console.log(somaPares);
}

// Exercício VI: Crie uma função que recebe o nome de um arquivo e verifica
// se a extensão é .mp3 ou .wav (retorne true ou false)
function verificarTipoArquivo(nomeArquivo) {
  if (nomeArquivo.endsWith(".mp3") || nomeArquivo.endsWith(".wav")) {
    return true;
  } else {
    return false;
  }
}
// console.log(verificarTipoArquivo("Linkin Park - In The End.mp3"));

// Exercício VII: Crie uma função que extrai os dígitos verificadores
// de um cpf. Ex: "056.985.990-23" -> "23".
// Retorne apenas os dois ultimos dígitos.
const extrairDigitosVerificadores = (cpf) => {
  const digitosVerificadores = cpf.slice(-2);
  return digitosVerificadores;
};

// console.log(extrairDigitosVerificadores("056.985.990-23"));

// Exercício VIII: Crie uma função que inverte uma string.
// Retorna ela invertida.
function inverterString(string) {
  var stringInvertida = "";
  // do ultimo indice até 0
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
    console.log(stringInvertida);
  }
  return stringInvertida;
}

console.log(inverterString("BATATA"));

// Exercício IX: Crie uma função que mostra os elementos do array
// em ordem invertida. [1, 2, 3] -> [3, 2, 1]
const inverteArray = (array) => {
  // let array = [num1, num2, num3, num4];
  array.reverse();
  console.log("A ordem invertida é: " + array);
  return array;
};

inverteArray([1, 2, 3, 4]);
