import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PhoneContextProvider from './context/PhoneContext';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  <PhoneContextProvider>
    <App />
  </PhoneContextProvider>
);

