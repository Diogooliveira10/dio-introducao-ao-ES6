function getName() {
    return 'Diogo Oliveira Vieira'
}

function logFn(fn) {
    console.log(fn())
}

const logFnResult = logFn

logFnResult(getName)