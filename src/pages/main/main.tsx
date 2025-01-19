import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Cities from 'src/components/cities/cities';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { loadOffers } from 'src/store/action';

function Main() {
  const activeCity = useSelector((state: RootState) => state.activeCity); // Ville active depuis Redux
  const offers = useSelector((state: RootState) => state.offers); // Offres depuis Redux
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (offers.length === 0) {
      dispatch(loadOffers([]));
    }
  }, [offers, dispatch]);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <main className="page__main page__main--index">
      <Navigation />
      {filteredOffers.length > 0 ? (
        <Cities />
      ) : (
        <p className="no-offers">Aucune offre disponible pour {activeCity}.</p>
      )}
    </main>
  );
}

export default Main;

