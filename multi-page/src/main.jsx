import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/> ,
  }
  // {
  //   path: "sobre",
  //   element: <Sobre />,
  // }

]);

createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />,
    {/* <App /> */}

)
