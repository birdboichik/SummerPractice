import * as React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Characters from "./pages/Characters/Characters";
import ICharacters from "./pages/Characters/ICharacters";
import Comics from "./pages/Comics/Comics";
import IComics from "./pages/Comics/IComics";
import './App.css'

const newRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/characters/' />,
  },
  {
    path: '/characters',
    element: <Characters />
  },
  {
    path: '/characters/:id',
    element: <ICharacters />
  },
  {
    path: '/comics',
    element: <Comics />
  },
  {
    path: '/comics/:id',
    element: <IComics />
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={newRouter} />
    </React.StrictMode>
  );
}

export default App;
