import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import defaultTheme from './styles/themes/default';
import './App.css';
import Home from './pages/Home';
import GlobalStyle from './styles/themes/global';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
