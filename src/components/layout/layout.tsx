
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../../components/header/header';

function Layout() {
  const {pathname} = useLocation();
  const showNav = pathname !== '/login';

  let className = 'page';
  if (pathname === '/'){
    className += 'page page--gray page--main';
  } else if (pathname === '/login') {
    className += 'page page--gray page--login';
  }
  return (
    <div className={className}>
      <Header showNav={showNav} />

      <Outlet />
      <footer />
    </div>
  );
}

export default Layout;

