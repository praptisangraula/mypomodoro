import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClockPage from "./pages/ClockPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    errorElement: <div> 404 not found</div>,
  },
  {
    path: "/Clock",
    element: <ClockPage></ClockPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
