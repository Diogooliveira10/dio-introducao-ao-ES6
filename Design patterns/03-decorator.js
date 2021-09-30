/*
    Uma função decorator recebe uma outra função como parâmetro e
    estende o seu comportamento sem modificá-la explicitamente.
*/

let loggedIn = false

function callIfAuthenticated(fn) {
    return !!loggedIn && fn()
}

function sum( a, b ) {
    return a + b
}

console.log(callIfAuthenticated(() => (2, 3)))
loggedIn = true
console.log(callIfAuthenticated(() => (2, 3)))
loggedIn = false
console.log(callIfAuthenticated(() => (2, 3)))

/*
    // Exemplo 2
    function readonly(target, name, descriptor) {
        descriptor.writable = false
        return descriptor
    }

    class Job {
        @readonly
        title() { return 'CEO' }
    }

    // Exemplo 3 no Angular
    @Component({
        selector: 'app-reactive-favorite-color',
        template: `
            Favorite Color: <input type="text" [formControl]="favoriteColorControl">
        `
    })
    export class FavoriteColorComponent {
        favoriteColorControl = new FormControl('')
    }
*/