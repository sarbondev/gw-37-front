import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Admins from "./pages/Admins";
import {
  getUserError,
  getUserPending,
  getUserSuccess,
} from "./store/RootStore";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Axios } from "./middlewares/Axios";

function App() {
  const { isAuth, isPending } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getUserPending());
        const response = await Axios.get("/auth/me");
        dispatch(getUserSuccess(response.data));
      } catch (error) {
        dispatch(getUserError(""));
      }
    };
    fetchData();
  }, []);

  if (isPending) {
    return <div>Sahifa yuklanmoqda</div>;
  }

  const privateRoutes = [
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
        {
          path: "admins",
          element: <Admins />,
        },
        { path: "*", element: <div>notfound</div> },
      ],
    },
  ];

  const publicRoutes = [
    { path: "/", element: <Login /> },
    { path: "*", element: <div>notfound</div> },
  ];

  const router = createBrowserRouter(isAuth ? privateRoutes : publicRoutes);

  return <RouterProvider router={router} />;
}
export default App;
