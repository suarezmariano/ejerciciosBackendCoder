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

io.on('connection', (socket) => {
  console.log('Usuario conectado');
  socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor');
  socket.on('notificacion', (data) => {
    console.log(data);
  });
});
