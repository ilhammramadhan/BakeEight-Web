import Login from "../components/Login";
import {
  createBrowserRouter,

} from "react-router-dom";
import ListCakes from "../components/ListCakes";
import Layout from "../pages/Layout.js";
import Register from "../components/Register";
import Category from "../components/Category";




const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path : '/register',
    element : <Register/>
  },
  
  {
    element : <Layout/>,
    children : [
      {
        path : '/',
        element : <ListCakes/>
      },
      {
        path : '/category',
        element : <Category/>
      },
    ]
  }
]);

export default router