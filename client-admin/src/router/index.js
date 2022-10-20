import Login from "../components/Login";
import {
  createBrowserRouter,

} from "react-router-dom";
import ListCakes from "../components/ListCakes";
import Layout from "../pages/Layout.js";
import AddProduct from "../pages/AddProduct";




const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
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