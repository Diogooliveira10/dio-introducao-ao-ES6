/*
    Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as
    heranças baseadas nos protótipos. A sintaxe para classes não introduz um novo modelo de herança de
    orientação a objetos em JavaScript. Classes em JavaScript provêm uma maneira mais simples e clara de
    criar objetos e lidar com herança.
*/

class Animal {
    constructor() {
        this.qtdePatas = 0
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super() /* A palavra-chave super é usada para acessar o objeto pai de um objeto,
                em outros casos, é usada para acessar a classe pai de uma classe. */
        this.qtdePatas = 4
        this.morde = morde
    }

    latir() {
        console.log('Au! au!')
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);