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
import CustomerList from './Customer/CustomerList';
import CustomerView from './Customer/CustomerView';
import CustomerUpdate from './Customer/CustomerUpdate'; 
import NewOrder from './Order/NewOrder';
import OrderReport from './Order/OrderReport';
import Production from './Production/Production';
import EmployeeInfo from './Employee/EmployeeInfo';
import AddEmployee from './Employee/AddEmployee';

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
        path: 'neworder',
        element: (
          <PrivateRoute>
            <NewOrder></NewOrder>
          </PrivateRoute>
        ),
      },
      {
        path: 'orderreport',
        element: (
          <PrivateRoute>
            <OrderReport></OrderReport>
          </PrivateRoute>
        ),
      },
      {
        path: 'production',
        element: (
          <PrivateRoute>
            <Production></Production>
          </PrivateRoute>
        ),
      },
      {
        path: 'employeeinfo',
        element: (
          <PrivateRoute>
            <EmployeeInfo></EmployeeInfo>
          </PrivateRoute>
        ),
      },
      {
        path: 'addemployee',
        element: (
          <PrivateRoute>
            <AddEmployee></AddEmployee>
          </PrivateRoute>
        ),
      },
      {
        path: 'customerdata',
        element: (
          <PrivateRoute>
            <CustomerData></CustomerData>
          </PrivateRoute>
        ),
      },
      {
        path: 'customer',
        element: (
          <PrivateRoute>
            <CustomerList />
          </PrivateRoute>
        ),
        children: [
          {
            index: true, // Set index to true for the default view
            element: <CustomerList />,
          },
          {
            path: ':id', // Route parameter for customer ID
            element: <CustomerView />,
          },
          {
            path: ':id/update', // Route parameter for customer ID
            element: <CustomerUpdate />,
          },
        ],
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
