const productos = [
  { id: 1, nombre: "Escuadra", precio: 323.45 },

  { id: 2, nombre: "Calculadora", precio: 234.56 },

  { id: 3, nombre: "Globo Terráqueo", precio: 45.67 },

  { id: 4, nombre: "Paleta Pintura", precio: 456.78 },

  { id: 5, nombre: "Reloj", precio: 67.89 },

  { id: 6, nombre: "Agenda", precio: 78.9 },
]

let nombres = ""
let precioTotal = 0
const preciosArray = [];

(() => {
  for (let producto in productos) {
    nombres += productos[producto].nombre + ", "
    precioTotal += productos[producto].precio
    preciosArray.push(productos[producto].precio)
  }
})();

console.log(nombres)
console.log(precioTotal)
console.log(Math.max.apply(null, preciosArray))
console.log(Math.min.apply(null, preciosArray))
//Inciso 5

const datos = { nombres: nombres, total: parseFloat(precioTotal).toFixed(2), precioMayor: Math.max.apply(null, preciosArray), precioMinimo : Math.min.apply(null, preciosArray) }


console.log(datos)