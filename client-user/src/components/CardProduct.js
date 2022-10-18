
import { Container, Row } from "react-bootstrap"
import useFetch from "../hooks/useFetch"
import CardCol from "./CardCol"


const CardProduct = () => {
  const {data : item} = useFetch('http://localhost:5000/Item')
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