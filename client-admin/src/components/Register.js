import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
  from 'mdb-react-ui-kit';

const Register = () => {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image'>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='bg-dark text-white m-5' style={{ maxWidth: '600px' }}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-white text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Name' size='lg' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Your Email' size='lg' id='form2' type='email' />
          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Password' size='lg' id='form3' type='password' />
          <MDBInput wrapperClass='mb-4' labelClass='text-white' label='Repeat your password' size='lg' id='form4' type='password' />
          <MDBBtn className='text-white mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  )
}

export default Register