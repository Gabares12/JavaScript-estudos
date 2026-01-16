function saudacao(nome) {
    return `Olá ${nome} seja bem-vindo`
}
console.log(saudacao('Gabriel,'));
console.log(saudacao('Tavares,'));
console.log(saudacao('Gabares,'));



function idadePessoa(idade) {
    
    if (idade >= 18) {
      return 'maior de 18';
        
    } else {
       return 'menor de 18';
        
    }
}

console.log(idadePessoa(20))



function verificaPalindromo(string) {
    const stringInvertida = string.split('').reverse().join('');
    return string.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("Socorram-me, subi no ônibus em Marrocos!")); // true
console.log(verificaPalindromo("Frase")); // false



function numeros(val1,val2,val3) {

let maior = val1

if (val2 > maior){
    maior = val2
}

if(val3 > maior ){
    maior = val3
}
    return maior
    
    
}

console.log(numeros(10,5,15));
