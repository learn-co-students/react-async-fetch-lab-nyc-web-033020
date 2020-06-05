import React, { Component } from 'react'

export class App extends Component {
  
  state ={

  }
  componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(r => r.json()).then(data => this.setState({people: data}))
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App

