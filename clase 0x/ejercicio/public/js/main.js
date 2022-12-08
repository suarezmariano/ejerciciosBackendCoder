const socket = io.connect()

socket.on('mi mensaje', (data) => {
  alert(data)
  socket.emit('notificacion', 'mensaje recibido con exito')
})

function render(data) {
  const html = data
    .map((elem, index) => {
      return `<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em> </div>`
    })
    .join(' ')
  document.getElementById('mensajes').innerHTML = html
}

function renderEventos(data) {
  const html = data
    .map((elem, index) => {
      return `<div>
            <strong>${elem.equipo}</strong>:
            <em>${elem.descripcion}</em> </div>`
    })
    .join(' ')
  document.getElementById('tabla-eventos').innerHTML = html
}

socket.on('messages', function (data) {
  render(data)
})
socket.on('socketEventos', function (data) {
  renderEventos(data)
})

function addMessage(e) {
  const mensaje = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value,
  }
  socket.emit('new-message', mensaje)
  return false
}
