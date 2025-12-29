alert('Bem vindo ao sistema')


alert('Vamos começar o quiz')

alert('Responda com a letra correta: a, b ou c\n')

let resposta1 = prompt('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n ')
if (resposta1 == 'b') {
    alert('parabens resposta correta')

} else {
    while (resposta1 !== 'b') {
        alert('resposta incorreta. tente novamente.')
        resposta1 = prompt('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) function\n(c) create\n ')
        if (resposta1 == 'b') {
            alert('parabens resposta correta')

        }
    }

}
let resposta2 = prompt('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n')
if (resposta2 == 'c') {
    alert('Parabens resposta correta')
} else {
    while (resposta2 !== 'c') {
        alert('resposta incorreta. tente novamente')
        resposta2 = prompt('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n')
        if (resposta2 == 'c') {
            alert('parabens resposta correta')
        }
    }

}
let resposta3 = prompt('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n')
if (resposta3 == 'b') {
    alert('Parabens resposta correta')
} else {
    while (resposta3 !== 'b') {
        alert('resposta incorreta. tente novamente')
        resposta3 = prompt('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n')
        if (resposta3 == 'b') {
            alert('parabens resposta correta')
        }
    }
}

