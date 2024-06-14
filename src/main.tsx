import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import '../styles/tailwind.css';
import store, { persistor } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/ToDoshka_front">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
} else {
  console.error('Failed to find the root element');
}
