const students = [
    {
        name: 'Caroline',
        grade: 10
    },
    {
        name: 'Bia',
        grade: 4
    },
    {
        name: 'Pedro',
        grade: 6
    }
]

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >=7)
}

console.log('Alunos Aprovados:')
console.log(getApprovedStudents(students))
/*
    [ { name: 'Caroline', grade: 10 } ]
*/

console.log('\nLista de alunos:')
console.log(students)
/*
    [ { name: 'Caroline', grade: 10 },
    { name: 'Bia', grade: 4 },
    { name: 'Pedro' grade: 6 } ]
*/
