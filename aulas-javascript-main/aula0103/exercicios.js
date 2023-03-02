// Exercício I: Crie um objeto que representa uma conta bancária.
// Propriedades: codigo, saldo, cpf do titular e nome do titular
// Métodos:
// - saque(valor): retirar o valor ao saldo
// - deposito(valor): adicionar o valor do saldo

let conta = {
    // Atributos
    codigo: "0-1000",
    saldo: 25,
    cpfTitular: "999.999.999-99",
    nomeTitular: "Bill",
    // Métodos
    saque(valor) {
      this.saldo -= valor; // this.saldo = this.saldo - valor;
    },
    deposito(valor) {
      this.saldo += valor;
    },
  };
  
  console.log(conta.saldo);
  conta.saque(15);
  console.log(conta.saldo);
  conta.deposito(1000);
  console.log(conta.saldo);
  

// --

let contaBancaria = {
    // Atributos
    codigo: "0000-1",
    saldo: 1000,
    cpf: "000.000.000-00",
    nome: "Diego",
    // Métodos
    saque(valor){
        this.saldo -= valor;
        console.log(`O seu valor é R$ ${this.saldo}`);
    },
    deposito(valor){
        this.saldo += valor;
        console.log(`O seu valor é R$ ${this.saldo}`);
    }
}
contaBancaria.saque(50);
contaBancaria.deposito(150);

console.log("\n\n------------Exercício 02------------\n");

let produto = {
    // Atributos
    nome: "Camiseta",
    descricao: "100% Algodão",
    quantidade: 100,
    precoOriginal: 69.90,
    desconto: 10,
     // Metodos
    calcularPrecoDesconto (){
        return this.precoOriginal - this.desconto
    },
    apresentacao(){
        console.log(`O produto ${this.nome}, ${this.descricao} com ${this.quantidade} unidades disponíveis por R$ ${this.precoOriginal} e desconto de ${this.desconto} reais. Com o valor final de R$ ${this.calcularPrecoDesconto().toFixed(2)}.`);
    },
    comprar(total){
        this.quantidade -= this.desconto
        console.log(`A nova quantidade é: ${this.quantidade}`);
    }
}

produto.apresentacao();
produto.comprar(10);
