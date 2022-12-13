const fs = require('fs');
let info = {};

let datos = fs.readFile('./package.json', (error, datos) => {
  if (error) {
    console.log('error: ' + error.message);
  } else {
    datosParsed = JSON.parse(datos);
    info.contenidoStr = JSON.stringify(datosParsed, null, 2);
    info.contenidoObj = datosParsed;
    fs.stat('./package.json', (error, datos) => {
      if (error) {
        console.log('error: ' + error.message);
      } else {
        info.size = datos.size;
        fs.writeFile('./info.txt', JSON.stringify(info, null, 2), (error) => {
          if (error) {
            console.log('error: ' + error.message);
          } else {
            console.log('Exito');
          }
        });
      }
    });
  }
});
