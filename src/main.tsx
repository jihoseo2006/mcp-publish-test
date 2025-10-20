import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/main-page";
import Notification from "./pages/notification";
import Pannel from "./pages/pannel";
import Kfiri from "./pages/k-firi";
import Gov from "./pages/gov";
import Education from "./pages/education";
import Additional from "./pages/additional";
import Detail from "./pages/detail";




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
  {
    path: "/k-firi",
    element: <Kfiri />,
  },
  {
    path: "/gov",
    element: <Gov />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "/additional",
    element: <Additional />,
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
