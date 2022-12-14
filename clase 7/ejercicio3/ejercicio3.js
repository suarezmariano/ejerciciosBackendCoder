const express = require('express');
const app = express();

const port = 8080;
const frase = {};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

frase.fraseCompleta = ['Frase inicial', 'carro', 'auto'];

app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

app.get('/api/frase', (req, res) => {
  res.send(frase);
});

app.get('/api/frase/:pos', (req, res) => {
  res.send(frase.fraseCompleta[req.params.pos]);
});

app.post('/api/palabras', (req, res) => {
  let indice = frase.fraseCompleta.push(req.body.palabra);
  res.json(indice - 1);
});

app.delete('/api/palabras/', (req, res) => {
  frase.fraseCompleta.splice(req.body.palabras, 1, '');
  res.send(frase);
});
