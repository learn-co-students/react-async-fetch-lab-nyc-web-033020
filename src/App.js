import React from 'react'

class App extends React.Component {
    render() {
        return('#')
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}


export default App