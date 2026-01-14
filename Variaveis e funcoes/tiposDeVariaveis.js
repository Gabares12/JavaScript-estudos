const estudante = "Caroline";
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante!'"; // aspas dentro de aspas funciona!
const citacao = `a moça da alura diz: "nosso lema é 'estudar bastante!'"`
console.log(cumprimento);
console.log(citacao);

console.log(` a estudante chama ${estudante}`);// template strings

const senha = 'senhaSegura123' + estudante.toUpperCase() // ele vai deixar a varivel estudante com caixa alta

console.log(senha);



