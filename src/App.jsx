import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { useAuthStore } from "./store/RootStore";
import Login from "./pages/Login";
function App() {
  const { isAuth } = useAuthStore((state) => state);
  const PublicRoutes = createBrowserRouter([{ path: "/", element: <Login /> }]);
  const SecuredRoutes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
      ],
    },
  ]);
  const router = isAuth ? SecuredRoutes : PublicRoutes;
  return <RouterProvider router={router} />;
}
export default App;
