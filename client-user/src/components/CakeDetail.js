import { Container, Card, Col, Row } from "react-bootstrap"
import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { StarFill } from "react-bootstrap-icons"
import { useParams } from 'react-router-dom';
import MoonLoader from "react-spinners/MoonLoader"
import { fetchProductsDetail } from "../store/actions/itemDetailAction";
import { formatPrice } from "../helpers/formatPrice";


const CakeDetail = () => {
  const { id } = useParams()
  const {detail:data ,loading} = useSelector((state) => state.itemDetail)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchProductsDetail( id))
  },[dispatch,id])

  return (
    <Container fluid className="d-flex justify-content-center min-vh-50">
      {
        loading ? (
          <div className="d-flex justify-content-center">
             <MoonLoader color="#ed071e" size={40} />
          </div>
         
        )
        : (
          <Card
          className=" m-3 bg-light rounded shadow"
          style={{ width: "100rem" }}
        >
  
          <Row>
            <Col className="col-6 p-4 rounded">
              <Card.Img
                src={data.imgUrl}
                variant="top"
                style ={{width :"720px",height:"720px",borderRadius:"1rem"}}
              />
            </Col>
  
            <Col className="col-6 p-5 d-flex justify-content-center mt-4 ">
              <div className="container  justify-content-start ">
                <div>
                  <h2 className="fw-bold">Detail : </h2>
                </div>
                <Card.Title className="text-center mb-4  rounded p-4"><h2>{data.name}</h2></Card.Title>
                <Card.Subtitle className="mb-2 rounded">Price : {formatPrice(data.price)}</Card.Subtitle>
                <Card.Text className="fw-bold">
                  Description : {data.description}
                </Card.Text>
                <Card.Text className="fw-bold">
                  Category : {data.Category?.name}
                </Card.Text>
                <Card.Text className="fw-bold ">
                  Ingredients : 
                  <ul>
                    {
                      data.Ingredients?.map((ing,index)=> {
                        
                        if(ing.name === ' '){
                          return <li key={index}>Ingredient not yet make</li>
                        }else {
                          return <li key={index}>{ing.name}</li>
                        }
                        
                      })
                    }
                  </ul>
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