import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Cities from 'src/components/cities/cities';

import { OfferType } from 'src/types';

type OutletContextType = { activeCity: string }; // Type pour le contexte

type Props = {
  offers: OfferType[];
};

function Main({ offers }: Props) {
  const { activeCity } = useOutletContext<OutletContextType>();

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);

  return (
    <div>
      <Cities offers={filteredOffers} />

    </div>
  );
}

export default Main;

