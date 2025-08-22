import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
