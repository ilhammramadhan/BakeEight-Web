
import { Container, Row } from "react-bootstrap"
import {useEffect} from 'react'
import CardCol from "./CardCol"
import {useSelector,useDispatch} from 'react-redux'
import { fetchProducts } from "../store/actions/productAction"


const CardProduct = () => {
  const {data : item} = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(fetchProducts('http://localhost:5000/Item'))
  },[])
  return (
    <Container className="mt-4">
      <Row>
        {
          item.map((cake) => {
            return <CardCol cake={cake} />
          })
        }
      </Row>
    </Container>

  )
}

export default CardProduct