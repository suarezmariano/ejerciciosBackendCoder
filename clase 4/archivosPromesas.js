const fs = require("fs")

fs.promises.readFile("./ejercicioNode/info.txt", "utf-8").then((contenido) => {
  let contenidoJson = JSON.parse(contenido)
  contenidoJson.author = "CoderHouse"
  //console.log(JSON.stringify(contenidoJson ,null, 2))
  return contenidoJson
}).then((contenidoJson)=>{
    fs.promises.writeFile('./ejercicioNode/package.json.coder',JSON.stringify(contenidoJson))
})
