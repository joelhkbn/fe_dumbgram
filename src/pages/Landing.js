import React, { useState } from 'react'
import './Landing.css'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logoLarge.svg'
import Gallery from '../components/Gallery'
import Login from '../components/Login'

const Landing = (props) => {
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const handleCloseLogin = () => setShowLogin(false)

  const handleShowOrHideRegister = () => {
    setShowRegister((showRegister) => !showRegister)
  }

  const handleShowLogin = () => {
    setShowRegister((showRegister) => false)
    setShowLogin((showLogin) => (showLogin = !showLogin))
  }
  const handleShowRegister = () => {
    setShowRegister((showRegister) => true)
    setShowLogin((showLogin) => (showLogin = !showLogin))
  }

  return (
    <div className='all'>
      <Container fluid='md' className='mt-5'>
        <Row className='justify-content-center'>
          <Col md={5}>
            <div className='sect-left'>
              <img className='mt-5' src={Logo} alt='logo' />
              <h1 className='mt-5'>Share your best photos or videos</h1>
              <p className='mt-4'>
                Join now, share your creations with another people and enjoy
                other creations.{' '}
              </p>
              <button className='mt-4 mr-4' onClick={handleShowLogin}>
                Login
              </button>
              <a className='ml-5' href='#' onClick={handleShowRegister}>
                Register
              </a>
              <Login
                show={showLogin}
                isshowregister={showRegister}
                onHide={handleCloseLogin}
                onShowOrHideRegister={handleShowOrHideRegister}
              />
            </div>
          </Col>
          <Col md={7}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>

    // <div className='landing' id='home'>
    //   <div className='landing-left'>
    //     <div className='landing-logo'>
    //       <img src={Logo} alt='logo' />
    //     </div>
    //     <div className='landing-title'>
    //       <h1>Share your best photos or videos</h1>
    //     </div>
    //     <div className='landing-description'>
    //       <p>
    //         Join now, share your creations with another people and enjoy other
    //         creations.
    //       </p>
    //     </div>

    //     <div className='landing-link'>
    //       <ul className='landing-button'>
    //         <button onClick={handleShow}>Login</button>
    //         <li>Register</li>
    //       </ul>
    //     </div>
    //   </div>

    //   <Login show={showState} onHide={handleClose} />

    //   <div className='landing-right'>
    //     <div className='landing-image'>{/* <Gallery /> */}</div>
    //   </div>
    // </div>
  )
}

export default Landing
