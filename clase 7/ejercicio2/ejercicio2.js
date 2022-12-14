const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

app.get('/api/sumar/:num1/:num2', (req, res) => {
  res.send({ suma: parseInt(req.params.num1) + parseInt(req.params.num2) });
});

app.get('/api/sumar/', (req, res) => {
  res.send({ suma: parseInt(req.query.num1) + parseInt(req.query.num2) });
}); //http://localhost:8080/api/sumar/?num1=2&num2=5

app.get('/api/operacion/:num1:num2', (req, res) => {
  res.send({ suma: parseInt(req.params.num1) + parseInt(req.params.num2) });
}); //http://localhost:8080/api/operacion/2+9
