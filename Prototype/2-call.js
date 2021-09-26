// O método call() invoca uma função com um dado valor this e argumentos passados individualmente.

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas
}

function Cachorro(morde) {
    Animal.call(this, 4)

    this.morde = morde
}

const pug = new Cachorro(false)
// Cachorro {qtdePatas: 4, morde: false}

/********************************************************************************************************* */

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4)

    this.morde = morde
    this.latir = function() {
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);