/*
    A declaração debug invoca qualquer funcionalidade de depuração disponivel, como definir um breakpoint.
    Se nenhuma funcionalidade de depuração estiver disponivel, essa declaração não tem nenhum efeito.
*/

function codigoPotencialmenteBugado() {
    debugger; // declaração debugger foi inserida para invocar um depurador (se um existir) quando a função for chamada.
    // faça atividades de depuração como examinar, pular um passo etc.
}

// Como funciona objeto Console
console.log('Black Text') // Retorna o texto.
console.warn('Yellow text with alert') // Retorna um sinal de alerta com fundo amarelo e com ícone warn, dando um alerta maior para o usuário.
console.error('Red error text') // Serve pra fazer log de erros vin do com ícone err.

console.trace() // Traz a informação  de onde o código foi execudado.
/* VM37:1 console.trace
   (anonymous) @ VM37:1
*/

// Forma de agrupar mensagens ou console é utilizando console.group 
console.group('My group') // Inicia o agrupamento das mensagens de console
console.log('Info inside group')
console.log('More info')
console.groupEnd('My group') // Finaliza
/**
 * >My group
     Info inside group
     More info

 * É bom para ocultar informações, caso não queira.
 */

console.time('Log time') // Acompanhar o tempo de execução de uma determinada função.
setTimeout(() => {
    console.timeEnd('Log time')
}, 2000)
// Log time: 2001.796142578125 ms
// Consegue analizar e identificar o tempo de execução entre trexo do código.

console.table(['Diogo Oliveira', 'Digital Innovation One'])
// vai formatar em array e objeto em formato tabela para melhorar a visualização.

console.assert(1 === 1, 'Ops')
// Nada foi logado, mas se acondição não for verdadeira...
console.assert(1 === 2, 'Ops')
// >Assertion failed: Ops
// Boa pra garantir que algumas partes você não fique poluindo o console, e só exibir as mensagens no caso específica.

console.log('%c styled log', 'color: blue;') // Console.log permite que você estilize a mensagem.
// styled log (retornou styled log em cor azul)
console.log('%c styled log', 'color: blue; font-size: 40px')

/**
 * Resumo
    Console.log é uma ferramenta poderosa no JavaScript para conseguimos trazer mais informações
    sobre o nosso código e entender o funcionamento dele.
 */