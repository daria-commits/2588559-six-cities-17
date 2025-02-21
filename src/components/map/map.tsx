import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../usemap/usemap';
import { OfferType } from 'src/types';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40],
});

type MapProps = {
  offers: OfferType[];
  activeOfferId: string | null;
};

function Map({ offers, activeOfferId }: MapProps) {
  const mapRef = useRef(null);

  const map = useMap(mapRef, offers[0].city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            offer.id === activeOfferId ? currentCustomIcon : defaultCustomIcon
          )
          .addTo(markerLayer);

        // if (offer.id === activeOfferId) {
        //   map.panTo(new L.LatLng(offer.location.latitude, offer.location.longitude), { animate: true });
        // }
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activeOfferId]);

  return (
    <section className="cities__map map" ref={mapRef}> </section>
  );
}

export default Map;
