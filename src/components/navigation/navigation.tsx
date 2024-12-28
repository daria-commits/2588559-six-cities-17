import React from 'react';

type NavigationProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
};

function Navigation({ activeCity, onCityChange }: NavigationProps) {


  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const handleCityClick = (city: string) => {
    onCityChange(city);

  };

  return (
    <nav className="tabs">
      <h1 className="visually-hidden">Cities</h1>
      <div className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <li key={city} className="locations__item">
              <a
                className={`locations__item-link tabs__item ${
                  city === activeCity ? 'tabs__item--active' : ''
                }`}
                onClick={() => handleCityClick(city)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
