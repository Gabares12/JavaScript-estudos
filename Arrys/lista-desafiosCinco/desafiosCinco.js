





console.log('==================================================');

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];

const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];


const juntarcores = coresLista1.concat(coresLista2);

console.log(juntarcores);

const separarCores = new Set(juntarcores)

const atualizarCores = [... separarCores,'rosa']

console.log(separarCores);


console.log('==================================================');


function retornarSomaDeles() {
    
    const arrayNumeros = [10, 10, 10, 10, 1];
    
    // Declara a variável 'soma' e inicializa com 0
    // Ela será usada para acumular o total
    let soma = 0;

    for (let i = 0; i < arrayNumeros.length; i++) {
        
        // Adiciona o valor do elemento atual (arrayNumeros[i]) à variável 'soma'
        soma += arrayNumeros[i];

    };
    console.log(soma);
    
};

retornarSomaDeles();