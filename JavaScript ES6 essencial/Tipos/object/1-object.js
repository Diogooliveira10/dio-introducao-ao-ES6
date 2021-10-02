/**
 * O construtor Object cria um wrapper de objeto para o valor fornecido.
 * Se o valor for null ou undefined, ele criará e retornará um objeto vazio,
 * caso contrário, retornará um objeto de um Type que corresponde ao dado valor.
 * Se o valor já for um objeto, ele retornará o valor.
  
 * Quando chamado em um contexto não-construtor, o object se comporta de forma idêntica ao new Object ().
 */

let user = {
    name: 'Diogo'
}

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1'
user['name'] = 'Outro nome 2'

const prop = 'name'
user[prop] = 'Outro nome 3'

// Criando uma propriedade
user.lastName = 'Oliveira Vieira'

// Deletando uma propriedade
delete user.name