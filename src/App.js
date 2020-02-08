import React from 'react';

import './App.css';
import Header from './components/Header';
import Todos from './components/Todos';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Todos />
      </div>
    );
  }
}

export default App;
