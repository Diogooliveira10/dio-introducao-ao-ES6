/**
 * É a capacidade de uma função lembrar do ambiante que ela foi criada.
 */

function init() {
    const exemplo = 'Essa variável'

    return function() {
        console.log(`1 - 0 valor da variável exemplo é: ${exemplo}.`)

        return function() {
            console.log(`2 - 0 valor da variável exemplo é: ${exemplo}.`)

            return function() {
                console.log(`3 - 0 valor da variável exemplo é: ${exemplo}.`)
            }
        }
    }
}

const initFn1 = init()
const initFn2 = initFn1()
const initFn3 = initFn2()

initFn3()

// É importante saber, mas na prática é bom evitar.

/**
 * Conseguimos também executar todas funções em uma linha só.
 */

init()()()()