import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import '../components/Login.css'

const Login = (props) => {
  const [isLogin, setIsLogin] = useState(props.setIsLogin)

  const handleClose = () => setIsLogin(false)

  return (
    <>
      <Modal
        size='sm'
        show={true}
        onHide={handleClose}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Form>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' onClick={handleClose}>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  )
}

export default Login
