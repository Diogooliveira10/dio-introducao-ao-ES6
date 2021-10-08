/*
    Uma função callback é uma função passada a outra função como argumento, que é então invocado dentro
    da função externa para completar algum tipo de rotina ou ação.
*/

/*  
    Nativamente no Js era comum utilizar função de callback para executar algo após uma determinada
    tarefa assíncrona ter sido executada
*/

// callbacks exemplos
function doSomething(callback) {
    setTimeout(function() {
        // did something
        callback('First data')
    }, 1000)
}

function doOtherThing(callback) {
    setTimeout(function() {
        // did other thing
        callback('Second data')
    }, 1000)
}

// executar as duas de maneira sequencial
function doAll() {
    try { // Tratamento de dados
    doSomething(function(data) {
        var processedData = data.split('')
        try {
        doOtherThing(function(data2) {
            var processedData2 = data2.split('')

            try {
            setTimeout(function() {
                console.log(processedData, processedData2)
            }, 1000)
            } catch (err) {
                // handle error
            }
        })
        } catch (err) {
            // handle error
        }
    })
    } catch(err) {
        // handle error
    }
}

doAll()



    // ES6 Promises
/*
    Promise é um objeto usado para processamento assíncrono.
    Um Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
*/
// reescrevendo o código de cima utilizando Promises

const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did something
            resolve('First data')
        }, 1000)
    })

const doOtherThingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(function() {
            // did other thing
            resolve('Second data')
        }, 1000)
    })

/*
    // Promise em paralelo
    Promise.all([doSomethingPromise(), doOtherThingPromise()]).then(data => {
        console.log(data)
    })
    // ["First data", "Second data"]

    ***************************************************************************

    * outra forma de lidar com multiplas Promises

    // A que resolver primeiro será executada
    * utilizando race
    const doSomethingPromise = () => 
        new Promise((resolve, reject) => {
            setTimeout(function() {
                // did something
                resolve('First data')
            }, 1500)
        })

    const doOtherThingPromise = () => 
        new Promise((resolve, reject) => {
            setTimeout(function() {
                // did other thing
                resolve('Second data')
            }, 1000)
        })
    
    Promise.race([doSomethingPromise(), doOtherThingPromise()]).then(data => {
        console.log(data)
    })
    // Second data    
*/

doSomethingPromise()
    .then(data => {
        console.log(data.split(''))
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('Ops', error))
// ['F', 'i', 'r', 's', 't', ' ', 'd', 'a', 't', 'a']
// ['S', 'e', 'c', 'o', 'n', 'd', ' ', 'd', 'a', 't', 'a']

/*
    Uma Promise pode ter três status:
    * Pending
    * Fulfilled
    * Rejected
*/

/* 
    Com Promises conseguimos o mesmo comportamento com tratamento de erro com menos linhas,
    e uma maneira mais fácil da manutenção e lidar com programação assíncrona
*/