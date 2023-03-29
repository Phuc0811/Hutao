import React from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import Subtile from '../shared/Subtile';
import experienceImg from '../assets/images/experience.jpg';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedFigureList from '../components/Featured-figures/FeaturedFigureList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>

  {/*-----------------Hero section start-----------------------*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className='hero__content'>
              <div className="hero__subtitle d-flex align-items-center">
                <Subtile subtitle={'Đi đến thế giới ANIME'}/>
                <img src={worldImg} alt=""/>
              </div>
              <h1>Mang cả thế giới Anime vào tầm tay bạn <span className="highlight"> Fingure Fantasy</span></h1>
              <p>Mô hình không chỉ là một món đồ chơi đơn thuần.
                Nó là một tác phẩm nghệ thuật. Từ thế giới Anime đến khi hiện thực hóa,
                và đến tay những nhà sưu tập là cả một quá trình đầy kì công và tỉ mỉ.
                Hãy đến với chúng tôi để hiện thực hóa mong muốn của bạn.
              </p>
          </div>
        </Col>
        
        <Col lg='2'>
          <div className="hero__img-box">
            <img src={heroImg} alt="" />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls/>
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/*-----------------Hero section end-------------------------*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className="services__subtitle">Bạn Thích nhân vật nào?</h5>
          <h2 className="services__title">Chúng tôi sẽ tạo ra nhân vật ấy</h2>
        </Col>
        <ServiceList/>
      </Row>
    </Container>
  </section>
  {/*----------------------featured start-----------------------*/}
    <section>
      <Container>
        <Row>
        <Col lg='12' className="mb-5">
          <Subtile subtitle={'Khám Phá Ngay'}/>
          <h2 className='featured__figure-title'>Sản Phẩm Nổi Bật</h2>
        </Col>
        <FeaturedFigureList/>
        </Row>
      </Container>
    </section>
  {/*----------------------featured end-------------------------*/}

  {/*----------------------experience start---------------------*/}
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className="experience__content">
            <Subtile subtitle={'Tiêu Điểm'}/>

            <h2>'Jeanne d'Arc (Alter)</h2>
            <p>○竜の魔女：ＥＸ
              <br />
              とある男の願いが産み出した彼女は、生まれついて竜を従える力を持つ。聖女マルタ、あるいは聖人ゲオルギウスなど竜種を退散させたという逸話を持つ聖人からの反転現象と思われる。
              竜を従わせる特殊なカリスマと、パーティの攻撃力を向上させる力を持つ。
            </p>
          </div>

          <div className="counter__wrapper d-flex align-items-center gap-5" >
            <div className='counter__box'>
              <span>22k+</span>
              <h6>Khách Hàng </h6>
            </div>
            <div className='counter__box'>
              <span>15</span>
              <h6>Quốc Gia</h6>
            </div>
            <div className='counter__box'>
              <span>10</span>
              <h6>Năm Phát Triển</h6>
            </div>
          </div>
        </Col>
        <Col lg="6">
          <div className="experience__img">
            <img src={experienceImg} alt=""/>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  {/*----------------------experience end-----------------------*/}

  {/*-----------------------gallery strat-----------------------*/}
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            <Subtile subtitle={'Collector'}/>
            <h2 className="gallery__title">Tham Gia Vào Cộng Đồng Collector</h2>
          </Col>
          <Col lg='12'>
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  {/*-----------------------gallery end-------------------------*/}


  {/*-----------------------testimonial start---------------------*/}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtile subtitle={'Fans love'} />
          <h2 className='testimonial__title'>Top Bình Luận</h2>
        </Col>
        <Col>
        <Testimonials />
        </Col>
      </Row>
    </Container>
  </section>
  {/*-----------------------testimonial end-----------------------*/}
  <Newsletter />
  </>
};
export default Home;