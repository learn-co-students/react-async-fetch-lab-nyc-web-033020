import React, { Component } from 'react'

export class App extends Component {

    state = {
      api: []
    }

componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(res => 
        this.setState({ api: [...res]})
    )
}
    render() {
        console.log(this.state)
        return (
            <div>
                
            </div>
        )
    }
}

export default App

