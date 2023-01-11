import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

import hbs from 'express-handlebars'

const app = express()
// motor de vistas
app.set('views', './src/views')

app.engine(
  '.hbs',
  hbs.engine({
    defaultLayout: 'main',
    layoutsDir: './src/views/layouts',
    extname: '.hbs',
  })
)
app.set('view engine', '.hbs')

//servidor
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// persistencia
const usuarios = []

/*----------- Session -----------*/
app.use(cookieParser())
app.use(
  session({
    secret: 'SECRETO',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 20000, //20 seg
    },
  })
)
//rutas
app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/registrar', (req, res) => {
  res.render('register')
})

app.post('/registrar', (req, res) => {
  const { nombre, password, direccion } = req.body
  if (usuarios.find((usuario) => usuario.nombre == nombre)) {
    res.render('register-error')
  } else {
    usuarios.push({ nombre, password, direccion })
    res.render('login')
  }
  console.log(usuarios)
})

app.post('/login', (req, res) => {
  const { nombre, password } = req.body
  const valido = usuarios.find(
    (usuario) => usuario.nombre === nombre && usuario.password === password
  )

  if (valido) {
    req.session.nombre = nombre
    req.session.password = password
    req.session.direccion = usuarios.find(
      (usuario) => usuario.nombre === nombre && usuario.password === password
    ).direccion
    // req.session.contador = 1
    console.log(req.session)

    res.redirect('/datos')
  } else {
    res.render('login-error')
  }
})

app.get('/datos', isLoged, (req, res) => {
  const { nombre, direccion } = req.session
  res.send({ nombre, direccion })
})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/login')
})
//funcion
function isLoged(req, res, next) {
  if (req.session.nombre) {
    next()
  } else {
    res.redirect('/login')
  }
}
//servidor
app.listen(8080, () => {
  console.log('servidor levantado')
})
