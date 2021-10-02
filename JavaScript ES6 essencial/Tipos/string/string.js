/*
    Strings são úteis para guardar dados que podem ser representados em forma de texto.
    Uma das operações mais usadas nas strings é checar seu tamanho, para construir e concatená-las
    usando os operadores + e +=, checando pela existência ou posição de substrings com o método indexOf,
    ou extrair substrings com o método substring.
*/

/* Algumas funções usadas no dia a dia */

// Retornar o tamanho de uma string
const textSize = 'Texto'.length
console.log(`Quantidade de letras: ${textSize}`)
// Quantidade de letras: 5

// Retornar um array quebrando a string por um delimitador
const splittedText = 'Testo'.split('x')
console.log('\nArray com as posições separadas pelo delimitador:', splittedText)
// Array com as posições separadas pelo delimitador: [ 'Te', 'to']

// Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT')
console.log('\nSubstituição de valor:', replacedText)
// Substituição do valor: txeTo

// Retorna a "fatia" de um valor
const lastChar = 'Texto'.slice(-1)
console.log('\nÚltima letra de uma string:', lastChar)
// Última letra de uma string: 0

const allWithoutLastChar = 'Texto'.slice(0, -1)
console.log('\nValor da string da primeira letra menos a última:', allWithoutLastChar)
// Valor da string da primeira letra menos a última: Text

const secondToEnd = 'Texto'.slice(1)
console.log('\nValor da string da segunda letra até a última:', secondToEnd)
// Valor da string da segunda letra até a última: exto

// Retorna N caracteres a partir de uma posição
const twoCharsBeforeFistPos = 'Texto'.substr(0, 2)
console.log('\nAs duas letras primeiras são:', twoCharsBeforeFistPos)
// As duas letras primeiras são: Te