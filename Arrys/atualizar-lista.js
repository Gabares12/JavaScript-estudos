//cortes no elenco
const elencoVerum = ['Ludwig','Johan','Verônica','Valdir','Vincent','Luciano','Ariel']


// quantos elementos serão cortados

// primeiro elemento - representa o indice
// segundo elemento - representa quantos cortes vão ter apartir do indice
// terceiro elemento - representa as adições por ex: sai 1 e entra 1
elencoVerum.splice(1, 1,'Jay')
elencoVerum.splice(2, 1,'Fire')

console.log(elencoVerum);
