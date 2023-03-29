import React, {useEffect, useRef, useState, useContext} from 'react'
import '../styles/figure-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from "../assets/images/ava-1.jpg";
import Booking from "../components/Booking/Booking";
import Newsletter from '../shared/Newsletter';
import useFetch from '../hooks/useFetch';
import {BASE_URL} from '../utils/config';
import '../components/Featured-figures/FeaturedFigureList.css'

import { AuthContext } from '../context/AuthContext';

const FiguresDetails = () => {

  const {id} = useParams();
  const reviewMsgRef = useRef('')
  const [figureRating, setFigureRating] = useState(null)
  const {user} = useContext(AuthContext)


  //fetch data from database
  const {data: figure, loading, error} = useFetch(`${BASE_URL}/figure/${id}`)

  // destructure properties from figure object
  const {photo, title, desc, price, address, reviews, city} = 
  figure;

  const {totalRating, avgRating} = calculateAvgRating
  (reviews);

//format date

const options = { day: "numeric",month: "long", year: "numeric"};

//submit request to the server
const submitHandler = async e =>{
  e.preventDefault()
  const reviewText = reviewMsgRef.current.value

  

  try {

    if(!user || user===undefined || user===null){
      alert('Please sign in')
    }

    const reviewObj = {
      username:user?.username,
      reviewText,
      rating:figureRating,
    }

    const res = await fetch(`${BASE_URL}/review/${id}`,{
      method:'post',
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
      alert(result.message);
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
              <img src={photo} alt="" />
              
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
                <i class="ri-map-pin-user-fill"></i>Hãng sản xuất:  {address}
                </span>
                  </div>
                  <div className="figure__extra-details">
                    <span><i class="ri-map-pin-2-line"></i>Nguồn gốc:  {city}</span>
                    <span><i class="ri-money-dollar-circle-line"></i>Giá cả:  {price} vnđ / sản phẩm (1:10)</span>
                  </div>
                  <h5>Mô tả sản phẩm: </h5>
                  <p>{desc}</p>
              </div>

              {/*==============figure reviews section=========*/}
              <div className="figure__reviews mt-4">
               <h4>Bình luận: ({reviews?.length} lượt ❤️)</h4>
               
               <Form onSubmit={submitHandler}>
                <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                    <span onClick={()=> setFigureRating(1)}>1 <i class="ri-star-fill"></i></span>
                    <span onClick={()=> setFigureRating(2)}>2 <i class="ri-star-fill"></i></span>
                    <span onClick={()=> setFigureRating(3)}>3 <i class="ri-star-fill"></i></span>
                    <span onClick={()=> setFigureRating(4)}>4 <i class="ri-star-fill"></i></span>
                    <span onClick={()=> setFigureRating(5)}>5 <i class="ri-star-fill"></i></span>
                </div>

                <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder="Hãy để lại bình luận của bạn tại đây 😍" required/>
                  <button
                      className="btn primary__btn text-white"
                      type="submit">
                      submit
                  </button>
                </div>
                </Form>

                <ListGroup className="user__reviews">
                {
                  reviews?.map(review=>(
                    <div className="review__item">
                      <img src={avatar} alt="" />

                    {/*=====MM-DD-YY=======*/}
                    <div className="w-100">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <h5>{review.username}</h5>
                          <p>{new Date(review.createdAt).toLocaleDateString("en-US", options)}</p>
                          </div>
                          <span className="d-flex align-items-center">{review.rating}<i class="ri-star-fill"></i></span>
                      </div>
                      <h6>{review.reviewText}</h6>
                    </div>
                    </div>
                  ))
                }
                </ListGroup>
              </div>
            </div>
          </Col>
          <Col lg='4'>
                <Booking figure={figure} avgRating={avgRating} />
          </Col>
        </Row>
  )}
      </Container>
    </section>
    <Newsletter />
  </> 
  );
};

export default FiguresDetails;
