import React from 'react';
import { useNavigate } from 'react-router-dom';

type NavigationProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
};

function Navigation({ activeCity, onCityChange }: NavigationProps) {
  const navigate = useNavigate();

  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const handleCityClick = (city: string) => {
    onCityChange(city);
    navigate('/');
  };

  return (
    <nav className="navigation">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li key={city} className="locations__item">
            <button
              className={`locations__item-link tabs__item ${
                city === activeCity ? 'tabs__item--active' : ''
              }`}
              onClick={() => handleCityClick(city)}
            >
              <span>{city}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
