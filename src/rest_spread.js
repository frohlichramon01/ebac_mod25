//rest
function somar(){
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    } 
    return soma;
}
console.log(somar(10, 20, 30));



function somarComRest(...numeros){
    const soma = numeros.reduce((total, itemAtual) => {
        total += itemAtual;
    return total;
    }, 0);
    return soma;

}
console.log(somarComRest(10, 20, 30));


// spread


const numeros = [1, 2, 3, 4];
console.log(...numeros);

const timesDeFutebolSP = ['santos', 'palmeiras', 'bragantino', 'são paulo'];
const timesDeFutebolRJ = ['vasco', 'botafogo', 'flamengo', 'fluminense'];

// const timesDeFutebol = timesDeFutebolSP.concat(timesDeFutebolRJ);

const timesDeFutebol = [...timesDeFutebolSP, ...timesDeFutebolRJ];

// timesDeFutebolSP.concat(timesDeFutebolRJ);
console.log(timesDeFutebol);

const carroDaJulia = {
    modelo: "gol",
    marca: "vw",
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.0
}

console.log(carroDaAna);


// desestruturação

const motorAna = carroDaAna.motor;
const { motor: motorDoCarroDaAna } = carroDaAna;
const { motor: motorDoCarroDaJulia } = carroDaJulia;

console.log(motorDoCarroDaAna);
console.log(motorDoCarroDaJulia);

const [item1, item2, item3, ...restoDosTimes] = timesDeFutebol;
console.log(item1);
console.log(item2);
console.log(item3);
console.log(restoDosTimes);