/**
 * O que é Imutabilidade?
 * Imutabilidade significa que a mudança não é feita no mesmo objeto, estrutura, mas a mudança é representada em um novo.
 * E isso porque a referência representa o valor não apenas do ponteiro da memória.
 * Cada mudança cria um novo valor e não toca no antigo. Essas regras claras devolvem a previsibilidade
 * de confiança e código. As funções são seguras para usar porque, em vez de mutação, elas lidam com
 * versões próprias com valores próprios.
 */

const user = {
    name: 'Diogo',
    lastName: 'Vieira'
}

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserWithFullName(user)

console.log(userWithFullName)

/*
    { name: 'Diogo',
    lastName: 'Vieira',
    fullName: 'Diogo Vieira' }
*/