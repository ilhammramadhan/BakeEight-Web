import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import Register from "./Register";

const Header = () => {
  const [modalShow, setModalShow] = useState(false);
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Category</Nav.Link>
        <Nav.Link onClick={() => setModalShow(true) } >Register Admin</Nav.Link>
        {
            modalShow && <Register show={modalShow}
            onHide={() => setModalShow(false)} />
        }
        <Nav.Link >Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header