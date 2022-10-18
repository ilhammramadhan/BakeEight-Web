import CakeDetail from './components/CakeDetail';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';

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

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
