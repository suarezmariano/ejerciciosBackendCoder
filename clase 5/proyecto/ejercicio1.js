let numeros = []
let objetoNumeros = []

const generarNumeros = () => {
  for (i = 0; i < 100; i++) {
    numeros.push(parseInt(Math.random() * (21 - 1) + 1))
  }
  console.log(numeros)
  verificar()
}

const verificar = () => {
  let contador = 0
  let indice
  for (let j = 1; j <= 20; ) {
    indice = numeros.indexOf(j)
    if (indice != -1) {
      contador++
      numeros.splice(indice, 1)
    } else {
      registrar(j, contador)
      j++
      contador = 0
    }
  }
  console.log(String(objetoNumeros))
}

const registrar = (clave, contador) => {
  let nuevoReg = `{${clave} : ${contador}}`
  objetoNumeros.push(nuevoReg)
}

generarNumeros()