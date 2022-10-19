import { Container, Card, Col, Row } from "react-bootstrap"
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { fetchProductsDetail } from "../store/actions/productAction"
import { StarFill } from "react-bootstrap-icons"
import { useParams } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader"


const CakeDetail = () => {
  const { id } = useParams()
  const {detail:data ,loading} = useSelector((state) => state)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchProductsDetail('http://localhost:5000/Item/' + id))
  },[dispatch])

  return (
    <Container fluid className="d-flex justify-content-center mt-2">
      {
        loading ? (
          <div className="d-flex justify-content-center">
             <MoonLoader color="#36d7b7" size={20} />
          </div>
         
        )
        : (
          <Card
          className="mt-5  m-3 rounded"
          style={{ width: "95rem" }}
        >
  
          <Row>
            <Col className="col-6 p-3">
              <Card.Img
                src={data.imgUrl}
                variant="top"
              />
            </Col>
  
            <Col className="col-6 d-flex justify-content-center mt-4">
              <div className="">
                <Card.Title className="text-center"><h2>{data.name}</h2></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Price : {data.price}</Card.Subtitle>
                <Card.Text>
                  {data.description}
                </Card.Text>
                <Card.Text>
                  Category : breakfast
                </Card.Text>
                <Card.Text>
                  <StarFill /><span><StarFill /></span><StarFill /><span><StarFill /></span><span><StarFill /></span>
                </Card.Text>
              </div>
            </Col>
          </Row>
        </Card>
        )
      }
     
    </Container>
  )
}

export default CakeDetail