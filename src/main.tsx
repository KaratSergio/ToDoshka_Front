import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App/App';
import '../styles/tailwind.css';
import store from './redux/store';
import { Provider } from 'react-redux';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <BrowserRouter basename="/ToDoshka_front">
        <App />
      </BrowserRouter>
    </Provider>
  );
} else {
  console.error('Failed to find the root element');
}
