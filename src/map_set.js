let meuMap = new Map();
meuMap.set("nome", "Gian");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));


console.log(meuMap.size);

for (let chave of meuMap.keys()){
    console.log(chave);
}

for (let valor of meuMap.values()){
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()){
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");
console.log(meuMap);


// SET

const cpfs = new Set();
cpfs.add('12345678900');
cpfs.add('98765432100');
cpfs.add('78945612300');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {console.log(valor)});

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Gian Souza'];

const arrayComoSet = new Set(array);
console.log(arrayComoSet);

const arraySemDuplicados = [...arrayComoSet];
console.log(arraySemDuplicados);


