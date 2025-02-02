import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from 'src/pages/login/login';
import Offer from 'src/pages/offer/offer';
import Layout from 'src/components/layout/layout';
import Main from 'src/pages/main/main';
import { useAppDispatch } from '../hooks/store';
import { useEffect } from 'react';
import { checkAuthStatus } from 'src/store/api-action';


function App() {
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(checkAuthStatus());
  },[dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="offer/:id" element={<Offer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

