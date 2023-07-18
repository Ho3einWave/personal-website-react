import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routes.jsx";
import { RouterProvider } from "react-router-dom";
import Loading from "./pages/Loading";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
