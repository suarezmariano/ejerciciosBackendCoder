/*import util from 'util'

const objeto = {
  departamento: {
    ciudad: {
      barrio: {
        casa: {
          habitacion: { articulo: 'cama' },
        },
      },
    },
  },
}

console.log(util.inspect(objeto, true, 8, true))
*/
function reverseFrase(frase) {
  frase = frase.toUpperCase()
  let fraseArray = frase.split(' ')
  let cadenaLista = ''
  for (const i in fraseArray) {
    cadenaLista += fraseArray[i][0].toLowerCase() + fraseArray[i].slice(1) + ' '
  }

  return cadenaLista
}

console.log(reverseFrase('esta es una frase de prueba'))
