/*
     A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um laço rotulado,
     e continua a execução deste laço com a próxima iteração.
*/

// continue
console.log('\nExemplo da utilização de continue')
const array = [1, 2, 3, 4, 5, 6]

for (let index = 0; index < array.length; index++) {
    const element = array[index]

    if (element % 2 === 0) {
        continue;
    }

    console.log(element)
}
/*
    Exemplo da utilização de continue
    1
    3
    5
*/