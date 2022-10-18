import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { HouseDoorFill } from 'react-bootstrap-icons'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://akarapi.b-cdn.net/wp-content/webp-express/webp-images/uploads/2021/01/Logo-Holland-Bakery-Brand-Milk-PT-Mustika-Citra-Rasa-1200x564.jpg.webp" alt="holland" className="d-inline-block align-top" width="120" height={40} /></Navbar.Brand>
        <Nav >
          <Nav.Link onClick={() => navigate('/home')} className="text-dark d-flex justify-content-center gap-2 align-items-center"><HouseDoorFill size={25} /><span>Home</span></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header