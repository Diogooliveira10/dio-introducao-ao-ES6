/*
    O switch case é uma estrutura condicional do Javascript como o if,
    e serve para analisar os valores e executar um bloco de código condicionalmente.
    Normalmente é utilizado, quando se deseja analisar diversos valores diferentes para a mesma variável.

    switch (espressão) {
        case valor1:
            break;
        case valueN
            break;
        
        default:
            break;
    }
*/

const fruit = 'pera'

switch (fruit) {
    case 'banana':
    console.log ('R$: 3,00 / kg')
    break; // pausar
    case 'mamao':
    case 'pera':
    case 'melancia':
    console.log ('R$: 2,00 / kg')
    break;
    default:
    console.log ('Produto não existe no estoque.')
    break;
}
// R$ 3,00 / kg