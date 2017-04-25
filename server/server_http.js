let express = require('express'),
	app = express(),
	router = new express.Router(),
	configure = require('./configure'),
	mongoose = require('mongoose'),
        http =require('http')


app = configure(app)

var server = http.createServer(app);

mongoose.connect('mongodb://localhost/paces')
mongoose.connection.on('open', ()=>{
	console.log('MongoDB connected.')
	server.listen('8080', ()=>{
		console.log('Server listening at http://localhost:8080')
	})
})


