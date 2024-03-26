import './App.css';
import React from 'react';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';
import Form from './components/Form';
import Phone from './components/Phone';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter initialCount={5} />
        <br/> */}

        {/* <PropDrilling />
        <br/> */}

        {/* <Context /> 
        <br/> */}

        {/* <Form />
        <br/> */}

        <Phone />
      </header>
    </div>
  );
}

export default App;
