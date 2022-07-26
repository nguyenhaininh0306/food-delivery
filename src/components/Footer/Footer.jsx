import React from 'react'
import logo from '../../assets/images/res-logo.png'
import { Container, Col, Row, ListGroup, ListGroupItem } from 'reactstrap'
import '../../styles/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={6}>
            <div className='footer__logo text-start'>
              <img src={logo} alt='logo' />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, quis? Recusandae itaque aperiam assumenda fugit, eius
                nemo dolor illo ipsam rerum debitis quas fugiat, similique,
                harum optio temporibus aliquam eligendi?
              </p>
            </div>
          </Col>

          <Col lg={3} md={4} sm={6}>
            <h5 className='footer__title'>Delivery Time</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Sunday - Thursday</span>
                <p>10:00AM - 11:00PM</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Friday - Saturday</span>
                <p>Off day</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg={3} md={4} sm={6}>
            <h5 className='footer__title'>Contact</h5>
            <ListGroup className='delivery__time-list'>
              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <p>Location: Ho Chi Minh City</p>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Phone: 0123456789</span>
              </ListGroupItem>

              <ListGroupItem className='delivery__time-item border-0 ps-0'>
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg={3} md={4} sm={6}>
            <h5 className='footer__title'>Newsletter</h5>
            <p>Subscribe our newsletter</p>
            <div className='newsletter'>
              <input type={'email'} placeholder='Enter your email' />
              <span>
                <i class='ri-send-plane-line'></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col lg={6} md={6}>
            <p className='copyright__text'>
              Copyright - 2022, website made by Kido.
            </p>
          </Col>

          <Col lg={6} md={6}>
            <div className='social__links d-flex align-items-center gap-4 justify-content-end'>
              <p className='m-0'>Follow: </p>
              <span>
                <Link to={'https://www.facebook.com/ninh0306/'}>
                  <i class='ri-facebook-box-line'></i>
                </Link>
              </span>

              <span>
                <Link to={'https://github.com/nguyenhaininh0306/food-delivery'}>
                  <i class='ri-github-fill'></i>
                </Link>
              </span>

              <span>
                <Link to={''}>
                  <i class='ri-youtube-line'></i>
                </Link>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
