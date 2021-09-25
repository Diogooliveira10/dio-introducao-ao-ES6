/*
    A declaração while cria um laço que executa uma rotina especifica
    enquanto a condição de teste for avaliada como verdadeira.
    A condição é avaliada antes da execução da rotina.

    while (condição) {
        declaração
    }
*/

var n = 0
var x = 0
while (n < 3) {
    n++
    x += n          // 1, 3, 6
}

console.log(x)
// 6