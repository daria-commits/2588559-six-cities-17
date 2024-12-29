
import { OfferType } from 'src/types';

type MapProps = {
  offers: OfferType[];
  activeOfferId: string | null;
};


function Map({ offers, activeOfferId }: MapProps) {
  return (
    <div className="map">
      <p>Map Placeholder</p>
      {offers.map((offer) => (
        <div
          key={offer.id}
          style={{
            color: offer.id === activeOfferId ? 'red' : 'black',
          }}
        >
          {offer.title} - ({offer.location.latitude}, {offer.location.longitude})
        </div>
      ))}
    </div>
  );
}

export default Map;
