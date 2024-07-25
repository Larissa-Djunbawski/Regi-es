const prompt = require("prompt-sync")();
const paises = [];

const lerIndice = mensagem => parseInt(prompt(mensagem));
const nomeInvalido = nome => nome === "";
const indiceInvalido = indice => indice < 0 || indice >= paises.length || isNaN(indice);

const listagem = () => {
  paises.forEach((pais, i) => {
    console.log(`${i + 1} - ${pais.nome} - ${pais.populacao} - ${pais.uf} - ${pais.regiao}`);
  });
};

const modelo = () => {
  let pais = {};
  while (true) {
    pais.nome = prompt("Qual é o nome do país? ");
    if (nomeInvalido(pais.nome)) {
      console.log("Você precisa preencher este campo.");
    } else {
      break;
    }
  }

  while (true) {
    pais.populacao = Number(prompt("Quantas pessoas habitam? "));
    if (pais.populacao < 0 || isNaN(pais.populacao)) {
      console.log("Valor inválido. Insira um número válido.");
    } else {
      break;
    }
  }

  while (true) {
    pais.uf = prompt("Qual a sigla desta região? ").toLocaleLowerCase();
    if (pais.uf.length !== 2) {
      console.log("A sigla deve conter dois caracteres.");
    } else {
      break;
    }
  }

  while (true) {
    pais.regiao = prompt("De qual região é pertencente este país? ");
    if (nomeInvalido(pais.regiao)) {
      console.log("Você precisa preencher este campo.");
    } else {
      break;
    }
  }

  return pais;
};

const criar = () => {
  const pais = modelo();
  paises.push(pais);
  console.log("País cadastrado com sucesso.");
};

const atualizar = () => {
  if (paises.length === 0) {
    console.log("O cadastro está vazio.");
    return;
  }

  listagem();
  const indice = lerIndice("Qual o índice do país a ser atualizado? ") - 1;

  if (indiceInvalido(indice)) {
    console.log("Índice inválido.");
    return;
  }

  const pais = modelo();
  paises[indice] = pais;
  console.log("País atualizado com sucesso.");
};

const remover = () => {
  if (paises.length === 0) {
    console.log("O cadastro está vazio.");
    return;
  }

  listagem();
  const indice = lerIndice("Qual o índice do país a ser removido? ") - 1;

  if (indiceInvalido(indice)) {
    console.log("Índice inválido.");
    return;
  }

  paises.splice(indice, 1);
  console.log("País removido com sucesso.");
};

module.exports = {
  criar,
  atualizar,
  remover,
  listagem,
};



console.log(criar())

const validarPais = pais => {
  return pais.nome!= "" && pais.uf.length ==2

}
