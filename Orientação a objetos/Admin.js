import User from "./user";

class Admin extends User {
    constructor (nome, email, nascimento, role = "admin", 
    ativo = "true"){
    
    // estes são os parametros que serão reutilizados de User
    // super - Super classe = User, a super classe é a User
    super(nome, email, nascimento, role, ativo)
    
    }
}
// se reparar aqui foi passdo : NOME , EMAIL E NASCIMENTO
const novoAdmin = new Admin("rodrigo", "r@R.com", "2024-01-01")


console.log(novoAdmin);

// este método exibir info só exibe nome e email.
console.log(novoAdmin.exibirInfos());

