const express = require('express');
const pug = require('pug');
const app = express();
const PORT = 8080;

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const server = app.listen(PORT, () => {
  console.log('servidor levantado en el puerto ' + server.address().port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
  res.render('hello.pug', {
    titulo: req.query.titulo,
    value: req.query.valor,
    maximo: req.query.maximo,
    minimo: req.query.minimo,
  });
});

//http://localhost:8080/datos?minimo=0&valor=75&maximo=100&titulo=Medidor
