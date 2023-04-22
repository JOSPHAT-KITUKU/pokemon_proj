import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Pokemon from './components/Pokemon';
import About from './components/About';
import Basestats from './components/Basestats';
import Evolution from './components/Evolution';
import Moves from './components/Moves';

const router = createBrowserRouter([
  {
    path: "/:pokename",
    element: <Pokemon/>,
    children: [
      {
        path: '/:pokename/about',
        element: <About/>,
      },
      {
        path: '/:pokename/basestats',
        element: <Basestats/>,
      },
      {
        path: '/:pokename/evolution',
        element: <Evolution/>,
      },
      {
        path: '/:pokename/moves',
        element: <Moves/>,
      },
    ],
  },
  {
    path: "/",
    element: <App/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
