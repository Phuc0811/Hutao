import React,{useRef} from 'react';
import './search-bar.css'
import {Col, Form, FormGroup} from "reactstrap";
import {BASE_URL} from './../utils/config';
import {useNavigate} from 'react-router-dom';
const SearchBar = () => {

    const locationRef =useRef('')
    const priceRef =useRef(0)
    const cityRef =useRef(0)
    const navigate = useNavigate()

    const searchHandler = async()=>{
        const location = locationRef.current.value
        const price = priceRef.current.value
        const city = cityRef.current.value
        

        if(location ==="" || price ==="" || city ===""){
            return alert("Vui lòng điền đầy đủ thông tin!!!")
        }

        const res = await fetch(`${BASE_URL}/figure/search/getFigureBySearch?title=${location}&price=${price}&city=${city}`)

        if(!res.ok) alert('Có gì đó sai')

        const result = await res.json();

        navigate(`/figure/search?title=${location}&price=${price}&city=${city}`,{state: result.data});
    };
  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-profile-line"></i></span>
                <div>
                    <h6>Thông Tin Mô Hình</h6>
                    <input type="text" placeholder="Tên Mô Hình" ref={locationRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
                <span><i class="ri-map-pin-time-line"></i></span>
                <div>
                    <h6>Giá Cả</h6>
                    <input type="number" placeholder="Giá (vnd)" ref={priceRef}/>
                </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
                <span><i class="ri-add-box-line"></i></span>
                <div>
                    <h6>Nguồn gốc</h6>
                    <input type="text" placeholder="Quốc Gia Sản Xuất" ref={cityRef}/>
                </div>
            </FormGroup>
            <FormGroup>
                <span className="search__icon" type='submit' onClick={searchHandler}>
                    <i class="ri-search-line"></i>
                </span>
            </FormGroup>
        </Form>
    </div>
  </Col> 
};
export default SearchBar;
