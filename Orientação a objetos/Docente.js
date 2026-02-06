
import User from "./user"

// herda de User
class Docente extends User {
    constructor(nome, email, nascimento, role = "Docente",
        ativo = "true") {

    }
    aprovarEstudante(estudante, curso) {
        return `estudante ${estudante} passou no curso de 
        ${curso}, responsavel ${this.nome} `
    }
}


const novaDocente = new Docente("ana", "a@a.com","2024-01-01")

console.log(novaDocente.aprovarEstudante('juliana','javaScript'));


