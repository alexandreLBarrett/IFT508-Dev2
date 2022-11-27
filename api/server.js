const express = require('express')
var parsers = require('body-parser')
const jsonParser = parsers.json()
const textParser = parsers.text()
const path = require('path')

var cors = require('cors')

const uuidv4 = require('uuid');

const app = express()
app.use(cors())
app.use(express.static('public'))

app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug')

const port = 3000

let tokens = {}
let comments = []

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/comments', jsonParser, (_, res) => {
  res.render('comments', { comments })
})

app.post('/api/comments', jsonParser, (req, res) => {
  const { body } = req

  const username = tokens[body.token]
  console.log(username)
  if (!username) {
    res.sendStatus(401)
    return
  }

  comments.push({ username, comment: body.comment })
  res.sendStatus(201)
})

app.post('/api/login', textParser, (req, res) => {
  const guid = uuidv4.v4()
  console.log(req.body)
  tokens[guid] = req.body
  res.send(guid)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})