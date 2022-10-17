import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import CardCol from "./CardCol"

const CardProduct = () => {
  const [item, setItem] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/Item')
      .then((response) => response.json())
      .then((data) => setItem(data));
  }, [])
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