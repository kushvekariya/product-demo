import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import ProductDetail  from './features/products/ProductDetail';
const container = document.getElementById('root');
const root = createRoot(container);
const PrivateRoute = ({children }) => {
  const isAuthenticated = localStorage.getItem("token") ?? ""
  return isAuthenticated ? children : <Navigate to="/login" />;
};
root.render(
  
    <Provider store={store}>
         <BrowserRouter>
         <Routes>
          <Route path='/' element={<App/>} />
          <Route path="/product/:productId" element={<ProductDetail />}/>

      <Route path="/user/dashboard"
      element={
        <PrivateRoute>
    
        </PrivateRoute>
      }/>
        <Route path='*' element={<h1>404 page not found</h1>} />
         </Routes>
         </BrowserRouter>    
    </Provider>
);