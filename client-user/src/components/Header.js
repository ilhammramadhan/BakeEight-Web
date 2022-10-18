import { Container, Nav, Navbar } from "react-bootstrap"
import {useNavigate} from 'react-router-dom'
import {HouseDoorFill} from 'react-bootstrap-icons'

const Header = () => {
  const navigate = useNavigate()
  return (
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">BakeEight</Navbar.Brand>
      <Nav >
        <Nav.Link onClick={()=> navigate('/home')} className="text-white d-flex justify-content-center gap-2 align-items-center"><HouseDoorFill size={25}/><span>Home</span></Nav.Link> 
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header