/**
 * Declarações de variáveis, onde quer que elas ocorram, são processadas antes que qualquer outro código
 * seja executado. O escopo de uma variável declarada com var é seu contexto atual em execução, o qual
 * é a função a qual pertence ou, para variáveis declaradas fora de qualquer função, o escopo é o global.
 */

var test = 'example'

(() => {
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        var test = 'example'
        console.log(`Valor dentro do if "${test}"`)
    }

    console.log(`Valor após a execução do if "${test}"`)
})()

/** 
 *  (() => {
    var test
    console.log(`Valor dentro da função "${test}"`)

    if (true) {
        test = 'example'
        console.log(`Valor dentro do if "${test}"`)
    }

    console.log(`Valor após a execução do if "${test}"`)
})()

 * Valor dentro da função "undefined"
 * Valor dentro do if "example"
 * Valor após a execução do if "example"
 */