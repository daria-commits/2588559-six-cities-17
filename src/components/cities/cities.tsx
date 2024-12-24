import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation de Link
import { OfferType } from 'src/types';
import Map from '../map/map';

type CitiesProps = {
  offers: OfferType[];
};

function Cities({ offers }: CitiesProps) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  const handleActiveOfferChange = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offers.length} places to stay</b>
          <div className="cities__places-list places__list tabs__content">
            {offers.map((offer) => (
              <article
                key={offer.id}
                className="cities__card place-card"
                onMouseEnter={() => handleActiveOfferChange(offer.id)}
                onMouseLeave={() => handleActiveOfferChange(null)}
              >
                <div className="place-card__image-wrapper">
                  <img
                    className="place-card__image"
                    src={offer.previewImage}
                    width="260"
                    height="200"
                    alt={offer.title}
                  />
                </div>
                <div className="place-card__info">
                  <h2 className="place-card__name">

                    <Link to={`/offer/${offer.id}`}>
                      {offer.title}
                    </Link>
                  </h2>
                  <p className="place-card__type">{offer.type}</p>
                  <p className="place-card__price">€{offer.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
      <div className="cities__map-container">
        <Map offers={offers} activeOfferId={activeOfferId} />
      </div>
    </div>
  );
}

export default Cities;
