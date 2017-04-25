let express = require('express'),
	app = express(),
	router = new express.Router(),
	configure = require('./configure'),
	mongoose = require('mongoose')


app = configure(app)

mongoose.connect('mongodb://localhost/paces')
mongoose.connection.on('open', ()=>{
	console.log('MongoDB connected.')
	app.listen('8080', ()=>{
		console.log('Server listening at http://localhost:8080')
	})
})


