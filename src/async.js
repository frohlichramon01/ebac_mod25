function funcaoPesada(){
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++){
        execucoes++;
    }
    return execucoes
}

const funcaoPesadaPromise = new Promise((resolve, reject) => {
    try{
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++){
        execucoes++;
        }
        resolve(execucoes);
    } catch(e){
        reject("erro erro erro");
    }
})

const promiseComParametros = (login, senha) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`logado com o usuário ${login}.`)
        }, 3000)
    })
}








async function execucaoPrincipal(){
    console.log("início");

    // await funcaoPesadaPromise.then(resultado => console.log(resultado));

    promiseComParametros('giar@123.com', 123456).then(resultado => {console.log(resultado)})

    try{
        const resultado = await funcaoPesadaPromise;
        console.log(resultado);
    } catch(e){
        console.log(e);
    }    

    console.log("fim");
}
execucaoPrincipal();
