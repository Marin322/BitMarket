import logo from './logo.svg';
import './App.css';
import { AuthPage } from './.pages/AuthPage/AuthPage';
import CatalogPage from './.pages/CatalogPage/CatalogPage';
import CartPage from './.pages/CartPage/CartPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/auth' element={!isAuth ? <AuthPage setIsAuth={setIsAuth} /> : <Navigate to="/" replace />} />
            <Route path='/' element={isAuth ? <CatalogPage /> : <Navigate to="/auth" replace />} />
            <Route path='/cart' element={isAuth ? <CartPage/> : <Navigate to="/auth" replace />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
