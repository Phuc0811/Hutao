import React , {useState, useContext}from 'react'
import "./booking.css";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

import {useNavigate} from "react-router-dom"
import {AuthContext} from "../../context/AuthContext";
import {BASE_URL} from "../../utils/config";
import "../../pages/ThankYou";

const Booking = ({figure, avgRating}) => {
    const {price, reviews, title} = figure;
    const navigate = useNavigate();

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user.id, 
        userEmail: user && user.email,
        figureName: title,
        fullName: "",
        phone:"",
        guestSize:1,
        bookAt: "",
    });


    const handleChange = e => {
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    };


    const serviceFee = 50000
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    // send data to server
    const handleClick = async e=>{
        e.preventDefault();

        console.log(booking);

        try {

            if(!user || user===undefined || user===null){
              alert('Please sign in')
            }
        
            
        
            const res = await fetch(`${BASE_URL}/booking`,{
              method:'post',
                headers:{
                'content-type':'application/json'
              },
              credentials:'include',
              body:JSON.stringify(booking)
            });
        
              const result = await res.json();
              if(!res.ok) {
                return alert(result.message);
              }   
              navigate("/thank-you");
          } catch (err){
              alert(err.message);
          };
        }
  return <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>{price}vnđ <span>/sản phẩm</span></h3>
        <span 
                  className="figure__rating d-flex align-items-center">
                  <i class="ri-heart-3-fill"></i>{avgRating === 0 ? null : avgRating} ({reviews?.length})
                  
            </span>
         </div>

         {/*======booking form===========*/}
         <div className="booking__form">
            <h5>Information</h5>
            <Form className="booking__info-form" onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder="Họ tên" id="fullName"
                    required onChange={handleChange} />
                </FormGroup>

                <FormGroup>
                    <input type="number" placeholder="Số điện thoại" id="phone"
                    required onChange={handleChange} />
                </FormGroup>

                <FormGroup className="d-flex align-items-center gap-3">
                    <input type="Date" placeholder="bookAt" id="bookAt"
                    required onChange={handleChange} />
                    <input type="number" placeholder="Số lượng" id="guestSize"
                    required onChange={handleChange} />
                </FormGroup>
            </Form>
        </div>
        {/*======booking end=======*/}

         {/*======booking bottom=======*/}
         <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">{price}vnđ <i class="ri-close-line"></i>1 sản phẩm</h5>
                    <span>{price}vnđ</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0">
                    <h5>Phí dịch vụ</h5>
                    <span>{serviceFee}vnđ</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0 total">
                    <h5>Tổng tiền</h5>
                    <span>{totalAmount}vnđ</span>
                </ListGroupItem>
            </ListGroup>

            <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}>Đặt ngay</Button>
        </div>
    </div>
};

export default Booking;
