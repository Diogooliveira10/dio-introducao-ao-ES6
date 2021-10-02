/*
    Em JavaScript, os parâmetros de funções tem undefined como valor predefinido.
    Contudo, em alguns casos pode ser útil utilizar algum outro valor.
    É nesta situação em que os parâmetros predefinidos podem ser úteis.

    No passado, a estratégia de definir valores padrão para parâmetros era testar os valores do parâmetros no
    corpo da função e atribuir um valor se este for undefined.
*/

function multiply(a, b) {
    b = typeof b === 'undefine' ? 1 : b

    return a * b
}

console.log(multiply(5))
// 5

// Após o surgimento do ES6
function multiply(a, b = 1) {
    return a * b
}

console.log(multiply(5, undefined))
// 5

// Outra característica interessante é poder referenciar outros parâmetros.
function multiply(a, b = a) {
    return a * b
}

console.log(multiply(5))
// 25

// lazy evaluation
function randomNumber() {
    console.log('Generating a random number...')
    return Math.random() * 10
}

function multiply(a, b = randomNumber()) {
    return a * b
}

console.log(multiply(5))
// Generating a random number...
// 6.733215657209968
console.log(multiply(5))
// Generating a random number...
// 27.1006212789751