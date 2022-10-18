import Header from "./components/Header";
import ListCakes from "./components/ListCakes";
import Login from "./components/Login";
import Register from "./components/Register";


function App() {
  return (
    <div className="App">
      <Header/>
     <Login/>
     <Register/>
     <ListCakes/>
    </div>
  );
}

export default App;
