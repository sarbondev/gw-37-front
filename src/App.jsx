import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import Admins from "./pages/Admins";

function App() {
  const { isAuth } = useSelector((state) => state.user);
  const PublicRoutes = createBrowserRouter([{ path: "/", element: <Login /> }]);
  const SecuredRoutes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "admins", element: <Admins /> },
      ],
    },
  ]);
  const router = true ? SecuredRoutes : PublicRoutes;
  // const router = isAuth ? SecuredRoutes : PublicRoutes;
  return <RouterProvider router={router} />;
}
export default App;
