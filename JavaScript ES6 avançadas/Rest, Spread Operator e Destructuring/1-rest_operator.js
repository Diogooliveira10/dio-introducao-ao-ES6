/*
    Rest: nos permite transformar um número indeterminado de parâmetros em um array,
    e ele apenas funciona dentro de uma função, sendo ele um dos argumentos da função.
*/

function sum(a, b) {
    var value = 0

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i]
    }

    return value
}

console.log(sum(5, 5, 5, 2, 3))

// com rest operator ...
function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0)
}

console.log(sum(5, 5, 5, 2, 3))