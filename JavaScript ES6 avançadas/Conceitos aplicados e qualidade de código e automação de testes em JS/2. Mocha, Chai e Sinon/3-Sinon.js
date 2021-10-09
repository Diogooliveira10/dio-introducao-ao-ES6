/*
    Spies de teste autônomo, stubs e simulações para JavaScript.
    Funciona com qualquer estrutura de teste de unidade.
*/

const assert = require('assert')
const Math = require('.../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon') // utilizando o sinon podemos mocha funções e observar se elas foram invocadas

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

    it.only('Calls res with sum and index values', function() {
        const req = {}
        const res = {
            load: sinon.spy()
        }
        const math = new Math()

        math.printSum(req, res, 5, 5)

        //  expect(res.load.calledOnce).to.be.true função espiã -> utilizando espiões, consigo verificar se foi invocada de maneira correta
        expect(res.load.args[0[1]].to.equal(10))

    })
})

class math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2500)
    }
    multiply(a, b) {
        return a * b
    }
    printSum(req, res, a, b) {
        res.load('index', a + b)
    }
}

module.exports = Math

/**
     * A combinação dessas três ferramentas podem auxiliar a fazer TDD, código mais legível, teste que sirva como documentação.
       Com isso garantir uma qualidade maior dos testes e código.

 */