import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()
  const [registerInput, setRegisterInput] = useState({
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: ''
  })
  const changeHandler = (e) => {
    e.preventDefault()
    let key = e.target.name
    let value = e.target.value
    const newInput = {
      ...registerInput
    }
    newInput[key] = value
    setRegisterInput(newInput)
  }


  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/admin/register', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(registerInput),
      })
      if (!response.ok) throw await response.text()
      navigate('/')
    } catch (error) {

    }
  }

  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='bg-dark text-white m-5' style={{ maxWidth: '600px' }}>
        <form onSubmit={handleRegister}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-white text-center mb-5">Create an account</h2>
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your username' size='lg' name="username" type='text' value={registerInput.username} onChange={changeHandler} />
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' name="email" type='email' value={registerInput.email} onChange={changeHandler} />
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Password' size='lg' name="password" type='password' value={registerInput.password} onChange={changeHandler} />
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='PhoneNumber' size='lg' name="phoneNumber" type='text' value={registerInput.phoneNumber} onChange={changeHandler} />
            <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Address' size='lg' name="address" type='text' value={registerInput.address} onChange={changeHandler} />
            <MDBBtn className='text-white mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
          </MDBCardBody>
        </form>

      </MDBCard>
    </MDBContainer>
  )
}

export default Register