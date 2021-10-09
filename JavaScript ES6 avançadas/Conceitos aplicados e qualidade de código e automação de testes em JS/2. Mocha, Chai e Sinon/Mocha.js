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

describe('Math class', function() {
    it('Sum two numbers', function() {
        const math = new Math()
        
        assert.equal(math.sum(5,5), 10)
    })
})

// src/math.js - criando a classe
class math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 0)
    }
}

module.exports = Math


// Foi feita uma interação de TDD
// Metodo em assíncrono