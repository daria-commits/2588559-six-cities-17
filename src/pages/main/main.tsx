import Navigation from '../../components/navigation/navigation';
import Cities from 'src/components/cities/cities';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { useAppSelector } from 'src/components/hooks/store';
import { OfferType } from 'src/types';


function Main() {

  const activeCity = useSelector((state: RootState) => state.city.activeCity);


  const offers: OfferType[] = useAppSelector((state: RootState) => state.offers.offers) || [];


  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <main className="page__main page__main--index">
      <Navigation />
      {filteredOffers.length > 0 ? (
        <Cities offers={filteredOffers} />
      ) : (
        <p className="no-offers">Aucune offre disponible pour {activeCity}.</p>
      )}
    </main>
  );
}

export default Main;
