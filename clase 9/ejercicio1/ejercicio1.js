const express = require('express');
const app = express();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

app.use(express.static('public'));
