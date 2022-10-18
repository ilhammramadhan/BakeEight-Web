import {Carousel} from "react-bootstrap"

const ImageCarousel = () =>{
  return (
    <div className='af-height-90 af-max-width mx-auto'>
    <Carousel>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"720px"}}
          src="https://cdn.pixabay.com/photo/2016/04/14/20/15/muffins-1329679_960_720.jpg"
          alt='First slide'
        />
        <Carousel.Caption className='position-absolute'>
          <div className='af-position-lg af-bg-dark-transparent py-3'>
            <h3>test</h3>
            <p>test</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"720px"}}
          src="https://cdn.pixabay.com/photo/2016/04/14/20/15/muffins-1329679_960_720.jpg"
          alt='Third slide'
        />
        <Carousel.Caption className='position-absolute'>
          <div className='af-position-lg af-bg-dark-transparent py-3'>
            <h3>Croissant</h3>
            <p>Lorem Ipsum</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100'
          style ={{width :"1080px",height:"720px"}}
          src="https://cdn.pixabay.com/photo/2016/04/14/20/15/muffins-1329679_960_720.jpg"
          alt='Third slide'
        />
        <Carousel.Caption className='position-absolute'>
          <div className='af-position-lg af-bg-dark-transparent py-3'>
            <h3>test</h3>
            <p>test</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default ImageCarousel