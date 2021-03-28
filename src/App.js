import React, { Component } from 'react';
import './App.css'; 
import Home from './components/home';

class App extends Component {

  componentDidMount() {
    document.title = "Money Heist Series Template";
  }

  render() { 
    return (
    <React.Fragment>
      <Home />
    </React.Fragment>
    );
  }
}
 
export default App;