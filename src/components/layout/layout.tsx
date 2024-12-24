import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';

function Layout() {
  const [activeCity, setActiveCity] = useState<string>('Amsterdam'); // Gérer la ville active ici

  return (
    <div className="layout">
      <Header />
      <Navigation activeCity={activeCity} onCityChange={setActiveCity} /> {/* Passer l'état */}
      <main>
        <Outlet context = {{ activeCity, onCityChange: setActiveCity }} />
      </main>
      <footer />
    </div>
  );
}

export default Layout;
