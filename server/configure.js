//configure.js
let path = require('path'),
	express = require('express'),
	routes = require('./routes'),
	middleware=require('./middleware'),
	mongoose = require('mongoose'),
	MongoStore = require('connect-mongo')(middleware.session)

module.exports = function(app, config){
	if(config==null){config = {}}

	// --- start  middleware ---

	// SESSIONS FOR USERS
	app.use(middleware.session({
		secret:		'SECRETHERE',
		resave:		false,
		saveUninitialized: false,
		store:		new MongoStore({mongooseConnection: mongoose.connection})
	}))

	// HANDLEBARS HTML RENDERING
	app.set('views', __dirname + '/views')
	var hbs = middleware.exphbs.create({
		extname: '.html',
		defaultLayout: 'layout',
		layoutsDir: app.get('views') + '/layouts',
		partialsDir: [app.get('views')+'/partials']
	})
	app.engine('html', hbs.engine)
	app.set('view engine', 'html')
	
	// MORGAN logging
	app.use(middleware.morgan('dev'))

	//PARSING SUBMISSIONS TO SERVER
	app.use(middleware.bodyParser.urlencoded({ extended: false}))
	app.use(middleware.bodyParser.json())

	// Older browsers to PUT and UPDATE
	app.use(middleware.methodOverride())

	// COOKIE PARSER
	app.use(middleware.cookieParser('SECRETHERE'))

	// EXPRESS SERVE STATIC
	app.use('/public/', express['static'](path.join(__dirname, './public')))
	

	// --- end middleware ---
	app.set('config', config)

	routes.initialize(app, new express.Router())
	return app
}
