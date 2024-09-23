"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twitter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeRede) {
  console.log("Eu tenho perfil na rede social: ".concat(nomeRede));
});
console.log("#################################################");
var alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];
var alunos2 = alunos.map(function (itemAtual) {
  // itemAtual = {
  //     nome: itemAtual,
  //     curso: 'Frontend'        
  // }
  // return itemAtual;

  return {
    nome: itemAtual,
    curso: 'Frontend'
  };
});
console.log(alunos2);
var paula = alunos2.find(function (item) {
  return item.nome == 'Paula';
});
console.log(paula);
var indicePaula = alunos2.findIndex(function (item) {
  return item.nome == 'Paula';
});
console.log(indicePaula);
alunos2.push({
  nome: 'Pedro',
  curso: 'Backend'
});
var todosAlunosFrontend = alunos2.every(function (item) {
  return item.curso === 'Frontend';
});
console.log(todosAlunosFrontend);
var existeAlgumAlunoBackend = alunos2.some(function (item) {
  return item.curso === 'Backend' && item.curso === 'Frontend';
});
console.log(existeAlgumAlunoBackend);

// function filtraAlunosBackend(aluno){
//     return aluno.curso === 'Backend';
// }
// abaixo seria a mesma função de cima, mas em arrow function
var filtraAlunosBackend = function filtraAlunosBackend(aluno) {
  return aluno.curso === 'Backend';
};
var AlunosDeBackend = alunos2.filter(filtraAlunosBackend);
console.log(AlunosDeBackend);
console.log("#################################################");
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (total, itemAtual) {
  return total + itemAtual;
});
console.log(soma);
console.log("#################################################");
var nomeDosAlunos = alunos2.reduce(function (total, itemAtual) {
  total += "".concat(itemAtual.nome, ", ");
  return total;
}, '');
console.log(nomeDosAlunos);
console.log("#################################################");
var numeros = [1, 2, 3, 4, 5];
var dobros = numeros.map(function (numeroAtual) {
  // numeroAtual = numeroAtual * 2;
  // return numeroAtual;

  return numeroAtual * 2;
});
console.log(dobros);