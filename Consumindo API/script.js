async function buscarEndereco() {
    try {
        let consultaCEP = await fetch('http://viacep.com.br/ws/915100900/json');
        let consultaCEPconvertida = await consultaCEP.json();
        if (consultaCEPconvertida.erro) {
            throw Error('CEP não existente!')
        }
        console.log(consultaCEPconvertida);

    } catch (erro) {
        console.log(erro);

    }
}

buscarEndereco()



















/*                                 PRIMEIRA VERSÃO


let consultaCEP = fetch('http://viacep.com.br/ws/91510090/json')
    // essa conversão ocorre para ter uma melhor visualização
    .then(resposta => resposta.json())

    .then(r => {
        if (r.erro) {
            throw Error('esse cep não existe!')
        } else
            console.log(r)
    })

    .catch(erro => console.log(erro))

    .finally(mensagem => console.log('Processamento concluido!'))

console.log(consultaCEP);
*/