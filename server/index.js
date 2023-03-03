const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const http = require('http')

const server = http.createServer(app)
const config = require('./config.js')

const contactList = require('./contactList.js')
const bodyParser = require('body-parser') 


mongoose.connect(config.mongoKey)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err);
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

const apiRouter = require('./routers/api')


app.use('/api', apiRouter)

app.get('/', (req, res) => { 
    res.send('Welcome')
})

app.get('/contact-list', (req, res) => {
    console.log(req)
    res.status(200).json(contactList)
})

app.get('/contact-list', (req, res) => { 
    res.send('contact')
})

app.post('/create', (req, res) => {
console.log(req.query);
res.status(201).json({message: `user ${req.body.login} created`})
})

server.listen(config.port, () => {
    console.log(`Server is running ${config.port}`)
})


