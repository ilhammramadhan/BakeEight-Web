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
  MDBInput
}
  from 'mdb-react-ui-kit';

  import "../index.css"


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(password, email);
  }
  return (
    <MDBContainer className="my-5">

    <MDBCard className="d-flex justify-content-center align-items-center"> 
      <MDBRow className='g-0'>

        <MDBCol md='6'>
          <MDBCardImage src='https://akarapi.b-cdn.net/wp-content/uploads/2021/01/Logo-Holland-Bakery-Baru.jpg' alt="login form" className='rounded-start w-100'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

            <div className='d-flex flex-row mt-2'>
              <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
              <span className="h1 fw-bold mb-0">Bake Eight Admin Panel</span>
            </div>

            <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

              <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={()=> setEmail(email)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={email} onChange={()=> setEmail(email)} />

            <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>
          </MDBCardBody>
        </MDBCol>

      </MDBRow>
    </MDBCard>

  </MDBContainer>
  )
}

export default Login