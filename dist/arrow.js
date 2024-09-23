"use strict";

var minhaFuncao = function minhaFuncao() {
  return "Diz oi";
};
var retornaUmCarro = function retornaUmCarro() {
  return {
    modelo: "Ka",
    fabricante: "Ford"
  };
};
console.log(minhaFuncao());
console.log(retornaUmCarro());
console.log("#################################################");
var carro = {
  valocidadeAtual: 40,
  acelerar: function acelerar() {
    this.valocidadeAtual += 10;
  },
  frear: function frear() {
    this.valocidadeAtual -= 20;
  }
};
carro.acelerar();
carro.frear();
console.log(carro);