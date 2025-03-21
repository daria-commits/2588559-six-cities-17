import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/store';
import { getActiveCity } from 'src/store/active-city-reducer/selectors';
import Map from '../map/map';
import { Link } from 'react-router-dom';
import Sorting from '../sorting/sorting';
import { sortBy } from 'src/helper';
import { selectCurrentSort } from 'src/store/sorting-reducer/selectors';
import { selectOffers } from 'src/store/offer-reducer/selectors';
function Cities() {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);
  const offers = useAppSelector(selectOffers);
  const activeCity = useSelector(getActiveCity);
  const currentSort = useSelector(selectCurrentSort);

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity);


  const sortedOffersForList = sortBy(filteredOffers, currentSort);

  const handleActiveOfferChange = (id: string | null) => {
    setActiveOfferId(id);
  };

  return (
    <div className="cities">
      <div className="cities__places-container container">

        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {filteredOffers.length} places to stay in {activeCity}
          </b>
          <Sorting />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffersForList.map((offer) => (
              <article
                key={offer.id}
                className="cities__card place-card"
                onMouseEnter={() => handleActiveOfferChange(offer.id)}
                onMouseLeave={() => handleActiveOfferChange(null)}
              >
                {offer.isPremium && (
                  <div className="place-card__mark">
                    <span>Premium</span>
                  </div>
                )}

                <div className="cities__image-wrapper place-card__image-wrapper">
                  <Link to={`/offer/${offer.id}`}>
                    <img
                      className="place-card__image"
                      src="img/room.jpg"
                      width="260"
                      height="200"
                      alt={offer.title}
                    />
                  </Link>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€{offer.price}</b>
                      <span className="place-card__price-text">/night</span>
                    </div>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{ width: `${offer.rating * 20}%` }}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
                  </h2>
                  <p className="place-card__type">{offer.type}</p>
                </div>
              </article>
            ))}
          </div>
        </section>


        <div className="cities__right-section">
          <Map offers={filteredOffers} activeOfferId={activeOfferId} />
        </div>
      </div>
    </div>
  );
}

export default Cities;
