let arr = [ 3, 5, 7]
arr.foo = "hello"

/*
    O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção.
    O laço pode ser executado para cada propriedade distinta do objeto.
*/
for (let i in arr) {
    console.log(i)    // logs "0", "1", "2", "foo"
}

/*
    O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante),
    chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.
*/
for (let i of arr) {
    console.log(i)    // logs "3", "5", "7"
}