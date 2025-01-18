import React, { useState } from 'react';
import Navigation from '../../components/navigation/navigation';
import Cities from 'src/components/cities/cities';
import { OfferType } from 'src/types';

type Props = {
  offers: OfferType[];
};


function Main({ offers }: Props) {
  const [activeCity, setActiveCity] = useState<string>('Amsterdam');

  return (
    <main className="page__main page__main--index">
      {/* On passe activeCity et onCityChange à Navigation */}
      <Navigation activeCity={activeCity} onCityChange={setActiveCity} />
      {/* On filtre les offres en fonction de la ville active */}
      <Cities offers={offers.filter((offer) => offer.city.name === activeCity)} activeCity={activeCity} />
    </main>
  );
}

export default Main;
