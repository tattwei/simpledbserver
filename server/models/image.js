let mongoose = require('mongoose'),
	Schema = mongoose.Schema

var ImageSchema = new Schema({
	url: 		String,
	filename:	String,
	uniqueid:	String,
	timestamp:	{type: Date, default: Date.now()}
})

module.exports = mongoose.model('images', ImageSchema)
