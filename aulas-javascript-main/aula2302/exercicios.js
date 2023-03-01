// Exercício I: Crie uma função para calcular o IMC,
// de acordo com a formula (IMC = PESO / ALTURA * ALTURA),
// determine quais os 2 parâmetros
// que ela deve receber e mostre o calculo no console sempre
// que ela for chamada (NÃO TEM RETORNO).

function imc(peso, altura) {
  let calculo = peso / (altura * altura);
  console.log(`O IMC é ${calculo}`);

  return calculo;
}

// let imcBatata = imc(80.0, 1.79);
// let imcArroz = imc(40.0, 1.5);

// Exercício II: Crie uma função que recebe um número (PARÂMETRO)
// de 0 a 1. E RETORNA em porcentagem:
// percent(0.456) -> 45.6%

function porcentagem(num) {
  let p = num * 100;
  return `${p.toFixed(1)}%`;
}

// let valorFormatado = porcentagem(0.5);
// console.log(valorFormatado);

// Exercício III: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA se ele é negativo (true ou false)
// ehNegativo(-2) ===> true
function ehNegativo(num) {
  if (num < 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(ehNegativo(-200));

// Exercício IV: Crie uma função que recebe um número (PARÂMETRO).
// E RETORNA o número formatado com notação monetária em R$ (BRL)
// Dica: use a https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

function formataBRL(num) {
  const reais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(num);

  return reais;
}

// console.log(formataBRL(4500));
// console.log(formataBRL(1000500));

// Exercícios V: Crie uma função que conte até um número passado por parâmetro.
// Exemplo: contar(5) -> 1 até 5, contar(1000) -> 1 até 1000.
// OBS: Não possui retorno.
function contar(maximo) {
  for (let i = 1; i <= maximo; i++) {
    console.log(i);
  }
}

// FUNÇÃO SEM RETURN DEVOLVE UNDEFINED
// contar(5);

// Exercícios VI: Crie uma função que recebe um nome e sobrenome.
// RETORNA o nome completo como resultado.
function criarNomeCompleto(nome, sobrenome) {
  return nome + " " + sobrenome;
}

console.log(criarNomeCompleto("José", "Almir de Souza Gomes Júnior"));
let seuNomeCompleto = criarNomeCompleto("Gabriel", "Braga");

// Exercício VII: Crie uma função para calcular
// a área de um circulo = PI * R * R
// Considere PI = 3.14, ou use Math.PI

// Exercícios VIII: Crie uma função que recebe a area de um circulo
// e mostra o nível:
// Entre 1 e 20 => Nível I
// Entre 21 e 40 => Nível II
// Qualquer outro diâmetro => Nível inválido

function areaCirculo(raio) {
  return Math.PI * (raio * raio);
}

function nivelCirculo(area) {
  if (area >= 1 && area <= 20) {
    return "Nível I";
  } else if (area >= 21 && area <= 40) {
    return "Nivel II";
  } else {
    return "Nivel Inválido";
  }
}

console.log(nivelCirculo(areaCirculo(3)));
