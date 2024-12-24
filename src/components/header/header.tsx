import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [user, setUser] = useState<{ email: string | null }>({ email: null }); // Par défaut, aucun utilisateur connecté
  const navigate = useNavigate(); // Initialisation de useNavigate

  const handleSignIn = () => {
    navigate('/login'); // Redirige vers la page /login
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {/* Remplacer <a> par Link si la navigation est gérée avec react-router */}
            {/* <Link to="/" className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src={logo}
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link> */}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {user.email ? (

                <>
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {/* Ajouter ici une image d'avatar si nécessaire */}
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a
                      className="header__nav-link"
                      href="#"
                      onClick={() => setUser({ email: null })} // Déconnexion
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <button
                    className="header__nav-link"
                    onClick={handleSignIn}
                    style={{
                      all: 'unset', // Permet de garder le style minimal et éviter les styles par défaut des boutons
                      cursor: 'pointer',
                    }}
                  >
                    <span className="header__signout">Sign in</span>
                  </button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
