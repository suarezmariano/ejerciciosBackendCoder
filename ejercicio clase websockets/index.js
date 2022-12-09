const express = require('express')
const { Server: IOServer } = require('socket.io')
const { Server: HttpServer } = require('http')

const routerAdmin = require('./routes/adminRouter')

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

httpServer.listen(8080, () => console.log('servidor Levantado'))
app.use(express.static('./public'))
app.set('view engine', 'ejs')

let hPartidos = [
  { zona: 'concacaf', fecha: '30/03/2022', resultado: 'USA 5 vs Panama 1' },
  { zona: 'Conmebol', fecha: '30/03/2022', resultado: 'Brasil 4 vs chile 0' },
  { zona: 'UEFA', fecha: '30/03/2022', resultado: 'Macedonia 1 vs Italia 0' },
]

const messages = [
  { author: 'Juan', text: '¡Hola! ¿Que tal?' },
  { author: 'Pedro', text: '¡Muy bien! ¿Y vos?' },
  { author: 'Ana', text: '¡Genial!' },
]
const eventos = [
  { equipo: 'Honduras', descripcion: 'saque de banda' },
  { equipo: 'Argentina', descripcion: 'tiro de esquina' },
  { equipo: 'Honduras', descripcion: 'tiro a meta' },
]

app.get('/enVivo', (req, res) => {
  res.render('envivo')
})

app.get('/historial', (req, res) => {
  res.render('historial', { hPartidos })
})

app.use('/admin', routerAdmin)

io.on('connection', (socket) => {
  console.log('se conecto un usuario')
  socket.emit('messages', messages)
  socket.emit('socketEventos', eventos)
  socket.on('notificacion', (data) => {
    console.log(data)
  })

  socket.on('new-message', (data) => {
    messages.push(data)
    io.sockets.emit('messages', messages)
  })

  socket.on('nuevo-evento', (data) => {
    eventos.push(data)
    io.sockets.emit('socketEventos', eventos)
  })
})
