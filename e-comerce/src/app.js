const express = require('express')
const app = express()
const port = 5000

const path = require('path')

app.use(express.static(path.resolve(__dirname, '../public')))


app.get('/', function (req, res) {
      res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.listen(port)
console.log("Corriendo en el puerto 5000");