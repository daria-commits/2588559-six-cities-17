import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { OFFERS_MOCK } from './mocks/offer';
import { Provider, useSelector } from 'react-redux';
import { store } from './store';
import { loadOffers } from './store/action';
import { RootState } from './store';

store.dispatch(loadOffers(OFFERS_MOCK));

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);


const AppWithOffers = () => {
  const offers = useSelector((state: RootState) => state.offers); //useSelector — это хук из библиотеки React Redux, который позволяет вам получать доступ к данным из глобального Redux-хранилища (store) непосредственно внутри React-компонента.
  return <App offers={offers} />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithOffers />
    </Provider>
  </React.StrictMode>
);
