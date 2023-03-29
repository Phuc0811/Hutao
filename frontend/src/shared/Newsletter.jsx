import React from 'react';
import './newsletter.css';

import{ Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/collector.jpg';

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className='newsletter__content'>
                        <h2>Tham Gia Và Trải Nghiệm Ngay Thôi Nào! </h2>

                        <div className='newsletter__input'>
                            <input type="email" placeholder='Điền Địa Chỉ Emai tại đây'/>
                            <button className='newsletter__btn'>Đăng Ký</button>
                        </div>

                        <p>Xem Thêm Nhiều Sản Phẩm Của Trang Fingure Fantasy</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className='newsletter__img'>
                        <img src={maleTourist} alt=""/>
                    </div>    
                </Col>
            </Row>
        </Container>
    </section> 
  ) 

};

export default Newsletter
