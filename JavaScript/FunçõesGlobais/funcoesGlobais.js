function saudacao() {
    console.log('E aí, beleza?');
}
// setTimeout(saudacao,2000)

let contador = 0

const id = setInterval(()=> {
    contador++
    console.log('Tempo decorrido (em segundos): ',contador)
if (contador == 20) {
    clearInterval(id) // serve para parar o contador
}
    
},1000)