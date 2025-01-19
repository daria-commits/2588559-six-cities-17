
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from 'src/pages/login/login';
import Offer from 'src/pages/offer/offer';
import Layout from 'src/components/layout/layout';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

function App() {
  const offers = useSelector((state: RootState) => state.offers);
  const activeCity = useSelector((state: RootState) => state.activeCity);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main offers={offers} activeCity={activeCity} />} />
          <Route path="login" element={<Login />} />
          <Route path="offer/:id" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


