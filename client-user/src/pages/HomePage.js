import CardProduct from "../components/CardProduct"
import ImageCarousel from "../components/ImageCarousel"


const HomePage = () =>{
  return (
    <>
    <ImageCarousel/>
    <div >
      <div className="mt-2">
        <h2 className="text-center fw-bold shadow-sm">Featured Menu</h2>
        <h3 className="text-center font-italic text-warning">The Best From Our Kitchen</h3>
      </div>
    <CardProduct/>
    </div>
    
    </>
  )
}

export default HomePage