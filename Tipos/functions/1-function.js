/*
    Funções são blocos de construção fundamentais em JavaScript.
    Uma função é um procedimento de JavaScript - um conjunto de instruções
    que executa uma tarefa ou calcula um valor. Para usar uma função,
    você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.
*/

function fn() {
    return 'Code here'
}

const arrowFn = () => 'Code here'
const arrowFn2 = () => {
    // Mais de uma expressão
    return 'Code here'
}

// Funções também são objetos
fn.prop = 'Posso criar propriedades'

console.log(fn())
/* Code here */
console.log(fn.prop)
/* Posso criar propriedades */

// Recebendo parâmetros
const logValue = value => consolog.log(value)
const logFnResult = fnParam => console.log(fnParam())

logFnResult(fn)

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
    if (allowed) {
        fnParam()
    }
}

const handleFnExecution = controlFnExec(fn)

handleFnExecution(true) // Executará a função fn
handleFnExecution()     // Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function(allowed) {
        if (allowed) {
            fnParam()
        }
    }
}