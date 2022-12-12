const fs = require("fs")

fs.readFile("./fyh.txt", "utf-8", (error, datos) => {
  if (error) {
    console.log("hubo un error: no se encontro el archivo")
  } else {
    console.log(datos)
  }
})

fs.appendFile("./fyh.txt", "esto es un agregado de texto", (error) => {
  if (error) {
    console.log()
  } else {
    console.log("se agrego la  informacion")
  }
})
