import React from 'react';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../../utils/avgRating';
import './admincard.css';

const AdminCard = ({ figure }) => {
  const { _id, title, city, photo, price, reviews } = figure;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  return (
    <>
    <table>
        <thead>
        <tr>
            <th>Ảnh sản phẩm</th>
            <th>Xuất xứ</th>
            <th>Đánh giá</th>
            <th>Tên sản phẩm</th>
            <th>Giá tiền theo tỉ lệ mô hình</th>
            <th>Tác vụ</th>
        </tr>
        </thead>
        <tbody>
            <tr className="figure__card">
            <td>
                <div className="figure__image">
                <img src={photo} alt="figure-img" />

                </div>
            </td>
            <td className="figure__location">
                {city}
            </td>
            <td className="figure__rating">
                <i className="ri-heart-3-fill"></i>
                {avgRating === 0 ? null : avgRating}
                {totalRating === 0 ? 'Chưa Đánh Giá' : `(${reviews.length})`}
            </td>
            <td className="figure__title">
                {title}
            </td>
            <td className="figure__price">
                {price} <span>VND / Mô Hình (1:10) </span>
            </td>
            <td className="figure__booking">
                <button className="btn booking__btn">
                    <tr><Link to={`/delete/${_id}`}>Xóa</Link></tr>
                </button>
                    <br/>
                    <br/>
                <button className="btn booking__btn">
                  <tr><Link to={`/update/${_id}`}>Sửa</Link></tr>
                </button>
                    <br/>
                    <br/>
                <button className="btn booking__btn">
                  <tr><Link to={`/showfigureadmin/${_id}`}>Chi tiết sản phẩm</Link></tr>
                </button>
            </td>
            </tr>
        </tbody>
    </table>
    </>
  );
};

export default AdminCard;
