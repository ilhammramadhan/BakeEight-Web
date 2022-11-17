import {
  createBrowserRouter,
  redirect
} from "react-router-dom";
import Layout from "../pages/Layout.js";
import LoginPage from "../pages/LoginPage";
import HomeListItem from "../pages/HomeListItem";
import CategoryPage from "../pages/CategoryPage.js";




const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        throw redirect("/");
      }
    },
  },
  {
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <HomeListItem/>
      },
      {
        path : '/category',
        element : <CategoryPage/>
      },
    ],
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        throw redirect("/login");
      }
    },
  }
]);

export default router