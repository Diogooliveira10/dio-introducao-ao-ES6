/**
 * O QUE É Currying?
 * É o processo de transformar uma função que espera vários argumentos em uma função que
 * espera um único argumento e retorna outra função curried. Por exemplo, uma função que recebe três
 * argumentos, ao sofrer currying, resulta em uma função que recebe um argumento e retorna uma função
 * que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o
 * resultado da função original.
 */


// função normal
function soma(a, b) {
    return a + b
}

console.log(soma(2, 2))
console.log(soma(2, 3))
console.log(soma(2, 4))
console.log(soma(2, 5))


// Aplicando Currying
function soma(a) {
    return function(b) {
        return a + b
    }
}

const soma2 = soma(2)

console.log(soma2(2))
console.log(soma2(3))
console.log(soma2(4))
console.log(soma2(5))

