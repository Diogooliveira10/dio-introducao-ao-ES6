/*
    IF é uma estrutura de controle utilizada para tomar decisões.
    Realiza umas ou mais operações em função de uma expressão na forma de condição.
    Basicamente primeiro é dada uma condição e caso essa condição seja positiva, ele executa a ação.

    if (condition) {
       // code
    }
*/

const array = [0, 1, 2, 3, 4, 5]

array.forEach(item => {
    if (item % 2 === 0) {
        console.log(`O número ${item} é par.`)
    } else {
        console.log(`O número ${item} é impar.`)
    }
})

// O número 0 é par.
// O número 1 é ímpar.
// O número 2 é par.
// O número 3 é ímpar.
// O número 4 é par.
// O número 5 é ímpar.
