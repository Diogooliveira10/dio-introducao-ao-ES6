/*
    Mocha é uma estrutura de teste JavaScript rica em recursos em execução no Node.js e no navegador,
    tornando o teste assíncrono simples e divertido . Os testes Mocha são executados em série,
    permitindo relatórios flexíveis e precisos, enquanto mapeia exceções não detectadas para os casos de teste corretos.
    Hospedado no GitHub .
*/

// "Iniciando teste com Mocha"

// npm init -y                          Iniciando projeto
// npm i --save-dev mocha               Instalando como dependencia de desenvolvimento o Mocha
// emacs package.json

/*
    {
        "name": 'aula-5',
        "version": "1.0.0",
        "description": "",
        "main": "index.js",
        "scripts": {
            "test": "mocha" // alterar o script para que execute o mocha
        },
        "keywords": [],
        "author": ""Diogo <"diogooliveira9@gmail.com">",
        "license": "ISC",
        "devDependencies": {
            "mocha": "^6.1.4"
        }    
    }
*/

// Mocha por padrão vai buscar arquivos que estiverem dentro da raiz do seu projeto em um diretório chamado test.
// mkdir test
// emacs test/math.spec.js

// O exemplo é uma classe matemática simples.

const assert = require('assert')
const Math = require('.../src/math.js')

let value = 0

describe('Math class', function() {
    // hooks -> forma de executar código e evitar repetição
    this.beforeEach(function() {
        value = 0
    })

    it('Sum two numbers', function(done) {
        const math = new Math()
        this.timeout(3000)
        
        value = 5

        math.sum(value, 5, value => {
            assert.equal(value, 10)
            done()
        })
    })
    // it.only('Multiply two numbers', function() { // only é focada em apenas em uma execução do teste
    // it.skip('Multiply two numbers', function() { // outra forma de ignorar um teste
    it('Multiply two numbers', function() {
        const math = new Math()

        assert.equal(math.multiply(value, 5), 0)
    })
})

// src/math.js - criando a classe
class math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2500)
    }
    multiply(a, b) {
        return a * b
    }
}

module.exports = Math


// Foi feita uma interação de TDD;
// Metodo em assíncrono;
// Com Mocha pode escrever testes que ainda não existe;
// Capacidade de executar apenas um teste.