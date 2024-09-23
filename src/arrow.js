const minhaFuncao = () => "Diz oi";

const retornaUmCarro = () => ({
    modelo: "Ka",
    fabricante: "Ford"
})

console.log(minhaFuncao());
console.log(retornaUmCarro());

console.log("#################################################")


const carro = {
    valocidadeAtual: 40,
    acelerar: function(){
        this.valocidadeAtual += 10
    },
    frear: function(){
        this.valocidadeAtual -= 20
    }
}
carro.acelerar();
carro.frear();
console.log(carro);