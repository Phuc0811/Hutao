import React from 'react'
import './footer.css';

import{ Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links=[
  {
  path:'/home',
  display:'Trang Chủ'
  },
  {
  path:'/about',
  display:'Giới Thiệu'
  },
  {
  path:'/tours',
  display:'Mô Hình'
  },
];

const quick__links2=[
  {
  path:'/gallery',
  display:'Collector'
  },
  {
  path:'/login',
  display:'Đăng Nhập'
  },
  {
  path:'/register',
  display:'Đăng Ký'
  },
];

const Footer = () => {
  return<footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div class="logo">
            <img src={logo} alt=""/>

            <div className='social__links d-flex align-items-center gap-4'>
              <span>
                <Link to="#"><i class="ri-youtube-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-facebook-box-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-instagram-line"></i></Link>
              </span>
              <span>
                <Link to="#"><i class="ri-twitter-line"></i></Link>
              </span>
            </div>
          </div>
        </Col>

        <Col lg="3">
          <h5 className='footer__link-title'>Trang Chủ</h5>

          <ListGroup className="footer__quick-links">
            {quick__links.map((item, index) =>(
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className='footer__link-title'>Truy Cập</h5>

          <ListGroup className="footer__quick-links">
            {quick__links2.map((item, index) =>(
              <ListGroupItem key={index} className="ps-0 border-0">
                <Link to={item.path}>{item.display}</Link>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
        <Col lg="3">
          <h5 className='footer__link-title'>Liên Hệ Với Chúng Tôi</h5>

          <ListGroup className="footer__quick-links">

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-mail-add-line"></i></span>
                  Email:
                </h6>
                <p className="mb-0">FingureFantasy@gmail.com</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-map-2-line"></i></span>
                  Adress:
                </h6>
                <p className="mb-0">FingureFantasy Tp.HCM</p>
              </ListGroupItem>

              <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                <h6 className="mb-0 d-flex align-items-center gap-2">
                  <span><i class="ri-phone-line"></i></span>
                  Phone:
                </h6>
                <p className="mb-0">0999-999-000</p>
              </ListGroupItem>

          </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
};

export default Footer;
