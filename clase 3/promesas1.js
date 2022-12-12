
//PROMESAS
function dividir(dividendo, divisor) {
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("divisor invalido")
    } else {
      resolve(dividendo / divisor)
    }
  })
}

dividir(10, 0)
  .then((resultado) => {
    console.log(`resultado: ${resultado} `)
  })
  .catch((error) => {
    console.log(error)
  })

//PROMESA PRUEBA DE ESCRITORIO
Promise.resolve(10)
  .then((x) => x + 1)
  .then((x) => x * 2)
  .then((x) => {
    if (x == 22) throw "Error"
    else return 80
  })
  .then((x) => 30)
  .then((x) => x / 2)
  .then(console.log)
  .catch(console.log)
