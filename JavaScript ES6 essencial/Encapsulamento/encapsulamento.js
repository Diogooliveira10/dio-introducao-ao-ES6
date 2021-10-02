// Ocultar detalhes do funcionamento interno

function Person(initialName) {
    var name = initialName

    Object.defineProperties(this, 'name', {
        get: function() {
            return name
        },
        set: function(value) {
            name = value
        }
    })
}

/*************************************************************** ES6 */

class Person {
    #name = ''

    constructor(name) {
        this.#name = name
    }

    get name() {
        return this.#name
    }

    set name(name) {
        this.#name = name
    }
}