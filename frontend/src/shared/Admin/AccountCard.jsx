import React from 'react';
import { Link } from 'react-router-dom';
import './admincard.css';

const AccountCard = ({ user }) => {
  const { _id, username, email, password,isAdmin } = user;



  return (
    <>
    <table>
        <thead>
        <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>isAdmin</th>
            <th>Tác vụ</th>
        </tr>
        </thead>
        <tbody>
            <tr className="figure__card">
            <td className="figure__location">
                {username}
            </td>
            <td className="figure__location">
                {email}
            </td>
            <td className="figure__location">
                {password}
            </td>
            <td className="figure__title">
                {isAdmin}
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

export default AccountCard;

