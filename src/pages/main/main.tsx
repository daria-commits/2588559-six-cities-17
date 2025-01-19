import React from 'react';
import Navigation from '../../components/navigation/navigation';
import Cities from 'src/components/cities/cities';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/store';
import { loadOffers } from 'src/store/action';
import { OfferType } from 'src/types';


function Main({ offers }: { offers: OfferType[] }) {
  const activeCity = useSelector((state: RootState) => state.activeCity); // Ville active depuis Redux
  const dispatch = useDispatch();

  // Utiliser l'effet pour charger les offres initiales si nécessaire
  React.useEffect(() => {
    if (offers.length === 0) {
      // Remplir le store avec des données d'offres simulées ou récupérer via une API
      dispatch(loadOffers([])); // Par exemple, charger des offres ici
    }
  }, [offers, dispatch]);

  // Filtrage des offres selon la ville active
  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <main className="page__main page__main--index">
      {/* Navigation est déjà connectée à Redux */}
      <Navigation />
      {/* Affichage des offres filtrées */}
      {filteredOffers.length > 0 ? (
        <Cities />
      ) : (
        <p className="no-offers">Aucune offre disponible pour {activeCity}.</p>
      )}
    </main>
  );
}

export default Main;

