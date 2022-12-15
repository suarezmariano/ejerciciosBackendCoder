const express = require('express');
const app = express();
const multer = require('multer');

const router = express.Router();

const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const server = app.listen(port, () => {
  console.log('servidor corriendo en el puerto: ' + port);
});

server.on('error', (error) => console.log(`hubo un error ${error}`));

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

let storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './public/uploads');
  },
  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post('/subir', upload.single('miArchivo'), (req, res, next) => {
  const file = req.file;
  if (!file) {
    const error = new Error('please upload file');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

app.use('/', router);
