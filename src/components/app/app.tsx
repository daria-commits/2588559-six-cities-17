import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Favorites from 'src/pages/favorites/favorites';
import Login from 'src/pages/login/login';
import Offer from 'src/pages/offer/offer';
import Layout from 'src/components/layout/layout';
import Main from 'src/pages/main/main';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="login" element={<Login />} />
          <Route path="offer/:id" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

