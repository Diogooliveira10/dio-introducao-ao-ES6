/*
    A API Fetch fornece uma interface JavaScript para acessar e manipular partes do pipeline HTTP, tais como
    os pedidos e respostas. Ela também fornece o método global fetch() que fornece uma maneira
    fácil e lógica para buscar recursos de forma assíncrona através da rede.

    Este tipo de funcionalidade era obtida anteriormente utilizando XMLHttpRequest.
    Fetch fornece uma alternativa melhor que pode ser facilmente utilizada por outras tecnologias como Service Workers.
    Fetch também provê um lugar lógico único para definir outros conceitos relacionados ao protocolo
    HTTP como CORS e extensões ao HTTP.
*/

fetch('http://localhost:8080/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            throw new Error('Request error')
        }
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log('Error: ', err)
    })

    // é uma maneira boa de lidar com as Request pela sua simplicidade e pelo seu retorno ser uma Promise