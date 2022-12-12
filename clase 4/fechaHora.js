const fs = require("fs")

let hora = new Date()
fs.writeFileSync("./fyh.txt", hora.toString())


try {
  let datos = fs.readFileSync("./fyh.txt", "utf-8")  
  console.log(datos)
} catch (e) {
  throw new Error(e)
}
