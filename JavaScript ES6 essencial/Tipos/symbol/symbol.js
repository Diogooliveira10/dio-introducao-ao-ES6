/**
 * A função Symbol() retorna um valor do tipo símbolo (symbol), tem propriedades estáticas que expõem
 * vários membros dos objetos nativos, possuem métodos estáticos que expõem o registro de símbolos
 * globais e se parecem com uma classe de objeto nativo, mas estão incompletos como construtor porque
 * não suportam a sintaxe "new Symbol()".
 * 
 * Cada valor símbolo retornado de Symbol() é único. Um símbolo pode ser usado como o identificador
 * para propriedades de objetos; esse é o único propósito do tipo de dado. Algumas explicações sobre
 * propósito e uso podem ser encontradas no verbete do glossário para Symbol.
 */

const symbol1 = Symbol()
const symbol2 = Symbol()

// Symbols são únicos
console.log('symbol1 é igual a symbol2:', symbol1 === symbol2)

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name')
const nameSymbol2 = Symbol('name')

const user = {
    [nameSymbol1]: 'Diogo',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Oliveira Vieira'
}

console.log(user)

/*
    { lastName: 'Oliveira Vieira',
    [Symbol(name)]: 'Diogo',
    [Symbol(name)]: 'Outro nome' }
*/

// Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`)
    }
}
/*
    { lastName: 'Oliveira Vieira',
    [Symbol(name)]: 'Diogo',
    [Symbol(name)]: 'Outro nome' }

    Valor da chave lastName: Oliveira Vieira
*/

console.log('Propriedades do objeto user:', Object.keys(user))
console.log('Valores da propriedades do objeto user:', Object.values(user))
/*
    { lastName: 'Oliveira Vieira',
    [Symbol(name)]: 'Diogo',
    [Symbol(name)]: 'Outro nome' }

    Valor da chave lastName: Oliveira Vieira
    Propriedades do objeto user: [ 'lastName' ]
    Valores da propriedades do objeto user: [ 'Oliveira Vieira']
*/

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user:', Object.getOwnPropertySymbols(user))
// Symbols registrados no objeto user: [ Symbol(name), Symbol(name) ]

// Acessando todas as propriedades do objeto
console.log('Todas propriedades do objeto user:', Reflect.ownKeys(user))
// Todas propriedades do objeto user: [ 'lastName', Symbol(name), Symbol(name) ]

// Criar um enum
const directions = {
    UP   : Symbol( 'UP' ),
    DOWN : Symbol( 'DOWN' ),
    LEFT : Symbol( 'LEFT' ),
    RIGHT: Symbol( 'RIGHT' )
}
