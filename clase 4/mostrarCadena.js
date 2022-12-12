let letras = "Hola!"

function mostrarLetras(cadena,time, funcionFin) {
  let indice = 0
 const imprimir = setInterval(() => {
    if (cadena[indice] === undefined) {
      funcionFin()
      clearInterval(imprimir)
    } else {
      console.log(cadena[indice])
      indice++
    }
  }, time)
}

const fin = () => {
  console.log("termine de imprimir")
}

mostrarLetras(letras, 0, fin)
mostrarLetras(letras,250, fin)
mostrarLetras(letras, 500, fin)

