import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import ReservasProvider from './context/ReservasProvider';

ReactDOM.render(
  <React.StrictMode>
    <ReservasProvider>
      <App />
    </ReservasProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
