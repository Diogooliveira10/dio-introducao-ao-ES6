const user = {
    name: 'Diogo',
    lastName: 'Oliveira Vieira'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user))
// Propriedades do objeto user: ['name', 'lastName' ]

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user))
// Valores das propriedades do objeto user: ['Diogo', 'Oliveira Vieira']

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores:', Object.entries(user))
// Lista de propriedades e valores: [ [ 'name', 'Diogo' ], [ 'lastName', 'Oliveira Vieira' ] ]

// Mergear propriedades de objetos
Object.assign(user, {fullName: 'Diogo Oliveira Vieira'})

console.log('\nAdiciona a propriedade fullName no objeto user', user)
/* Adiciona a propriedade fullName no objeto user { name: 'Diogo', 
lastName: 'Oliveira Vieira',
fullName: 'Diogo Oliveira Vieira' }
*/
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}))
/* Retorna um novo objeto mergeando dois ou mais objetos { name: 'Diogo', 
lastName: 'Oliveira Vieira',
fullName: 'Diogo Oliveira Vieira',
age: 26 }
*/

// Previne todas as alterações em um objeto
const newObj = { 
    foo: 'bar'
}
Object.freeze(newObj)

newObj.foo = 'changes'
delete newObj.foo
newObj.bar = 'foo'

console.log('\nVariável newObj após as alterações:', newObj)
/*
    Com Object.freeze(newObj)
    Variável newObj após as alterações: { foo: 'bar' }

    Sem Object.freeze(newObj)
    Variável newObj após as alterações: { bar: 'foo' }

    Sem Object.freeze(newObj) e delete newObj.foo
    Variável newObj após as alterações: { foo: 'changes', bar: 'foo' }
*/

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { 
    name: 'Diogo'
}
Object.seal(person)

person.name = 'Diogo Oliveira'
delete person.name
person.age = 26

console.log('\nVariável person após as alterações:', person)
// Variável person após as alterações: { name: 'Diogo Oliveira' }