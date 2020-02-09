import React from 'react';

import './App.css';
import Header from './components/Header';
import Sample from './components/Sample';
import FormContainer from './components/FormContainer';
import Todos from './components/Todos';
import MemeComponent from './components/MemeComponent'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "MY TODOS APP",
      meme:"MEME GENERATOR"
    }
  }

  render() {
    return (
      <div className="App">
        <Header name={this.state.meme} />
        {/* <Sample /> */}
        {/*<FormContainer /> */}
        <MemeComponent />
        {/*<h1>Tasks</h1>
        <Todos />*/}
      </div>
    );
  }
}

export default App;
