//laço de repetição FOR
for (let contador = 1; contador <= 5; contador++) {
    console.log('numero atual:', contador);
}
console.log("--------------------------------")

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 == 0) {
        console.log(`numero par encontrado`, numero)
    }
}
console.log("--------------------------------")

for (let numero = 0; numero <= 15; numero++) {
    if (numero % 2 > 0) {
        console.log(`numero impar encontrado`, numero)
    }
}
console.log("--------------------------------")
const palavra = 'camelo'
//palavra.length indica quantos caracteres uma string possui
//palavra[1] - pega a letra na posição indica
for (let contador = 0; contador <= palavra.length; contador++) {
    // deste jeito vai percorrer letra por letra
    console.log(palavra[contador]);

}
