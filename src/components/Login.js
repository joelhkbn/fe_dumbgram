import '../components/Login.css'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import Register from './Register'

const Login = (props) => {
  const [shows, setShows] = useState(false)
  const handleClose = () => setShows(false)

  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal'
    >
      <Form className='form m-4'>
        <h2>Login</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button type='submit' onClick={handleClose}>
          Login
        </Button>
        <p>
          Don't have an account? Click <a onClick={Register}>Here</a>
        </p>
      </Form>
      <Register />
    </Modal>
  )
}

export default Login
