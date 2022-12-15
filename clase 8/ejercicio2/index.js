const express = require('express');
const app = express();

const routerMascotas = express.Router();
const routerPersonas = express.Router();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

const mascotas = [];
const personas = [];

routerMascotas.get('/', (req, res) => {
  res.send(mascotas);
});

routerMascotas.post('/', (req, res) => {
  console.log(req.body);
  mascotas.push(req.body);
  res.send({ mensaje: `se agrego correctamente` });
});

routerPersonas.get('/', (req, res) => {
  res.send(personas);
});

routerPersonas.post('/', (req, res) => {
  console.log(req.body);
  personas.push(req.body);
  res.send({ mensaje: `se agrego correctamente` });
});

app.use('/mascotas', routerMascotas);
app.use('/personas', routerPersonas);
