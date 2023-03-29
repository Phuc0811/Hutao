import React,{useRef, useEffect, useContext} from 'react';
import { Container, Row, Button} from 'reactstrap';
import { NavLink, Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../Header/header.css';
import {AuthContext} from './../../context/AuthContext';
import Test from '../../pages/Admin/Test';
import QC from '../../pages/Admin/QC';

const nav__links=[
  {
  path:'/home',
  display:'Trang Chủ'
  },
  {
  path:'/about',
  display:'Giới Thiệu'
  },
  {
  path:'/figure',
  display:'Mô Hình'
  },

];

const nav__admin=[
  {
  path:'/admin',
  display:'List Figures'
  },
  {
  path:'/showaccount',
  display:'List Accounts'
  },
  {
    path:'/showaccount',
    display:'List Bookings'
    },
  {
  path:'/about',
  display:'Thông Tin'
  },
];

const Header = () => {

  const headerRef =useRef(null);
  const menuRef =useRef(null);
  const navigate = useNavigate()
  const {user, dispatch} = useContext(AuthContext)

  const logout =()=>{
    dispatch({type:'LOGOUT'})
    navigate('/')
  }

  const stickyHeaderFunc =()=>{
    window.addEventListener('scroll', ()=>{
    if(document.body.scrollTop >80 || document.documentElement.scrollTop >80){
      headerRef.current.classList.add('sticky__header');
    }else{
      headerRef.current.classList.remove('sticky__header'); 
    }
  });
};

useEffect(()=>{
  stickyHeaderFunc();

  return window.removeEventListener('scroll', stickyHeaderFunc);
});



  const toggleMenu = ()=> menuRef.current.classList.toggle('show__menu')

  return( <header className='header' ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-center
        justify-content-between">
          {/*--------BD Logo----------*/}
            <div className='logo'>
                <img src={logo} alt=""/>
                <Test/>
            </div>
            <QC/>
          {/*--------KT Logo----------*/}

          {/*--------BD Menu----------*/}
          {/*--Nếu mà tài khoản đang nhập là admin thì ẩn nav__links hiện nav__admin--*/}
          {user && user.username === "admin" ? (
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__admin.map((item,index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                        className={navClass =>
                          navClass.isActive ? "active__link" : ""
                        }
                          >
                        {item.display}
                    </NavLink>
                  </li>
                  ))}
                </ul>
            </div>
          ) : (
            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <ul className="menu d-flex align-items-center gap-5">
                {nav__links.map((item,index) =>(
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                        className={navClass =>
                          navClass.isActive ? "active__link" : ""
                        }
                          >
                        {item.display}
                    </NavLink>
                  </li>
                  ))}
                </ul>
            </div>
          )}


          {/*--------KT Menu----------*/}
          <div className="nav__right d-flex align-items-center gap-4">
            <div className="nav__btns d-flex align-items-center gap-4">

            {user ? (
              <>
                <h5 className="mb-0">{user.username}</h5>
                <Button className="btn btn-dark" onClick={logout}>
                Logout
                </Button>
                </>
            ):(
              <>
              <Button className="btn secondary__btn"><Link to='/login'>Đăng Nhập</Link></Button>
              <Button className="btn primary__btn"><Link to='/register'>Đăng Ký</Link></Button>
              </>
            )}
              </div>

            <span className="mobile__menu" onClick={toggleMenu}>
            <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Row>
    </Container>
  </header>
  )
};

export default Header;

