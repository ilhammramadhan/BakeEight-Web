import { useState } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,

}
  from 'mdb-react-ui-kit';
import {useNavigate} from 'react-router-dom'
import "../index.css"
import { toast, ToastContainer } from 'react-toastify';



const Login = () => {
  const navigate = useNavigate()
  const [loginInput, setLoginInput] = useState({
    email : '',
    password : '',
  })

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginInput),
      })
      if (!response.ok) throw await response.text()
      const data = await response.json()
      
      toast.success("MY SUCCESS")
      localStorage.setItem('access_token',data.access_token)
      navigate('/')
    } catch (error) {
      const {message} = JSON.parse(error)
      toast.warn(`${message}`);
    }
    
    
  }
  return (
    <>
    <MDBContainer className="my-5">

<MDBCard className="d-flex justify-content-center align-items-center">
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://akarapi.b-cdn.net/wp-content/uploads/2021/01/Logo-Holland-Bakery-Baru.jpg' alt="login form" className='rounded-start w-100' />
    </MDBCol>
    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
          <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
          <span className="h1 fw-bold mb-0">Bake Eight Admin Panel</span>
        </div>

        <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Sign into your account</h5>
        <form onSubmit={handleLogin}>
          <MDBInput wrapperClass='mb-4' label='Email address' type='email' size="lg" value={loginInput.email} onChange={(e) => {setLoginInput({...loginInput,email:e.target.value})}} />
          <MDBInput wrapperClass='mb-4' label='Password'  type='password' size="lg" value={loginInput.password} onChange={(e) => {setLoginInput({...loginInput,password:e.target.value})}} />

          <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
          <ToastContainer autoClose={2000} />
        </form>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>
</MDBContainer>

    </>
    
  )
}

export default Login