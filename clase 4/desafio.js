const fs = require("fs")
let info = {}

let datos = fs.readFile("./ejercicioNode/package.json", (error, datos) => {
  if (error) {
    console.log(error)
  } else {
    let datosParsed = JSON.parse(datos)
    console.log(JSON.stringify(datosParsed, null, 2))
    fs.writeFile(
      "./ejercicioNode/info.txt",
      JSON.stringify(datosParsed, null, 2),
      (error, datos) => {
        if (error) {
          console.log(error)
        } else {
          console.log('archivo creado')
        }
      }
    )
  }
})
