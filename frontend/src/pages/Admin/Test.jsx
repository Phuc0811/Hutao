
import React, { useEffect, useState } from 'react';
import './test.css';
import aImg from '../../assets/images/fgo1.gif';

const Test = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showIcon, setShowIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const style = {
    position: 'fixed',
    bottom: '10px',
    right: '-200px',
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {showIcon && (
        <div className="icon" style={style} onClick={handleClick}>
            <img src={aImg} alt="icon" />
            <h5>Đầu Trang</h5>
        </div>
      )}
    </>
  );
};

export default Test;
