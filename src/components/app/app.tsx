import Main from '../../pages/main/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from 'src/pages/favorites/favorites';
import Login from 'src/pages/login/login';
import Offer from 'src/pages/offer/offer';
import { OfferType } from 'src/types';
import { OFFERS_MOCK } from 'src/mocks/offer';
import Layout from 'src/components/layout/layout';

type Props = {
  offers: OfferType[];
};

function App({ offers }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main offers={offers} />} />
          <Route path="favorites" element={<Favorites offers={OFFERS_MOCK} />} />
          <Route path="login" element={<Login />} />
          <Route path="offer/:id" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
