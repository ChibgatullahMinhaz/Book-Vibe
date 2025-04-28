import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/Routes.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import LoaderProvider from "./Context/LoaderProvider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoaderProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LoaderProvider>
    <ToastContainer position="bottom-right"></ToastContainer>
  </StrictMode>
);
