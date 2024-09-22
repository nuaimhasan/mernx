import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Page";

export const mainRouter = {
  id: "main",
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};
