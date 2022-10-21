import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="">
        <Nav.Link >Home</Nav.Link>
        <Nav.Link >Category</Nav.Link>
        <Nav.Link >Register Admin</Nav.Link>
        <Nav.Link >Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header