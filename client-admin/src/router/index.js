import Login from "../components/Login";
import {
  createBrowserRouter,

} from "react-router-dom";
import ListCakes from "../components/ListCakes";
import Layout from "../pages/Layout.js";




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
      }
    ]
  }
]);

export default router