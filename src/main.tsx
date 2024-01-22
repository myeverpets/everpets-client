import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './global.css';
import App from './App.tsx';
import ErrorPage from './pages/error-page';
// import Navbar from './components/navbar';
import CategoryPage from './pages/CategoryPage.tsx';
import Example from './components/modal.tsx';
import CardPage from './pages/card-page.tsx';
import Signup from './pages/signup-page.tsx';
import Login from './pages/login-page.tsx';
import ForgotPassword from './pages/forgot-password-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/category',
    element: <CategoryPage />,
  },
  {
    path: '/!modal',
    element: <Example />,
  },
  {
    path: '/card/:id',
    element: <CardPage />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
