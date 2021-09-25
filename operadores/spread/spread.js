/*
    Spread significa espalhar, ou seja, este operador é usado para 'espalhar'
    os elementos de um array quando interpretado em tempo de execução.
*/

// Spread ...
var partes = ['ombro', 'joelhos']
var musica = ['cabeça', ...partes, 'e', 'pés']
// var musica = ['cabeça', 'ombro', 'joelhos', 'e', 'pés']

function fn(x, y, z) { }
var args = [0, 1, 2]
fn(...args)