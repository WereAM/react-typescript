import './App.css';
import React from 'react';
import Counter from './components/Counter';
import PropDrilling from './components/PropDrilling';
import Context from './components/Context';
import Form from './components/Form';
import Phone from './components/Phone';
import Login from './components/Login';
import Signup from './components/Signup';
import Stationery from './components/Stationery';
import PhoneContextProvider from './context/PhoneContext';
import PhoneModel from './components/PhoneModel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Counter initialCount={5} /> */}

        {/* <PropDrilling /> */}

        {/* <Context /> */}

        {/* <Form /> */}

        {/* <Phone /> */}

        {/* <Login/> */}

        {/* <Signup /> */}

        {/* <Stationery/> */}

        {/* <PhoneContextProvider>
          <PhoneModel />
        </PhoneContextProvider> */}

        <PhoneModel/>
      </header>
    </div>
  );
}

export default App;
