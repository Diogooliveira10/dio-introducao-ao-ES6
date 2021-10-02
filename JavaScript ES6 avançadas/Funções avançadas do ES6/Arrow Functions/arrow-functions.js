/*
    Uma expressão arrow function possui uma sintaxe mais curta quando comparada a uma expressão de
    função (function expression) e não tem seu próprio this, arguments, super ou new.target. Estas expressões
    de funções são melhor aplicadas para funções que não sejam métodos, e elas não podem ser usadas
    como construtoras (constructors).
*/

// função tradicional
function log(value) {
    console.log(value)
}
log('test')
// test

// função anônima
var sumOld = function(a, b) {
    return a + b
}

// Arrow functions =>
var sum = (a, b) => a + b
console.log(sum(5, 15))
// 20

var sum = (a, b) => a + b // Contem o return implicito para funçoes simples.

var sum = a => a + 5 // Se tiver apenas um argumento na função pode-se omitir os parenteses.

var sum = (a = 5) => a + 5 // Deve-se utilizar os parenteses em cado de utilizar valores default.

var createObj = () => ({ test: 123 })

// Exemplo de Arrow function veio para resolver problemas e tras vantagens na legibilidade e na escrita curta.
var obj = {
    showContext: function showContext() {
        // this = obj

        setTimeout(() => {
            this.log('after 1000ms')
        }, 1000)
    },
    log: function log(value) {
        console.log(value)
    }
}

obj.showContext()