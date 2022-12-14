const http = require('http');

const port = 8080;

const server = http.createServer((req, res) => {
  res.end(verificarHora());
});

const connectedServer = server.listen(port, () => {
  console.log('Servidor corriendo en port ' + connectedServer.address().port);
});

function verificarHora() {
  const hora = new Date().getHours();
  let saludo = '';
  if (6 <= hora && hora < 13) {
    saludo = 'Buenos dias';
  } else if (13 <= hora && hora < 19) {
    saludo = 'Buenas tardes';
  } else {
    saludo = 'Buenas noches';
  }
  return saludo;
}
