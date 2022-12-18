const socket = io.connect();

const enviar = () => {
  let mensaje = document.getElementById('inputText').value;
  socket.emit('mensaje', mensaje);
  socket.on('mensaje', (data) => {
    document.getElementById('parrafo').innerHTML = data;
  });
};
