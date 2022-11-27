const express = require('express')
var parsers = require('body-parser')
const textParser = parsers.text()

var cors = require('cors')

const app = express()
app.use(cors())

const port = 6969

let tokens = new Set()

app.post('/tokens', textParser, (req, res) => {
  tokens.add(req.body)
  console.log(tokens)
  res.sendStatus(201)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})