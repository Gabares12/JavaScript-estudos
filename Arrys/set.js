const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

console.log(nomes);

console.log('=============Removendo-Duplicatas===============');
// usa-se o "Set" para remover elementos duplicados de um array

const nomesAtualizados = new Set(nomes)


// porem "Set" não é um array, não dá para adicionar nada nele
// para isso prcisamos criar uma const e usar o operador de
// espalhamento - ... para poder clonar e ter um array
const listaNomesAtualizados = [...nomesAtualizados]

console.log(nomesAtualizados);

console.log('=============(Se quiser) dimuindo as linhas ===============');

// uma forma de fazer em menos linhas de codigo 
const listaNomesAtualizados1 = [...new Set(nomes)]
