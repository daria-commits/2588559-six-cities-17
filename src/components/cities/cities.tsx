import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { OfferType } from 'src/types';


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
        <div className="cities__right-section" >
          <section className="cities__map map" style={{

            width: '100%',
            height: '100%',
            overflow: 'hidden',
            position: 'relative'
          }}
          >
            <svg className="map__icon map__icon--arrow" width="7" height="4" style={{ position: 'absolute', top: '10px', right: '10px' }}>
              <use xlinkHref="#icon-arrow-select"></use>
            </svg>
          </section>
        </div>
      </div>
    </div>

  );
}

export default Cities;
