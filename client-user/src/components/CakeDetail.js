import { Container, Card, Col, Row,Button } from "react-bootstrap"
import {StarFill} from "react-bootstrap-icons"
const CakeDetail = () => {
  return (
    
    <Container fluid className="d-flex justify-content-center mt-2">
      
      <Card
        className="mt-5  m-3 rounded"
        style={{ width: "95rem" }}
      >
        
        <Row>
          <Col className="col-6 p-3">
            <Card.Img
              src="https://flash-coffee.com/id/wp-content/uploads/sites/13/2021/03/choco-cookies-600x368.jpg"
              variant="top"
            />
          </Col>

          <Col className="col-6 d-flex justify-content-center mt-4">
            <div className="">
            <Card.Title className="text-center"><h2>Chocolate Chip Cookie</h2></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price : 10.000</Card.Subtitle>
        <Card.Text>
          Decription : Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>
          Category : Breakfast
          
        </Card.Text>
        <Card.Text>
          <StarFill/><span><StarFill/></span><StarFill/><span><StarFill/></span><span><StarFill/></span>
        </Card.Text>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CakeDetail