// Métodos = ação de um objeto

let pet = {
    // Atributos
    nome: "Fred",
    idade: 5,
    peso: 3.5,
    // Métodos = funções
    dormir() {
      console.log("Estou dormindo. zzzzzzzzzzzzzZZZ");
    },
    comer(comida) {
      console.log(`Estou comendo ${comida}`);
    },
    brincar() {
      console.log("Brincando!");
    },
  };
  
  // . lista as propriedades e métodos de um objeto
  // pet.dormir(); // Invocação da função/método
  // pet.comer("Peixe");
  // pet.comer("Batata");
  
  // Tip: crie no objeto pet o método brincar e coloque uma mensagem
  // do console.log
  // pet.brincar();
  
  let pessoa = {
    // Atributos
    nome: "João",
    idade: 25,
    nacionalidade: "brasileiro",
    // Métodos
    dizerOi() {
      // this = representa o objeto dono do método
      console.log(
        `Oi, meu nome é ${this.nome} e tenho ${this.idade} anos, e sou ${this.nacionalidade}`
      );
    },
    envelhecer() {
      this.idade++;
    },
    cuidarPet(animal) {
      console.log(`Estou cuidando do ${animal.nome}`);
      animal.comer("Batata");
      animal.peso += 0.2;
    },
  };
  
  pessoa.cuidarPet(pet);
  console.log(pet.peso);
  
  // pessoa.dizerOi();
  // pessoa.nome = "Claudio";
  // pessoa.nome += " Silva";
  // pessoa.dizerOi(); // Chama o método com o nome alterado
  // pessoa.envelhecer();
  // pessoa.envelhecer();
  // pessoa.envelhecer();
  // pessoa.dizerOi();
  
  // Tip: Melhore o método de dizerOi
  // Adicione a mensagem neste formato:
  // "Oi, meu nome é João, tenho 25 anos e sou brasileiro"
  