const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

import Perimetro from './perimetro';
import Superficie from './superficie';

const port = 8080;
app.listen(port, () => {
  console.log(`conectado al puerto: ${port}`);
});

app.get('./perimetro/cuadrado', (req, res) => {
  let perimetroCalculado: number = Perimetro.cuadrado(parseInt(req.query.lado));
  res.send(`el perimetro es ${perimetroCalculado}`);
});

app.get('./superficie/cuadrado', (req, res) => {
  let superficieCalculada: number = Superficie.cuadrado(
    parseInt((req.query.base, req.query.altura)
  );
  res.send(`la superficie es ${superficieCalculada}`);
});
