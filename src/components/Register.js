import '../components/Register.css'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import Login from './Login'

const Register = (props) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal'
    >
      <Form className='form m-4'>
        <h2>Register</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control type='email' placeholder='Email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Control type='text' placeholder='Name' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicUserName'>
          <Form.Control type='text' placeholder='Username' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button type='submit' onClick={handleClose}>
          Register
        </Button>
        <p>
          Already have an account? Click <a onClick={Login}>Here</a>
        </p>
      </Form>
      <Login />
    </Modal>
  )
}

export default Register
