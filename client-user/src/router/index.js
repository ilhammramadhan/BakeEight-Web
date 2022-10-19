
import {
  createBrowserRouter,
} from "react-router-dom";
import CakeDetail from "../components/CakeDetail";
import HomePage from "../pages/HomePage";
import Layout from "../pages/Layout";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/home",
        element: <HomePage/>
      },
      {
        path : "/detail/:id",
        element : <CakeDetail/>
      }
    ]
  },
]);

export default router