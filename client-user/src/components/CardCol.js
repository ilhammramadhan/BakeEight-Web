import { Card, Col } from "react-bootstrap"

const CardCol = ({ cake }) => {
  return (
    <Col className="mt-4" key={cake.id}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cake.imgUrl} />
        <Card.Body>
          <Card.Title>{cake.name}</Card.Title>
          <Card.Text>
            {cake.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )

}

export default CardCol