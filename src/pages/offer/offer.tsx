import { useParams } from 'react-router-dom';
import AddCommentForm from 'src/components/add-comment-form/add-comment-form';
import React, { useState } from 'react';
import { OfferType } from 'src/types';

type OfferProps = {
  offers: OfferType[];
};

type CommentType = {
  firstname: string;
  comment: string;
};

function Offer({ offers }: OfferProps) {
  const { id } = useParams<{ id: string }>(); // Récupération de l'ID depuis les paramètres de l'URL
  const foundOffer: OfferType | undefined = offers.find((offer) => offer.id === id); // Recherche de l'offre dans la liste passée en props
  const [comments, setComments] = useState<{ [offerId: string]: CommentType[] }>({});
  const offerId = id || '';

  if (!foundOffer) {
    return <div>Offer not found</div>;
  }

  const handleAddComment = (firstname: string, comment: string) => {
    setComments((prevComments) => {
      const updatedComments = prevComments[offerId] || [];
      return {
        ...prevComments,
        [offerId]: [...updatedComments, { firstname, comment }],
      };
    });
  };

  const { title, type, price, rating, city, isPremium, features } = foundOffer;

  return (
    <div className="offer">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Apartment photo" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-02.jpg" alt="Apartment photo" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-03.jpg" alt="Apartment photo" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/studio-01.jpg" alt="Studio photo" />
              </div>
              <div className="offer__image-wrapper">
                <img className="offer__image" src="img/apartment-01.jpg" alt="Apartment photo" />
              </div>
            </div>
          </div>

          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <h1>{title}</h1>
              <p className="offer__rating-value rating__value">Rating: {rating} / 5</p>
              <p>{type}</p>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;per night</span>
              </div>
              <p>City: {city.name}</p>
              <section className="offer__inside">
                <h2 className="offer__inside-title">What's inside</h2>
                <ul className="offer__inside-list">
                  {features.wifi && <li className="offer__inside-item">Wi-Fi</li>}
                  {features.washingMachine && <li className="offer__inside-item">Washing Machine</li>}
                  {features.towels && <li className="offer__inside-item">Towels</li>}
                  {features.heating && <li className="offer__inside-item">Heating</li>}
                  {features.coffeeMachine && <li className="offer__inside-item">Coffee Machine</li>}
                  {features.babySeat && <li className="offer__inside-item">Baby Seat</li>}
                  {features.kitchen && <li className="offer__inside-item">Kitchen</li>}
                  {features.dishwasher && <li className="offer__inside-item">Dishwasher</li>}
                  {features.cableTV && <li className="offer__inside-item">Cable TV</li>}
                  {features.fridge && <li className="offer__inside-item">Fridge</li>}
                </ul>
              </section>
            </div>
          </div>
        </section>

        <div className="add-comment">
          <AddCommentForm activeOfferId={offerId} onAddComment={handleAddComment} />
        </div>

        <section className="comments">
          <h2>Comments</h2>
          {comments[offerId]?.map((comment) => (
            <div
              key={`${comment.firstname}-${comment.comment}`}
              className="comment"
            >
              <p>
                <strong>{comment.firstname}</strong> says:
              </p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Offer;
