/*
    Chai é uma biblioteca de asserção BDD / TDD para o nó e o navegador que pode ser
    perfeitamente emparelhado com qualquer estrutura de teste de javascript.
*/

const assert = require('assert')
const Math = require('.../src/math.js')
const expect = require('chai').expect

let value = 0

describe('Math class', function() {
    // hooks
    this.beforeEach(function() {
        value = 0
    })

    it('Sum two numbers', function(done) {
        const math = new Math()
        this.timeout(3000)
        
        value = 5

        math.sum(value, 5, value => {
            expect(value).to.equal(10)
            done()
        })
    })

    it.only('Multiply two numbers', function() {
        const math = new Math()
        const obj = {
            name: 'Diogo Oliveira'
        }

        const obj2 = {
            name: 'Diogo Oliveira'
        }

        expect(obj).to.deep.equal(obj2)
    })
})

/*
    Além de ser muito mais espressivo, permite que você trabalhe com vários tipos, como objetos, entre outros...
*/