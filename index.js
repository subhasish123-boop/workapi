let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let app = express()

// Import routes
let apiRoutes = require("./routes")// Use Api routes in the App
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let username = '' // username
let pass = '' //encodeURIComponent('password')
let host = '' // hostname
let dbport = '' // database port
let database = '' //database name

mongoose.connect('mongodb://' + username + ':' + pass + '@' + host + ':' + dbport + '/' + database + '', { useNewUrlParser: true, useCreateIndex: true, })

var db = mongoose.connection
var port = process.env.port || 9001

// Send message for default URL
app.get('/', (req, res) => res.send('Default route for test'))

app.use('/api', apiRoutes)

app.listen(port, function () {
    console.log("Running workApi on port " + port)
})