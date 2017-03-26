// routes.js

let controllers = require('./controllers')

let api = require('./controllers/api')

module.exports.initialize = function(app, router){
	router.get('/', controllers.home.index)
	router.get('/api/images', api.images.list)
	app.use('/', router)
}
