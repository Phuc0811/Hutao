import React from 'react'
import {Container, Row, Col} from 'reactstrap';

import'../styles/login.css';
import userIcon from '../assets/images/bocchi.gif';

const About = () => {

  return(
    <section>
    <Container>
      <Row>
        <Col lg="3" className="m-auto">

          <div className="login__form">
            <p><h2>Hoàng Phúc</h2></p>

            <p><h2>Phúc Thịnh</h2></p>
          </div>

          <div className="user">
              <img class="bocchi" src={userIcon} alt="" />
            </div>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default About;
