function operacion(valor1, valor2, funcion) {
  console.log(`El resultado de la operacion es ${funcion(valor1, valor2)}`)
}

const suma = (a, b) => a + b
const resta = (a, b) => a - b
const mult = (a, b) => a * b
const div = (a, b) => a / b
const modulo = (a, b) => a % b
operacion(10, 3, modulo)
