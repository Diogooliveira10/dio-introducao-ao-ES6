/*
    O Else serve basicamente para suprir a parte negativa da condição do IF,
    ou seja, quando a condição no IF for falsa, o ELSE assume e executa a ação.

    if (condition) {
        // code
    } else if (condition) {
        // code
    }
*/

const array = [2,3,4,5,6,8,10,15]

console.log('\nelse if')
array.forEach(item => {
    if (item % 2 === 0){
    console.log(`O número ${item} é divisível por 2.`)
} else if(item % 3 === 0){
    console.log(`O número ${item} é divisível por 3.`)
} else if (item % 5 === 0){
    console.log(`O número ${item0} é divisível por 5.`)
}
})
/*
    else if
    O número 2 é divisível por 2.
    O número 3 é divisível por 3.
    O número 4 é divisível por 2.
    O número 5 é divisível por 5.
    O número 6 é divisível por 2.
    O número 8 é divisível por 2.
    O número 10 é divisível por 2.
    O número 15 é divisível por 3.
*/

console.log('\nif')
array.forEach(item => {
if(item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2.`)
}
if (item % 3 === 0){
    console.log(`O número ${item} é divisível por 3.`)
}
if (item % 5 === 0){
    console.log(`O número ${item} é divisível por 5.`)
}
})

/*
    if
    O número 2 é divisível por 2.
    O número 3 é divisível por 3.
    O número 4 é divisível por 2.
    O número 5 é divisível por 5.
    O número 6 é divisível por 2.
    O número 6 é divisível por 3.
    O número 8 é divisível por 2.
    O número 10 é divisível por 2.
    O número 10 é divisível por 5.
    O número 15 é divisível por 3.
    O número 15 é divisível por 5.
*/