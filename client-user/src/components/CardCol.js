import { Card, Col, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { formatPrice } from "../helpers/formatPrice"

const CardCol = ({ cake }) => {
  const navigate = useNavigate()
  return (
    <Col className="mt-4" key={cake.id}>
      <Card style={{ width: '18rem' , height:'30rem', }} className="shadow-lg p-2" >
        <Card.Img variant="top" src={cake.imgUrl} style={{height :'280px',objectFit : 'contain', borderRadius:"1rem"}} />
        <Card.Body className="p-2">
          <Card.Title>{cake.name}</Card.Title>
          <Card.Text className="fw-bold text-sm-center">
            Price : {formatPrice(cake.price)}
          </Card.Text>
          <Card.Text className="text-sm-left" style={{width:'15rem'}}>
            {cake.description}            
          </Card.Text>
        </Card.Body>
        <div className="d-flex justify-content-center ml-2 mb-4">
          <Button onClick={() => navigate(`/detail/${cake.id}`)} variant="dark" className="btn btn-dark btn btn-md">Detail</Button>
          </div>
      </Card>
    </Col>
  )

}

export default CardCol