import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar';



import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  
componentDidMount() {
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data }))
    .catch(err => console.log(err))
}

addSmurf = (e, smurf) => {
  e.preventDefault();
  const {name, age, height} = smurf

  axios
    .post('http://localhost:3333/smurfs', {name, age, height})
    .then(res => this.setState({ smurf: res.data }))
    .catch(err => console.log(err))
}

  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <Route path='/smurf-form' exact render={() => <SmurfForm addSmurf={this.addSmurf}/>}/>
        <Route path='/' exact render={() => <Smurfs smurfs={this.state.smurfs}/>} />    
      </div>
    );
  }
}

export default App;
