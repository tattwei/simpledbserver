let express = require('express'),
	app = express(),
	router = new express.Router(),
	configure = require('./configure'),
	mongoose = require('mongoose'),
	fs= require('fs'),
	https=require('https'),
	options={
	  key: fs.readFileSync('./server/server.key'),
	  cert: fs.readFileSync('./server/server.crt')
	}
 
app = configure(app)

var server = https.createServer(options,app);

mongoose.connect('mongodb://localhost/paces')
mongoose.connection.on('open', ()=>{
	console.log('MongoDB connected.')
	server.listen('8080', ()=>{
		console.log('Server listening at https://localhost:8080')
	})
})


