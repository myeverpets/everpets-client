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
    path: '/card',
    element: <CardPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
