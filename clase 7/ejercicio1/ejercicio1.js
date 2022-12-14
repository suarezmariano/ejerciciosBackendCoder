const express = require('express');
const app = express();

const port = 8080;
const frase = 'Hola mundo';

app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

app.get('/api/frase', (req, res) => {
  res.send({ frase });
});

app.get('/api/letras/:num', (req, res) => {
  const letra = req.params.num - 1;
  if (isNaN(req.params.num)) {
    res.send({ error: 'el parametro no es un nro' });
  } else if (letra > frase.length + 1 || letra < 0) {
    res.send({
      error: 'el nro excede la cantidad de letras o es igual o menor a cero',
    });
  } else {
    res.send({ letra: frase[letra] });
  }
});

app.get('/api/palabras/:num', (req, res) => {
  const indice = req.params.num - 1;
  const array = frase.split(' ');

  if (isNaN(req.params.num)) {
    res.send({ error: 'el parametro no es un nro' });
  } else if (indice > frase.length + 1 || indice < 0) {
    res.send({
      error: 'el nro excede la cantidad de palabras o es igual o menor a cero',
    });
  } else {
    res.send({ palabra: array[indice] });
  }
});
