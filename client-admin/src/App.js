import Header from "./components/Header";
import ListCakes from "./components/ListCakes";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  RouterProvider,
} from "react-router-dom";
import router from "./router";


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Header/>
     <Login/>
     <Register/>
     <ListCakes/> */}
    </div>
  );
}

export default App;
