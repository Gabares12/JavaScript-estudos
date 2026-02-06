
// é uma forma de criar objetos utilizando o modelo (Classe).

// Define um modelo (a classe) para criar múltiplos objetos com as mesmas propriedades e métodos.

// 1
 export default class User {
    constructor(nome, email, nascimento, role, ativo = true) {

        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role || "estudante"
        this.ativo = ativo
    }
// 2
   exibirInfos(){
    return `${this.nome}, ${this.email}`
   }

}

const novoUser = new User('juliana', 'j@j.com', '2024-01-01' )

// este está ligado com o - 1
console.log(novoUser);
// este está ligado com o - 2
console.log(novoUser.exibirInfos());
