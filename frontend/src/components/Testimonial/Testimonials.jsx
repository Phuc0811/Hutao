import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import ava04 from '../../assets/images/ava-4.jpg';
import ava05 from '../../assets/images/ava-5.jpg';

const Testimonials = () => {

    const settings={
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            },
        ]
    }
  return( <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
      <p>Đẹp không tùy vết xứng đáng được 10/10 </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Khả Như</h6>
            <p>Khách Hàng</p>
        </div>
    </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Sản phẩm chất lượng rất tuyệt vời, chất liệu cao cấp, gia công tỉ mỉ, phải nói là rất "Hoàn hảo"</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Ngân Phạm</h6>
            <p>Khách Hàng</p>
        </div>
    </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Mô hình không chỉ là một món đồ sưu tập nó là đại diện cho cả một nghành công nghiệp Anime, cảm ơn Fingure Fantasy</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Mai Linh</h6>
            <p>Khách Hàng</p>
        </div>
    </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Mô hình không chỉ là một món đồ sưu tập nó là đại diện cho cả một nghành công nghiệp Anime, cảm ơn Fingure Fantasy </p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Tố Tố</h6>
            <p>Khách Hàng</p>
        </div>
    </div>
    </div>
    <div className='testimonial py-4 px-3'>
      <p>Sản phẩm chất lượng rất tuyệt vời, chất liệu cao cấp, gia công tỉ mỉ, phải nói là rất "Hoàn hảo</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
        <div>
            <h6 className='mb-0 mt-3'>Ngọc Mỹ</h6>
            <p>Khách Hàng</p>
        </div>
    </div>
    </div>

    
  </Slider>
  )
};

export default Testimonials
