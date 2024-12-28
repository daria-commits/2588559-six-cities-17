
import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';

function Layout() {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer />
    </div>
  );
}

export default Layout;

