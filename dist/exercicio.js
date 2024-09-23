"use strict";

// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
var todosOsAlunos = [{
  nome: 'Julia',
  nota: 4
}, {
  nome: 'Arthur',
  nota: 5
}, {
  nome: 'Rebeca',
  nota: 9
}, {
  nome: 'Luana',
  nota: 6
}, {
  nome: 'Tomas',
  nota: 7
}];

// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
var filtrarAlunosAprovados = function filtrarAlunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAlunosAprovados(todosOsAlunos);
console.log(alunosAprovados);