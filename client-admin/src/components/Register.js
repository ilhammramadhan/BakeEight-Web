import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}

  from 'mdb-react-ui-kit';
import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { Button } from 'react-bootstrap';

const Register = (props) => {
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
      props.onHide()
    } catch (error) {
      const { message } = JSON.parse(error)
      toast.warn(`${message}`);
    }
  }

  return (
    <Modal {...props} >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='bg-dark text-white m-5' style={{ maxWidth: '600px' }}>
            <form onSubmit={handleRegister}>
              <MDBCardBody className='px-5'>
                <h2 className="text-uppercase text-white text-center mb-5">Create an account</h2>
                <MDBInput wrapperClass='mb-4' className='text-white' labelClass='text-white' label='Your username' size='lg' name="username" type='text' value={registerInput.username} onChange={changeHandler} />
                <MDBInput wrapperClass='mb-4' className='text-white' labelClass='text-white' label='Your Email' size='lg' name="email" type='email' value={registerInput.email} onChange={changeHandler} />
                <MDBInput wrapperClass='mb-4' className='text-white' labelClass='text-white' label='Password' size='lg' name="password" type='password' value={registerInput.password} onChange={changeHandler} />
                <MDBInput wrapperClass='mb-4' className='text-white' labelClass='text-white' label='PhoneNumber' size='lg' name="phoneNumber" type='text' value={registerInput.phoneNumber} onChange={changeHandler} />
                <MDBInput wrapperClass='mb-4' className='text-white' labelClass='text-white' label='Address' size='lg' name="address" type='text' value={registerInput.address} onChange={changeHandler} />
                <MDBBtn className='text-white mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
                <ToastContainer autoClose={2000} />
              </MDBCardBody>
            </form>

          </MDBCard>
        </MDBContainer>
        <Modal.Footer>

          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal.Body>
    </Modal>
  )
}

export default Register