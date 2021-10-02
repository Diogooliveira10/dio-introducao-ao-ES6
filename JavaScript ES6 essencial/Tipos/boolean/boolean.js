/**
 * O valor passado como primeiro parâmetro é convertido para um valor boleano, se necessário.
 * Se o valor é omitido ou é 0, -0, null, false, NaN, undefined ou é uma string vazia(""),
 * o objeto terá um valor inicial de false. Todos outros valores, incluindo qualquer objeto ou string "false",
 * criam um objeto com valor inicial  true.
 */

const isActive = true

const isAuthenticated = false

console.log('Tipo da variável', typeof isActive)