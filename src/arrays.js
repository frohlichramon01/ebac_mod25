const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function(nomeRede) {
    console.log(`Eu tenho perfil na rede social: ${nomeRede}`);
})

console.log("#################################################")

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];

const alunos2 = alunos.map(function(itemAtual){
    // itemAtual = {
    //     nome: itemAtual,
    //     curso: 'Frontend'        
    // }
    // return itemAtual;

    return{
        nome: itemAtual,
        curso: 'Frontend'        
    }
})

console.log(alunos2)

const paula = alunos2.find(function(item){
    return item.nome == 'Paula'
})
console.log(paula);

const indicePaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula'
})
console.log(indicePaula);

alunos2.push({
    nome: 'Pedro',
    curso: 'Backend'})


const todosAlunosFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})

console.log(todosAlunosFrontend);

const existeAlgumAlunoBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoBackend);

// function filtraAlunosBackend(aluno){
//     return aluno.curso === 'Backend';
// }
// abaixo seria a mesma função de cima, mas em arrow function
const filtraAlunosBackend = (aluno) => aluno.curso === 'Backend';

const AlunosDeBackend = alunos2.filter(filtraAlunosBackend)

console.log(AlunosDeBackend);   
console.log("#################################################")


const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(total, itemAtual){
    return total + itemAtual;
})

console.log(soma);

console.log("#################################################")

const nomeDosAlunos = alunos2.reduce(function(total, itemAtual){
    total += `${itemAtual.nome}, `;
    return total;
}, '')

console.log(nomeDosAlunos);



console.log("#################################################")

const numeros = [1, 2, 3, 4, 5];
const dobros = numeros.map(function(numeroAtual){
    // numeroAtual = numeroAtual * 2;
    // return numeroAtual;

    return numeroAtual * 2;
})
console.log(dobros)