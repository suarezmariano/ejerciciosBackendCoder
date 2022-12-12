const fs = require('fs');
//fs.writeFileSync("./miArchivo.txt", "Hola Mundo")

try {
  let datos = fs.readFileSync('./miArchivo.txt', 'utf-8');
  console.log(datos); // tambien podria hacerse con console.log(datos.toString())
} catch (e) {
  console.log('Archivo o ruta no existe' + e);
}
