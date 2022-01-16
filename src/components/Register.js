import '../components/Register.css'
import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import Login from './Login'

const Register = (props) => {
  const [show, setShow] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const handleClose = () => setShow(false)
  const handleShowLogin = () => {
    setShowLogin((showLogin) => (showLogin = !showLogin))
  }

  const [state, setState] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  })

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(state)
  }

  return (
    <Modal
      {...props}
      size='sm'
      aria-labelledby='contained-modal-title-vcenter'
      centered
      className='modal'
      onHide={handleClose}
    >
      <Form className='form m-4' OnSubmit={handleOnSubmit}>
        <h2>Register</h2>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Control
            type='email'
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
        </Form.Group>
        <Button type='submit' onClick={handleClose}>
          Register
        </Button>
        <p>
          Already have an account? Click <a onClick={handleShowLogin}>Here</a>
        </p>
      </Form>
      <Login show={showLogin} onHide={handleClose} />
    </Modal>
  )
}

export default Register
