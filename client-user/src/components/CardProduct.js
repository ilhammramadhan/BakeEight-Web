
import { Container, Row } from "react-bootstrap"
import {useEffect} from 'react'
import CardCol from "./CardCol"
import {useSelector,useDispatch} from 'react-redux'
import { fetchProducts } from "../store/actions/productAction"
import ClimbingBoxLoader from"react-spinners/ClimbingBoxLoader"


const CardProduct = () => {
  const {data : item , loading} = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProducts('http://localhost:5000/Item'))
  },[dispatch])
  return (
    <Container className="mt-4">
      {
        loading ? (
          <div className="d-flex justify-content-center">
            <ClimbingBoxLoader color="#36d7b7" size={20} />
          </div>
          
        ) : (
          <Row>
        {
          item.map((cake) => {
            return <CardCol cake={cake} />
          })
        }
      </Row>
        )
      }
      
    </Container>

  )
}

export default CardProduct