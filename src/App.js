// create your App component here
import React, { Component } from 'react'

class App extends Component {

  state = {
      astros: []
  }

  render() {
    return (
      <div>
        {this.state.astros.map((person, id) => <p key={id}>{person.name}</p>)}
      </div>
    )
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(({people}) => this.setState({ astros: people }))

  }

}

export default App