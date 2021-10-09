/*
    Adições mais recentes à linguagem JavaScript são as funções assíncronas e a palavra-chave await,
    adicionadas no ECMAScript 2017. Esses recursos atuam basicamente como um syntactic sugar em cima
    de promises, tornando o código assíncrono mais fácil de escrever e ler.

    * Curiosidade
        Foi inspirada em outras liguagens de programação, exemplo C#
*/

// ES7 - Async / Await
const asyncTimer = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345)
        }, 1000)
    })

const simpleFunc = async () => {
    const data = await asyncTimer() // await aguarda a resolução da promise e retornou data

    return data
}

simpleFunc()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })
// Promise {<pending>}
// 12345