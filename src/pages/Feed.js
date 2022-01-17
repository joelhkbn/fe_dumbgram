import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Logo from '../assets/logoLarge.svg'
import editLogo from '../assets/edit.png'
import LogoutLogo from '../assets/logout.png'
import Profile from '../assets/gallery/profile.jpg'
import Gallery from '../components/Gallery'
import cssModule from '../pages/Feed.module.css'
import { BiSearchAlt } from 'react-icons/bi'

import { Menu } from '../components/Menu'
import { MenuList } from '../components/MenuList'

const Feed = () => {
  return (
    <div className='all'>
      <Container fluid='xl' className='mt-3'>
        <Row>
          <Col xl={4}>
            <div>
              <img src={editLogo} alt='edit' />
              <img className={cssModule.logo} src={Logo} alt='logo' />
              <div className={cssModule.profile}>
                <img className={cssModule.img} src={Profile} alt='profile' />
              </div>
              <div className={cssModule.info}>
                <h2>Cho Tzuyu</h2>
                <p>@ChoTzuyu</p>
              </div>
              <div className={cssModule.metric}>
                <Row>
                  <Col className={cssModule.span}>
                    <span>
                      <p className={cssModule.tbhead}>Post</p>
                      <p className={cssModule.content}>200</p>
                    </span>
                  </Col>

                  <Col className={cssModule.span}>
                    <span>
                      <p className={cssModule.tbhead}>Followers</p>
                      <p className={cssModule.content}>55.2 M</p>
                    </span>
                  </Col>
                  <Col>
                    <span>
                      <p className={cssModule.tbhead}>Following</p>
                      <p className={cssModule.content}>1</p>
                    </span>
                  </Col>
                </Row>
                <p className={cssModule.description}>
                  Tzuyu is a Taiwanese singer and lyricist under JYP
                  Entertainment. She is the maknae the girl group TWICE.
                </p>
              </div>

              <div className={cssModule.jarak}>
                <Menu title={'Menu'} menuObject={MenuList} />
              </div>
            </div>
          </Col>
          <Col xl={7} className={cssModule.leftBor}>
            <Form>
              <div className={cssModule.searchBox}>
                <input type='text' placeholder='Search...' />
                <i className={cssModule.searchIcon}>
                  <BiSearchAlt />
                </i>
              </div>
              <Gallery />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Feed
