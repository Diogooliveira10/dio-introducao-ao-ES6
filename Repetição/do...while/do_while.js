/*
    A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false).
    A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

    do {
        declaraçãp
    } while (condição)
*/

let i = 0

do {
    i += 1
    console.log(i)
} while (i < 5)
// 1
// 2
// 3
// 4
// 5