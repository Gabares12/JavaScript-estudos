const anoAtual = new Date().getFullYear()

const livro = {
    titulo: "A Guerra dos Tronos",
    autor: "George R. R. Martin",
    anoPublicacao: 1996,
    genero: "Fantasia épica"
}
livro.genero = "aventura"

livro.avaliacao = null

livro.avaliacao = 7.5

delete livro.avaliacao

console.log(livro.titulo);
console.log(livro.genero);

livro.idadePublicacao = anoAtual - livro.anoPublicacao;


const mostrarDetalhes =  "Detalhes do Livro:\n" +

'titulo: ' + livro.titulo + "\n" +

'autor: ' + livro.autor + "\n" +

'publicação: ' + livro.anoPublicacao + "\n" +

'genero: ' + livro.genero + "\n" +

'idade: ' + livro.idadePublicacao + ' anos'  + "\n" +

'avaliação: ' + livro.avaliacao 

console.log(mostrarDetalhes);

console.log('----------------------');

console.log(livro['titulo']);
console.log(livro['autor']);

console.log('----------------------');





















