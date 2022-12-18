const express = require('express');
const app = express();
const PORT = 8080;

const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json());
const server = app.listen(PORT, () => {
  console.log('servidor levantado en el puerto ' + server.address().port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

app.set('view engine', 'ejs');

app.get('/datos', (req, res) => {
  res.render('index', {
    titulo: req.query.titulo,
    valor: req.query.valor,
    maximo: req.query.maximo,
    minimo: req.query.minimo,
  });
});
