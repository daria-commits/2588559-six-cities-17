import { Outlet } from 'react-router-dom';
import Header from '../../components/header/header';
import Navigation from '../../components/navigation/navigation';


function Layout() {
  return (
    <div className="layout">
      <Header />
      <Navigation />
      <main>
        <Outlet /> {/* Les pages enfants s'afficheront ici */}
      </main>
      <footer />
    </div>
  );
}

export default Layout;