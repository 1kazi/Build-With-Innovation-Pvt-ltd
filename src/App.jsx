import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
;
// import './App.scss';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddToCartData from './components/AddToCartData';
import { AllProduct, DetailsPage, Home, Login, RootElement } from './pages';
import { useEffect } from 'react';
import { Toast } from 'react-bootstrap';







function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute element={<RootElement />} />,
      children: [
        {
          path: '/',
          element: <ProtectedRoute element={<Home />} />,
        },
        {
          path: '/details/:id',
          element: <ProtectedRoute element={<DetailsPage />} />,
        },
        {
          path: '/all/:search',
          element: <ProtectedRoute element={<AllProduct />} />,
        },
        {
          path: '/cart',
          element: <ProtectedRoute element={<AddToCartData />} />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;


function ProtectedRoute({ element }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('producttoken'));
    if (!token) {
      navigate('/login');
      
    }
  }, []);

  return element;

}