import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Kontakt from './pages/Kontakt.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,  
  },
  {
    path: "/contact",
    element: <Kontakt></Kontakt>,  // Hier könnte deine Kontakt-Komponente sein
  },


]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

);
