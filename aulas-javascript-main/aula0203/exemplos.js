// Aula 02.03
// Tópicos: objetos aninhados e arrays de objetos

// Objetos aninhados = objeto dentro de outro

let pessoa = {
    nome: "José Almir",
    cpf: "999.999.999-99",
    contato:{
    email: "jose.almir@soulcode.com",
    },
    endereço: { // agrupar propriedades
    cidade: "Ubajara",
    estado: "Ceará",
    cep: "62350-000",
    rua: "Rua X",
    numero: 271,
    },
    objetivosProfissionais: ["Home Office", "CLT", "Desenvolvedor Senior"],
    formacao: [
        {nome: "Ensino Médio", periodo: "2006-2008"},
        {nome: "Técnico de Informática", periodo: "2008-2010"},
        {nome: "Bacharelado em Batata", periodo: "2010 - 2014"},
    ],
};

console.log(pessoa.endereço.estado);
console.log(pessoa.endereço.numero);
console.log(pessoa.formacao[1].periodo);