import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logoLarge.svg'
import Gallery from '../components/Gallery'

const Index = () => {
  return (
    <div className='all'>
      <Container fluid='md' className='mt-5'>
        <Row className='justify-content-center'>
          <Col md={5}>
            <div className='sect-left'>
              <img className='mt-3' src={Logo} alt='logo' />
            </div>
          </Col>
          <Col md={7}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Index
