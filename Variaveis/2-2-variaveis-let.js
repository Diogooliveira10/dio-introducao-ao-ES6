/**
 * let permite que você declare variáveis limitando seu escopo no bloco, instrução, ou em uma expressão
 * na qual ela é usada. Isso é inverso da keyword var, que define uma variável globalmente ou no escopo
 * inteiro de uma função, independentemente do escopo de bloco.
 */


(() => {
    let test = 'valor função'
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        let test = 'valor if'
        console.log(`Valor dentro do if "${test}"`)
    }

    if (true) {
        let test = 'valor de outro if'
        console.log(`Valor de outro if "${test}"`)
    }

    console.log(`Valor após a execução if "${test}"`)
})()

/*
    Valor dentro da função "valor função"
    Valor dentro do if "valor if"
    Valor de outro if "valor de outro if"
    Valor após a execução if "valor função"
*/