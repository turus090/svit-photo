const { log } = require('console')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

const http = require('http')

const server = http.createServer(app)
const config = require('./config.js')

const contactList = require('./contactList.js')
const bodyParser = require('body-parser') 
const cors = require('cors')

const routerReview = require('./router/review')
const routerGallery = require('./router/gallery')


const corsOptions ={
    origin:'*',
    optionSuccessStatus: 200
}


mongoose.connect(config.mongoKey)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch((err) => {
    console.log(err);
})


app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))



//app.use('/api', apiRouter)
app.use('/img', express.static(__dirname + '/imgStore')) 

app.use('/review', routerReview)
app.use('/gallery', routerGallery)

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



