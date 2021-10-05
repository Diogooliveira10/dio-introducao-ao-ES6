/*
    Spread: transforma um array em diversos parâmetros para uma função, ou seja,
    podemos invocar uma função que espera vários parâmetros utilizando o Spread.
*/

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply.apply(undefined, rest)
}

console.log(sum(5, 5, 5, 2, 3))

/* 
    com surgimento do ECMA6 surgiu spread operator, porem seu funcionamento é ao contrário,
    funcionando de maneira diferente do rest operator
*/

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum = (...rest) => {
    return multiply(...rest)
}

console.log(sum(5, 5, 5, 2, 3))

// spread operator pode ser usado em strings, arrays, literal objects e objetos iteraveis

// strings
const str = 'Digital Innovation One'

function logArgs(...args) {
    console.log(args)
}
logArgs(...str)

// construindo arrays
const arr = [1, 2, 3, 4, 5]
logArgs(...arr)

const arr2 = [...arr, 6, 7, 8, 9]

// literal objects
const obj = {
    test: 123
}

const obj2 = {
    ...obj, /* obs: só posso utilizar spread em objetos literais não interaveis
             no caso para construir novos objetos. */
    test2: 'hello'
}

console.log(obj2)

// spread operato também é bastante usado para gerar clones de um outro objeto
const obj = {
    test: 123
}
const obj2 = { ...obj }

obj2.test = 456
console.log(obj)

// se atentar ao shallow clone (clone raso) se objeto tiver propriedades que sejam outros objetos
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj2 = { ...obj }
obj.subObj.test = 456

console.log(obj) // tomar cuidado com níveis mais baixo de objeto, justamente por conta do shallow clone.

// resolvendo esse caso
const obj = {
    test: 123,
    subObj: {
        test: 123
    }
}

const obj2 = { ...obj, subObj: {...obj.subObj} }  /* gerando sub-objeto fazendo spread do primeiro,
desta forma vai funcionar de maneira esperada */
obj.subObj.test = 456                             