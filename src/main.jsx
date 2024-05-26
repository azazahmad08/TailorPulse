import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './Components/layouts/Root';
import Home from './pages/home/Home';
import AuthProvider from './provider/AuthProvider';
import SignUp from './AccessPage/SignUp';
import SignIn from './AccessPage/SignIn';
import Order from './Order/Order';
import CustomerData from './Customer/CustomerData';
import PrivateRoute from './Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'signin',
        element: <SignIn />,
      },
      {
        path: 'order',
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: 'customerdata',
        element: (
          <PrivateRoute>
            <CustomerData />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
