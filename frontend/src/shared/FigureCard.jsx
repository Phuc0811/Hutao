import React from 'react';
import { Card, CardBody } from "reactstrap";
import {Link} from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

import "./figure-card.css"

const FigureCard = ({ figure }) => {

    const {_id, title, city, photo, price, featured, reviews } = figure;

    const {totalRating, avgRating} = calculateAvgRating(reviews)

  return(
     <div className="figure__card">
    <Card>
        <div className="figure__img">
            <img src={photo} alt="figure-img"/>
            { featured && <span>Mới</span>}
        </div>
        <CardBody>
        <div className="card__top d-flex align-items-center
        justify-content-between">
            <span className="figure__location d-flex align-items-center gap-1">
            <i class="ri-shopping-cart-fill"></i>{city}
            </span>
            <span className="figure__rating d-flex align-items-center gap-1">
            <i class="ri-heart-3-fill"></i>{avgRating === 0 ? null : avgRating}
            {totalRating === 0 ?(
                "Chưa Đánh Giá"
            ) : (
                <span>({reviews.length})</span>
            )}
            </span>
        </div>

        <h5 className="figure__title"><Link to={`/figure/${_id}`}>{title}</Link>
        </h5>

        <div className="card__bottom d-flex align-items-center
        justify-content-center mt-3">
            <h5>{price} <span>VND / Mô Hình (1:10) </span></h5>
            <button className="btn booking__btn">
                <Link to={`/figure/${_id}`}>Đặt Ngay</Link>
            </button>
        </div>
    </CardBody>
    </Card>
  </div>
  );
};

export default FigureCard;
