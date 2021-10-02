/*
    O objetivo desse pattern é criar uma única instância de um função
    construtora e retorná-la toda vez em que for necessário utilizá-la.
*/

var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

// Exemplo de Singleton
function MyApp() {
    if(!MyApp.instance) {
        MyApp.instance = this
    }

    return MyApp.instance
}

// Exemplo:
function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this
    }

    return Pessoa.instance
}

const p = Pessoa.call({ name: 'Diogo' })
const p2 = Pessoa.call({ name: 'Custom Name' })

console.log(p)
console.log(p2)