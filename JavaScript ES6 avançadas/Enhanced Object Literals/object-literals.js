// Maneira classica de escrever objeto literais
var obj = {
    prop1: 'Digital Innovation One'
}

// Referanciando variavel
var prop1 = 'Digital Innovation One'

var obj = {
    prop1: prop1
}

console.log(obj)
// {prop1: "Digital Innovation One"}

/* 
    Com o surgimento do ES6 foi introduzido shorthand, podendo omitir o lado direito,
    com isso definir valores de propriedades e metodos sem repitir a palavra.
*/
var prop1 = 'Digital Innovation One'

var obj = {
    prop1,
}

console.log(obj)
// {prop1: 'Digital Innovation One'}

// Podendo ser feito também com funções para definir método.
function method1() {
    console.log('method called')
}

var obj = {
    method1
}

obj.method1()
// method called

// Outro exemplo de método.
var obj = {
    sum: function sum(a, b) {
        return a + b
    }
}

console.log(obj.sum(1, 5))
// 6

// shorthand
var obj = {
    sum(a, b) {
        return a + b
    }
}

console.log(obj.sum(1, 5))
// 6

// Propriedade
var propName = 'test'
var obj = {}
obj[propName] = 'prop value'

console.log(obj)
// {test: 'prop value'}

var propName = 'teste'
var obj = {
    [propName + 'concat']: 'prop value'
}
console.log(obj)
// {testeconcat: 'prop value'}