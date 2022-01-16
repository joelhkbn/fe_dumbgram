import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Logo from '../assets/logoLarge.svg'
import FeedLogo from '../assets/FeedHome.png'
import ExploreLogo from '../assets/compas.png'
import editLogo from '../assets/edit.png'
import LogoutLogo from '../assets/logout.png'
import Profile from '../assets/gallery/profile.jpg'
import Gallery from '../components/Gallery'
import cssModule from '../pages/Feed.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Feed = () => {
  return (
    <div className='all'>
      <Container fluid='xl' className='mt-3'>
        <Row>
          <Col xl={4}>
            <div>
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
                <Link to={'/feed'}>
                  <ul>
                    <li>
                      <img src={FeedLogo} alt='Feed' />
                    </li>
                    <li>
                      <h5>Feed</h5>
                    </li>
                  </ul>
                </Link>

                <div className={cssModule.jarak}>
                  <Link to={'/explore'}>
                    <ul>
                      <li>
                        <img src={ExploreLogo} alt='Explore' />
                      </li>
                      <li>
                        <h4>Explore</h4>
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>

              <div className={cssModule.links}>
                <Link to={'/'}>
                  <img src={LogoutLogo} alt='Logout' />
                  <h5>Logout</h5>
                </Link>
              </div>
            </div>
          </Col>
          <Col xl={7} className={cssModule.leftBor}>
            <Form>
              <div className={cssModule.search}>
                <FontAwesomeIcon
                  className={cssModule.searchIcon}
                  icon={faSearch}
                />
                <input type='text' className='input' placeholder='Search' />
                {/* <button className='search-button'></button> */}
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
