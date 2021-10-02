const name = 'Diogo'

// Não podemos alterar o valor
name = 'Guilherme'

const user = {
    name: 'Diogo'
}

// Mas se for um objeto, podemos trocar suas propriedades
user.name = 'Outro nome'

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Guilherme'
}

const persons = ['Diogo', 'Bia', 'Caroline']

// Podemos adicionar novos itens
persons.push('Pedro')
// ['Diogo', 'Bia', 'Caroline', 'Pedro']

// Podemos remover algum item
persons.shift()
// ['Bia', 'Caroline', 'Pedro']

// Podemos alterar diretamente
persons[1] = 'Guilherme'
// ['Bia', 'Guilherme', 'Pedro']

console.log('\nArray após as alterações: ', persons)
/*
    Array após as alterações: ['Bia', 'Guilherme', 'Pedro']
*/