import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData= [
  {
    imgUrl: weatherImg,
    title: "Kamisato Ayaka",
    desc: "Đại tiểu thư nhà Kamisato thuộc Hiệp Hội Yashiro Inazuma. Đoan trang thanh lịch, thông minh và mạnh mẽ.",
  },
  {
    imgUrl: guideImg,
    title: "Yelan",
    desc: "Nhân sĩ thần bí tự xưng làm việc cho Tổng Vụ, nhưng lại là người không tồn tại trong danh sách của Tổng Vụ.",
  },
  {
    imgUrl: customizationImg,
    title: "Shenhe ",
    desc: "Đệ tử tiên gia, khí chất thoát tục, ẩn cư tại núi rừng Liyue, tính cách lãnh đạm như tiên nhân. Động Tiên Lưu Vân Tá Phong Chân Quân",
  },
]

const ServiceList = () => {
  return( 
  <>
    {servicesData.map((item, index) =>(
      <Col lang='3' key={index}>
        <ServiceCard item={item}/>
      </Col>
    ))}
  </>
  );
};

export default ServiceList
