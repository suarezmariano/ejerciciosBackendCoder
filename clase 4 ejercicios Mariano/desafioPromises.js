const fs = require('fs');

fs.promises
  .readFile('./info.txt', 'utf-8')
  .then((contenido) => {
    let contenidoJSON = JSON.parse(contenido);
    contenidoJSON.contenidoObj.author = 'Coderhouse';
    return contenidoJSON;
  })
  .then((contenidoJSON) => {
    fs.promises.writeFile(
      './infoCoder.txt',
      JSON.stringify(contenidoJSON, null, 2)
    );
  });
