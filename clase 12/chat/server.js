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

const messages = [
  { author: 'Juan', text: '¡Hola! ¿Que tal?' },
  { author: 'Pedro', text: '¡Muy bien! ¿Y vos?' },
  { author: 'Ana', text: '¡Genial!' },
];

io.on('connection', (socket) => {
  console.log('Se conecto un usuario');
  console.log(messages);
  socket.emit('messages', messages);

  socket.on('new-message', (data) => {
    messages.push(data);
    io.sockets.emit('messages', messages);
  });
});
