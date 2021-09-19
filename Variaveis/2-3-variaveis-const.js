/**
 * A declaração const cria uma referência somente leitura a um valor. Isso não significa que esse valor é
 * imutável, apenas que o identificador da variável constante não pode ser alterado. Se o conteúdo do
 * identificador for um objeto, isso significa que o conteúdo do objeto (ex. seus parâmetros) podem ser alterados.
 */

(() => {
    const test = 'valor função'
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        const test = 'valor if'
        console.log(`Valor dentro do if "${test}"`)
    }

    console.log(`Valor após a execução do if "${test}"`)
})()

/*
    Valor dentro da função "valor função"
    Valor dentro do if "valor if"
    Valor após a execução if "valor função"
*/