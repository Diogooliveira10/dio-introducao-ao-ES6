 /*
    Os operadores aritméticos são utilizados para a realização de cálculos simples em JavaScript.
    Representam as operações matemáticos básicas de soma, subtração, divisão e multiplicação,
    além de algumas operações especiais, como o módulo e incremento / decremento.
    O Módulo é o resto de uma divisão inteira.
  */

// Módulo (%)
// Operador binário. Retorna o inteiro restante da divisão dos dois operandos.

12 % 5 // retorna 2.

// Incremento (++) e Decremento (--)
++x
x++

const a = ++2 // 3
const b = 2++ // 2

--x
x--

// Negação (-) e Adição (+)
-3
+"3"    // retorna 3
+true   // retorna 1
+false  // retorna 0
-true   // retorna -1

// Operador de exponenciação (**)
2 ** 3   // retorna 8
10 ** -1 // retorna 0.1

// Operador de agrupamento ()
2 * (3 + 2)