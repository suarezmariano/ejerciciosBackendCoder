import express from 'express';
const app = express();

import { getTime } from './lib/utils';
import Persona from './Persona';

const p: Persona = new Persona('Coder', 'House');

app.get('/', (req, res) => {
  res.send({
    time: getTime(),
    name: p.getFullName(),
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`conectado al puerto: ${port}`);
});
