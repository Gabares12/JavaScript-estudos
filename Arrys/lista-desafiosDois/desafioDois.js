const jogosRockstar = ['Gta san', 'Gta 4', 'Gta 5']
const jogosUbisoft = ['Ac1','Ac2','Ac3']

const unirGames = jogosRockstar.concat(jogosUbisoft)
console.log(unirGames);


const numeros = [1,2,3,4,5,6,7,8,9,10]

const tresASete = [numeros.slice(2,7)]
console.log(tresASete);


//               0         1         2            3        4
const frutas = ['Maçã', 'Banana', 'Laranja',  'Limão', 'Abacaxi']

 frutas.splice(1,2,'kiwi','pessego')

console.log(frutas);



const menuPrincipal = ['ARROZ','FEIJÃO','BATATA','CARNE']
const menuDeSobremesas = ['PUDIM','GELATINA','FRUTAS']

const menuCompleto = menuDeSobremesas.concat(menuPrincipal)

console.log(menuCompleto);

// esse eu não soube fazer
let matriz = [];
let valorInicial = 1;

for (let i = 0; i < 3; i++) {
  let linha = [];
  for (let j = 0; j < 3; j++) {
    linha.push(valorInicial++);
  }
  matriz.push(linha);
}

console.log('Matriz de duas dimensões:');
console.log(matriz);
matriz.forEach(row => console.log(row));
