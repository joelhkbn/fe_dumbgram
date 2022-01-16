import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Logo from '../assets/logoLarge.svg'
import Profile from '../assets/gallery/profile.jpg'
import Gallery from '../components/Gallery'
import cssModule from '../pages/Feed.module.css'

const Feed = () => {
  return (
    <div className='all'>
      <Container fluid='xl' className='mt-3'>
        <Row className=''>
          <Col xl={3}>
            <div className='sect-left'>
              <img className={cssModule.logo} src={Logo} alt='logo' />
              <div className={cssModule.profile}>
                <img className={cssModule.img} src={Profile} alt='profile' />
              </div>
            </div>
          </Col>
          <Col xl={7}>
            <Gallery />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feed
