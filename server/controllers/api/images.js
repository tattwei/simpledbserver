// controllers/api/images.js

let Models = require('../../models')

module.exports={
    
   mydefault(req,res){
	let mymodel = { layout: false, place: 'Malaysia'}
     res.render('home', mymodel)
  },

    list(req,res){
	Models.Image.find({}, (err,images)=>{
		res.json(images)            // prints the json returned from find{} operation
	})
    }
}
