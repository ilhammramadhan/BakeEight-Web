import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#home">Dashboard</Nav.Link>
        <Nav.Link href="#pricing">Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header