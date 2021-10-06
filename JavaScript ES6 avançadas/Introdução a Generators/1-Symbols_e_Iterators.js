/*
     Symbols é uma maneira de gerar um identificador único, e a for de gerar esse identificardo é invocando um Symbol().
*/

const uniqueId = Symbol()
console.log(uniqueId)
// Symbol()

// um Symbol nunca é igual ao outro, é um identificador único.
const uniqueId = Symbol('Hello')
const uniqueId2 = Symbol('Hello')

console.log(uniqueId === uniqueId2)
// false

// Symbol pode ser utilizado para gerar propriedades "privadas"
const uniqueId = Symbol('Hello')
const obj = {
    [uniqueId]: 'Hello'
}
console.log(obj)
// {Symbol(Hello): "Hello"}

Object.keys(obj) // uma forma de fazer propriedades privadas?
// []

Object.getOwnPropertySymbols(obj) // getOwnPropertySymbols() consegue obter as propriedades de symbol desse obejo
//[Symbol(Hello)]

  /* 
    Não chega a ser uma propriedade privada, uma forma de ocultar. Mas é uma forma de deixar claro para outros devs
    que essa propriedade não deve ser mexida.
  */

// Well known symbols é uma série de propriedades
Symbol.iterator
Symbol.split
Symbol.toStringTag
// esses tipos pode ser utilizado para adicionar propriedades ao objeto
const obj = {
    [Symbol.iterator]() { // adicionar propriedades, metas propriedades ao objeto

    }
}

// array
const arr = [1, 2, 3, 4]
const it = arr[Symbol.iterator]() // iterator é uma interface para consumir passo a passo uma lista e estrutura de dados
/* console.log(it.next())
// {value: 1, done: false}
console.log(it.next())
// {value: 2, done: false}
console.log(it.next())
// {value: 3, done: false}
console.log(it.next())
// {value: 4, done: false}
console.log(it.next())
// {value: undefined, done: true} */

while (true) {
    let { value, done } = it.next()

    if (done) {
        break
    }
    console.log(value)
}
// 1
// 2
// 3
// 4
// undefined

/*
    Com ECM6 surgiu uma forma de fazer de uma maneira mais simples sem gerar o iterator
*/
const arr = [1, 2, 3, 4]

for (let value of arr) {
    console.log(value)
}
// 1
// 2
// 3
// 4

// Construindo uma função iteradora no objeto
Symbol.iterator

const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One'

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.lenght
                }
            }
        }
    }
}

/* for (let value of obj) {
    console.log(value)
}
// 1
// 2
// 3
// 4 */

// fazendo um spread para construir um novo array
const arr2 = [...obj]
console.log(arr2)

// Conseguindo fazer loop e dizer a forma que esse loop vai pecorrer