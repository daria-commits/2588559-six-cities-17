
import { useParams } from 'react-router-dom';
import { OFFERS_MOCK } from 'src/mocks/offer';
import { OfferType } from 'src/types';


function Offer() {
  const { id } = useParams<{ id: string }>();
  const foundOffer: OfferType | undefined = OFFERS_MOCK.find((offer) => offer.id === id);

  if (!foundOffer) {
    return <div>Offer not found</div>;
  }

  const { title, type, price, rating, previewImage, city } = foundOffer;

  return (
    <div className="offer">
      <h1>{title}</h1>
      <img src={previewImage} alt={title} width="400" />
      <p>Type: {type}</p>
      <p>Price: €{price} per night</p>
      <p>Rating: {rating} / 5</p>
      <p>City: {city.name}</p>
    </div>
  );
}

export default Offer;
