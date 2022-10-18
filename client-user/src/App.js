import CardProduct from './components/CardProduct';
import Footer from './components/Footer';
import Header from './components/Header';
import ImageCarousel from './components/ImageCarousel';
import CakeDetail from './components/CakeDetail';

function App() {
  return (
    <div className="App">
      <Header/>
      <ImageCarousel/>
      <CardProduct/> 
      <CakeDetail/>
      <Footer/>
    </div>
  );
}

export default App;
