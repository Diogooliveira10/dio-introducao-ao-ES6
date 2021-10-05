/*
    A sintaxe de atribuição via desestruturação (destructuring assignment) é uma expressão JavaScript
    que possibilita extrair dados de arrays ou objetos em variáveis distintas.
*/

// ES5
var arr = ['Apple', 'Banana', 'Orange']

var apple = arr[0]
var banana = arr[1]
var orange = arr[2]
var tomato = arr[3][0]

// ES6: Destructuring assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']]

console.log(tomato)


// utilizando com objetos
var obj = {
    name: 'Diogo'
}

// ES5
var name = obj.name
// ES6: Destructuring assignment
var { name } = obj

console.log(name)

// Master Destructuring: objeto dentro de objeto
var obj = {
    name: 'Diogo',
    props: {
        age: 27
    }
}
// ES5
var age = obj.props.age
// ES6: Destructuring assignment
var { props: {  age } } = obj

console.log(age)

// Destructuring de arrays dentro de objeto e objeto dentro de array
var obj = {
    name: 'Diogo',
    props: {
        age: 27,
        favoriteColors: ['black', 'white']
    }
}
// ES5
var age = obj.props.age
var color1 = obj.props.favoriteColors[0]

// ES6: Destructuring assignment
var {
    props: { age: age2,
            favoriteColors: [color1, color2]
    }
} = obj

console.log(color1)
console.log(color2)

// Objeto dentro de array
var arr = [{ name: 'apple', type: 'fruit' }]

// ES5
var fruit = arr[0].name
// ES6: Destructuring assignment
var [{ name }] = arr

console.log(name)


// functions

// ES5
function sum(arr) {
    return arr[0] + arr[1]
}

console.log(sum[5, 5])
// 10

// ES6: Destructuring assignment
function sum([a, b] = []) {
    return a + b
}

console.log(sum[5, 5])
// 10

// object
function sum({ a, b }) {
    return a + b
}
console.log(sum({ a: 5, b: 5 }))