import { createBrowserRouter } from "react-router-dom";
import Home from "./../pages/Home";
import Products from "./../pages/Products";
import Booking from "./../pages/Booking";
import Contact from "./../pages/Contact";
import About from "./../pages/About";
import App from "./../App";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
