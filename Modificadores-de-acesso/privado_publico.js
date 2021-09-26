function Person(initialName) {
    let name = initialName

    this.getName = function() {
        return name
    }

    this.setName = function(newName) {
        name = newName
    }
}

const p = new Person('Diogo')

console.log(p)
// Person {getName: f, setName: f}

p.getName()
// "Diogo"

p.name
// undefined

p.setName('Caroline')
p.getName()
// "Caroline"

/*************************************************************** ES6 */

class Person {
    #name = ''

    constructor(initialName) {
        this.#name = initialName
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }
}

console.log(p)
// Person {}

p.getName()
// "Diogo"

p.name
// undefined

p.setName('Caroline')
p.getName()
// "Caroline"