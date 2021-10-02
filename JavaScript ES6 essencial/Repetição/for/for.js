/*
    A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e
    separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações
    executadas em sequência.

    for ([expressãoInicial]; [condição]; [incremento])
    declaração
*/
const array = ['one', 'two', 'three']

for (let index = 0; index < array.length; index++) {
    const element = array[index]
    console.log(`Element #${index}: ${element}.`)
}
// Element #0: one.
// Element #1: two.
// Element #2: three.