import '../components/Login.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Form, Button } from 'react-bootstrap'

const Login = (props) => {
  const [show, setShows] = useState(true)
  const handleClose = () => setShows(false)

  const handleShowRegister = () => {
    props.onShowOrHideRegister()
  }

  const [state, setState] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  })

  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal'
    >
      {!props.isshowregister && (
        <Form className='form m-4'>
          <h2>Login</h2>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control type='text' placeholder='Email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Link to={'/feed'}>
            <Button type='submit'>Login</Button>
          </Link>
          <p>
            Don't have an account? Click{' '}
            <a onClick={handleShowRegister}>Here</a>
          </p>
        </Form>
      )}
      {props.isshowregister && (
        <Form className='form m-4'>
          <h2>Register</h2>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Control
              type='text'
              placeholder='Email'
              value={state.email}
              name='email'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicName'>
            <Form.Control
              type='text'
              placeholder='Name'
              value={state.name}
              name='name'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicUserName'>
            <Form.Control
              type='text'
              placeholder='Username'
              value={state.username}
              name='username'
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control
              type='password'
              placeholder='Password'
              value={state.password}
              name='password'
            />
          </Form.Group>{' '}
          <Button type='submit' onClick={handleClose}>
            Register
          </Button>
          <p>
            Already have an account? Click{' '}
            <a onClick={handleShowRegister}>Here</a>
          </p>
        </Form>
      )}
    </Modal>
  )
}

export default Login
