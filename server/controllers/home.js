module.exports = {
	index(req,res){
		let viewModel={
		    layout: false,
 		    place: 'StudentA'
		}
		res.render('home', viewModel)
	}
}
