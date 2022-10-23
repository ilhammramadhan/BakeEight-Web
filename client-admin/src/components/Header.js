import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import Register from "./Register";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const Header = () => {
  const MySwal = withReactContent(Swal)
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate()

  const handleLogout = () => {
    MySwal.fire({
      title: "Are you sure to Logout ?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#0000FF",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancel",
      confirmButtonText: "Logout",
    }).then((logout)=>{
      if (logout.isConfirmed) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Logout Success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      localStorage.clear()
      navigate('/login')
    })
  }

  return (

    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand className="fw-bold text-shadow">Admin-BakeEight</Navbar.Brand>
      <Nav className="">
        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
        <Nav.Link onClick={() => navigate('/category')} >Category</Nav.Link>
        <Nav.Link onClick={() => setModalShow(true) } >Register Admin</Nav.Link>
        {
            modalShow && <Register show={modalShow}
            onHide={() => setModalShow(false)} />
        }
        <Nav.Link href="https://bake-eight-customer.web.app/">Customer Web</Nav.Link>
        <Nav.Link onClick={() => handleLogout() }>Logout</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

export default Header