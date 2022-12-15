const express = require('express');
const app = express();
const fs = require('fs');

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

//SERVER
const port = 8080;
const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});
server.on('error', (error) => console.log(`hubo un error ${error}`));

//ENGINE
app.engine('cte', (filePath, datos, callback) => {
  fs.readFile(filePath, (err, contenido) => {
    if (err) {
      return callback(new Error(err));
    } else {
      const rendered = contenido
        .toString()
        .replace('^^titulo$$', '' + datos.title + '')
        .replace('^^mensaje$$', '' + datos.message + '')
        .replace('^^autor$$', '' + datos.author + '')
        .replace('^^version$$', '' + datos.version + '');
      return callback(null, rendered);
    }
  });
});

app.set('views', './views');
app.set('view engine', 'cte');

app.get('/cte1', (req, res) => {
  res.render('plantilla1', {
    title: 'Hey',
    message: 'Hola como estas?',
    author: 'clase coder',
    version: '1.0.0',
  });
});
