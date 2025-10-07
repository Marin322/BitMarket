import logo from './logo.svg';
import './App.css';
import { AuthPage } from './.pages/AuthPage/AuthPage';
import CatalogPage from './.pages/CatalogPage/CatalogPage';
import CartPage from './.pages/CartPage/CartPage';
import MainPage from './.pages/MainPage/MainPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const logout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('isAuth');
    setIsAuth(false);
  }

  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuth');
    const userData = localStorage.getItem('userData');

    if (savedAuth === 'true' && userData) {
      setIsAuth(true);
    }
  }, []);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={isAuth ? "/catalog" : "/auth"} replace />} />
          <Route path='/auth' element={!isAuth ? <AuthPage setIsAuth={setIsAuth} /> : <Navigate to="/catalog" replace />} />
          <Route path='/catalog' element={isAuth ? <CatalogPage /> : <Navigate to="/auth" replace />} />
          <Route path='/cart' element={isAuth ? <CartPage /> : <Navigate to="/auth" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
