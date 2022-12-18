const express = require('express');
const app = express();

const { Server: IOServer } = require('socket.io');
const { Server: HttpServer } = require('http');

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

httpServer.listen(3000, () => console.log('SERVER ON'));

const mensajes = [];

io.on('connection', (socket) => {
  console.log('Nuevo cliente conectado');

  //Envio los mensajes al cliente que se conectó
  socket.emit('historial', mensajes);

  //Escucho los mensajes enviados por el cliente y se los envío a todos
  socket.on('mensaje', (data) => {
    mensajes.push(data);
    io.sockets.emit('mensaje', mensajes);
  });
});
