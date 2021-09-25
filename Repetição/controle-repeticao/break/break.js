/*
    O comando break encerra o loop atual, switch, ou o loop que foi informado no label e transfere o
    controle da execução do programa para o comando seguinte.
*/

console.log('Exemplo da utilização de break')

var index = 0

while(true) {
    index++

    if (index > 2) {
        break;
    }

    console.log(index)
}
/*
    Exemplo da utilização de break
    1
    2
*/