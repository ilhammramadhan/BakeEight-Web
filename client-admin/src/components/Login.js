import { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(password, email);
  }
  return (
      <Container >
        <h1 className='text-center'>Login</h1>
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3 ">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </Container>
      
  )
}

export default Login