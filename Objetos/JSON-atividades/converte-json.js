const estudante = require('./estudante.json')
//stringify é biblioteca 
const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante.nome);

console.log(stringEstudante.nome);

//parse
const objEstudante = JSON.parse(stringEstudante)
console.log(objEstudante);
console.log(typeof objEstudante);

