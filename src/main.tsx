import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";





// 라우터 구조
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/notification",
    element: <Notification />,
  },
  {
    path: "/pannel",
    element: <Pannel />,
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
