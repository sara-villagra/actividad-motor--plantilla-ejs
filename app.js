const express = require('express')
const path = require('path')
const { title } = require('process')

const app = express()
const port = 3000

app
 .use(express.static(path.join(__dirname, 'public')))
 .set('views', path.join(__dirname, 'views'))
 .set('view engine', 'ejs')

app.get('/', (req, res) => {
 res.render('index')
})
app.get('/contacto', (req, res) => {
 res.render('contacto')
})

app.get('/galeria', (req, res) => {
 res.render('galeria')
})

app.get('/servicios', (req, res) => {
 res.render('servicios')
})
app.listen(port, () => {
 console.log(`Example app listening on port ${port}. http://localhost:${port}`)
})
