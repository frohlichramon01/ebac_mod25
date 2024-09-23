// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;
const todosOsAlunos = [
    { nome: 'Julia', nota: 4 },
    { nome: 'Arthur', nota: 5 },
    { nome: 'Rebeca', nota: 9 },
    { nome: 'Luana', nota: 6 },
    { nome: 'Tomas', nota: 7 }
];

// Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;
const filtrarAlunosAprovados = (alunos) => 
    alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(todosOsAlunos);
console.log(alunosAprovados);