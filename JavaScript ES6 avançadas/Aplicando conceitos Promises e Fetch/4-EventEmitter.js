/*
    Uma forma diferente de lidar com programação assíncrona dentro do node, e deixar o código mais estruturado...
    é utilizando EventEmitter que é exclusivo do node!
*/

// EventEmitter
const EventEmitter = require('events') // importando módulo 'events' nativo do node

const emitter = new EventEmitter() // instanciala ou estendela caso queira

emitter.on('User logged', data => { // Subscrever ao evento específico
    console.log(data)
})

emitter.emit('User logged', { user: 'Diogo Oliveira' }) // emitir events
// { user: 'Diogo Oliveira' }


/**************************************************************************** */

// estendendo a classe e emitindo internamente

const EventEmitter = require('events')

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('User logged', data)
        }, 2000)
    }
}

const users = new Users()

user.on('User logged', data => {
    console.log(data) 
})

users.userLogged({ user: 'Diogo Oliveira' })
// { user: 'Diogo Oliveira' }
users.userLogged({ user: 'Celso Henrique' })
// { user: 'Celso Henrique' }

/*
    Caso queira consumir apenas uma vez, existe o método once
    user.once('User logged', data => {
    console.log(data)

    users.userLogged({ user: 'Diogo Oliveira' })
    users.userLogged({ user: 'Celso Henrique' })
    // { user: 'Diogo Oliveira' }

})
*/

/*
    Com isso consigo responder a eventos e lidar com programação assíncrona,
    através de events se tornando o meu código com manutenção mais simples e  mais legivel.
*/