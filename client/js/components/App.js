// client/js/components/App.js

import 'stylesheets/base.sass'
import React, {Component} from 'react'
import Header from './layout/Header'

class App extends Component{
  static propTypes = {
    place: React.PropTypes.string
  }
  megaLogger(message){
    console.log(message)
  }

  render(){
    let myvar = this.props.place

    return(
      <div>
      <Header title="Happy Place" logger={this.megaLogger} />
      <div className="body">
      <p> Student is {myvar} </p>
      </div>
      </div>
    )
  }
}

export default App

