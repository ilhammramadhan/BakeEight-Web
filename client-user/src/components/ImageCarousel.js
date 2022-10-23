import {Carousel} from "react-bootstrap"
import carousel1 from './assets/carousel-1.jpeg'
import carousel2 from './assets/carousel-2.jpg'
import carousel3 from './assets/carousel-3.jpg'

const ImageCarousel = () =>{
  return (
    <div className='af-height-90 af-max-width mx-auto'>
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"580px"}}
          src={carousel1}
          alt='First slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"580px"}}
          src={carousel2}
          alt='Third slide'
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"580px"}}
          src={carousel3}
          alt='Third slide'
        />
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default ImageCarousel