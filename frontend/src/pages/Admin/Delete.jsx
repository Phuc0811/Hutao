import React, {useEffect, useRef, useState, useContext} from 'react'
import '../../styles/figure-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
import calculateAvgRating from '../../utils/avgRating';
import avatar from "../../assets/images/ava-1.jpg";
import useFetch from '../../hooks/useFetch';
import {BASE_URL} from '../../utils/config';
import '../../components/Featured-figures/FeaturedFigureList.css'
import { Link } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';

const Delete = () => {

  const {id} = useParams();
  const reviewMsgRef = useRef('')
  const [figureRating, setFigureRating] = useState(null)
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();


  //fetch data from database
  const {data: figure, loading, error} = useFetch(`${BASE_URL}/figure/${id}`)

  // destructure properties from figure object
  const {photo, title, desc, price, address, reviews, city} = 
  figure;

  const {totalRating, avgRating} = calculateAvgRating
  (reviews);

//format date



//submit request to the server
const submitHandler = async e =>{
  e.preventDefault()
  const reviewText = reviewMsgRef.current.value

  if (reviewMsgRef.current.value !== "Xóa") {
    alert("Nhập chữ ( Xóa ) mới được xóa nha !!! 😉");
    return;
  }

  try {

    if(!user || user===undefined || user===null){
      alert('Đăng nhập cái bạn êy')
    }

    const reviewObj = {
      username:user?.username,
      reviewText,
      rating:figureRating,
    }
//Phương thức xóa

    const res = await fetch(`${BASE_URL}/figure/${id}`,{
      method:'delete',
        headers:{
        'content-type':'application/json'
      },
      credentials:'include',
      body:JSON.stringify(reviewObj)
    });

      const result = await res.json();
      if(!res.ok) {
        return alert(result.message);
      }   
      navigate("/admin");
  } catch (err){
      alert(err.message);
  };
  //later will call our api
};

useEffect(() => {
  window.scrollTo(0,0)
},[figure]);


  return (
    <>
    <section>
      <Container>
      {
        loading && <h4 className="text-center pt-5"><span class="loader">Load&nbsp;ng</span></h4>
      }
      {
        error && <h4 className="text-center pt-5">{error}</h4>
      }
        {
          !loading && !error && (<Row>
          <Col lg="8">
            <div className="figure__content">
              
              
              <div className="figure__info">
                <h2>Tên sản phẩm: {title}</h2>
              
                  <div className="d-flex align-items-center gap-5">
                  
                  <span 
                  className="figure__rating d-flex align-items-center gap-1">
                  <i class="ri-heart-3-fill" style={{'color':"var(--secondary-color)"}}></i>{avgRating === 0 ? null : avgRating}
                  {totalRating === 0 ?(
                "Chưa Đánh Giá"
            ) : (
                <span>({reviews?.length})</span>
            )}
            </span>
                  
                <span>
                <i class="ri-map-pin-user-fill"></i>Hãng sản xuất: {address}
                </span>
                  </div>
                  <div className="figure__extra-details">
                    <span><i class="ri-map-pin-2-line"></i>Nguồn gốc: {city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i>Giá cả: {price} vnđ / sản phẩm (1:10)</span>
                    
                  </div>
                  <h5>Mô tả sản phẩm: </h5>
                  <p>{desc}</p>
              </div>

              {/*==============figure reviews section=========*/}
              <div className="figure__reviews mt-4">
               <h4>Bình luận: ({reviews?.length} lượt ❤️)</h4>
              {/*==============Khi ấn xóa sẽ xóa sản phẩm=========*/}
               <Form onSubmit={submitHandler}>
                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder="Nếu muốn xóa sản phẩm này .Vui lòng nhập chữ (Xóa)" required/>
                  <button
                      className="btn primary__btn text-white"
                      type="submit">
                        Xóa
                  </button>
                </div>
                </Form>

                <ListGroup className="user__reviews">
                {
                  reviews?.map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />

                    </div>
                  ))
                }
                </ListGroup>
              </div>
            </div>
            
          </Col>
          <Col lg='4'>
              <img src={photo} alt="" width="350px" height="300px" />
              <section>
                  <Container>
                    <button className="btn booking__btn">
                        <Link to={`/admin`}>Quay lại trang chủ</Link>
                    </button> 
                  </Container>
              </section>
         </Col>
        </Row>
  )}
      </Container>
    </section>
  </> 
  );
};

export default Delete;
