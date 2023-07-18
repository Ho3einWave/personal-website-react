import { RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./pages/Loading";
import router from "./routes.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
