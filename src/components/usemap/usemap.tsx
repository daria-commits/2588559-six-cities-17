import { useEffect, useState, useRef, MutableRefObject } from 'react';
import L, { Map as LeafletMap, TileLayer, map as createMap } from 'leaflet';
import { OfferType } from 'src/types';

function useMap(

  mapRef: MutableRefObject<HTMLElement | null>,
  city: OfferType['city']
): LeafletMap | null {
  const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef(false);

  useEffect (()=>{
    map?.panTo(new L.LatLng(city.location.latitude, city.location.longitude), { animate: true });
  }, [city,map]);

  useEffect(() => {

    if (mapRef.current !== null && !isRenderedRef.current) {

      const instance = createMap(mapRef.current, {
        center: [city.location.latitude, city.location.longitude],
        zoom: city.location.zoom,
      });


      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer); // Ajoute la couche à la carte
      setMap(instance); // Stocke l'instance de la carte dans l'état
      isRenderedRef.current = true; // Marque la carte comme rendue
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
