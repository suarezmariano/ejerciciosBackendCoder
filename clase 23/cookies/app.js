const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()
const server = app.listen(8080, () => console.log('Server Up!'))

app.use(cookieParser())
app.use(express.json())

app.post('/cookies', (req, res) => {
    let cookie = req.body // { name: 'oreo', value: 'Coder was here', duration: 5 }
    if (!cookie.name || !cookie.value || !cookie.duration) return res.send({ err: 'Faltan valores' })
    res.cookie(cookie.name, cookie.value, { maxAge: cookie.duration*1000}).send({message: 'Galleta creada'})
})

app.get('/cookies', (req, res) => {
    res.send(req.cookies)
})

app.delete('/cookies/:name', (req, res) => {
    res.clearCookie(req.params.name).send({message: 'Cookie deleted!'})
})