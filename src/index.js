import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import { store } from './redux/store';
import { GlobalStyles } from 'components/theme/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}></PersistGate>
    <BrowserRouter basename="/so_yummy_react_project">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </Provider>
  // {/* </React.StrictMode> */}
);
