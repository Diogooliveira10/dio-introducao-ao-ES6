/*
    Todas as funções que retornam um objeto, sem a necessidade de
    chamá-las com o new, são consideradas funções Factoy(fábrica)
*/

/* 
        function FakeUser() {
            this.name: 'Diogo';
            this.lastName: 'Oliveira';
        }

        // Não é Factory
        const user = new FakeUser()

/********************************************************** *****/

function FakeUser(){
    return {
        name: 'Diogo',
        lastName: 'Oliveira'
    }
}

// Factory
const user = FakeUser()

// Exemplo:
function Pessoa(customProperties) {
    return {
        name: 'Diogo',
        lastName: 'Oliveira',
        ...customProperties
    }
}

const p = Pessoa({name: 'Custom Name', age: 27})
console.log(p)