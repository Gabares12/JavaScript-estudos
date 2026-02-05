const user = {
    nome: "Juliana",
    email: "j@j.com",
    nascimento: "2024-01-01",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};


const Admin = {
    nome: "Mariana",
    email: "m@m.com",
    nascimento: "2024-01-01",
    role: "admin",
    ativo: true,
   CriarCurso: function () {
   console.log('Curso criado');
    }
}


// ele acessa as informações de outros objetos...
//admin acessa e exibe o dele e o de user
Object.setPrototypeOf(Admin, user)
Admin.CriarCurso()
Admin.exibirInfos()