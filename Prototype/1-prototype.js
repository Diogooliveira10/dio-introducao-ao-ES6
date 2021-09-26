// Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

function Animal() {
    this.qtdePatas = 4
}

const cachorro = new Animal()

console.log(cachorro.__proto__ === Animal.prototype)
// true
console.log(Animal.__proto__ === Function.prototype)
// true

/********************************************************************************************************* */

function Animal() {}

Animal.prototype.qtdePatas = 0
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4
    this.morde = morde
}

Cachorro.prototype = Object.create(Animal)
Cachorro.prototype.latir = function() {
    console.log('Au! au!')
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);