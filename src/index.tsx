import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { fetchOffers } from './store/api-action';
import { RootState } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const AppWithOffers = () => {
  const dispatch = useDispatch();
  const offers = useSelector((state: RootState) => state.offers);
  const status = useSelector((state: RootState) => state.status);


  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  if (status === 'pending') {
    return <div>Loading...</div>;
  }

  return <App offers={offers} />;
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithOffers />
    </Provider>
  </React.StrictMode>
);
