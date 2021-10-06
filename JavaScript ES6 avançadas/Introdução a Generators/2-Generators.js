/*
    Enquanto os iteradores são ferramentas muito úteis, sua criação requer um cuidado devido à necessidade
    de manter explícito seu estado interno. Generators provêm uma alternativa poderosa: eles te permitem
    definir um algorítimo iterativo escrevendo uma função simples que pode manter seu estado próprio.
*/

// Aprendendo sobre Generators e onde utilizá-los
const arr = [1, 2, 3, 4]
const str = 'Digital Innovation One'

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0

        return {
            next: () => {
                i++

                return {
                    value: this.values[i - 1],
                    done: i > this.values.lenght
                }
            }
        }
    }
}

/* 
    Generators são funções com pausa, despausa e retorna valores atraves da interface de iteração como foi feito
    no exemplo anterior no value e done.
*/

// Generators
function* hello() {
    console.log('Hello')
    yield 1
    console.log('From')
    const value = yield 2
    console.log(value)
}

const it = hello()

console.log(it.next())
// Hello
// {value: 1, done: false}
console.log(it.next())
// From
// {value: 2, done: false}
console.log(it.next('Outside!'))
// Outside
// {value: undefined, done: true}

/*
    Generators além de ser uma função com pausa, eu posso utilizar para contruir uma meta propriedade
    e tranformar meu objeto iteravel com isso aproveitar o 'poder' tanto do Symbol, quanto dos iteradores,
    e generators
*/

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
}

for (let value of obj) {
    console.log(value)
}
// 1
// 2
// 3
// 4