import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { GlobalStyles } from 'components/theme/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/so_yummy_react_project">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
