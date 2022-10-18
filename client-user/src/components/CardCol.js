import { Card, Col, Button } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'

const CardCol = ({ cake }) => {
  const navigate = useNavigate()
  return (
    <Col className="mt-4" key={cake.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cake.imgUrl} />
        <Card.Body>
          <Card.Title>{cake.name}</Card.Title>
          <Card.Text>
            {cake.description}
          </Card.Text>
          <Button onClick={() => navigate(`/detail/${cake.id}`)} variant="outline-primary" className="justify-content-end">Detail</Button>
        </Card.Body>
      </Card>
    </Col>
  )

}

export default CardCol