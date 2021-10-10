/********************************  Tratamento de erros  ********************************/

// Uma maneira tradicional para o tratamento de erros é utilizando blocos de try...catch
try {
    console.log(name)
    const name = 'Diogo Oliveira'
} catch (err) {
    console.log('Error: ', err)
}

console.log('Keep going...')
/**
 * Error:  ReferenceError: Cannot access 'name' before initialization
    at <anonymous>:2:17
    Keep going...

 * Ao capturar o erro, conseguimos tratar e dar sequencia ao código.
 */

/*
    Erros no JavaScript são um classe, então podemos dar um throw no próprio erro
    e gerar o erro dinâmicamente, basta instância o erro.
*/
try {
    const name = 'Diogo Oliveira'

    const myError = new Error('Custom message');

    throw myError
} catch (err) {
    console.log('Error: ', err)
} finally {
    console.log('Keep going...')
}
/**
 * Error:  Error: Custom message
    at <anonymous>:4:21
   Keep going...
 */

/*
 * Observação interessante:
 * Não só podemos passar string para classe de Error, como podemos estênde-la.
 */
class CustomError extends Error {
    constructor({ message, data }) {
        super(message) // Passando uma mensagem que recebi 'CustomError', pra ele ter o mesmo comportamento de um erro padrão
        this.data = data
    }
}

try {
    const name = 'Diogo Oliveira'

    const myError = new CustomError ({
        message: 'Custom message on custom error',
        data: { // mais informações sobre error
            type: 'Server error'
        }
    });

    throw myError
} catch (err) {
    console.log(err)
    console.log(err.data)
} finally {
    console.log('Keep going...')
}
/**
 * Error: Custom message on custom error
    at <anonymous>:11:21
   >{type: 'Server error'}
   Keep going...

 * Posso adicionar meta informação, métodos ou qualquer tipo de "coisa" no erro
   para poder utiliza-lo posteriomente.
 */

   class CustomError extends Error {
    constructor({ message, data }) {
        super(message) // Passando uma mensagem que recebi 'CustomError', pra ele ter o mesmo comportamento de um erro padrão
        this.data = data
    }
}

try {
    const name = 'Diogo Oliveira'

    const myError = new CustomError ({
        message: 'Custom message on custom error',
        data: { // mais informações sobre error
            type: 'Server error'
        }
    });

    throw myError
} catch (err) { // condições diferente
    if (err.data.type === 'Server error') {
        // poderia fazer algo especial 
    } else {
        // caso não fosse eu poderia fazer outra coisa
    }
} finally {
    console.log('Keep going...')
}
/**
 * Temos maior controle e também conseguimos inserir dados, tornando os nosso erros
   mais dinâmicos e ricos de informação para que podemos lidar melhor com os tratamentos de erros.

 * Uma maneira clássica de lidar com erros no JavaScript.
 */