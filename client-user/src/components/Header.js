import { Container, Nav, Navbar } from "react-bootstrap"


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">BakeEight</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header