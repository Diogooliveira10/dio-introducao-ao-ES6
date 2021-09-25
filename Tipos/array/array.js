/* 
    É uma estrutura que permite o armazenamento de outras variáveis,
    que podem ser do tipo primário, um array de objetos JavaScript ou, até mesmo,
    JavaScript array functions, ou seja, é possível armazenar funções em um elemento do array.
*/

const users = ['Diogo', 'Caroline', 'Guilherme']

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Diogo',
        age: 27,
        gender: gender.MAN
    },
    {
        name: 'Caroline',
        age: 22,
        gender: gemder.WOMAN
    },
    {
        name: 'Guilherme',
        age: 28,
        gender: gender.MAN
    }
]

// Retornar a quantidade de itens de um array
console.log('Items:', persons.length)

// Verificar se é array
console.log('A variável persons é um array:', Array.isArray(persons))

// Iterar os itens do array
// O Array JavaScript fornece o método forEach() que permite executar uma função em cada elemento.
persons.forEach(person => {
    console.log(`Nome: ${person.name} index: ${index}`, arr)
})

// Filtrar array
// A função Filter recebe como parâmetro uma função de callback,
// onde o retorno dado será um novo array com os elementos que passaram na validação realizada.
const mens = persons.filter(person => person.geder === gender.MAN)
console.log('\nNova lista apenas com homens:', mens)

// Retornar um novo
// Map faz parte do conjunto de métodos disponíveis na linguagem para a manipulação de objetos do tipo array.
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript'
    return person
})

console.log('\nPessoas com a adição do course:', personsWithCourse)

// Tranformar um array em outro tipo
/*
    A função reduce do JavaScript serve para iterar sobre um array
    e utilizar o valor de cada item para criar um objeto final com base em alguma regra.
    Como o próprio nome da função sugere, ela “reduz” os itens de um vetor a um valor único.
*/
const totalAge = persons.reduce((age, person) => {
    age += person.age
    return age
}, 0)

console.log('\nSoma de idade das pessoas', totalAge)

// Juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce ((age, person) => {
                            age += person.age
                            return age
                        }, 0)

console.log('\nSoma de idades das pessoas que possuem idade par', totalEvenAges)