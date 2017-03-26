// routes.js

let controllers = require('./controllers')
let api = require('./controllers/api')
let express = require('express')

module.exports.initialize = function(app, router){
	router.get('/', controllers.home.index)
	router.get('/test', controllers.testserver.test)
	router.get('/api/images', api.images.list)
	app.use('/', router)
	app.use(express.static('./server/public'))
}
