import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS_MOCK } from './mocks/offer';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadOffers } from './store/action';

store.dispatch(loadOffers(OFFERS_MOCK));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
