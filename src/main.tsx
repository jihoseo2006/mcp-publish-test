import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Introduction from "./pages/introduction";
import InfoList from "./pages/info-list";
import Detail from "./pages/detail";


// 라우터 구조
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/introduction",
    element: <Introduction />,
  },
  {
    path: "/info-list",
    element: <InfoList />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);


// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
