import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { mainRouter } from "../router/mainRouter";
import { adminRouter } from "../router/adminRouter";

const router = createBrowserRouter([mainRouter, adminRouter]);

const RootLayout = () => {
  return (
    <>
      <Toaster position="bottom-center" />
      <RouterProvider router={router} />
    </>
  );
};

export default RootLayout;
