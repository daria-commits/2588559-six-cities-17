import { useParams } from 'react-router-dom';
import AddCommentForm from 'src/components/add-comment-form/add-comment-form';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/store';
import { fetchOfferById } from 'src/store/api-action'; // Assurez-vous que l'action est bien importée

type CommentType = {
  firstname: string;
  comment: string;
};

function Offer() {
  const { id } = useParams<{ id: string }>();
  console.log("ID из useParams:", id);

  const dispatch = useDispatch();
  const offer = useSelector((state: RootState) => state.currentOffer); // Utilisation du store pour l'offre spécifique
  const [comments, setComments] = useState<{ [offerId: string]: CommentType[] }>({});
  const offerId = id || '';
  useEffect(() => {
    if (id) {
      console.log("Отправляем запрос для id:", id);
      dispatch(fetchOfferById(id))
    }
  }, [dispatch, id]);
  if (!offer) {
    return <div>Loading...</div>; // Afficher un message de chargement tant que l'offre n'est pas récupérée
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

  const { title, type, price, rating, isPremium, description, bedrooms, goods, images, maxAdults, host } = offer;

  return (
    <main className='page__main page__main--offer'>
      <div className='offer'>
        <div className='offer__gallery-container container'>
          <div className='offer__gallery'>
            {images.map((image, index) => (
              <div key={index} className='offer__image-wrapper'>
                <img className='offer__image' src={image} alt={`Offer image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className='offer__container container'>
          <div className='offer__wrapper'>
            {isPremium && (
              <div className='offer__mark'>
                <span>Premium</span>
              </div>
            )}
            <div className="offer__name-wrapper">
              <h1 className="offer__name">{title}</h1>
              <button className="offer__bookmark-button button" type="button">   </button>
            </div>
            <div className="offer__rating rating">
              <div className="offer__stars rating__stars"></div>
              <p className='offer__rating-value rating__value'>Rating: {rating} / 5</p>
            </div>
            <p className='offer__features'>{type}</p>

            <div className='offer__price'>
              <b className='offer__price-value'>&euro;{price}</b>
              <span className='offer__price-text'>&nbsp;per night</span>
            </div>
            <section className="offer__inside">
              <h2 className='offer__inside-title'>Whats inside</h2>
              <p>{description}</p> {/* Ajout de la description */}
              <p>Bedrooms: {bedrooms}</p> {/* Ajout du nombre de chambres */}
              <p>Max Adults: {maxAdults}</p> {/* Ajout de la capacité maximale d'adultes */}
              <ul>
                {goods.map((good, index) => (
                  <li key={index}>{good}</li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <div className="offer__host">
          <h2 className="offer__host-title">Meet the host</h2>
          <div className="offer__host-user user">
            <p>{host.name}</p>
            <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
              <img src={host.avatarUrl} alt="Host avatar" />
              {host.isPro && <span className="offer__user-status">Pro</span>}
            </div>
          </div>
        </div>

        <div className="add-comment">
          <AddCommentForm
            activeOfferId={offerId}
            onAddComment={handleAddComment}
          />
        </div>

        <section className="comments">
          <h2>Comments</h2>
          {comments[offerId]?.map((comment, index) => (
            <div key={index} className="comment">
              <p><strong>{comment.firstname}</strong> says:</p>
              <p>{comment.comment}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Offer;
