module.exports={
  test(req,res){
    let viewModel = {
      layout: false,
      place: 'happy'
    }
    res.render('test', viewModel)
  }
}
