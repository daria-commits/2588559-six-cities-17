import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { AuthStatus } from 'src/const';
import { logoutAction } from 'src/store/api-action';
import { getAuthStatus, getUserEmail } from 'src/store/auth-reducer/selectors';
import { useAppSelector,useAppDispatch } from '../hooks/store';
type HeaderProps = {
  showNav: boolean;

}
function Header({ showNav }: HeaderProps) {
  const authorizationStatus = useSelector(getAuthStatus);
  const userEmail = useAppSelector(getUserEmail);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate('/');
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {showNav && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                {authorizationStatus === AuthStatus.Auth ? (
                  <>
                    <li className="header__nav-item user">
                      <a className="header__nav-link header__nav-link--profile" href="#">
                        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                        <span className="header__user-name user__name">{userEmail}</span>
                        <span className="header__favorite-count">3</span>
                      </a>
                    </li>
                    <li className="header__nav-item">
                      <button className="header__nav-link" onClick={handleLogout}>
                        <span className="header__signin">Sign out</span>
                      </button>
                    </li>
                  </>
                ) : (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/login">
                      <span className="header__signin">Sign in</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
