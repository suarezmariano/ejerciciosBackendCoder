const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const hbs = require('express-handlebars')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const usuarios = [
  { nombre: 'Hector', password: 'asd' },
  { nombre: 'mario', password: 'asd1' },
  { nombre: 'Marta', password: 'asd2' },
]

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
/*----------- Session -----------*/

app.use(cookieParser())
app.use(
  session({
    secret: '1234567890!@#$%^&*()',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 20000, //20 seg
    },
  })
)

app.use(passport.initialize())
app.use(passport.session())

//passport

passport.use(
  'register',

  new LocalStrategy(
    { passReqToCallback: true },
    (req, username, password, done) => {
      console.log('entro signup')
      const existe = usuarios.find((usuario) => {
        return usuario.nombre == username
      })

      if (existe) {
        return done(null, false)
      } else {
        usuarios.push({ nombre: username, password: password })
        console.log(usuarios)
        done(null, { nombre: username })
      }
    }
  )
)
passport.use(
  'login',
  new LocalStrategy((username, password, done) => {
    console.log('entro')
    const existe = usuarios.find((usuario) => {
      return usuario.nombre == username && usuario.password == password
    })
    console.log(existe)
    if (!existe) {
      return done(null, false)
    } else {
      //console.log(existe)
      return done(null, existe)
    }
    //if (username == 'hector') return done(null, { id: 1, name: 'Hector' })
  })
)

passport.serializeUser((usuario, done) => {
  console.log(usuario.nombre + 'serializado')
  done(null, usuario.nombre)
})

passport.deserializeUser((nombre, done) => {
  const usuarioDz = usuarios.find((usuario) => usuario.nombre == nombre)
  console.log(JSON.stringify(usuarioDz) + 'desserializado')
  done(null, usuarioDz)
})

//

/*----------- Motor de plantillas -----------*/
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

//rutas

app.get('/login', (req, res) => {
  req.logOut()
  res.render('login')
})

app.get('/registrar', (req, res) => {
  res.render('register')
})

app.post(
  '/register',
  passport.authenticate('register', {
    successRedirect: '/login',
    failureRedirect: '/login-error',
  })
)

app.post(
  '/login',
  passport.authenticate('login', {
    successRedirect: '/datos',
    failureRedirect: '/login-error',
  })
)

app.get('/datos', (req, res) => {
  const { nombre, direccion } = req.user
  res.send({ nombre, direccion })
})

app.get('/logout', (req, res) => {
  console.log(req.sesssion)
  req.logOut()

  res.redirect('/login')
})
//

// Server

app.listen(8080, () => {
  console.log('servidor levantado')
})
