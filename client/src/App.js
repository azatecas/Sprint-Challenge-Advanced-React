import React from 'react';
import './App.css';
import axios from 'axios'
import CardContainer from './components/CardContainer';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log('this is res', res.data)
        this.setState({
          players: res.data
        })
      })
      .catch(error => console.log('axios error', error))
  }



  render() {
    return (
    <div className="App">
      <CardContainer players={this.state.players}/>      
    </div>
    );
  }
}

export default App;
