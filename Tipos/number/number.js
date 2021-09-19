/**
 * O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos.
 */

const myNumber = 12.4032

// Transformar número para string
const numberAsString = myNumber.toString()
console.log('Número transormado em string:', typeof numberAsString)
// Número transormado em string: string

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2)
console.log('\nNúmero com duas casas decimais:', fixedTwoDecimals)
// Número com duas casas decimais: 12.40

// Transforma uma string em float
console.log('\nString parseada para float:', parseFloat('13.22'))
// String parseada para float: 13.22

// Transforma uma string em int
console.log('\nString parseada para int:', parseInt('13.20'))
// String parseada para int: 13