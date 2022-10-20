import Login from "../components/Login";
import {
  createBrowserRouter,

} from "react-router-dom";
import ListCakes from "../components/ListCakes";
import Layout from "../pages/Layout.js";
import AddProduct from "../pages/AddProduct";
import Register from "../components/Register";




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
        path : '/add',
        element : <AddProduct/>
      }
    ]
  }
]);

export default router