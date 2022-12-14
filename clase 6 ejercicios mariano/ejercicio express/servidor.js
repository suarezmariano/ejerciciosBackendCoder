const express = require('express');
const app = express();

const port = 8080;
let contador = 0;
let date = '';

const server = app.listen(port, () => {
  console.log('Server corriendo en el puerto: ' + port);
});

app.get('/', (req, res) => {
  contador++;
  res.send(
    `<h1 style="color:blue">Bienvenido a mi primer servidor Express</h1>`
  );
});

app.get('/visitas', (req, res) => {
  res.send(`<h1 style="color:blue">La cantidad de visitas es ${contador}</h1>`);
});

app.get('/fyh', (req, res) => {
  date = new Date();
  res.send(`<h1 style="color:blue">${date}</h1>`);
});
