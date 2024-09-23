// function Pokemon(nome, tipo){
//     this.nome = nome;
//     this.tipo = tipo;
// }

// const pikachu = new Pokemon("Pikachu", "elétrico");

class Pokemon{
    #hp = 100;

    constructor(nome, tipo){
        this.nome = nome;
        this.tipo = tipo;
    }

    atacar(nomeAtaque){
        console.log(`${this.nome} atacou com ${nomeAtaque}`);
    }

    recebeuAtaque(){
        this.#hp -= 10;
    }

    exibeHP(){
        console.log(this.#hp);
    }
}

class Pikachu extends Pokemon{
    constructor(){
        super("Pikachu", "Elétrico");
    }

    atacar(){
        console.log(`${this.nome} atacou com choque do trovão!`);
    }

}

const pikachudoAsh = new Pikachu("pikachu", "eletrico");
const pikachu = new Pokemon("pikachu", "eletrico");

// console.log(pikachu);
// console.log(pikachudoAsh);

pikachudoAsh.recebeuAtaque();

pikachudoAsh.hp = 5000;

console.log(pikachudoAsh.hp);

pikachudoAsh.atacar();

pikachudoAsh.exibeHP();