/**
 * O que é Hoisting?
 * Hoist em inglês significa levantar ou suspender algo através de um aparato mecânico.
 * Em bom português, significa usar o guindaste para elevar um objeto.
 * E é isto o que acontece em JavaScript quando declaramos uma variável ou função.
 * Sua declaração é “elevada” para o topo do escopo.
 */

function fn() {
    console.log(text)

    var text = 'Exemplo'

    console.log(text)
}

fn()

// O que acontece por baixo dos "panos" no JavaScript.
/*
function fn() {
    var text
    console.log(text)

    var text = 'Exemplo'

    console.log(text)
}

fn()

# ubdefined
# Exemplo
*/

