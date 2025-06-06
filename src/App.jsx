import "./index.css";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home />
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

