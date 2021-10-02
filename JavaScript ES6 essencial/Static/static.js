// Acessar métodos/atributos sem instanciar

function Person() {}

Person.walk = function() {
    console.log('Walking...')
}

console.log(Person.walk())
// "Walking..."

/*************************************************************** ES6 */

class Person {
    static walk() {
        console.log('walking...')
    }
}

console.log(Person.walk())
// "Walking..."