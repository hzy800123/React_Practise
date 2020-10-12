import React from 'react';
import logo from './logo.svg';
import './App.css';
// import CounterUseState from './hook/useState'
import ExampleUseEffect from './hook/useEffect'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <CounterUseState /> */}
      <ExampleUseEffect />
    </div>
  );
}

export default App;
